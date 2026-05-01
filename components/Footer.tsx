'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#141410] border-t border-[#E8E2D5] dark:border-[#26241E] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A] dark:text-[#FAFAFA] font-['Playfair_Display']">
            Vero
          </Link>
          <p className="mt-4 text-[#6B6B6B] dark:text-[#9A9A95] max-w-sm leading-relaxed">
            Three generations of family recipes, perfected in the heart of Mulberry Street. Authentic Italian, crafted with soul.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="p-2 rounded-full bg-[#F0EAD8] dark:bg-[#1F1D17] text-[#1A1A1A] dark:text-[#FAFAFA] hover:bg-[#C8A961] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:hello@veronyc.com" className="p-2 rounded-full bg-[#F0EAD8] dark:bg-[#1F1D17] text-[#1A1A1A] dark:text-[#FAFAFA] hover:bg-[#C8A961] transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6">Visit Us</h4>
          <ul className="space-y-4 text-[#6B6B6B] dark:text-[#9A9A95]">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-[#C8A961]" />
              <span>224 Mulberry St,<br />New York, NY 10012</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 shrink-0 text-[#C8A961]" />
              <span>(212) 555-0123</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-['Playfair_Display'] text-lg font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6">Hours</h4>
          <ul className="space-y-2 text-[#6B6B6B] dark:text-[#9A9A95]">
            <li>
              <span className="block font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">Mon — Fri</span>
              5:00 PM — 11:00 PM
            </li>
            <li>
              <span className="block font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">Sat — Sun</span>
              5:00 PM — 12:00 AM
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#E8E2D5] dark:border-[#26241E] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6B6B6B] dark:text-[#9A9A95]">
        <p>© 1987 Vero Restaurant. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-[#C8A961] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#C8A961] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}