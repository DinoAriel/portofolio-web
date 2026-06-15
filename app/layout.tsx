import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Mengubah metadata untuk tab browser dan SEO
export const metadata: Metadata = {
  title: "Dino Ariel | Portfolio",
  description: "Product Owner & Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // Menambahkan ini untuk mencegah Error Overlay dari ekstensi browser
      suppressHydrationWarning 
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}