import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

// Rust-style modern industrial font
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://verarust.com'),
  title: {
    default: "Vera Rust Servers | EU Vanilla 2018-2019 Experience | Best Rust Server Europe",
    template: "%s | Vera Rust Servers",
  },
  description: "Join Vera - Europe's premier vanilla Rust server with authentic 2018-2019 gameplay. No mods, no plugins, pure legacy Rust experience. EU West hosted, 60+ tick rate, DDoS protected. Weekly wipes, active community, fair play guaranteed.",
  keywords: [
    "rust server",
    "vanilla rust server",
    "rust 2018 server",
    "rust 2019 server",
    "legacy rust server",
    "eu rust server",
    "europe rust server",
    "rust server europe",
    "best rust server",
    "pure vanilla rust",
    "no mod rust server",
    "rust legacy features",
    "rust eu west",
    "competitive rust server",
    "rust pvp server",
    "rust weekly wipe",
    "rust server hosting",
    "original rust experience",
    "authentic rust gameplay",
    "rust golden era",
    "rust classic server",
    "rust old version",
    "rust vintage server",
    "rust nostalgia server",
    "ddos protected rust",
    "low ping rust server",
    "rust server list",
    "top rust servers",
    "rust server 2025",
    "play rust online",
    "rust multiplayer",
    "rust pvp eu",
    "rust building server",
    "rust raiding server",
    "rust vanilla eu",
    "procedural rust map",
    "rust 4k map",
    "rust active server",
    "rust high population",
    "rust fair play",
    "rust anti cheat",
  ],
  authors: [{ name: "Vera Rust Servers", url: "https://verarust.com" }],
  creator: "Vera Rust Servers",
  publisher: "Vera Rust Servers",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vera Rust Servers | EU Vanilla 2018-2019 Experience",
    description: "Europe's premier vanilla Rust server with authentic 2018-2019 gameplay. Pure legacy experience, no mods, 60+ tick rate, weekly wipes. Join now!",
    url: 'https://verarust.com',
    siteName: 'Vera Rust Servers',
    locale: 'en_EU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vera Rust Servers - Vanilla 2018-2019 Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vera Rust Servers | EU Vanilla 2018-2019 Experience",
    description: "Europe's premier vanilla Rust server. Pure 2018-2019 legacy experience. Join now!",
    images: ['/og-image.jpg'],
    creator: '@VeraRust',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'gaming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${rajdhani.variable} ${orbitron.variable} antialiased bg-black text-white font-sans`}
      >
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
