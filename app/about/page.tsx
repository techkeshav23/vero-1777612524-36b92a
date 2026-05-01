'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const team = [
  {
    name: "Marco Rossi",
    role: "Executive Chef",
    bio_short: "Trained at Antica Osteria del Ponte. 20+ years dedicated to the preservation of Tuscan culinary heritage.",
    image: "https://i.pravatar.cc/300?img=12"
  },
  {
    name: "Aanya Patel",
    role: "Pastry Chef",
    bio_short: "A master of texture, Aanya blends traditional pastry techniques with modern, seasonal botanical infusions.",
    image: "https://i.pravatar.cc/300?img=23"
  },
  {
    name: "Sarah Chen",
    role: "Sommelier",
    bio_short: "Curating our cellar with a focus on small-batch organic vineyards across the Italian peninsula.",
    image: "https://i.pravatar.cc/300?img=44"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <Navbar />
      
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              Three generations. <span className="italic text-[#C8A961]">One passion.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-[#6B6B6B] dark:text-[#9A9A95] text-lg leading-relaxed">
                <p>Vero began in a small village in Tuscany, where Nonna Rosa's pasta was passed kitchen to kitchen for 60 years.</p>
                <p>Today, that same dough is rolled by hand each morning at our Mulberry Street kitchen, honoring the rhythms of the past.</p>
                <p>Every dish carries a story. Every story carries us forward.</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200" 
                  alt="Chef in kitchen" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-12 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>Our Culinary Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div 
                  key={member.name}
                  whileHover={{ y: -8 }}
                  className="bg-[#FFFFFF] dark:bg-[#141410] p-6 rounded-3xl border border-[#E8E2D5] dark:border-[#26241E] shadow-lg"
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-[#FAF8F1] dark:border-[#0A0A08]" />
                  <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-1">{member.name}</h3>
                  <p className="text-[#C8A961] font-medium mb-4">{member.role}</p>
                  <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-sm leading-relaxed">{member.bio_short}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}