import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bosisio Flexo – Soluciones integrales de packaging y fotopolímeros digitales",
  description: "Proveedor líder de packaging, preprensa y fotopolímeros digitales Full HD. Tecnología LED avanzada, calidad industrial y soporte técnico especializado.",
  keywords: ["packaging", "fotopolímeros digitales", "flexografía", "preprensa", "impresión flexográfica", "Argentina", "planchas digitales", "packaging industrial"],
  authors: [{ name: "Bosisio Flexo S.A." }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: "Bosisio Flexo – Soluciones integrales de packaging y fotopolímeros digitales",
    description: "Proveedor líder de packaging, preprensa y fotopolímeros digitales Full HD. Tecnología LED avanzada, calidad industrial y soporte técnico especializado.",
    type: "website",
    locale: "es_AR",
    siteName: "Bosisio Flexo S.A.",
    images: [
      {
        url: '/assets/meta-image.png',
        width: 1200,
        height: 630,
        alt: 'Bosisio Flexo - Soluciones en Packaging y Fotopolímeros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bosisio Flexo – Soluciones integrales de packaging y fotopolímeros digitales",
    description: "Proveedor líder de packaging, preprensa y fotopolímeros digitales Full HD. Tecnología LED avanzada, calidad industrial y soporte técnico especializado.",
    images: ['/assets/meta-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
