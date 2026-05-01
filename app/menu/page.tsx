'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const menuData = [
  {
    category: "Antipasti",
    items: [
      { name: "Burrata di Andria", price: "$24", description: "Creamy center, hand-pulled mozzarella with Apulian olive oil and blistered tomatoes.", ingredients: "Buffalo milk, sea salt, basil, extra virgin olive oil", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800", tags: ["vegetarian", "signature"] },
      { name: "Carpaccio di Manzo", price: "$28", description: "Thinly sliced Wagyu beef, capers, wild arugula, and 24-month aged Parmigiano-Reggiano.", ingredients: "Wagyu beef, arugula, lemon, parmesan", image: "https://picsum.photos/seed/food1/800/600", tags: ["gluten-free"] },
      { name: "Calamari Fritti", price: "$22", description: "Wild-caught squid, lightly dusted in semolina, served with a spicy marinara.", ingredients: "Squid, semolina, calabrian chili", image: "https://picsum.photos/seed/food2/800/600", tags: [] },
      { name: "Arancini al Tartufo", price: "$19", description: "Crispy saffron risotto balls stuffed with fontina and black truffle.", ingredients: "Risotto, fontina, black truffle, breadcrumbs", image: "https://picsum.photos/seed/food3/800/600", tags: ["vegetarian"] }
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Tagliatelle al Tartufo", price: "$36", description: "Hand-cut egg pasta tossed in a delicate butter emulsion with shaved black summer truffles.", ingredients: "Semolina, eggs, butter, black truffle", image: "https://picsum.photos/seed/food4/800/600", tags: ["signature"] },
      { name: "Pappardelle al Cinghiale", price: "$34", description: "Slow-braised wild boar ragu over wide ribbons of fresh pasta.", ingredients: "Wild boar, red wine, tomato, rosemary", image: "https://picsum.photos/seed/food5/800/600", tags: [] },
      { name: "Gnocchi alla Sorrentina", price: "$29", description: "House-made potato dumplings, San Marzano tomato sauce, fresh mozzarella.", ingredients: "Potato, flour, tomato, mozzarella, basil", image: "https://picsum.photos/seed/food6/800/600", tags: ["vegetarian"] },
      { name: "Ravioli di Zucca", price: "$32", description: "Butternut squash filled ravioli with brown butter and toasted sage.", ingredients: "Squash, nutmeg, butter, sage, amaretto", image: "https://picsum.photos/seed/food7/800/600", tags: ["vegetarian"] }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Bistecca alla Fiorentina", price: "$95", description: "32oz dry-aged porterhouse, wood-fired, finished with coarse sea salt and rosemary oil.", ingredients: "Dry-aged beef, sea salt, rosemary", image: "https://picsum.photos/seed/food8/800/600", tags: ["sharing"] },
      { name: "Branzino al Forno", price: "$42", description: "Whole roasted Mediterranean sea bass, lemon confit, fennel, and olives.", ingredients: "Branzino, fennel, olives, lemon", image: "https://picsum.photos/seed/food9/800/600", tags: ["gluten-free"] },
      { name: "Osso Buco", price: "$48", description: "Veal shank braised for 8 hours, served with saffron risotto and gremolata.", ingredients: "Veal, saffron, rice, parsley, garlic", image: "https://picsum.photos/seed/food10/800/600", tags: [] },
      { name: "Pollo al Mattone", price: "$38", description: "Crispy skin organic chicken pressed under a brick, served with charred broccolini.", ingredients: "Chicken, broccolini, lemon, chili", image: "https://picsum.photos/seed/food11/800/600", tags: [] }
    ]
  },
  {
    category: "Dolci",
    items: [
      { name: "Tiramisu Vero", price: "$16", description: "Espresso-soaked savoiardi, mascarpone cream, shaved 70% dark chocolate.", ingredients: "Mascarpone, coffee, cocoa, ladyfingers", image: "https://picsum.photos/seed/food12/800/600", tags: ["signature"] },
      { name: "Panna Cotta", price: "$14", description: "Silky vanilla bean custard with a wild berry reduction.", ingredients: "Cream, vanilla bean, mixed berries", image: "https://picsum.photos/seed/food13/800/600", tags: ["gluten-free"] },
      { name: "Cannoli Siciliani", price: "$15", description: "Crispy shell filled with sheep's milk ricotta, candied orange, and pistachios.", ingredients: "Ricotta, pistachio, orange peel", image: "https://picsum.photos/seed/food14/800/600", tags: [] },
      { name: "Gelato Artigianale", price: "$12", description: "A trio of house-churned seasonal flavors.", ingredients: "Milk, cream, sugar, seasonal fruit", image: "https://picsum.photos/seed/food15/800/600", tags: ["vegetarian"] }
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <Navbar />
      
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Our Menu
          </h1>
          <p className="text-[#6B6B6B] dark:text-[#9A9A95] max-w-2xl mx-auto text-lg">
            Three generations of family recipes, perfected in the heart of Mulberry Street.
          </p>
        </motion.div>

        <div className="space-y-24">
          {menuData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] border-b border-[#E8E2D5] dark:border-[#26241E] pb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                {section.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item) => (
                  <motion.div 
                    key={item.name}
                    whileHover={{ y: -4 }}
                    className="group flex gap-6 p-6 rounded-3xl bg-white dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA]">{item.name}</h3>
                        <span className="text-[#C8A961] font-semibold">{item.price}</span>
                      </div>
                      <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-sm mb-3">{item.description}</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#6B6B6B]/60 dark:text-[#9A9A95]/60 font-medium">
                        {item.ingredients}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}