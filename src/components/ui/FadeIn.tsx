"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
