import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["greek", "latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["greek", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prostegi.gr"),
  title: "ProΣτέγη | Φωτοβολταϊκά Συστήματα — Αυτόνομα, Net Billing & Υβριδικά στη Θεσσαλονίκη",
  description:
    "Η ProΣτέγη σχεδιάζει και εγκαθιστά αυτόνομα και διασυνδεδεμένα φωτοβολταϊκά συστήματα με εξοπλισμό Deye & V-TAC στη Θεσσαλονίκη. Δωρεάν μελέτη, πιστοποιημένος εξοπλισμός, διά βίου υποστήριξη.",
  keywords: [
    "φωτοβολταϊκά",
    "αυτόνομα φωτοβολταϊκά",
    "net billing",
    "ηλιακά συστήματα",
    "Deye",
    "V-TAC",
    "μπαταρίες λιθίου",
    "Θεσσαλονίκη",
    "Εύοσμος",
    "ProΣτέγη",
  ],
  authors: [{ name: "ProΣτέγη" }],
  icons: {
    icon: "/logo-square.png",
    apple: "/logo-square.png",
  },
  openGraph: {
    title: "ProΣτέγη | Ηλιακή Ενέργεια, Ανεξάρτητη Ζωή",
    description:
      "Αυτόνομα & διασυνδεδεμένα φωτοβολταϊκά συστήματα με Deye & V-TAC εξοπλισμό. Ζήστε με αυτονομία και εξοικονόμηση.",
    url: "https://www.prostegi.gr",
    siteName: "ProΣτέγη",
    type: "website",
    locale: "el_GR",
    images: [{ url: "/hero-solar.jpg", width: 1466, height: 574 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d4c74",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
