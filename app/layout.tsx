import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T-Shirt Forge | Creative Landing Experiments",
  description: "Five bold marketing concepts for a custom t-shirt builder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
