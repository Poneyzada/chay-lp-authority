import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, HeartPulse, Activity, Zap, Flame } from 'lucide-react';

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
    <section className="py-10 md:py-16 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Público do Atendimento</span>
          <h2 className="text-[2.6rem] md:text-6xl font-black tracking-tighter text-black leading-[0.95] mb-8 uppercase">
            PARA QUEM É O <br className="hidden md:block" />
            <span className="text-gold italic font-serif leading-none">Atendimento.</span>
          </h2>
          <p className="text-black text-sm md:text-base font-black max-w-2xl mx-auto uppercase tracking-widest leading-loose">
            Este atendimento é para você que não aceita mais viver no automático e quer voltar a se sentir bem no próprio corpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {targets.map((target, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl hover:border-gold/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                <target.icon size={24} />
              </div>
              <h3 className="text-lg font-black text-black mb-3 uppercase tracking-tight">{target.title}</h3>
              <p className="text-black text-xs font-black uppercase tracking-widest opacity-70 leading-relaxed italic">{target.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
