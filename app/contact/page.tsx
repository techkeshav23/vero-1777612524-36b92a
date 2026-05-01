'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const contactInfo = {
    address: "224 Mulberry St, New York, NY 10012",
    phone: "(212) 555-0123",
    email: "hello@veronyc.com",
    hours: [
      { days: "Mon — Fri", open: "5:00 PM", close: "11:00 PM" },
      { days: "Sat — Sun", open: "5:00 PM", close: "12:00 AM" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500" style={{ fontFamily: '"Inter", sans-serif' }}>
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Get in touch
            </h1>
            <p className="text-xl text-[#6B6B6B] dark:text-[#9A9A95] max-w-2xl">
              Whether you have a question about our menu, need help with a reservation, or just want to say hello, we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-[#FFFFFF] dark:bg-[#141410] p-8 rounded-3xl border border-[#E8E2D5] dark:border-[#26241E] shadow-xl">
                <h2 className="text-2xl font-bold mb-8 text-[#1A1A1A] dark:text-[#FAFAFA]" style={{ fontFamily: '"Playfair Display", serif' }}>Visit Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#C8A961] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Address</h3>
                      <p className="text-[#6B6B6B] dark:text-[#9A9A95]">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-[#C8A961] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Phone</h3>
                      <p className="text-[#6B6B6B] dark:text-[#9A9A95]">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-[#C8A961] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Email</h3>
                      <p className="text-[#6B6B6B] dark:text-[#9A9A95]">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-[#C8A961] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Hours</h3>
                      {contactInfo.hours.map((h, i) => (
                        <p key={i} className="text-[#6B6B6B] dark:text-[#9A9A95]">
                          {h.days}: {h.open} – {h.close}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#FFFFFF] dark:bg-[#141410] p-8 md:p-12 rounded-3xl border border-[#E8E2D5] dark:border-[#26241E] shadow-xl">
                <h2 className="text-2xl font-bold mb-8 text-[#1A1A1A] dark:text-[#FAFAFA]" style={{ fontFamily: '"Playfair Display", serif' }}>Send a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] focus:outline-none focus:ring-2 focus:ring-[#C8A961] text-[#1A1A1A] dark:text-[#FAFAFA]" />
                    <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] focus:outline-none focus:ring-2 focus:ring-[#C8A961] text-[#1A1A1A] dark:text-[#FAFAFA]" />
                  </div>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full p-4 rounded-xl bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] focus:outline-none focus:ring-2 focus:ring-[#C8A961] text-[#1A1A1A] dark:text-[#FAFAFA]" />
                  <button className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#1A1A1A] py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}