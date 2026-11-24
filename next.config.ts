import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /*
     * Para no agotar la cuota de Image Optimization de Vercel, que cuenta cada
     * variante generada y sus KB escritos en caché:
     *
     * - Sin las variantes de 2048 y 3840 px: los renders se sirven a 2400 px como
     *   máximo y nunca se muestran a más de 1920.
     * - 31 días de caché: las imágenes locales se indexan por su contenido, así
     *   que cambiar un archivo ya invalida su caché por sí solo.
     *
     * Las imágenes van en WebP: a un cliente que no acepta WebP (bots, previews
     * de enlaces) Next le devuelve el formato original, y los renders en PNG
     * pesaban hasta 12 MB.
     */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
