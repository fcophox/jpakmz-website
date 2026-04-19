"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { Link } from "@heroui/react";
import Image from "next/image";
import { ArrowLeft, PenLine, Box, Image as ImageIcon, Sparkles } from "lucide-react";

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

   const renderText = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
         if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i} className="font-bold text-black">{part.slice(2, -2)}</strong>;
         }
         return part;
      });
   };

   return (
      <div className="bg-white/0">
         {/* Hero Section */}
         <section className="relative min-h-[70vh] md:h-[90vh] w-full overflow-hidden bg-gray-100 flex items-center justify-center group py-20">
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
               <h1 className="text-3xl sm:text-5xl md:text-[7rem] editorial-title font-medium leading-[1.1] mb-8 uppercase tracking-tighter break-words">
                  {project.title}
               </h1>
               <p className="text-xl sm:text-2xl text-white/90 max-w-2xl leading-relaxed font-light italic">
                  {project.subtitle}
               </p>
            </div>
         </section>

         {/* Narrative Section */}
         <section className="whitespace-editorial container mx-auto px-6 max-w-7xl py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-24">
               <div className="md:col-span-4 md:sticky md:top-32 h-fit mb-12 md:mb-0">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black mb-8 md:mb-12 flex items-center gap-4 font-mono">
                     <div className="w-12 h-px bg-black" /> El Proyecto
                  </h2>

                  <div className="space-y-8 font-mono mt-8 md:mt-16 md:pl-16">
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Año</p>
                        <p className="text-sm font-medium">{project.year}</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Ubicación</p>
                        <p className="text-sm font-medium">{project.location}</p>
                     </div>
                  </div>
               </div>

               <div className="md:col-span-8 space-y-24">
                  {/* Narrative Text */}
                  {(project.concept || project.context) && (
                     <div className="max-w-2xl space-y-16">
                        {project.concept && (
                           <div>
                              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 font-mono text-black underline underline-offset-8 decoration-gray-200">Concepto</h3>
                              <p className="text-gray-500 leading-relaxed text-lg font-light whitespace-pre-line">{renderText(project.concept)}</p>
                           </div>
                        )}
                        {project.context && (
                           <div>
                              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 font-mono text-black underline underline-offset-8 decoration-gray-200">Contexto</h3>
                              <p className="text-gray-500 leading-relaxed text-lg font-light whitespace-pre-line">{renderText(project.context)}</p>
                           </div>
                        )}
                     </div>
                  )}

                  <hr className="border-gray-100" />

                  {/* Main Project Image */}
                  {project.gallery[0] && (
                     <div className="aspect-video bg-gray-50 relative overflow-hidden group">
                        <Image
                           src={project.gallery[0]}
                           alt={`${project.title} - Visualización Principal`}
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                  )}

                  {project.strategy && (
                     <div className="space-y-16">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono text-black underline underline-offset-8 decoration-gray-200">Estrategia de Diseño</h3>
                        <p className="text-lg text-gray-500 leading-relaxed font-light whitespace-pre-line">
                           {renderText(project.strategy)}
                        </p>
                     </div>
                  )}

                  {/* Secondary Images - Full Width Stack */}
                  {(project.gallery[1] || project.gallery[2]) && (
                     <div className="space-y-8">
                        {project.gallery[1] && (
                           <div className="aspect-[16/9] bg-gray-50 relative overflow-hidden group">
                              <Image
                                 src={project.gallery[1]}
                                 alt={`${project.title} - Detalle 1`}
                                 fill
                                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                           </div>
                        )}
                        {project.gallery[2] && (
                           <div className="aspect-[16/9] bg-gray-50 relative overflow-hidden group">
                              <Image
                                 src={project.gallery[2]}
                                 alt={`${project.title} - Detalle 2`}
                                 fill
                                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                           </div>
                        )}
                     </div>
                  )}

                  {/* Full Gallery Section */}
                  {project.gallery.length > 3 && (
                     <div className="space-y-8">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black flex items-center gap-4 font-mono">
                           <div className="w-12 h-px bg-black" /> Galería de Registros
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {project.gallery.slice(3).map((img, idx) => (
                              <div key={idx} className={`relative overflow-hidden group ${idx % 3 === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                                 <Image
                                    src={img}
                                    alt={`${project.title} - Registro ${idx + 4}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  {/* Technical Drawings Section */}
                  {project.technicalDrawings && project.technicalDrawings.length > 0 && (
                     <div className="bg-gray-subtle p-12 sm:p-20">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black mb-12 flex items-center gap-4 font-mono">
                           <div className="w-12 h-px bg-black" /> Dibujos Técnicos
                        </h3>
                        <div className="grid grid-cols-1 gap-12">
                           {project.technicalDrawings.map((drawing, idx) => (
                              <div key={idx} className="aspect-[16/10] bg-white flex items-center justify-center border border-gray-100 relative overflow-hidden group">
                                 <Image
                                    src={drawing.url}
                                    alt={drawing.title}
                                    fill
                                    className="object-contain p-8"
                                 />
                                 <div className="absolute top-4 left-4">
                                    <span className="text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-100 font-mono z-10 bg-white/80 backdrop-blur-sm">
                                       {drawing.title}
                                    </span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  {project.tools ? (
                     <div className="py-12 border-t border-gray-100">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-12 font-mono text-black">
                           Herramientas y Desarrollo
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {project.tools.map((tool, idx) => {
                              const getIcon = (title: string) => {
                                 if (title.toLowerCase().includes("técnica") || title.toLowerCase().includes("autocad")) return <PenLine className="w-5 h-5" />;
                                 if (title.toLowerCase().includes("desarrollo") || title.toLowerCase().includes("archicad")) return <Box className="w-5 h-5" />;
                                 if (title.toLowerCase().includes("representación") || title.toLowerCase().includes("photoshop")) return <ImageIcon className="w-5 h-5" />;
                                 return <Sparkles className="w-5 h-5" />;
                              };

                              return (
                                 <div key={idx} className="bg-gray-50/50 p-8 border border-gray-100 group hover:bg-black transition-all duration-500">
                                    <div className="flex justify-between items-start mb-8">
                                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white/50 font-mono">{tool.phase}</p>
                                       <div className="text-black group-hover:text-white transition-colors duration-500 opacity-30 group-hover:opacity-100">
                                          {getIcon(tool.title)}
                                       </div>
                                    </div>
                                    <h4 className="text-lg font-medium mb-4 group-hover:text-white transition-colors">{tool.title}</h4>
                                    <p className="text-xs text-gray-500 group-hover:text-white/70 leading-relaxed font-light">{tool.description}</p>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  ) : project.sustainability ? (
                     <div className="py-12 border-t border-gray-100">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-mono text-black flex items-center gap-4">
                           <div className="w-12 h-px bg-black" /> Sostenibilidad
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-lg font-light whitespace-pre-line">
                           {renderText(project.sustainability)}
                        </p>
                     </div>
                  ) : null}
               </div>
            </div>
         </section>

         {/* Next Project Nav */}
         {(() => {
            const currentIndex = projects.findIndex((p) => p.slug === params.slug);
            const nextProject = projects[(currentIndex + 1) % projects.length];
            return (
               <Link
                  href={`/projects/${nextProject.slug}`}
                  className="relative h-[60vh] flex items-center justify-center overflow-hidden group cursor-pointer w-full mt-24"
               >
                  {/* Background Image */}
                  <Image
                     src={nextProject.heroImage}
                     alt={nextProject.title}
                     fill
                     className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-black transition-colors duration-700 z-10" />

                  {/* Content */}
                  <div className="relative z-20 text-center">
                     <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 group-hover:text-white/40 transition-colors mb-6 font-mono">
                        Siguiente Proyecto
                     </p>
                     <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium text-white transition-all duration-700 editorial-title tracking-tight px-6">
                        {nextProject.title}
                     </h2>
                  </div>
               </Link>
            );
         })()}
      </div>
   );
}
