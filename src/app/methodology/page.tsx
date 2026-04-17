"use client";

import React from "react";
import { Card } from "@heroui/react";

export default function Methodology() {
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
    <div className="bg-white">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Cómo trabajo</p>
          <h1 className="text-6xl sm:text-8xl editorial-title font-medium leading-none mb-12 uppercase tracking-tighter">
            METODOLOGÍA
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            Nuestro proceso es una investigación rigurosa sobre la intersección del sitio, la estructura y el impacto social. Creemos en una arquitectura que es a la vez conceptualmente profunda y técnicamente precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="bg-white rounded-none border-none p-16 shadow-none group"
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
      </section>

      <section className="bg-black text-white py-32">
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
    </div>
  );
}
