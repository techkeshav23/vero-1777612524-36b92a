'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAF8F1]/80 dark:bg-[#0A0A08]/80 border-b border-[#E8E2D5] dark:border-[#26241E] transition-colors duration-300"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A] dark:text-[#FAFAFA]">
          Vero
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#1A1A1A]/70 dark:text-[#FAFAFA]/70 hover:text-[#C8A961] dark:hover:text-[#C8A961] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[#E8E2D5] dark:hover:bg-[#26241E] transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#1A1A1A] dark:text-[#FAFAFA]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1A1A1A] dark:text-[#FAFAFA]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFFFFF] dark:bg-[#141410] border-b border-[#E8E2D5] dark:border-[#26241E] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#1A1A1A] dark:text-[#FAFAFA] py-2"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}