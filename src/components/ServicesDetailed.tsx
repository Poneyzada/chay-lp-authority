import React from 'react';
import { motion } from 'framer-motion';
import { Search, FlaskConical, Activity, Zap, ShieldCheck, Soup, GraduationCap, ChevronRight } from 'lucide-react';
import FlipCard from './ui/flip-card';
import servicesImg from '../assets/chay-publico.png';

const services = [
  { 
    icon: Search, 
    title: 'Avaliação médica completa', 
    subtitle: 'Passo 01',
    desc: 'Investigação detalhada para entender a causa dos sintomas, e não apenas tratá-los de forma superficial.',
    features: ['Investigação detalhada', 'Causa dos sintomas']
  },
  { 
    icon: FlaskConical, 
    title: 'Avaliação de exames laboratoriais e hormonais', 
    subtitle: 'Passo 02',
    desc: 'Interpretação estratégica dos seus exames, correlacionando resultados com sintomas e histórico clínico.',
    features: ['Interpretação estratégica', 'Histórico clínico']
  },
  { 
    icon: Activity, 
    title: 'Avaliação hormonal e metabólica', 
    subtitle: 'Indicações',
    desc: 'Indicado para pacientes com:',
    features: [
      'Fadiga',
      'Ganho de peso',
      'Queda de libido',
      'Alterações de humor',
      'Dificuldade de concentração e performance'
    ]
  },
  { 
    icon: Zap, 
    title: 'Protocolos médicos de emagrecimento', 
    subtitle: 'Foco do Tratamento',
    desc: 'Tratamentos seguros e individualizados, com foco em:',
    features: [
      'Redução de gordura',
      'Preservação de massa muscular',
      'Melhora metabólica'
    ]
  },
  { 
    icon: ShieldCheck, 
    title: 'Terapias hormonais e implantes', 
    subtitle: 'Acompanhamento Especializado',
    desc: 'Indicação criteriosa e acompanhamento médico quando há necessidade de reposição hormonal.',
    features: ['Indicação criteriosa', 'Acompanhamento médico']
  },
  { 
    icon: Soup, 
    title: 'Soroterapia e suporte metabólico', 
    subtitle: 'Vitalidade',
    desc: 'Protocolos para suporte energético, imunológico e nutricional, conforme avaliação médica.',
    features: ['Suporte energético', 'Suporte nutricional']
  },
  { 
    icon: GraduationCap, 
    title: 'Atendimento multidisciplinar', 
    subtitle: 'Integração 360º',
    desc: 'Integração com nutricionista e educador físico para potencializar resultados e manter saúde a longo prazo.',
    features: ['Nutricionista', 'Educador físico', 'Resultados longo prazo']
  }
];

export const ServicesDetailed = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  
  return (
    <section className="relative min-h-[100vh] py-10 md:py-12 bg-white overflow-hidden" id="servicos">
      {/* Background Image - Restored to smooth fluid scrolling with offset framing */}
      <div className="absolute inset-0 z-0">
        <img 
          src={servicesImg} 
          alt="Consultório Dra. Chayanne" 
          className="w-full h-full object-cover object-[center_top] md:object-[15%_15%] opacity-90 transition-all duration-1000"
        />
        {/* Soft elegant gradient overlay (right-to-left) to contrast with Previous section */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l md:from-white/100 md:via-white/60 md:to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-16">
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/60 shadow-xl"
            >
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Portfólio Médico</span>
              <h2 className="text-[2.2rem] md:text-5xl font-bold tracking-tighter text-black leading-[0.95] mb-6">
                Serviços <br className="hidden md:block" />
                <span className="text-gold italic font-serif leading-none">Oferecidos.</span>
              </h2>
              
              <div className="h-0.5 w-16 bg-gold/50 mb-6" />
              
              <p className="text-black text-sm md:text-md leading-relaxed mb-6 font-bold bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/60">
                Abordagem integral focada em hormônios, metabolismo e medicina de precisão através de protocolos científicos avançados.
              </p>
              
              <button
                onClick={onOpenFilter}
                className="group flex items-center justify-between w-full gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black hover:text-gold transition-colors py-4 border-b-2 border-black hover:border-gold"
              >
                AGENDAR CONSULTA AGORA <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  duration: 0.8
                }
              }
            }}
          >
            {services.map((service, i) => (
              <div key={i} className="shadow-lg rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-gold/10 transition-shadow">
                <FlipCard
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.desc}
                  features={service.features}
                  icon={service.icon}
                  stepNumber={(i + 1).toString().padStart(2, '0')}
                  onClickAction={onOpenFilter}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
