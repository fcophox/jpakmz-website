"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import {
  ArrowRight
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="bg-white/0">
      {/* Hero Section */}
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl min-h-[70vh] flex flex-col justify-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-24">
            <h1 className="text-6xl sm:text-[7rem] editorial-title font-medium text-black mb-6 tracking-tighter">
              JUAN PABLO <br /> ARAKAKI
            </h1>
            <p className="text-md font-bold uppercase tracking-[0.3em] text-gray-400 font-mono">
              Arquitecto Universidad de Chile
            </p>
          </div>
          <div className="flex gap-8 items-center mb-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-100 shadow-sm relative grayscale hover:grayscale-0 transition-all duration-700 flex-shrink-0 cursor-pointer">
              <Image
                src="/jp/avatar.png"
                alt="Juan Pablo Arakaki"
                fill
                className="object-cover"
                sizes="6rem"
              />
            </div>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
              Soluciones arquitectónicas que dialogan entre la escala humana, el impacto comunitario y la conciencia ambiental.
            </p>
          </div>
          <NextLink
            href="/projects"
            className="inline-flex bg-black text-white rounded-none px-12 h-16 font-medium text-[10px] uppercase tracking-widest hover:opacity-80 transition-opacity items-center justify-center"
          >
            Explorar Proyectos
          </NextLink>
        </motion.div>
      </section>

      {/* Featured Projects Grid */}
      <section className="bg-gray-subtle py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-16 px-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 font-mono">Seleccionado</p>
              <h2 className="text-4xl font-medium tracking-tight">Proyectos</h2>
            </div>
            <NextLink href="/projects" className="group text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity hidden sm:flex items-center gap-2">
              Ver todos los proyectos <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </NextLink>
          </div>

          <div className="flex flex-col gap-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className={`w-full flex ${index === 0 ? "justify-start" :
                  index === 1 ? "justify-center" :
                    "justify-end"
                  }`}
                initial={{ opacity: 0, y: 60, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  className="border-none bg-transparent rounded-none shadow-none group overflow-hidden max-w-5xl w-full"
                >
                  {/* Number & Line Header */}
                  <div className="flex items-center gap-6 mb-12">
                    <span className="text-2xl font-medium font-mono">0{index + 1}</span>
                    <div className="h-[1.5px] bg-black w-32" />
                  </div>

                  <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
                    {/* Image Area - 65% width */}
                    <div className="w-full md:w-[65%]">
                      <NextLink
                        href={`/projects/${project.slug}`}
                        className="block group"
                        data-cursor="view"
                      >
                        <div className="relative overflow-hidden aspect-[14/10] w-full bg-gray-50">
                          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-1000">
                            <Image
                              src={project.heroImage}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 800px"
                              priority={index === 0}
                              unoptimized={true}
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </div>
                      </NextLink>
                    </div>

                    {/* Info Area - 35% width */}
                    <div className="w-full md:w-[35%] pt-4">
                      <h3 className="text-3xl sm:text-4xl font-medium tracking-tighter leading-[1.1] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-mono mb-12 uppercase tracking-widest">
                        {project.year} | {project.location}
                      </p>



                      <div className="mt-16 sm:mt-24">
                        <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 border-b border-black/10 group-hover:border-black transition-colors pb-1 cursor-pointer w-fit">
                          Ver Proyecto <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="whitespace-editorial overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              className="aspect-square relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group cursor-pointer"
              data-cursor="view"
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/pages/filosofia.png"
                alt="Visualización Arquitectónica"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 underline decoration-gray-200 underline-offset-8 font-mono">Filosofía</p>
              <h2 className="text-4xl sm:text-5xl font-medium leading-tight mb-8 editorial-title">
                La arquitectura como medio para la <span className="italic">resonancia social.</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  Creo que cada proyecto es una oportunidad para redefinir cómo habitamos nuestro entorno. Mi práctica se enfoca en crear espacios que no solo sean visualmente atractivos, sino profundamente conectados con su contexto y las personas que los utilizan.
                </p>
                <p>
                  Desde centros comunitarios a gran escala hasta vivienda urbana modular, el objetivo sigue siendo el mismo: encontrar el equilibrio esencial entre forma, función y futuro.
                </p>
              </div>
              <div className="mt-12">
                <NextLink href="/about" className="flex items-center gap-4 group text-[10px] font-bold uppercase tracking-widest">
                  Nuestro enfoque <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </NextLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white py-32">
        <motion.div
          className="container mx-auto px-6 max-w-7xl text-center"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl sm:text-7xl font-medium mb-12 editorial-title tracking-tight">Creemos algo <br /> con sentido.</h2>
          <NextLink
            href="/contact"
            className="inline-flex bg-white text-black rounded-none px-12 h-16 font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-colors items-center justify-center"
          >
            Trabajemos juntos
          </NextLink>
        </motion.div>
      </section>
    </div>
  );
}





