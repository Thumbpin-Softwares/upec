"""
Builds the 1200x630 share images in public/og/ (one per page) from the page banner photos.
Run from the repo root after changing a banner photo or page name:  python3 scripts/og-images.py
Needs Pillow; uses macOS system Arial (swap FONT_* paths on other systems).
"""
from PIL import Image, ImageDraw, ImageFont

FONT_B = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_R = "/System/Library/Fonts/Supplemental/Arial.ttf"
PHOTOS = "public/assets/img/photos"

# (output name, banner photo, page name, one-line summary)
PAGES = [
    ("og-default", "tool-room-five-axis", None, "Decorative automotive tooling since 1996"),
    ("about", "upec-team-2026", "About UPEC", "Decorative mold makers since 1996, 170+ strong"),
    ("what-we-do", "mold-trial-press", "What We Do", "Design, CAE, tool build, trials and delivery"),
    ("our-products", "wheel-cover-mold-assembly", "Our Products", "Molds for every decorative surface of the vehicle"),
    ("media", "edm-electrode-sparking", "Media", "Corporate film and a look inside our plant"),
    ("contact", "team-at-plant", "Contact Us", "Mold enquiries, supplier registration and careers"),
]

W, H, X = 1200, 630, 72
CYAN, WHITE, MUTED = (84, 182, 224), (255, 255, 255), (200, 214, 229)


def cover(photo):
    im = Image.open(f"{PHOTOS}/{photo}.webp").convert("RGB")
    w, h = im.size
    tw = min(w, int(h * W / H)); th = int(tw * H / W)
    return im.crop(((w - tw) // 2, (h - th) // 2, (w - tw) // 2 + tw, (h - th) // 2 + th)).resize((W, H), Image.LANCZOS).convert("RGBA")


def build(name, photo, page, summary):
    im = cover(photo)
    # Navy wash, heaviest on the left where the text sits
    grad = Image.new("RGBA", (W, H)); g = ImageDraw.Draw(grad)
    for x in range(W):
        g.line([(x, 0), (x, H)], fill=(6, 26, 51, min(int(235 * max(0.0, 1 - x / (W * 0.85)) + 60), 245)))
    im = Image.alpha_composite(im, grad)

    # Logo on a white plate
    logo = Image.open("public/assets/img/upec-logo.png").convert("RGBA")
    logo.thumbnail((250 if page else 300, 110 if page else 130), Image.LANCZOS)
    plate = Image.new("RGBA", (logo.width + 32, logo.height + 24), (0, 0, 0, 0))
    ImageDraw.Draw(plate).rounded_rectangle([0, 0, plate.width - 1, plate.height - 1], 14, fill=(255, 255, 255, 255))
    plate.alpha_composite(logo, (16, 12)); im.alpha_composite(plate, (X, 64))

    d = ImageDraw.Draw(im)
    y = 64 + plate.height + 44
    if page:
        d.text((X, y), "UNITED PRECISION ENGINEERING COMPANY", font=ImageFont.truetype(FONT_B, 22), fill=CYAN)
        d.text((X, y + 38), page, font=ImageFont.truetype(FONT_B, 76), fill=WHITE)
        d.text((X, y + 136), summary, font=ImageFont.truetype(FONT_R, 30), fill=MUTED)
    else:
        d.text((X, y), "UNITED PRECISION", font=ImageFont.truetype(FONT_B, 54), fill=CYAN)
        d.text((X, y + 64), "ENGINEERING COMPANY", font=ImageFont.truetype(FONT_B, 54), fill=WHITE)
        d.text((X, y + 148), summary, font=ImageFont.truetype(FONT_R, 30), fill=MUTED)
    d.rectangle([X, H - 60, X + 64, H - 56], fill=CYAN)
    d.text((X, H - 48), "Yamuna Nagar, India  ·  Affiliate of Polyplastics (India)", font=ImageFont.truetype(FONT_R, 22), fill=(183, 200, 217))
    im.convert("RGB").save(f"public/og/{name}.jpg", "JPEG", quality=85, optimize=True, progressive=True)
    print("public/og/" + name + ".jpg")


if __name__ == "__main__":
    for p in PAGES:
        build(*p)
