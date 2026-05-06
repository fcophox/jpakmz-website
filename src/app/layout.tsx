import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import GridBackground from "@/components/GridBackground";
import Image from "next/image";
import { Link } from "@heroui/react";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./globals.css";

// ... (keep the sora config)
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Juan Pablo Arakaki Martínez | Arquitecto y Visualizador 3D",
  description: "Portafolio arquitectónico de Juan Pablo Arakaki Martínez. Especialista en regeneración urbana, vivienda modular y arquitectura sostenible.",
  keywords: ["Arquitectura", "Visualización 3D", "Santiago", "Chile", "Diseño Urbano", "Sostenibilidad"],
  authors: [{ name: "Juan Pablo Arakaki Martínez" }],
  openGraph: {
    title: "Juan Pablo Arakaki Martínez | Arquitecto",
    description: "Explora proyectos arquitectónicos que integran el contexto, la comunidad y la innovación técnica.",
    url: "https://www.jpakmz.com/",
    siteName: "Arakaki Arquitectura",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juan Pablo Arakaki Martínez - Portafolio de Arquitectura",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pablo Arakaki Martínez | Arquitecto",
    description: "Arquitectura y Visualización 3D con enfoque sostenible.",
    images: ["/brand/og-image.jpg"],
  },
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
        <CustomCursor />
        <GridBackground />
        <Preloader />
        <Navbar />

        <main className="pt-20 relative z-10">
          {children}
        </main>

        <footer className="border-t border-gray-100 pt-24 pb-12 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
              <div>
                <NextLink href="/" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/brand/jpakmz-logotipo-w.svg"
                    alt="J.P. Arakaki Logo"
                    width={140}
                    height={40}
                    className="h-8 w-auto mb-8 opacity-80"
                  />
                </NextLink>
                <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-light">
                  Soluciones arquitectónicas que dialogan entre la escala humana, el impacto comunitario y la conciencia ambiental.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  href="https://www.linkedin.com/in/jpakmz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-black hover:opacity-50 transition-opacity text-xs uppercase tracking-[0.3em] font-bold pb-2"
                >
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-50 flex flex-col  justify-between items-center gap-6">
              <p className="text-gray-400 font-mono text-[9px] uppercase tracking-[0.2em]">
                © 2026 | JPAKMZ ARQUITECTURA. TODOS LOS DERECHOS RESERVADOS.
              </p>
              <span className="text-gray-300 text-[9px] uppercase tracking-[0.3em] font-mono">Diseñado por Rukma</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}




