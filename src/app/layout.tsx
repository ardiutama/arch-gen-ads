import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Arch-Gen | Configuration & Prompt Engineering Copilot",
  description:
    "Asisten pintar arsitektural untuk menghasilkan spesifikasi blueprint presisi dan visualisasi berkualitas tinggi melalui AI.",
  openGraph: {
    title: "Arch-Gen | Configuration & Prompt Engineering Copilot",
    description:
      "Asisten pintar arsitektural untuk menghasilkan spesifikasi blueprint presisi dan visualisasi berkualitas tinggi melalui AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} dark`}>
      <head />
      <body className="min-h-screen bg-bg-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
