"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();



  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { href: "/about", label: "Sobre mí" },
    { href: "/projects", label: "Proyectos" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-[60] w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <NextLink href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/brand/jpakmz-logotipo-w.svg"
              alt="J.P. Arakaki Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </NextLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${pathname === link.href ? "text-black underline underline-offset-8" : "text-gray-500 hover:text-black"
                  }`}
              >
                {link.label}
              </NextLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white md:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NextLink
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-medium tracking-tighter transition-colors ${pathname === link.href ? "text-black italic" : "text-gray-400 hover:text-black"
                      }`}
                  >
                    {link.label}
                  </NextLink>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 left-6 right-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 mb-4 font-mono">SOCIAL</p>
              <div className="flex gap-8">
                <Link href="https://www.linkedin.com/in/jpakmz" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-black hover:opacity-50 transition-opacity">LinkedIn</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
