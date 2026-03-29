import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Como funciona a primeira consulta?',
    a: 'Nossa primeira consulta tem duração média de 60 minutos. Realizamos uma anamnese profunda para entender todo o seu histórico, queixas e objetivos, incluindo bioimpedância nos atendimentos presenciais.'
  },
  {
    q: 'O atendimento é coberto por convênios?',
    a: 'Atuamos de forma particular para garantir a qualidade e o tempo necessário para cada paciente. Fornecemos documentação completa para solicitação de reembolso.'
  },
  {
    q: 'O que são os implantes hormonais?',
    a: 'São dispositivos inseridos sob a pele que liberam hormônios de forma constante e fisiológica, indicados após avaliação criteriosa e exames laboratoriais.'
  },
  {
    q: 'Como funciona o acompanhamento após a consulta?',
    a: 'Você terá acesso a um aplicativo exclusivo para monitoramento da evolução, suporte para dúvidas e acompanhamento contínuo da sua jornada clínica.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-16 bg-white border-y border-zinc-50">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12 text-black">
          <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8">Dúvidas Frequentes</span>
          <h2 className="text-[2.6rem] md:text-5xl font-black tracking-tighter text-black leading-none">Perguntas <span className="text-gold italic font-serif leading-none">Comuns.</span></h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="border border-zinc-100 rounded-2xl overflow-hidden bg-white soft-shadow transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="text-sm md:text-base font-black text-black tracking-tight leading-none uppercase italic">{faq.q}</span>
                {openIndex === i ? <Minus size={18} className="text-gold" /> : <Plus size={18} className="text-black" />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-6 md:p-8 pt-0 text-black text-xs md:text-sm leading-relaxed mx-0 font-bold italic">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
