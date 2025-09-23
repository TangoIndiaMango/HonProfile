import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hon. Ade Adeogun - Accountable Leadership Delivering Real Change",
  description: "With a passion for accountable leadership and grassroots empowerment, Hon. Ade Adeogun transforms political promises into real, measurable progress. From Akoko South East/South West to the House of Representatives, he is a public servant and strategist with a record of practical governance and inclusive development.",
  keywords: "Hon. Ade Adeogun, Nigerian politics, Ondo State, House of Representatives, accountable leadership, grassroots empowerment, Akoko South East, Akoko South West",
  authors: [{ name: "Hon. Ade Adeogun" }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Hon. Ade Adeogun - Accountable Leadership Delivering Real Change",
    description: "With a passion for accountable leadership and grassroots empowerment, Hon. Ade Adeogun transforms political promises into real, measurable progress.",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hon. Ade Adeogun - Accountable Leadership Delivering Real Change",
    description: "With a passion for accountable leadership and grassroots empowerment, Hon. Ade Adeogun transforms political promises into real, measurable progress.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased min-h-dvh flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
