import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "@heroui/react";
import NextLink from "next/link";
import "./globals.css";

// ... (keep the sora config)
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Juan Pablo Arakaki Martínez | Arquitecto",
  description: "Portafolio arquitectónico de Juan Pablo Arakaki Martínez. Proyectos arquitectónicos minimalistas, conceptuales y profesionales.",
  icons: {
    icon: "/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} light`}
    >
      <body className={`${sora.className} min-h-screen bg-background text-foreground antialiased selection:bg-black selection:text-white`}>

        <Navbar />

        <main className="pt-20">
          {children}
        </main>

        <footer className="border-t border-gray-100 py-16 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <NextLink href="/" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/brand/jpakmz-logotipo-w.svg"
                    alt="J.P. Arakaki Logo"
                    width={120}
                    height={35}
                    className="h-6 w-auto mb-6 opacity-80"
                  />
                </NextLink>
                <p className="text-sm text-gray-400 max-w-sm">
                  Práctica arquitectónica enfocada en la intersección de la comunidad, el contexto y la innovación sostenible.
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-2 text-sm">
                <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest">© 2026 JPAKMZ ARQUITECTURA</p>
                <div className="flex gap-6">
                  <Link href="#" className="text-black hover:opacity-50 transition-opacity text-xs uppercase tracking-widest font-bold">Instagram</Link>
                  <Link href="#" className="text-black hover:opacity-50 transition-opacity text-xs uppercase tracking-widest font-bold">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}




