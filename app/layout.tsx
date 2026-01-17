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


export const metadata: Metadata = {
  metadataBase: new URL('https://pizzaria-modelo-landing-page.vercel.app/'),
  title: 'Pizzaria Duperon | Pizzaria Artesanal em Uberaba',
  description: 'A melhor pizza de longa fermentação em Uberaba. Ingredientes selecionados, entrega rápida em 20-30 min e sabor inesquecível. Peça agora!',
  keywords: ['pizzaria uberaba', 'delivery pizza uberaba', 'pizza artesanal', 'melhor pizza de uberaba'],
  openGraph: {
    title: 'Pizzaria Duperon | Uberaba',
    description: 'Experiência premium da pizza artesanal direto na sua mesa.',
    url: 'https://pizzaria-modelo-landing-page.vercel.app/', // Substitua pelo seu link
    siteName: 'Pizzaria Duperon',
    images: [
      {
        url: '/og-image.jpg', // Crie uma imagem bonita de 1200x630px para o link
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
