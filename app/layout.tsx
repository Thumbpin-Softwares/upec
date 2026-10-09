import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "UPEC | United Precision Engineering Company, Yamuna Nagar",
    template: "%s | UPEC | United Precision Engineering Company",
  },
  description:
    "United Precision Engineering Company (UPEC), an affiliate of Polyplastics (India), delivers design, engineering, tooling & production solutions for decorative automotive parts from Yamuna Nagar.",
  icons: { icon: "/assets/img/upec-logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} overflow-x-hidden scroll-smooth`}>
      <body className="w-full overflow-x-hidden bg-white font-sans leading-[1.65] text-ink antialiased max-xl:[&.nav-open]:overflow-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
