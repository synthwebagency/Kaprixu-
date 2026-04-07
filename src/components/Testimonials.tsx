import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote className="w-96 h-96 -translate-x-1/2 -translate-y-1/2 text-primary" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className={`w-6 h-6 ${s <= 4 ? 'text-primary fill-primary' : 'text-primary/30 fill-primary/30'}`} />
            ))}
          </div>
          <span className="text-4xl font-display font-black text-white mb-2">4.3</span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Avaliação Média no Google</span>
        </motion.div>

        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-2xl italic text-gray-300 mb-8 font-light leading-relaxed">
                "{TESTIMONIALS[currentIndex].comment}"
              </p>
              <h4 className="text-lg font-bold text-primary uppercase tracking-widest">
                {TESTIMONIALS[currentIndex].author}
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={prev}
            className="p-3 rounded-full border border-white/10 hover:bg-primary hover:text-black transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="p-3 rounded-full border border-white/10 hover:bg-primary hover:text-black transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-primary' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
