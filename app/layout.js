import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Decoding habits: Neuroscience meets practical self-improvement techniques.",
  description: "Build good habits & break bad ones with daily tracking and smart reminders.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/nn.png', type: 'image/png', sizes: '32x32' },
      { url: '/nn-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/nn-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white">
        <Navbar />
        <main className="min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}