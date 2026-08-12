import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingDown, Thermometer, Heart, Brain, ChevronRight } from 'lucide-react';
import bgImg from '../assets/chay-pain.webp';

const painPoints = [
  { icon: TrendingDown, text: 'seu peso' },
  { icon: Activity, text: 'sua disposição' },
  { icon: Brain, text: 'sua saúde mental' },
  { icon: Heart, text: 'sua vida sexual' },
  { icon: Thermometer, text: 'e sua qualidade de vida a longo prazo' }
];

export const PainPoints = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white py-0 md:py-16" id="agendamento">
      {/* Background Image - Full Bleed Cinematic */}
      <div className="absolute inset-0 z-0">
        {/* MOBILE: object-cover total (sem as bordas que o scale 0.9 criou) */}
        <div className="md:hidden absolute inset-0">
          <img 
            src={bgImg} 
            alt="Dra. Chayanne Bordin" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover photo-painpoints opacity-90"
            style={{ objectPosition: 'center 35%' }}
          />
        </div>
        {/* DESKTOP: Zoomed & Blended - Centralizada e colando nas dobras */}
        <div 
          className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-[63%] w-[50%] items-end overflow-hidden pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)'
          }}
        >
          <img 
            src={bgImg} 
            alt="Dra. Chayanne Bordin" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover contrast-[1.05] brightness-[1.02] scale-[1.15]"
            style={{ 
              objectPosition: '50% 15%',
              filter: 'drop-shadow(0 0 50px white)' 
            }}
          />
        </div>

        {/* Multi-stop smooth white wash */}
        <div className="absolute inset-0 bg-white/75 md:hidden" />
        <div 
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff 28%, rgba(255,255,255,0.9) 38%, rgba(255,255,255,0) 48%, rgba(255,255,255,0) 62%, rgba(255,255,255,0.9) 82%, #ffffff 95%, #ffffff 100%)' }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 pt-[80px] pb-6 md:pt-0 md:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-20">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[2.4rem] md:text-4xl font-bold tracking-tighter text-black mb-6 leading-[0.95]">
                Cansaço constante, dificuldade para emagrecer, queda de libido ou alterações hormonais <br className="hidden md:block" />
                <span className="text-gold italic font-serif leading-none">não são normais e têm tratamento.</span>
              </h2>
              <p className="text-black text-base md:text-lg mb-10 leading-relaxed font-bold italic">
                Se você sente que seu corpo mudou, que sua energia já não é a mesma ou que está lutando contra sintomas que ninguém consegue explicar, é provável que exista um desequilíbrio hormonal ou metabólico por trás disso.
              </p>
              
              <div className="p-6 md:p-8 bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/50">
                <p className="text-[10px] font-bold tracking-widest text-zinc-900 mb-8">Ignorar esses sinais faz com que o problema avance, afetando:</p>
                <div className="space-y-4 mb-8">
                  {painPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <point.icon size={14} />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-black tracking-tight">{point.text}</span>
                    </div>
                  ))}
                </div>

                {/* BOTÃO MOBILE: Visível apenas no celular para converter na dobra */}
                <button
                  onClick={onOpenFilter}
                  className="md:hidden w-full py-5 bg-gold text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-gold-dark transition-all flex items-center justify-center gap-3 shadow-lg shadow-gold/20"
                >
                  QUERO AGENDAR MINHA CONSULTA
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-8 md:mt-12 lg:mt-0 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white max-w-md relative overflow-hidden hidden md:block"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40" />
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-6 font-serif uppercase italic leading-tight">A investigação correta muda tudo.</h3>
              <p className="text-zinc-600 text-sm md:text-base mb-10 leading-relaxed italic font-medium">
                "Meu papel como médica é investigar profundamente cada caso, identificar a causa real dos sintomas e conduzir um tratamento seguro, científico e totalmente personalizado."
              </p>
              <button
                onClick={onOpenFilter}
                className="w-full py-6 bg-gold text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gold-dark transition-all flex items-center justify-center gap-3 shadow-lg shadow-gold/20"
              >
                QUERO AGENDAR MINHA CONSULTA
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
