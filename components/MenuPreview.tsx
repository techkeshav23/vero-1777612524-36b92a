'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const menuData = [
  {
    category: "Antipasti",
    items: [
      { name: "Burrata di Andria", price: "$24", desc: "Creamy center, hand-pulled mozzarella with Apulian olive oil." },
      { name: "Carpaccio di Manzo", price: "$28", desc: "Thinly sliced Wagyu beef, capers, wild arugula." },
      { name: "Calamari Fritti", price: "$22", desc: "Wild-caught squid, lightly dusted in semolina." },
      { name: "Arancini al Tartufo", price: "$19", desc: "Crispy saffron risotto balls stuffed with fontina." }
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Tagliatelle al Tartufo", price: "$36", desc: "Hand-cut egg pasta, butter emulsion, black truffles." },
      { name: "Pappardelle al Cinghiale", price: "$34", desc: "Slow-braised wild boar ragu, fresh pasta ribbons." },
      { name: "Gnocchi alla Sorrentina", price: "$29", desc: "House-made potato dumplings, San Marzano tomato." },
      { name: "Ravioli di Zucca", price: "$32", desc: "Butternut squash filled, brown butter, toasted sage." }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Bistecca alla Fiorentina", price: "$95", desc: "32oz dry-aged porterhouse, wood-fired." },
      { name: "Branzino al Forno", price: "$42", desc: "Whole roasted sea bass, lemon confit, fennel." },
      { name: "Osso Buco", price: "$48", desc: "Veal shank braised for 8 hours, saffron risotto." },
      { name: "Pollo al Mattone", price: "$38", desc: "Crispy skin organic chicken, charred broccolini." }
    ]
  }
];

export default function MenuPreview() {
  return (
    <section className="py-24 bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Culinary Highlights
            </h2>
            <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-lg max-w-lg">
              A curated selection of our most cherished recipes, crafted with the finest seasonal ingredients.
            </p>
          </div>
          <Link 
            href="/menu" 
            className="inline-flex items-center gap-2 text-[#1A1A1A] dark:text-[#FAFAFA] font-medium border-b border-[#1A1A1A] dark:border-[#FAFAFA] pb-1 hover:opacity-70 transition-opacity"
          >
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] border-b border-[#E8E2D5] dark:border-[#26241E] pb-4">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA] group-hover:text-[#C8A961] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-sm font-medium text-[#C8A961]">{item.price}</span>
                    </div>
                    <p className="text-sm text-[#6B6B6B] dark:text-[#9A9A95] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}