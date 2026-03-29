import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import { LocationMap } from './ui/expand-map';

const cities = [
  { 
    name: 'Florianópolis', 
    address: 'Referência na Ilha', 
    coords: '27.5945° S, 48.5477° W' 
  },
  { 
    name: 'São Paulo', 
    address: 'Itaim Bibi', 
    coords: '23.5835° S, 46.6833° W' 
  },
  { 
    name: 'Balneário Camboriú', 
    address: 'Litoral Norte', 
    coords: '26.9935° S, 48.6333° W' 
  },
  { 
    name: 'Itapema', 
    address: 'Litoral Catarinense', 
    coords: '27.0888° S, 48.6111° W' 
  }
];

export const Locations = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-20 pb-10 bg-white overflow-hidden" id="onde-estamos">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Onde estamos</span>
          <h2 className="text-[2.6rem] md:text-5xl font-black tracking-tighter text-black leading-none uppercase">
            Atendimento presencial em <br className="hidden md:block" />
            <span className="text-gold italic font-serif leading-none">quatro cidades.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 md:mb-20">
          {cities.map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <LocationMap 
                location={city.name} 
                coordinates={city.coords}
              />
              <p className="mt-4 text-[10px] text-black font-black uppercase tracking-[0.2em] px-2 text-center">
                {city.address}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] text-center relative overflow-hidden border border-gold/20 shadow-xl">
           {/* Subtle Gold Glow */}
           <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/15 blur-[120px] rounded-full" />
           <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/5 blur-[120px] rounded-full" />
           
           <p className="text-2xl md:text-5xl font-black text-black mb-8 md:mb-10 leading-tight font-serif italic max-w-4xl mx-auto relative z-10">
             Agende sua consulta e descubra o que está por trás dos seus sintomas. <br />
             <span className="text-gold not-italic font-black text-sm md:text-xl uppercase tracking-widest mt-4 block">
               Você receberá avaliação médica completa, análise detalhada de exames, plano personalizado e acompanhamento profissional.
             </span>
           </p>
           <button
             onClick={onOpenFilter}
             className="w-full md:w-auto px-10 md:px-16 py-5 md:py-8 bg-gold text-black font-black uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-gold-dark transition-all shadow-lg shadow-gold/20 inline-flex items-center justify-center gap-4 relative z-10"
           >
             QUERO AGENDAR MINHA CONSULTA
             <Navigation size={18} fill="currentColor" />
           </button>
        </div>
      </div>
    </section>
  );
};
