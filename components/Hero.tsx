'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FAF8F1] dark:bg-[#0A0A08]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80"
        alt="Authentic Italian pasta preparation"
        className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F1]/90 via-[#FAF8F1]/40 to-transparent dark:from-[#0A0A08]/90 dark:via-[#0A0A08]/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6 md:px-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/5 dark:bg-white/10 backdrop-blur-md border border-[#1A1A1A]/10 dark:border-white/10 mb-8">
          <Sparkles className="h-4 w-4 text-[#C8A961]" />
          <span className="text-sm font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">
            Featured in NYT Food • Michelin Recommended
          </span>
        </div>
        
        <h1 
          className="text-6xl md:text-8xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#FAFAFA] mb-6 leading-[0.95]"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Authentic Italian, <br />
          <span className="italic text-[#C8A961]">crafted with soul.</span>
        </h1>
        
        <p className="text-xl text-[#6B6B6B] dark:text-[#9A9A95] max-w-xl mb-10 font-light leading-relaxed">
          Three generations of family recipes, perfected in the heart of Mulberry Street. 
          Hand-rolled pasta, wood-fired techniques, and timeless tradition.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/reservations" 
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1A1A1A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#1A1A1A] font-semibold hover:bg-[#C8A961] dark:hover:bg-[#C8A961] transition-all hover:scale-[1.02]"
          >
            Reserve a table
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/menu" 
            className="px-8 py-4 rounded-full text-[#1A1A1A] dark:text-[#FAFAFA] border border-[#1A1A1A]/20 dark:border-white/20 hover:border-[#1A1A1A]/40 dark:hover:border-white/40 hover:bg-[#1A1A1A]/5 dark:hover:bg-white/10 transition-all font-medium"
          >
            View our menu
          </Link>
        </div>
      </motion.div>
    </section>
  );
}