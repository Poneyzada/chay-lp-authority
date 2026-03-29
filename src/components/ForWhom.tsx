import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Zap, UserPlus, Scale, Heart, ShieldCheck } from 'lucide-react';

const targets = [
  { 
    icon: Zap, 
    title: 'Cansaço Frequente', 
    bullets: ['Pessoas com cansaço frequente', 'Baixa energia e fadiga'] 
  },
  { 
    icon: UserCheck, 
    title: 'Saúde Masculina', 
    bullets: ['Homens com suspeita de baixa testosterona', 'Melhora da performance'] 
  },
  { 
    icon: UserPlus, 
    title: 'Saúde Feminina', 
    bullets: ['Sintomas hormonais e TPM intensa', 'Menopausa e irregularidades'] 
  },
  { 
    icon: Scale, 
    title: 'Peso & Metabolismo', 
    bullets: ['Dificuldade para emagrecer', 'Dificuldade em manter o peso'] 
  },
  { 
    icon: Heart, 
    title: 'Vida Sexual', 
    bullets: ['Queda de libido', 'Alterações na vida sexual'] 
  },
  { 
    icon: ShieldCheck, 
    title: 'Longevidade', 
    bullets: ['Prevenção e performance física', 'Otimização mental e física'] 
  }
];

export const ForWhom = () => {
  return (
    <section className="py-10 md:py-16 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8">Para quem é o atendimento</span>
          <h2 className="text-[2.6rem] md:text-6xl font-black tracking-tighter text-zinc-900 leading-[0.95]">
            Não aceite viver no <motion.span 
                className="text-gold italic font-serif inline-block"
                initial={{ x: 0 }}
                whileInView={{ 
                    x: [0, -2, 2, -2, 2, 0],
                    transition: { 
                        duration: 0.5, 
                        delay: 0.5,
                        repeat: 2,
                        repeatDelay: 5
                    } 
                }}
                viewport={{ once: false }}
            >
                automático.
            </motion.span>
          </h2>
          <p className="text-zinc-900 mt-6 max-w-2xl mx-auto uppercase tracking-widest text-[11px] md:text-sm font-black leading-relaxed">
            Este atendimento é para você que quer voltar a se sentir bem no próprio corpo.
          </p>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
          {targets.map((target, i) => (
            <motion.div
              key={i}
              variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
              }}
              className="p-8 md:p-10 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:soft-shadow transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                <target.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-tight group-hover:text-gold transition-colors">{target.title}</h3>
              <ul className="space-y-3">
                {target.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-zinc-900 text-xs md:text-sm leading-tight font-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 group-hover:bg-gold transition-colors" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
