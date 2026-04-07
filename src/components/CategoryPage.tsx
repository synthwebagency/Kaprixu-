import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { CATEGORIES, MENU_ITEMS } from "../constants";
import { ArrowLeft, Star, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId);
  const items = MENU_ITEMS.filter(item => item.category === categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-display font-bold mb-4">Categoria não encontrada</h2>
        <Link to="/" className="text-primary hover:underline">Voltar para o início</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold uppercase tracking-widest text-sm">Voltar ao Início</span>
            </Link>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-display font-black mb-4"
            >
              {category.name}
            </motion.h1>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold text-white">H</div>
            <span className="text-xs font-bold uppercase tracking-widest text-white">Halaal Certified</span>
          </div>
        </div>

        {categoryId === 'pizzas' && (
          <div className="mb-8 p-4 bg-secondary/10 border border-secondary/20 rounded-2xl text-center">
            <p className="text-secondary font-black uppercase tracking-widest">
              BATA FRITA INCLUIDO
            </p>
          </div>
        )}

        <div className="grid gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center justify-between p-6 bg-dark border border-white/5 rounded-2xl hover:border-primary/30 transition-all"
            >
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                )}
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl font-black text-primary whitespace-nowrap">
                  {item.price} <span className="text-[10px] text-gray-500">MZN</span>
                </span>
                <button className="p-2 bg-white/5 hover:bg-primary hover:text-black rounded-xl transition-all">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-500 italic">Mais delícias em breve nesta categoria...</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

