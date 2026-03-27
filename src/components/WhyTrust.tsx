import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Microscope } from 'lucide-react';
import DotCard from './ui/moving-dot-card';

const stats = [
  { icon: Award, value: 'Expertise', label: 'Hormônios & Sexualidade' },
  { icon: Microscope, value: 'Ciência', label: 'Baseado em Evidências' },
  { icon: Clock, value: 'Atenção', label: 'Tempo Real de Consulta' }
];

export const WhyTrust = () => {
  return (
    <section className="py-24 bg-soft-zinc/10 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8">Diferenciais</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-none mb-20">
          Por que confiam na <br />
          <span className="text-gold italic font-serif">Dra. Chayanne.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[200px] h-[140px]">
              <DotCard target={5500} duration={2500} label="Pacientes Atendidos" />
            </div>
          </motion.div>

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-[2rem] bg-white soft-shadow flex items-center justify-center text-gold mb-8">
                <stat.icon size={28} />
              </div>
              <h4 className="text-3xl font-black text-zinc-900 mb-2 font-serif">{stat.value}</h4>
              <p className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             'Atendimento sem pressa e individualizado',
             'Atualização constante em terapias modernas',
             'Foco em resultados sustentáveis e seguros'
           ].map((text, i) => (
             <div key={i} className="px-8 py-4 bg-white/50 border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 italic">
               "{text}"
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
