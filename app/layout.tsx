import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPNly | The best VPN services in 2026",
  description: "Independent VPN comparisons, reviews and privacy guides.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
