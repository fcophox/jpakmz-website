"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Card } from "@heroui/react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="bg-white">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Portafolio</p>
            <h1 className="text-6xl sm:text-[8rem] editorial-title font-medium leading-none mb-0 uppercase tracking-tighter">
              PROYECTOS
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20">
          {projects.map((project) => (
            <Card 
              key={project.slug} 
              className="border-none bg-transparent rounded-none shadow-none group overflow-hidden"
            >
              <NextLink href={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[3/4]">
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                  <Image 
                    src={project.thumbnail} 
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />
              </NextLink>
              <div className="mt-8">
                <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-1 tracking-tight">{project.title}</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">{project.location}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-200 group-hover:text-black transition-colors font-mono">{project.year}</p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed italic font-light">
                  &ldquo;{project.subtitle}&rdquo;
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
