import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ClipboardList, Stethoscope, ClipboardCheck, Users, ChevronRight } from 'lucide-react';
import { IdentityCardBody, RevealCardContainer } from './ui/animated-profile-card';

const steps = [
  {
    icon: Calendar,
    title: 'Agendamento',
    step: '01',
    desc: 'Receba orientações iniciais e acesso ao formulário pré-consulta.'
  },
  {
    icon: ClipboardList,
    title: 'Pré-Consulta',
    step: '02',
    desc: 'Questionário detalhado sobre histórico, sintomas, hábitos e objetivos.'
  },
  {
    icon: Stethoscope,
    title: 'Consulta Médica',
    step: '03',
    desc: 'Duração de 1 hora com bioimpedância e avaliação meticulosa.'
  },
  {
    icon: ClipboardCheck,
    title: 'Plano Terapêutico',
    step: '04',
    desc: 'Ajuste hormonal, emagrecimento e suplementação personalizada.'
  },
  {
    icon: Users,
    title: 'Acompanhamento',
    step: '05',
    desc: 'App de monitoramento e suporte direto para dúvidas e evolução.'
  }
];

export const Methodology = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Metodologia Científica</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Como funciona o <br />
              <span className="text-gold italic font-serif">Atendimento.</span>
            </h2>
          </div>
          <button
            onClick={onOpenFilter}
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-gold transition-colors py-4 border-b border-zinc-200"
          >
            QUERO AGENDAR MINHA CONSULTA <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <RevealCardContainer
                accent="#c19717"
                textOnAccent="#ffffff"
                mutedOnAccent="rgba(255,255,255,0.7)"
                className="w-full !border-zinc-200 cursor-pointer"
                onClick={onOpenFilter}
                base={
                  <IdentityCardBody
                    fullName={step.title}
                    place={`Etapa ${step.step}`}
                    about={step.desc}
                    avatarUrl=""
                    avatarText={step.step}
                    scheme="plain"
                    displayAvatar={false}
                    className="min-h-[260px] bg-white transition-colors group-hover:bg-zinc-50"
                    icon={<step.icon size={24} className="text-zinc-300" />}
                  />
                }
                overlay={
                  <IdentityCardBody
                    fullName={step.title}
                    place={`Etapa ${step.step}`}
                    about={step.desc}
                    avatarUrl=""
                    avatarText={step.step}
                    scheme="accented"
                    displayAvatar={false}
                    className="min-h-[260px] bg-gold"
                    icon={<step.icon size={24} className="text-white" />}
                  />
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
