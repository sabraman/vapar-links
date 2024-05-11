import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Logo } from "./_components/logo";
import { TopNav } from "./_components/topnav";


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
    images: '/og-image.png',
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png",
  }


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="eaf2e22c2dc6f579" />
      </head>
      <body className={montserrat.className}>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-2 py-12">
          <div className="space-y-18 w-full max-w-md items-center">
            <Logo />
            <TopNav />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
