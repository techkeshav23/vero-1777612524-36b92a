'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto p-12 rounded-3xl bg-[#FFFFFF] dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] text-center shadow-2xl"
      >
        <CheckCircle2 className="w-16 h-16 text-[#C8A961] mx-auto mb-6" />
        <h2 className="text-3xl font-serif text-[#1A1A1A] dark:text-[#FAFAFA] mb-4">Reservation Confirmed</h2>
        <p className="text-[#6B6B6B] dark:text-[#9A9A95]">We look forward to welcoming you to Vero. A confirmation has been sent to your email.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 md:p-10 rounded-3xl bg-[#FFFFFF] dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
    >
      <h2 className="text-3xl font-serif text-[#1A1A1A] dark:text-[#FAFAFA] mb-8">Book a Table</h2>
      
      <div className="space-y-6">
        <div className="relative">
          <label className="block text-sm font-medium text-[#6B6B6B] dark:text-[#9A9A95] mb-2">Date</label>
          <div className="flex items-center px-4 py-3 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E]">
            <Calendar className="w-5 h-5 text-[#C8A961] mr-3" />
            <input type="date" required className="w-full bg-transparent outline-none text-[#1A1A1A] dark:text-[#FAFAFA]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#6B6B6B] dark:text-[#9A9A95] mb-2">Time</label>
            <div className="flex items-center px-4 py-3 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E]">
              <Clock className="w-5 h-5 text-[#C8A961] mr-3" />
              <select className="w-full bg-transparent outline-none text-[#1A1A1A] dark:text-[#FAFAFA]">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#6B6B6B] dark:text-[#9A9A95] mb-2">Guests</label>
            <div className="flex items-center px-4 py-3 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E]">
              <Users className="w-5 h-5 text-[#C8A961] mr-3" />
              <select className="w-full bg-transparent outline-none text-[#1A1A1A] dark:text-[#FAFAFA]">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n}>{n} Guests</option>)}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6B6B6B] dark:text-[#9A9A95] mb-2">Name</label>
          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] text-[#1A1A1A] dark:text-[#FAFAFA] outline-none focus:border-[#C8A961]" placeholder="John Doe" />
        </div>

        <button 
          type="submit"
          className="w-full py-4 rounded-xl bg-[#1A1A1A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#1A1A1A] font-semibold hover:bg-[#C8A961] transition-colors"
        >
          Confirm Reservation
        </button>
      </div>
    </motion.form>
  );
}