import { motion } from "motion/react";
import { MapPin, Phone, Clock, MessageSquare, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { getRestaurantInfo } from "../services/geminiService";

export default function ContactInfo() {
  const [liveInfo, setLiveInfo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInfo() {
      const response = await getRestaurantInfo();
      if (response && response.text) {
        setLiveInfo(response.text);
      }
    }
    fetchInfo();
  }, []);

  return (
    <section id="contacto" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
              Visite-nos em <span className="text-primary">Tete</span>
            </h2>
            
            {liveInfo && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-4 items-start"
              >
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-400 italic">
                  <p className="font-bold text-primary mb-1 uppercase tracking-widest text-[10px]">Informação em Tempo Real (Google Maps):</p>
                  {liveInfo.slice(0, 200)}...
                </div>
              </motion.div>
            )}

            <p className="text-gray-400 mb-12 text-lg">
              Estamos localizados no coração da cidade, prontos para lhe oferecer 
              uma experiência gastronómica inesquecível.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Localização</h4>
                  <p className="text-gray-500">Av. Eduardo Mondlane, Tete 2300 (Hotel Anif)</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Contacto</h4>
                  <p className="text-gray-500">+258 84 858 6872</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Horário</h4>
                  <p className="text-gray-500">Terça a Domingo: 08:00 – 22:00</p>
                  <p className="text-secondary font-bold text-sm">Segunda: Fechado</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://wa.me/258848586872" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:opacity-90 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
              <a 
                href="https://www.google.com/maps/search/Kaprixu+Tete+Hotel+Anif" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
              >
                Como Chegar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.64415414449!2d33.5847!3d-16.1564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1929976786877677%3A0x1234567890abcdef!2sHotel%20Anif!5e0!3m2!1sen!2s!4v1712450000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 invert brightness-90"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
