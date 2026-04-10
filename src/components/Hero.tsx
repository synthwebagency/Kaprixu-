import { motion } from "motion/react";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/herobg-1.jpg" 
          alt="Kaprixu Hero" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </motion.div>

      {/* Blue Glow Highlight (Base Image Element) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-4 mb-6">
            <span className="inline-block px-4 py-1 text-xs font-bold tracking-[0.3em] uppercase bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm">
              Sabores de Outro Mundo
            </span>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <img 
                src="/images/halaal-sticker.png" 
                alt="Halaal Certified" 
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">100% Halaal Restaurant</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 leading-tight tracking-tighter">
            KAPRIXU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              SABORES ÚNICOS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Experimente uma explosão de sabores internacionais no coração de Tete. 
            Qualidade premium, ambiente moderno e comida halal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/menu/especiais"
              className="group relative px-10 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14"
            >
              <span className="relative z-10">Ver Menu</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
            </Link>
            <a 
              href="#contacto"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md transition-all border border-white/10"
            >
              Reservar Mesa
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
