import type { Metadata } from "next";
import { Anaheim } from 'next/font/google'
import '@/app/ui/globals.css'

export const metadata: Metadata = {
  title: "Gabriel Soares",
  description: "Meu portifolio com informações, soluções e projetos que atuei.",
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: 'icon', type: 'image/png', sizes: "16x16", url: "/favicon-16x16.png" }
  ],
  manifest: '/site.webmanifest',

};

export const anahein = Anaheim({ weight: "400", subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${anahein.className} antialiased bg-gradient-to-b from-blue-900 to-blue-700 sm:bg-[url('/bg_image.jpg')] sm:bg-cover sm:bg-no-repeat sm:bg-clip-border `}>{children}</body>
    </html>
  );
}
