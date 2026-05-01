'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function ReservationsPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500" style={{ fontFamily: '"Inter", sans-serif' }}>
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAF8F1]/70 dark:bg-[#0A0A08]/70 border-b border-[#E8E2D5] dark:border-[#26241E]">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A] dark:text-[#FAFAFA]" style={{ fontFamily: '"Playfair Display", serif' }}>
            Vero
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/menu" className="text-sm font-medium text-[#1A1A1A]/70 dark:text-[#FAFAFA]/70 hover:text-[#1A1A1A] dark:hover:text-[#FAFAFA]">Menu</Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#141410] p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#E8E2D5] dark:border-[#26241E]"
        >
          <h1 className="text-4xl font-bold mb-2 text-[#1A1A1A] dark:text-[#FAFAFA]" style={{ fontFamily: '"Playfair Display", serif' }}>
            Reserve a Table
          </h1>
          <p className="text-[#6B6B6B] dark:text-[#9A9A95] mb-10">
            Three generations of family recipes await. Please select your party details below.
          </p>

          <div className="space-y-6">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-[#6B6B6B]" />
                  <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] focus:ring-2 focus:ring-[#C8A961] outline-none text-[#1A1A1A] dark:text-[#FAFAFA]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">Party Size</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-[#6B6B6B]" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] focus:ring-2 focus:ring-[#C8A961] outline-none text-[#1A1A1A] dark:text-[#FAFAFA]">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} People</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">Preferred Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-[#6B6B6B]" />
                <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] focus:ring-2 focus:ring-[#C8A961] outline-none text-[#1A1A1A] dark:text-[#FAFAFA]">
                  <option>5:00 PM</option>
                  <option>6:30 PM</option>
                  <option>8:00 PM</option>
                  <option>9:30 PM</option>
                </select>
              </div>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="w-full py-4 bg-[#1A1A1A] dark:bg-[#FAFAFA] text-[#FAF8F1] dark:text-[#0A0A08] rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Continue to Details <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Footer Info */}
          <div className="mt-12 pt-8 border-t border-[#E8E2D5] dark:border-[#26241E] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-2">Hours</h4>
              <p className="text-sm text-[#6B6B6B] dark:text-[#9A9A95]">Mon — Fri: 5:00 PM — 11:00 PM</p>
              <p className="text-sm text-[#6B6B6B] dark:text-[#9A9A95]">Sat — Sun: 5:00 PM — 12:00 AM</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-2">Location</h4>
              <p className="text-sm text-[#6B6B6B] dark:text-[#9A9A95]">224 Mulberry St, New York, NY 10012</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}