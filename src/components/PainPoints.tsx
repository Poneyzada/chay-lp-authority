import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, ChevronRight, Activity, TrendingDown, Thermometer, Heart, Brain } from 'lucide-react';

const painPoints = [
  { icon: TrendingDown, text: 'Seu peso' },
  { icon: Activity, text: 'Sua disposição' },
  { icon: Brain, text: 'Sua saúde mental' },
  { icon: Heart, text: 'Sua vida sexual' },
  { icon: Thermometer, text: 'Sua qualidade de vida a longo prazo' }
];

export const PainPoints = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Cansaço constante e baixa libido <br />
                <span className="text-gold italic font-serif">não são normais.</span>
              </h2>
              <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
                Se você sente que seu corpo mudou, que sua energia já não é a mesma ou que está lutando contra sintomas que ninguém consegue explicar, é provável que exista um desequilíbrio hormonal ou metabólico.
              </p>
              
              <div className="p-8 bg-white rounded-3xl soft-shadow border border-zinc-100">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6">Ignorar esses sinais afeta:</p>
                <div className="space-y-4">
                  {painPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-300 group-hover:text-gold transition-colors">
                        <point.icon size={16} />
                      </div>
                      <span className="text-sm font-bold text-zinc-600 transition-colors uppercase tracking-tight">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-black p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
              <h3 className="text-3xl font-bold text-white mb-6 font-serif">A investigação correta muda tudo.</h3>
              <p className="text-white/60 mb-10 leading-relaxed italic">
                "Meu papel como médica é investigar profundamente cada caso, identificar a causa real dos sintomas e conduzir um tratamento seguro, científico e totalmente personalizado."
              </p>
              <button
                onClick={onOpenFilter}
                className="w-full py-6 bg-gold text-brand-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gold-light transition-all flex items-center justify-center gap-3"
              >
                QUERO AGENDAR MINHA CONSULTA
                <ChevronRight size={16} />
              </button>
            </motion.div>
            
            {/* Float badge */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-white soft-shadow rounded-2xl border border-zinc-50 z-20 hidden md:block">
              <span className="text-zinc-900 text-sm font-bold block mb-1">Dra. Chayanne Bordin</span>
              <span className="text-gold text-[8px] uppercase font-black tracking-widest">Medicina de Precisão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
