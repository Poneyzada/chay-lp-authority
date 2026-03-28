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
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Three.js interactive Background - DNA Helix */}
      <div className="absolute inset-0 z-0">
        <WovenCanvas />
      </div>

      {/* Subtle overlay for text clarity */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-3/5 text-center lg:text-left bg-white/20 backdrop-blur-[2px] p-8 rounded-3xl">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full mb-8">
                <span className="w-2 h-2 bg-gold animate-pulse rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Plano de Tratamento Individualizado</span>
              </motion.div>
              
              <motion.h1 variants={itemVars} className="text-5xl md:text-8xl font-black tracking-tight text-zinc-900 leading-[0.95] mb-8">
                Volte a se sentir bem no <br />
                <span className="text-gold italic font-serif">seu próprio corpo.</span>
              </motion.h1>
              
              <motion.p variants={itemVars} className="text-zinc-800 text-lg md:text-xl max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0 font-medium">
                Recupere sua energia, libido alta, metabolismo equilibrado e saúde em dia com um acompanhamento médico próximo e científico.
              </motion.p>
              
              <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button 
                  onClick={onOpenFilter}
                  className="group relative px-10 py-6 bg-zinc-900 text-white font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-14 hover:bg-zinc-800 shadow-xl"
                >
                  <span className="relative z-10">QUERO AGENDAR MINHA CONSULTA</span>
                  <ChevronRight size={18} className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all text-gold translate-x-4 group-hover:translate-x-0" />
                </button>
                
                <div className="flex items-center gap-4 text-left">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-gold text-gold" />)}
                    </div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">REFERÊNCIA EM SAÚDE HORMOMABOLICA</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-[5rem] overflow-hidden soft-shadow"
            >
              <img 
                src={heroImg} 
                alt="Dra. Chayanne Bordin" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 z-20"
              >
                <p className="text-zinc-900 text-sm font-bold block mb-1 uppercase tracking-tight">Dra. Chayanne Bordin</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold text-[8px] uppercase font-black tracking-widest leading-none">Medicina de Precisão</span>
                  <div className="px-2 py-1 bg-gold/10 rounded text-[7px] font-bold text-gold uppercase tracking-widest leading-none">CRM-SC 23.321</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decor Circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-50 border border-zinc-100 rounded-full -z-10 flex items-center justify-center"
            >
               <div className="w-20 h-20 bg-gold/5 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
