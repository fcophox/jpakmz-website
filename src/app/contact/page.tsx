"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
