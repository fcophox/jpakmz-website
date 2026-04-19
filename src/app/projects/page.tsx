"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="bg-white/0">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Portafolio</p>
            <h1 className="text-4xl sm:text-7xl editorial-title font-medium leading-tight mb-12 uppercase tracking-tighter">
              PROYECTOS
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              className={`w-full flex ${index % 3 === 0 ? "justify-start" :
                index % 3 === 1 ? "justify-center" :
                  "justify-end"
                }`}
              initial={{ opacity: 0, y: 60, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
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

                    <div className="">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 border border-gray-200 rounded-full text-gray-600 inline-block">
                        Visualización 3D
                      </span>
                    </div>

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
      </section>
    </div>
  );
}
