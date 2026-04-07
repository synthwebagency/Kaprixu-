import { motion } from "motion/react";
import { Utensils, Phone, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled || !isHome ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 overflow-hidden rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <img 
              src="/images/logo.png" 
              alt="Kaprixu Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter text-white">
            KAPRIXU
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Início</Link>
          <a href="#sobre" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Sobre</a>
          <a href="#menu" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Menu</a>
          <a href="#galeria" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Galeria</a>
          <a href="#contacto" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Contacto</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/kaprixu.tete?igsh=cjQxMnR6N2xkb3gx" target="_blank" rel="noopener noreferrer" className="hidden lg:block p-2 hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/share/1TsGvjva9F/" target="_blank" rel="noopener noreferrer" className="hidden lg:block p-2 hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="tel:+258848586872" className="p-2 hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <Link
            to="/menu/especiais"
            className="hidden sm:block px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-accent transition-all transform hover:scale-105"
          >
            Reservar
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
