"use client";

import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-full">
      {/* Horizontal Lines - Very subtle */}
      <div className="absolute top-[15%] left-0 w-full h-px bg-black/[0.03]" />
      <div className="absolute top-[40%] left-0 w-full h-px bg-black/[0.03]" />
      <div className="absolute top-[65%] left-0 w-full h-px bg-black/[0.03]" />
      <div className="absolute top-[90%] left-0 w-full h-px bg-black/[0.03]" />

      {/* Vertical Lines - Strategic positions */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-black/[0.02]" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-black/[0.02]" />
      
      {/* Corner Accents / Fragments */}
      <div className="absolute top-10 left-[5%] w-10 h-px bg-black/[0.08]" />
      <div className="absolute top-10 left-[5%] w-px h-10 bg-black/[0.08]" />
      
      <div className="absolute top-1/2 right-[5%] w-20 h-px bg-black/[0.05]" />
      
      {/* Background Watermark Text - Extra subtle */}
      <div className="absolute bottom-10 right-10 text-[15rem] sm:text-[25rem] font-bold text-black/[0.015] select-none leading-none tracking-tighter whitespace-nowrap uppercase">
        ARAKAKI
      </div>
    </div>
  );
}
