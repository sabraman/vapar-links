import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Вейп Шоп | VAPAR SHOP",
  description: "Международная сеть дизайнерских вейп-шопов",
  metadataBase: new URL('https://vapar.shop/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    url: "https://vapar.shop/",
    title: "Vapar Shop | Вейп Шоп",
    description: "Международная сеть дизайнерских вейп-шопов",
    siteName: "VAPAR SHOP",
    images: '/favicon.svg',
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
