import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import { LocationMap } from './ui/expand-map';

const cities = [
  { 
    name: 'São Paulo', 
    address: 'Itaim Bibi', 
    coords: '23.5835° S, 46.6833° W' 
  },
  { 
    name: 'Cuiabá', 
    address: 'SB Tower', 
    coords: '15.5961° S, 56.0967° W' 
  },
  { 
    name: 'Balneário Camboriú', 
    address: 'Litoral Norte', 
    coords: '26.9935° S, 48.6333° W' 
  },
  { 
    name: 'Florianópolis', 
    address: 'Referência na Ilha', 
    coords: '27.5945° S, 48.5477° W' 
  }
];

export const Locations = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Onde estamos</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-none">
            Atendimento presencial em <br />
            <span className="text-gold italic font-serif">quatro cidades.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12 mb-32">
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
              <p className="mt-4 text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">
                {city.address}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-black p-12 lg:p-20 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
           <p className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight font-serif italic max-w-4xl mx-auto">
             Agende sua consulta e descubra o que está por trás dos seus sintomas.
           </p>
           <button
             onClick={onOpenFilter}
             className="px-16 py-8 bg-white text-brand-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-gold hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] inline-flex items-center gap-4"
           >
             QUERO AGENDAR MINHA CONSULTA
             <Navigation size={18} fill="currentColor" />
           </button>
        </div>
      </div>
    </section>
  );
};
