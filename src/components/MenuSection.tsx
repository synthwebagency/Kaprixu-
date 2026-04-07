import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CATEGORIES, MENU_ITEMS } from "../constants";
import { ArrowRight, Star } from "lucide-react";

export default function MenuSection() {
  const specialItems = MENU_ITEMS.filter(item => item.isSpecial);

  return (
    <section id="menu" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            O Nosso Cardápio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black mb-6"
          >
            Explore os Nossos <span className="text-primary">Sabores</span>
          </motion.h2>
        </div>

        {/* Specials Highlight */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <div className="flex flex-col">
              <h3 className="text-3xl font-display font-bold">🔥 Especiais da Casa</h3>
              <p className="text-primary font-black text-xl mt-2 uppercase tracking-tighter animate-pulse">
                NÃO PERCA OS NOSSOS CHEESECAKES ESPECIAIS!
              </p>
            </div>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-dark border border-primary/20 rounded-3xl overflow-hidden p-6 flex flex-col gap-6 card-glow-hover transition-all"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Destaque Premium</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-2 text-white">{item.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-primary">{item.price} MZN</span>
                    <Link to={`/menu/${item.category}`} className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-black transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.filter(c => c.id !== 'especiais').map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/menu/${category.id}`}
                className="group block relative h-40 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
              >
                <img 
                  src={`/images/cat-${category.id}.jpg`} 
                  alt={category.name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                  <div className="mt-2 w-0 group-hover:w-12 h-[2px] bg-primary transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
