"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { Link } from "@heroui/react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Proyecto no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-gray-100 flex items-center justify-center group">
         <div className="absolute inset-0 z-0">
            <Image 
              src={project.heroImage} 
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
         </div>

         
         <div className="relative z-10 container mx-auto px-6 max-w-7xl text-white">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-12 font-mono"
            >
              <ArrowLeft className="w-4 h-4" /> Volver a proyectos
            </Link>
            <h1 className="text-6xl sm:text-[7rem] editorial-title font-medium leading-none mb-8 uppercase tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl leading-relaxed font-light italic">
              {project.subtitle}
            </p>
         </div>
      </section>

      {/* Info Bar */}
      <section className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-6 max-w-7xl h-32 flex items-center justify-between">
           <div className="flex gap-20 font-mono">
              <div>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Año</p>
                 <p className="text-sm font-medium">{project.year}</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Ubicación</p>
                 <p className="text-sm font-medium">{project.location}</p>
              </div>
              <div>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Estado</p>
                 <p className="text-sm font-medium italic">Completado</p>
              </div>
           </div>
           <div className="hidden sm:block font-mono">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Rol</p>
              <p className="text-sm font-medium">Arquitecto Principal</p>
           </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-24">
            <div className="md:col-span-4 sticky top-32 h-fit">
               <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black mb-12 flex items-center gap-4 font-mono">
                  <div className="w-12 h-px bg-black" /> Narrativa del Proyecto
               </h2>
               <div className="space-y-12">
                  <div>
                     <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono text-black">Concepto</h3>
                     <p className="text-gray-500 leading-relaxed text-sm font-light">{project.concept}</p>
                  </div>
                  <hr className="border-gray-100" />
                  <div>
                     <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono text-black">Contexto</h3>
                     <p className="text-gray-500 leading-relaxed text-sm font-light">{project.context}</p>
                  </div>
               </div>
            </div>
            
            <div className="md:col-span-8 space-y-24">
               <div className="aspect-video bg-gray-50 flex items-center justify-center text-gray-300 italic relative overflow-hidden">
                  <span className="text-[10px] uppercase tracking-widest font-bold z-10">Visualización Atmosférica</span>
               </div>
               
               <div className="space-y-16">
                  <h3 className="text-4xl font-medium tracking-tight editorial-title">Estrategia de Diseño</h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                     {project.strategy}
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center text-gray-300 italic relative overflow-hidden">
                     <span className="text-[10px] uppercase tracking-widest font-bold z-10">Detalle Estructural</span>
                  </div>
                  <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center text-gray-300 italic relative overflow-hidden">
                     <span className="text-[10px] uppercase tracking-widest font-bold z-10">Estudio Material</span>
                  </div>
               </div>

               <div className="bg-gray-subtle p-12 sm:p-20">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black mb-12 flex items-center gap-4 font-mono">
                     <div className="w-12 h-px bg-black" /> Dibujos Técnicos
                  </h3>
                  <div className="grid grid-cols-1 gap-12">
                     <div className="aspect-[16/6] bg-white flex items-center justify-center text-gray-200 border border-gray-100 relative">
                        <span className="text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-100 font-mono">Plano de Emplazamiento 1:500</span>
                     </div>
                     <div className="aspect-[16/10] bg-white flex items-center justify-center text-gray-200 border border-gray-100 relative">
                        <span className="text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-100 font-mono">Sección A-A 1:100</span>
                     </div>
                  </div>
               </div>

               <div className="py-12 border-t border-gray-100">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-8 font-mono text-black">Sostenibilidad</h3>
                  <p className="text-gray-500 leading-relaxed italic text-lg font-light">
                     {project.sustainability}
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Next Project Nav */}
      <section className="border-t border-gray-100 h-[50vh] flex items-center justify-center hover:bg-black group transition-colors duration-700 cursor-pointer">
         <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-white/50 transition-colors mb-4 font-mono uppercase">Siguiente Proyecto</p>
            <h2 className="text-4xl sm:text-6xl font-medium text-black group-hover:text-white transition-colors editorial-title tracking-tight underline-offset-[12px] decoration-1">Nuevo Museo de Rapa Nui</h2>
         </div>
      </section>
    </div>
  );
}
