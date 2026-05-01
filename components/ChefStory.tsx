'use client';
import { motion } from 'framer-motion';

export default function ChefStory() {
  const story = {
    headline: "Three generations. One passion.",
    paragraphs: [
      "Vero began in a small village in Tuscany, where Nonna Rosa's pasta was passed kitchen to kitchen for 60 years.",
      "Today, that same dough is rolled by hand each morning at our Mulberry Street kitchen, honoring the rhythms of the past.",
      "Every dish carries a story. Every story carries us forward."
    ],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200"
  };

  return (
    <section className="py-24 bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-8 leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {story.headline}
            </h2>
            <div className="space-y-6">
              {story.paragraphs.map((para, idx) => (
                <p 
                  key={idx} 
                  className="text-lg text-[#6B6B6B] dark:text-[#9A9A95] leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-10 pt-10 border-t border-[#E8E2D5] dark:border-[#26241E]">
              <p className="text-[#1A1A1A] dark:text-[#FAFAFA] font-medium italic">
                "Three generations of family recipes, perfected in the heart of Mulberry Street."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={story.image}
              alt="Chef preparing pasta"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/70 dark:bg-[#141410]/70 backdrop-blur-xl p-6 rounded-2xl border border-white/20 dark:border-white/10">
                <p className="text-sm font-semibold text-[#1A1A1A] dark:text-[#FAFAFA] uppercase tracking-widest">
                  Est. 1987
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}