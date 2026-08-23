import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4, VT323 } from "next/font/google";
import "./globals.css";

const displayFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const bodyFont = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Akshat Porwal — Software Engineer",
  description:
    "Akshat Porwal builds AI systems, developer tools, and open-source engineering education.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
