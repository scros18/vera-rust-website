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
  title: "Vera | Rust Servers - Vanilla 2018-2019 Experience",
  description: "Experience Rust the way it was meant to be played. Pure vanilla servers with 2018-2019 features. No mods, no plugins, just the original Rust experience.",
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
