"use client";

import React from "react";
import Image from "next/image";
import { Link, Card } from "@heroui/react";
import { ArrowRight, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento y Análisis",
      description: "Comenzamos por comprender profundamente el territorio, su historia y las necesidades de la comunidad. Cada respuesta arquitectónica debe estar enraizada en su contexto específico."
    },
    {
      number: "02",
      title: "Estrategia Conceptual",
      description: "Desarrollamos una visión clara que aborda los desafíos identificados. Nos enfocamos en la simplicidad, la funcionalidad y la resonancia simbólica."
    },
    {
      number: "03",
      title: "Diseño Iterativo",
      description: "A través de modelos, dibujos y simulaciones, refinamos la forma y la paleta de materiales, asegurando los más altos estándares de sostenibilidad y rendimiento."
    },
    {
      number: "04",
      title: "Realización Técnica",
      description: "Traducimos el concepto en documentación técnica precisa, enfocándonos en la calidad tectónica y sistemas de construcción eficientes."
    }
  ];

  return (
    <div className="bg-white/0">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          {/* Bio Section */}
          <div className="md:col-span-12 lg:col-span-5 md:sticky md:top-32 md:h-fit">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Sobre mí</p>
            <h1 className="text-5xl sm:text-7xl editorial-title font-medium leading-[1.1] mb-12 uppercase tracking-tighter">
              Juan Pablo <br /> Arakaki Martínez
            </h1>
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Soy arquitecto de la Universidad de Chile, dedicado a la creación de espacios que fomentan la comunidad y la resiliencia ambiental.
              </p>
              <p>
                Con un enfoque en el paisaje chileno y el contexto urbano, mi trabajo une la brecha entre el rigor conceptual y la responsabilidad social.
              </p>

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

          <div className="lg:col-span-1" />

          {/* Images & Details Section */}
          <div className="md:col-span-12 lg:col-span-6 space-y-20">
            {/* Main Portrait with Scroll Reveal + Hover */}
            <motion.div
              className="aspect-[4/5] relative overflow-hidden group cursor-pointer transition-all duration-1000 grayscale hover:grayscale-0 md:grayscale md:hover:grayscale-0"
              data-cursor="view"
              whileInView={{ filter: "grayscale(0%)" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              {/* Image 1: B&W (Mobile hidden on reach, Desktop hidden on hover) */}
              <Image
                src="/jp/jp-1.JPG"
                alt="Juan Pablo Arakaki"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 md:group-hover:opacity-0"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />

              {/* Image 2: COLOR (Mobile reveal on scroll, Desktop reveal on hover) */}
              <motion.div
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/jp/jp-2.JPG"
                  alt="Juan Pablo Arakaki - Color"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 md:opacity-0 md:group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>

              {/* LinkedIn Overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end p-10 text-center text-white font-mono">
                <div className="mb-4">
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                  </svg>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2">LinkedIn</p>
                <p className="text-[11px] font-light leading-relaxed uppercase tracking-wider">
                  Visitar perfil y conectar
                </p>
              </div>
              <Link
                href="https://www.linkedin.com/in/jpakmz"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-30"
              />
            </motion.div>

            <div className="space-y-16 border-t border-gray-100 pt-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-6 font-mono text-black underline underline-offset-8 decoration-gray-100">Enfoque</p>
                <div className="flex flex-wrap gap-2">
                  {["Regeneración Urbana", "Centros Comunitarios", "Vivienda Modular", "Sistemas Sostenibles"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-[0.15em] px-4 py-2 border border-gray-100 text-gray-400 hover:text-black hover:border-black transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-gray-50">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-8 font-mono text-black underline underline-offset-8 decoration-gray-100">Reconocimientos</p>
                <div className="space-y-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-base font-bold uppercase tracking-wider text-black flex items-center gap-5">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-100 flex-shrink-0">
                        <Trophy className="w-5 h-5" strokeWidth={1} />
                      </div>
                      <span>Mención Honrosa<br /> Concurso Museo de Rapa Nui (2024)</span>
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                      El proyecto del Nuevo Museo de Rapa Nui obtuvo:
                    </p>
                    <ul className="text-xs space-y-4 text-gray-400 uppercase tracking-widest leading-relaxed pl-2 mb-10">
                      <li className="flex items-start gap-3">
                        <span className="text-base leading-none">-</span>
                        <span>Mención honrosa (5° lugar)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-base leading-none">-</span>
                        <span>En un concurso con más de 80 oficinas de arquitectura</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-base leading-none">-</span>
                        <span>Con participación nacional e internacional</span>
                      </li>
                    </ul>

                    <Link
                      href="/projects/nuevo-museo-rapa-nui"
                      className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black pb-1 hover:gap-5 transition-all"
                    >
                      Ver proyecto completo <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12 border-t border-gray-100">
              <div className="flex flex-col gap-8 items-start text-left">
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

      {/* Methodology Section */}
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl pt-32 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-12 lg:col-span-5 md:sticky md:top-32 md:h-fit">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Cómo trabajo</p>
            <h2 className="text-2xl sm:text-4xl editorial-title font-medium leading-none mb-12 uppercase tracking-tighter">
              METODOLOGÍA
            </h2>
            <p className="text-md text-gray-500 leading-relaxed font-light mb-6">
              Cada proceso es una investigación rigurosa sobre la intersección del sitio, la estructura y el impacto social.
            </p>
            <p className="text-md text-gray-500 leading-relaxed font-light">
              Creemos en una arquitectura que es a la vez conceptualmente profunda y técnicamente precisa.
            </p>
          </div>

          <div className="md:col-span-12 lg:col-span-6 lg:col-start-7 space-y-12">
            {steps.map((step) => (
              <Card
                key={step.number}
                className="bg-white rounded-none border border-gray-100 p-12 sm:p-16 shadow-none group hover:border-black transition-colors duration-500"
              >
                <span className="text-5xl font-mono text-gray-100 group-hover:text-black transition-colors duration-500 mb-12 block">
                  {step.number}
                </span>
                <h3 className="text-2xl font-medium mb-6 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-black text-white py-32 mt-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <h2 className="text-4xl sm:text-6xl font-medium editorial-title leading-[1.1] tracking-tight">
              La sostenibilidad como <br /> principio central, <span className="italic text-gray-400">no como accesorio.</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-light text-lg">
              <p>
                Integramos estrategias de diseño pasivo y sistemas renovables desde el primer boceto. Nuestro objetivo es crear edificios que contribuyan a su ecosistema en lugar de restarle.
              </p>
              <div className="grid grid-cols-2 gap-6 text-[10px] font-bold uppercase tracking-widest text-white mt-12 font-mono">
                <div className="border-t border-gray-800 pt-6">Calefacción Pasiva</div>
                <div className="border-t border-gray-800 pt-6">Reciclaje de Agua</div>
                <div className="border-t border-gray-800 pt-6">Materiales Locales</div>
                <div className="border-t border-gray-800 pt-6">Energía Renovable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl text-center py-32">
        <h2 className="text-4xl font-medium mb-12 tracking-tight">Hablemos de tu próximo proyecto</h2>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest border border-black px-12 h-16 hover:bg-black hover:text-white transition-all"
        >
          Contactar ahora <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
