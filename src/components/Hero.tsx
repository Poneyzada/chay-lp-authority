import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import heroImg from '../assets/chay-hero.jpg';
import { WovenCanvas } from './ui/woven-light-hero';

const containerVars = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVars = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const Hero = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col pt-12 pb-6 bg-white overflow-hidden" id="home">
      {/* Three.js interactive Background - DNA Helix */}
      <div className="absolute inset-0 z-0">
        <WovenCanvas />
      </div>

      {/* Subtle overlay for text clarity */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100/80 backdrop-blur-sm rounded-full mb-6 md:mb-8 font-bold">
                <span className="w-2 h-2 bg-gold animate-pulse rounded-full" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-black">Plano de Tratamento Individualizado</span>
              </motion.div>
              
              <motion.h1 variants={itemVars} className="text-[2.6rem] md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.95] mb-8">
                Volte a se sentir bem <br className="hidden md:block" />
                <span className="md:inline text-gold italic font-serif leading-none">no seu próprio </span>
                <span className="md:inline">corpo.</span>
              </motion.h1>
              
              <motion.p variants={itemVars} className="text-black text-base md:text-xl max-w-2xl mb-10 md:mb-12 leading-relaxed mx-auto lg:mx-0 font-bold italic">
                Com energia, libido alta, metabolismo equilibrado e saúde em dia. <br /><br />
                Se você está cansado, ganhando peso sem explicação, com queda de libido ou sentindo que seu corpo mudou, aqui você recebe um plano de tratamento individualizado e acompanhamento próximo para que voltar a ter disposição, controle do peso, equilíbrio hormonal e qualidade de vida no dia a dia.
              </motion.p>
              
              <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button 
                  onClick={onOpenFilter}
                  className="group relative px-10 py-5 md:py-6 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-14 hover:bg-gold-dark shadow-xl hover:shadow-gold/20"
                >
                  <span className="relative z-10">QUERO AGENDAR MINHA CONSULTA</span>
                  <ChevronRight size={18} className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all text-white translate-x-4 group-hover:translate-x-0" />
                </button>
                
                <div className="flex items-center gap-4 text-left">
                  <div className="flex -space-x-3">
                    {[26, 32, 45].map(id => (
                      <div key={id} className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${id}`} alt="Paciente" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-gold text-gold" />)}
                    </div>
                    <p className="text-[10px] font-bold text-black uppercase tracking-tighter">REFERÊNCIA EM SAÚDE HORMONOMETABÓLICA</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3 max-w-sm lg:max-w-none relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] md:rounded-[5rem] overflow-hidden soft-shadow border-4 border-white"
            >
              <img 
                src={heroImg} 
                alt="Dra. Chayanne Bordin Calegari" 
                className="w-full h-full object-cover object-center md:object-center opacity-90 transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-zinc/60 via-transparent to-transparent" />
              
              {/* Floating Badge - Pure White High Contrast */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 p-5 md:p-6 bg-white rounded-2xl border border-zinc-100 shadow-2xl z-20"
              >
                <p className="text-black text-[10px] md:text-sm font-bold block mb-2 uppercase tracking-tight">Dra. Chayanne Bordin</p>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <span className="text-gold text-[8px] uppercase font-bold tracking-widest leading-none">Saúde Hormonal e Longevidade</span>
                  <div className="px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-md text-[8px] font-bold text-black uppercase tracking-widest leading-none shadow-sm">
                    CRM-SC 23.321
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
