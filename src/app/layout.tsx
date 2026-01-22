import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlassBackground, GlassNavbar, GlassFooter } from "@/components/ui";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cotage AI — Métrés automatisés & DPGF pour le Second Œuvre",
  description: "Cotage AI transforme vos DCE (CCTP + plans) en métrés et DPGF structuré avec export Excel. Répondez plus vite, réduisez les oublis, sécurisez vos marges en forfait.",
  keywords: "DCE, CCTP, DPGF, métrés, chiffrage, devis, forfait, second œuvre, peinture, plaquiste, revêtements de sol, entreprise générale",
  icons: {
    icon: "/cotage_icon.png",
    shortcut: "/cotage_icon.png",
    apple: "/cotage_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GlassBackground />
        <GlassNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <GlassFooter />
      </body>
    </html>
  );
}
