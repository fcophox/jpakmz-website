"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Simulate initial loading time or wait for window load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="w-48 md:w-64"
            >
              <motion.svg 
                viewBox="0 0 1253 419" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.2 // Start pulsing after initial animation
                }}
              >
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                  d="M0 418.956V347.519C110.68 349.119 171.873 299.007 171.873 211.044V1H244.772V211.044C244.772 275.017 222.424 326.195 178.258 364.046C134.093 401.896 74.4959 420.022 0 418.956Z" 
                  fill="black"
                />
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                  d="M372.355 418.956V1H655.439C692.155 1 723.55 14.3277 749.624 40.4499C775.697 66.5721 789 97.4923 789 134.277C789 171.061 775.697 202.514 749.624 228.637C723.55 254.759 692.155 267.553 655.439 267.553H445.254V418.956H372.355ZM445.254 197.183H651.715C669.806 197.183 685.238 191.319 697.476 179.058C710.247 166.796 716.633 151.869 716.633 134.277C716.633 116.684 710.247 101.757 698.009 89.4957C685.77 77.2342 670.339 70.837 651.715 70.837H445.254V197.183Z" 
                  fill="black"
                />
                <motion.rect 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                  x="837" y="3" width="413" height="413" rx="47" stroke="black" strokeWidth="6"
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  d="M934.802 173.393L924.109 194.201H902L960.956 76L1021.94 194.201H999.682L988.556 173.393H934.802ZM961.245 116.605L942.46 156.053H980.608L961.245 116.605Z" 
                  fill="black"
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  d="M1159.04 194.201L1115.4 144.638L1087.8 170.792V194.201H1068V80.9131H1087.8V144.493L1155.42 80.7686H1183.89L1129.7 131.488L1184.76 194.201H1159.04Z" 
                  fill="black"
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  d="M921.508 343.045L902 343.19L917.173 226L978.874 300.996L1040.72 226L1055.75 343.19H1036.24L1027.14 272.096L978.874 330.185L930.756 272.096L921.508 343.045Z" 
                  fill="black"
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  d="M1064 343.189L1144.49 249.264H1067.61V229.901H1184.95L1104.17 323.826H1180.76V343.189H1064Z" 
                  fill="black"
                />
              </motion.svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
