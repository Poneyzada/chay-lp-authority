import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ClipboardList, Stethoscope, ClipboardCheck, Users, ChevronRight } from 'lucide-react';
import HighlightCard from './ui/highlight-card';
import { useDraggable } from '../hooks/useDraggable';

const steps = [
  {
    icon: Calendar,
    title: '1. Agendamento',
    step: '01',
    subtitle: 'Após o agendamento, você recebe todas as orientações iniciais e o acesso ao formulário pré-consulta.',
    details: []
  },
  {
    icon: ClipboardList,
    title: '2. Formulário pré-consulta',
    step: '02',
    subtitle: 'Você preencherá um questionário detalhado sobre:',
    details: ['histórico de saúde', 'sintomas', 'hábitos', 'objetivos'],
    footer: 'Isso permite que a consulta seja muito mais produtiva e direcionada.'
  },
  {
    icon: Stethoscope,
    title: '3. Consulta médica aprofundada',
    step: '03',
    subtitle: 'A consulta tem duração média de 1 hora, com avaliação detalhada de:',
    details: ['rotina', 'histórico alimentar', 'exames', 'sintomas físicos e emocionais', 'objetivos com o tratamento'],
    footer: 'Nos atendimentos presenciais, realizo bioimpedância corporal, permitindo avaliação precisa de gordura, massa muscular e metabolismo.'
  },
  {
    icon: ClipboardCheck,
    title: '4. Plano terapêutico personalizado',
    step: '04',
    subtitle: 'Cada paciente recebe um plano individualizado, que pode incluir:',
    details: ['ajuste hormonal', 'estratégias médicas de emagrecimento', 'suplementação', 'mudanças de estilo de vida']
  },
  {
    icon: Users,
    title: '5. Acompanhamento contínuo',
    step: '05',
    subtitle: 'Você não fica sozinho após a consulta.\nDisponibilizo:',
    details: ['aplicativo de acompanhamento', 'suporte para dúvidas', 'monitoramento da evolução clínica']
  }
];

export const Methodology = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  const dragEvents = useDraggable();
  return (
    <section className="py-10 md:py-16 bg-white border-y border-zinc-50 overflow-hidden relative" id="metodologia">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-32 gap-8">
          <div className="max-w-3xl text-center md:text-left">
            <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Metodologia Médica</span>
            <h2 className="text-[2.6rem] md:text-6xl font-bold tracking-tighter text-black leading-[0.95] mb-6">
              COMO FUNCIONA O <br className="hidden md:block" />
              <span className="text-gold italic font-serif leading-none">Atendimento.</span>
            </h2>
            <p className="text-black text-sm md:text-base font-bold uppercase tracking-widest opacity-80 mb-10 md:mb-0">
              Um passo a passo médico completo para tratar saúde hormonal, metabolismo, libido e longevidade.
            </p>
          </div>
          <button
            onClick={onOpenFilter}
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black hover:text-gold transition-colors py-4 border-b-2 border-black hover:border-gold"
          >
            QUERO AGENDAR MINHA CONSULTA <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Premium Carousel with Snap Scroll Behavior and Mouse Drag */}
        <div 
          className={`flex overflow-x-auto pb-10 gap-6 md:gap-10 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth ${dragEvents.dragClassName}`}
          ref={dragEvents.ref}
          onMouseDown={dragEvents.onMouseDown}
          onMouseLeave={dragEvents.onMouseLeave}
          onMouseUp={dragEvents.onMouseUp}
          onMouseMove={dragEvents.onMouseMove}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="min-w-[280px] md:min-w-[340px] flex shrink-0 h-full snap-center"
            >
              <HighlightCard
                title={step.title}
                subtitle={step.subtitle}
                description={step.details}
                footer={step.footer}
                icon={<step.icon size={28} className="text-gold" />}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-[10px] font-bold text-zinc-300 md:block animate-pulse tracking-widest uppercase">
          ← Arraste para o lado para ver todos os passos →
        </div>
      </div>
    </section>
  );
};
