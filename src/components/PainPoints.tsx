import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingDown, Thermometer, Heart, Brain, ChevronRight } from 'lucide-react';

const painPoints = [
  { icon: TrendingDown, text: 'seu peso' },
  { icon: Activity, text: 'sua disposição' },
  { icon: Brain, text: 'sua saúde mental' },
  { icon: Heart, text: 'sua vida sexual' },
  { icon: Thermometer, text: 'e sua qualidade de vida a longo prazo' }
];

export const PainPoints = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden" id="agendamento">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-20">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[2.6rem] md:text-6xl font-black tracking-tighter text-black mb-8 leading-[0.95]">
                Cansaço constante, dificuldade para emagrecer e baixa libido <br className="hidden md:block" />
                <span className="text-gold italic font-serif leading-none">não são normais.</span>
              </h2>
              <p className="text-black text-base md:text-lg mb-10 leading-relaxed font-black uppercase italic">
                Se você sente que seu corpo mudou, que sua energia já não é a mesma ou que está lutando contra sintomas que ninguém consegue explicar, é provável que exista um desequilíbrio hormonal ou metabólico por trás disso.
              </p>
              
              <div className="p-8 md:p-10 bg-white rounded-3xl shadow-soft border border-zinc-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-8">Ignorar esses sinais faz com que o problema avance, afetando:</p>
                <div className="space-y-4">
                  {painPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-300 group-hover:text-gold transition-colors">
                        <point.icon size={16} />
                      </div>
                      <span className="text-xs md:text-sm font-black text-black transition-colors uppercase tracking-tight">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-8 md:mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border-4 border-gold/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold/40 via-gold to-gold/40" />
              <h3 className="text-2xl md:text-4xl font-black text-zinc-900 mb-6 font-serif uppercase italic leading-tight">A investigação correta muda tudo.</h3>
              <p className="text-zinc-900 text-base md:text-lg mb-10 leading-relaxed italic font-bold">
                "Meu papel como médica é investigar profundamente cada caso, identificar a causa real dos sintomas e conduzir um tratamento seguro, científico e totalmente personalizado."
              </p>
              <button
                onClick={onOpenFilter}
                className="w-full py-6 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-gold-dark transition-all flex items-center justify-center gap-3 shadow-lg shadow-gold/20"
              >
                QUERO AGENDAR MINHA CONSULTA
                <ChevronRight size={18} />
              </button>
            </motion.div>
            
            {/* Float badge - Only visible on Tablet/Desktop to avoid overlap on mobile */}
            <div className="hidden md:block absolute -bottom-6 -right-6 p-6 bg-white shadow-2xl border-2 border-zinc-50 rounded-2xl z-20">
              <span className="text-zinc-900 text-sm font-bold block mb-1">Dra. Chayanne Bordin</span>
              <span className="text-gold text-[8px] uppercase font-black tracking-widest">Saúde Hormonal e Longevidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
