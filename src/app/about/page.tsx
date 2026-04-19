"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-5 md:sticky md:top-32 md:h-fit">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Sobre mí</p>
            <h1 className="text-5xl sm:text-7xl editorial-title font-medium leading-[1.1] mb-12 uppercase tracking-tighter">
              Juan Pablo <br /> Arakaki Martínez
            </h1>
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Soy arquitecto, dedicado a la creación de espacios que fomentan la comunidad y la resiliencia ambiental.
              </p>
              <p>
                Con un enfoque en el paisaje chileno y el contexto urbano, mi trabajo une la brecha entre el rigor conceptual y la responsabilidad social.
              </p>

              <div className="flex gap-4 pt-8">
                <Link
                  href="https://www.linkedin.com/in/jpakmz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border border-gray-100 hover:border-black px-6 py-3 hover:bg-black hover:text-white transition-all font-mono"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                  </svg>
                  LinkedIn
                </Link>
              </div>

              <div className="mt-16 pt-12 border-t border-gray-100">
                <Image
                  src="/brand/udechile.jpg"
                  alt="Universidad de Chile"
                  width={200}
                  height={80}
                  className="h-14 w-auto grayscale opacity-40 hover:opacity-100 transition-all duration-700"
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-6 font-mono">
                  Título de Arquitecto <br />
                  <span className="text-black">Universidad de Chile</span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1" />

          <div className="md:col-span-6 space-y-20">
            <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center text-gray-300 italic relative overflow-hidden group">
              <span className="text-[10px] uppercase tracking-widest font-bold z-10 transition-transform duration-700 group-hover:scale-110">Retrato / Espacio de Estudio</span>
              {/* Optional: Add actual portrait image here */}
            </div>

            <div className="space-y-16 border-t border-gray-100 pt-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-6 font-mono text-black underline underline-offset-8 decoration-gray-100">Enfoque</p>
                <ul className="text-xs space-y-3 text-gray-400 uppercase tracking-widest leading-relaxed list-disc ml-4">
                  <li className="hover:text-black transition-colors cursor-default">Regeneración Urbana</li>
                  <li className="hover:text-black transition-colors cursor-default">Centros Comunitarios</li>
                  <li className="hover:text-black transition-colors cursor-default">Vivienda Modular</li>
                  <li className="hover:text-black transition-colors cursor-default">Sistemas Sostenibles</li>
                </ul>
              </div>

              <div className="pt-12 border-t border-gray-50">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-8 font-mono text-black underline underline-offset-8 decoration-gray-100">Reconocimientos</p>
                <div className="space-y-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-base font-bold uppercase tracking-wider text-black flex items-center gap-3">
                      <span>🥇</span> Mención Honrosa — Concurso Museo de Rapa Nui (2024)
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      El proyecto del Nuevo Museo de Rapa Nui obtuvo:
                    </p>
                    <ul className="text-xs space-y-4 text-gray-400 uppercase tracking-widest leading-relaxed pl-2">
                      <li className="flex items-start gap-3">
                        <span className="text-base leading-none">🏆</span>
                        <span>Mención honrosa (5° lugar)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-base leading-none">📊</span>
                        <span>En un concurso con más de 80 oficinas de arquitectura</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-base leading-none">🌎</span>
                        <span>Con participación nacional e internacional</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col gap-8 items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-white shadow-sm relative grayscale flex-shrink-0">
                  <Image
                    src="/jp/avatar.png"
                    alt="Juan Pablo Arakaki"
                    fill
                    className="object-cover"
                    sizes="5rem"
                  />
                </div>
                <div className="max-w-xl">
                  <h2 className="text-xl sm:text-2xl font-light mb-8 leading-relaxed tracking-tight text-gray-600">
                    &ldquo;La arquitectura no se trata de crear objetos aislados, sino de tejer los hilos de la sociedad en un entorno tangible.&rdquo;
                  </h2>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">— J.P. Arakaki</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-medium mb-12 tracking-tight">Hablemos de tu próximo proyecto</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest border border-black px-12 h-16 hover:bg-black hover:text-white transition-all"
        >
          Ponte en contacto <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
