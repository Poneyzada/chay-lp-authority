import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Zap, UserPlus, Scale, Heart, ShieldCheck } from 'lucide-react';

const targets = [
  { icon: Zap, title: 'Cansaço Frequente', desc: 'Pessoas com baixa energia crônica.' },
  { icon: UserCheck, title: 'Homens', desc: 'Suspeita de baixa testosterona.' },
  { icon: UserPlus, title: 'Mulheres', desc: 'Menopausa, TPM intensa e irregularidades.' },
  { icon: Scale, title: 'Peso & Metabolismo', desc: 'Dificuldade para emagrecer ou manter o peso.' },
  { icon: Heart, title: 'Vida Sexual', desc: 'Queda de libido ou alterações na performance.' },
  { icon: ShieldCheck, title: 'Longevidade', desc: 'Quem busca prevenção e performance física.' }
];

export const ForWhom = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Para quem é o atendimento</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
            Não aceite viver no <br className="md:hidden" />
            <motion.span 
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
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold leading-relaxed">
            Este atendimento é para você que quer voltar a se sentir bem no próprio corpo.
          </p>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              className="p-10 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:soft-shadow transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                <target.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-tight group-hover:text-gold transition-colors">{target.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{target.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
