"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Reemplaza estos valores con tus credenciales de EmailJS
      // Service ID, Template ID, y Public Key (encontrados en el dashboard de EmailJS)
      const result = await emailjs.sendForm(
        'service_38zmls3',
        'template_gy2cf2t',
        e.currentTarget,
        'ShKvQRJVfCzsxOj_K'
      );

      if (result.text === 'OK') {
        setStatus("success");
      } else {
        setErrorMessage("Ocurrió un error al enviar el mensaje.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Error al conectar con el servicio de correo.");
      setStatus("error");
    }
  };

  return (
    <div className="bg-white/0">
      <section className="whitespace-editorial container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 font-mono">Estemos en contacto</p>
            <h1 className="text-4xl sm:text-7xl editorial-title font-medium leading-tight mb-12 uppercase tracking-tighter">
              CONECTEMOS
            </h1>
            <div className="space-y-12">

              <div className="pt-8">
                <div className="border border-gray-100 p-10 sm:p-12 space-y-8 group hover:border-black transition-all duration-500 bg-gray-50/30">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-px bg-black/20 group-hover:w-14 group-hover:bg-black transition-all duration-500" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors font-mono">Red Profesional</p>
                    </div>
                    <svg className="w-5 h-5 fill-black/10 group-hover:fill-black transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                    </svg>
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-white shadow-sm relative hover:grayscale transition-all duration-700 cursor-pointer">
                      <Image
                        src="/jp/avatar-jp.png"
                        alt="Juan Pablo Arakaki"
                        fill
                        className="object-cover"
                        sizes="4rem"
                      />
                    </div>
                    <p className="text-2xl font-light leading-snug">
                      Te invito a conectar y explorar mi trayectoria en <span className="font-medium italic">LinkedIn.</span>
                    </p>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/jpakmz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-b border-black/10 group-hover:border-black transition-all pb-1 pt-4 group/link"
                  >
                    Conectar ahora <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-subtle p-12 sm:p-20 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                >
                  <CheckCircle2 className="w-16 h-16 text-black" strokeWidth={1} />
                  <div>
                    <h2 className="text-2xl font-medium mb-2">¡Mensaje Enviado!</h2>
                    <p className="text-gray-500 font-light">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 pt-4"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Nombre Completo</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Asunto</label>
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="Consulta de proyecto / Colaboración"
                      className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Mensaje</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Cuéntanos sobre tu proyecto"
                      className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-black transition-colors resize-none font-light"
                    />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="flex items-center gap-2 text-red-500 text-xs font-mono"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-black text-white h-16 uppercase tracking-widest font-bold text-[10px] hover:opacity-80 transition-opacity mt-8 font-mono flex items-center justify-center disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
