import Link from "next/link";
import Year from "@/components/Year";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/upec-logo.png" alt="UPEC logo" />
            <p>
              United Precision Engineering Company — an affiliate of Polyplastics (India). Design,
              engineering, tooling &amp; production solutions for decorative automotive parts.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/what-we-do">What We Do</Link></li>
              <li><Link href="/our-products">Our Products</Link></li>
              <li><Link href="/media">Media</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about#story">Our Story</Link></li>
              <li><Link href="/about#team">Our Team</Link></li>
              <li><Link href="/about#clients">Our Clients</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="tel:+919971697292">+91 99716 97292</a></li>
              <li><a href="mailto:COO@UPEC.co.in">COO@UPEC.co.in</a></li>
              <li>Yamuna Nagar, Haryana, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; <Year /> United Precision Engineering Company. All rights
            reserved.
          </span>
          <span>An Affiliate of Polyplastics (India)</span>
        </div>
      </div>
    </footer>
  );
}
