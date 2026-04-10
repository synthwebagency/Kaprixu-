import { motion } from "motion/react";
import { Utensils, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Utensils className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white">
                KAPRIXU
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-8">
              Sabores de outro mundo no coração de Tete. 
              Experiência gastronómica premium com ambiente moderno e acolhedor.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/kaprixu.tete?igsh=cjQxMnR6N2xkb3gx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1TsGvjva9F/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-white">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-primary transition-colors">Início</Link></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#menu" className="text-gray-500 hover:text-primary transition-colors">O Nosso Menu</a></li>
              <li><a href="#galeria" className="text-gray-500 hover:text-primary transition-colors">Galeria</a></li>
              <li><a href="/sitemap.xml" target="_blank" className="text-gray-500 hover:text-primary transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-white">Categorias</h4>
            <ul className="space-y-4">
              <li><Link to="/menu/hamburgueres" className="text-gray-500 hover:text-primary transition-colors">Hambúrgueres / Burgers</Link></li>
              <li><Link to="/menu/pizzas" className="text-gray-500 hover:text-primary transition-colors">Pizzas</Link></li>
              <li><Link to="/menu/frango" className="text-gray-500 hover:text-primary transition-colors">Frango / Chicken</Link></li>
              <li><Link to="/menu/tostas" className="text-gray-500 hover:text-primary transition-colors">Tostas / Toasties</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <Phone className="w-4 h-4 text-primary" />
                +258 84 858 6872
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail className="w-4 h-4 text-primary" />
                info@kaprixu.co.mz
              </li>
              <li className="text-gray-500 leading-relaxed">
                Av. Eduardo Mondlane, Tete 2300 <br />
                (Hotel Anif)
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Kaprixu – Sabores de Outro Mundo. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Desenvolvido com <span className="text-secondary">❤</span> em Moçambique
          </p>
        </div>
      </div>
    </footer>
  );
}
