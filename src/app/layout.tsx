import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./sugar.css";
import "./motion.css";
import { PortfolioMotion } from "./portfolio-motion";

const displayFont = localFont({ src: "../../public/fonts/righteous-1.woff2", variable: "--font-righteous", weight: "400", display: "swap" });
const bodyFont = localFont({ src: [{ path: "../../public/fonts/line-seed-jp-123.woff2", weight: "400" }, { path: "../../public/fonts/line-seed-jp-247.woff2", weight: "700" }], variable: "--font-line-seed", display: "swap" });

export const metadata: Metadata = {
  title: "Akshat Porwal — Software Engineer",
  description:
    "Akshat Porwal builds AI systems, developer tools, and open-source engineering education.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#content">Skip to content</a>
        <PortfolioMotion>{children}</PortfolioMotion>
      </body>
    </html>
  );
}
