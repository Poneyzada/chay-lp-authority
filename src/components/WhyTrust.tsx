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
    <section className="py-10 md:py-20 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Diferenciais</span>
        <h2 className="text-[2.6rem] md:text-6xl font-bold tracking-tighter text-black leading-[0.95] mb-12 md:mb-20">
          Por que pacientes de diferentes estados <br className="hidden md:block" />
          <span className="text-gold italic font-serif leading-none">confiam na Dra Chay.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-center">
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
              <div className="w-16 h-16 rounded-[2rem] bg-white shadow-soft flex items-center justify-center text-gold mb-6 md:mb-8">
                <stat.icon size={28} />
              </div>
              <h4 className="text-3xl font-bold text-black mb-2 font-serif uppercase tracking-tight italic leading-none">{stat.value}</h4>
              <p className="text-[10px] font-bold uppercase text-black tracking-[0.2em] leading-tight px-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
           {[
             'Especialização em Endocrinologia, Nutrologia e Sexualidade Humana',
             'Atualização constante em terapias hormonais modernas',
             'Consulta com tempo adequado, sem atendimento apressado',
             'Tratamentos baseados em ciência, não em modismos'
           ].map((text, i) => (
             <div key={i} className="px-6 py-5 bg-white border border-zinc-100 rounded-3xl text-[9px] md:text-px font-bold uppercase tracking-widest text-black italic shadow-soft flex items-center justify-center">
               "{text}"
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
