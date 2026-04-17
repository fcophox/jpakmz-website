"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Sobre mí</p>
            <h1 className="text-5xl sm:text-7xl editorial-title font-medium leading-[1.1] mb-12">
              Juan Pablo <br /> Arakaki Martínez
            </h1>
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Soy arquitecto, dedicado a la creación de espacios que fomentan la comunidad y la resiliencia ambiental.
              </p>
              <p>
                Con un enfoque en el paisaje chileno y el contexto urbano, mi trabajo une la brecha entre el rigor conceptual y la responsabilidad social.
              </p>
              {/* <p>
                Establecida en Santiago, la práctica explora cómo la arquitectura puede actuar como catalizador para la regeneración urbana y el bienestar comunitario. Cada proyecto se trata como una investigación única sobre la materialidad, la luz y las necesidades específicas del territorio.
              </p> */}
              
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
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center text-gray-300 italic relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-widest font-bold z-10">Retrato / Espacio de Estudio</span>
            </div>
            <div className="mt-12 space-y-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono text-black">Enfoque</p>
                <ul className="text-xs space-y-2 text-gray-400 uppercase tracking-wider">
                  <li>Regeneración Urbana</li>
                  <li>Centros Comunitarios</li>
                  <li>Vivienda Modular</li>
                  <li>Sistemas Sostenibles</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono text-black">Reconocimientos</p>
                <ul className="text-xs space-y-2 text-gray-400 uppercase tracking-wider">
                  <li>Bienal de Arquitectura (2024)</li>
                  <li>Distinción en Urbanismo</li>
                  <li>Premio Diseño Sostenible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-subtle py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-100 shadow-sm relative grayscale flex-shrink-0 mt-2">
              <Image
                src="/jp/avatar.png"
                alt="Juan Pablo Arakaki"
                fill
                className="object-cover"
                sizes="6rem"
              />
            </div>
            <div className="max-w-2xl border-l border-black pl-12">
              <h2 className="text-3xl font-medium mb-8 leading-relaxed italic tracking-tight">
                &ldquo;La arquitectura no se trata de crear objetos aislados, sino de tejer los hilos de la sociedad en un entorno tangible.&rdquo;
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">— J.P. Arakaki</p>
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
