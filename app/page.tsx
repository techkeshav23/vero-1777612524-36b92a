'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Clock, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const menu = [
  { name: "Burrata di Andria", price: "$24", description: "Creamy center, hand-pulled mozzarella with Apulian olive oil and blistered tomatoes." },
  { name: "Tagliatelle al Tartufo", price: "$36", description: "Hand-cut egg pasta tossed in a delicate butter emulsion with shaved black summer truffles." },
  { name: "Bistecca alla Fiorentina", price: "$95", description: "32oz dry-aged porterhouse, wood-fired, finished with coarse sea salt and rosemary oil." },
  { name: "Tiramisu Vero", price: "$16", description: "Espresso-soaked savoiardi, mascarpone cream, shaved 70% dark chocolate." }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80"
          alt="Authentic Italian Pasta"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-6"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">
            Authentic Italian,<br />
            <span className="italic text-[#C8A961]">crafted with soul.</span>
          </h1>
          <Link href="/reservations" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A961] text-white rounded-full font-medium hover:bg-[#b09555] transition-all">
            Reserve a Table <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-serif text-[#1A1A1A] dark:text-[#FAFAFA]">Signature Dishes</h2>
          <Link href="/menu" className="text-[#C8A961] hover:underline">View Full Menu</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menu.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 bg-white dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-[#FAFAFA] mb-2">{item.name}</h3>
              <p className="text-sm text-[#6B6B6B] dark:text-[#9A9A95] mb-4">{item.description}</p>
              <span className="text-[#C8A961] font-bold">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chef's Story */}
      <section className="py-24 bg-[#F0EAD8] dark:bg-[#1F1D17] transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200" 
            alt="Chef at work" 
            className="rounded-3xl shadow-2xl"
          />
          <div>
            <h2 className="text-5xl font-serif text-[#1A1A1A] dark:text-[#FAFAFA] mb-8">Three generations.<br />One passion.</h2>
            <p className="text-lg text-[#6B6B6B] dark:text-[#9A9A95] mb-6">
              Vero began in a small village in Tuscany, where Nonna Rosa's pasta was passed kitchen to kitchen for 60 years.
            </p>
            <p className="text-lg text-[#6B6B6B] dark:text-[#9A9A95]">
              Today, that same dough is rolled by hand each morning at our Mulberry Street kitchen, honoring the rhythms of the past.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center text-[#1A1A1A] dark:text-[#FAFAFA] mb-16">Guest Experiences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { author: "Aanya P.", quote: "The truffle pasta is otherworldly. Genuinely the best Italian in the city." },
            { author: "Marco K.", quote: "Felt like dining in Tuscany. The sommelier paired wines we'd never have ordered ourselves." },
            { author: "Sarah L.", quote: "Hand-rolled pasta you can taste the difference in. The service is impeccable." }
          ].map((r, i) => (
            <div key={i} className="p-8 bg-white dark:bg-[#141410] rounded-3xl border border-[#E8E2D5] dark:border-[#26241E]">
              <div className="flex text-[#C8A961] mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-[#1A1A1A] dark:text-[#FAFAFA] italic mb-6">"{r.quote}"</p>
              <p className="text-sm font-semibold text-[#6B6B6B] dark:text-[#9A9A95]">— {r.author}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}