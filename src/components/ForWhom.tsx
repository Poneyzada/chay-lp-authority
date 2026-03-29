import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, HeartPulse, Activity, Zap, Flame } from 'lucide-react';
import publicoImg from '../assets/chay-publico.png';

const targets = [
  {
    icon: TrendingDown,
    title: 'Energia & Disposição',
    desc: 'pessoas com cansaço frequente e baixa energia'
  },
  {
    icon: ShieldCheck,
    title: 'Saúde Masculina',
    desc: 'homens com suspeita de baixa testosterona'
  },
  {
    icon: HeartPulse,
    title: 'Saúde Feminina',
    desc: 'mulheres com sintomas hormonais, TPM intensa, menopausa ou irregularidades hormonais'
  },
  {
    icon: Activity,
    title: 'Emagrecimento',
    desc: 'pacientes com dificuldade para emagrecer ou manter o peso'
  },
  {
    icon: Zap,
    title: 'Saúde Sexual',
    desc: 'pessoas com queda de libido ou alterações na vida sexual'
  },
  {
    icon: Flame,
    title: 'Longevidade',
    desc: 'quem busca longevidade, prevenção e performance física e mental'
  }
];

export const ForWhom = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center py-20 bg-white overflow-hidden" id="para-quem">
      {/* Background Image - Full Bleed Cinematic */}
      <div className="absolute inset-0 z-0">
        <img 
          src={publicoImg} 
          alt="Consultório Dra. Chayanne" 
          className="w-full h-full object-cover object-center md:object-center opacity-90 grayscale-[10%] transition-all duration-1000"
        />
        {/* Soft elegant gradient overlay (bottom-to-top on mobile, varied on desktop) */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/40" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r md:from-white/100 md:via-white/80 md:to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          <div className="w-full lg:w-5/12 text-center md:text-left">
            <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Público do Atendimento</span>
            <h2 className="text-[2.6rem] md:text-6xl font-bold tracking-tighter text-black leading-[0.95] mb-8 uppercase">
              PARA QUEM É O <br className="hidden md:block" />
              <span className="text-gold italic font-serif leading-none">Atendimento.</span>
            </h2>
            <p className="text-black text-sm md:text-md font-bold max-w-2xl tracking-widest leading-loose bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/60 inline-block">
              Este atendimento é para você que não aceita mais viver no automático e quer voltar a se sentir bem no próprio corpo.
            </p>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {targets.map((target, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/60 shadow-lg hover:shadow-xl hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all shadow-sm">
                  <target.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-black mb-2 uppercase tracking-tight">{target.title}</h3>
                <p className="text-black text-xs font-bold tracking-widest opacity-80 leading-relaxed italic">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
