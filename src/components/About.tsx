import { motion } from "motion/react";
import { CheckCircle2, Wind, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Ambiente Moderno",
    description: "Espaço sofisticado com ar condicionado para o seu máximo conforto."
  },
  {
    icon: ShieldCheck,
    title: "100% Halaal",
    description: "Somos um restaurante totalmente Halaal, garantindo qualidade e respeito."
  },
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Equipa profissional dedicada a proporcionar uma experiência ágil."
  },
  {
    icon: CheckCircle2,
    title: "Variedade Internacional",
    description: "Desde grelhados a pizzas e pratos indianos autênticos."
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Kaprixu Interior</span>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/hero-image-below.jpg" 
              alt="Kaprixu Interior" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10 blur-2xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">A Nossa História</span>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
            Onde a Tradição Encontra a <span className="text-primary">Modernidade</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Localizado no Hotel Anif em Tete, o Kaprixu nasceu da paixão por criar uma experiência 
            gastronómica que transcende fronteiras. Oferecemos um refúgio moderno e acolhedor 
            onde cada detalhe é pensado para o seu prazer.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
