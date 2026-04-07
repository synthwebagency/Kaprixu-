import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("kaprixu_popup_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("kaprixu_popup_seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-lg bg-dark border border-primary/20 rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-primary/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative h-64 overflow-hidden group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://picsum.photos/seed/kunafa/800/800"
                alt="Kunafa Cheesecake"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
            </div>

            <div className="p-8 text-center">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-secondary text-white rounded-full"
              >
                🔥 Especial do Dia
              </motion.span>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-display font-bold mb-2 text-primary"
              >
                Kunafa Cheesecake
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-bold text-white mb-2"
              >
                400 MT
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 mb-8"
              >
                Feito com chocolate do Dubai. Uma experiência de outro mundo.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/menu/especiais"
                  onClick={closePopup}
                  className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-accent transition-all transform hover:scale-105"
                >
                  Ver Menu
                </Link>
                <button
                  onClick={closePopup}
                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                >
                  Fechar
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
