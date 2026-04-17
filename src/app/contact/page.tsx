"use client";

import React from "react";

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Estemos en contacto</p>
            <h1 className="text-6xl sm:text-8xl editorial-title font-medium leading-tight mb-12 uppercase tracking-tighter">
              CONECTEMOS
            </h1>
            <div className="space-y-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 font-mono">Estudio</p>
                <p className="text-lg font-light">Santiago, Chile<br />Av. Nueva Providencia 1353</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 font-mono">Consultas</p>
                <p className="text-lg font-light">studio@jp-arakaki.com<br />+56 9 1234 5678</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-subtle p-12 sm:p-20">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Asunto</label>
                <input
                  type="text"
                  placeholder="Consulta de proyecto / Colaboración"
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto"
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors resize-none font-light"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white h-16 uppercase tracking-widest font-bold text-[10px] hover:opacity-80 transition-opacity mt-8 font-mono"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
