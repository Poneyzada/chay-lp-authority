import React from 'react';
import { motion } from 'framer-motion';
import { Search, FlaskConical, Activity, Zap, ShieldCheck, Soup, GraduationCap, ChevronRight } from 'lucide-react';
import FlipCard from './ui/flip-card';

const services = [
  { 
    icon: Search, 
    title: 'Avaliação médica completa', 
    subtitle: 'Exclusividade',
    desc: 'Investigação detalhada para entender a causa dos sintomas, e não apenas tratá-los de forma superficial.',
    features: ['Investigação Profunda', 'Foco na Causa Real']
  },
  { 
    icon: FlaskConical, 
    title: 'Análise de exames laboratoriais', 
    subtitle: 'Estratégia Clínica',
    desc: 'Interpretação estratégica dos seus exames, correlacionando resultados com sintomas e seu histórico.',
    features: ['Visão Bioquímica', 'Correlação Clínica']
  },
  { 
    icon: Activity, 
    title: 'Avaliação hormonal e metabólica', 
    subtitle: 'Equilíbrio Real',
    desc: 'Foco em fadiga, ganho de peso, queda de libido, alterações de humor e perda de performance.',
    features: ['Fadiga & Libido', 'Metabolismo Ativo']
  },
  { 
    icon: Zap, 
    title: 'Protocolos de emagrecimento', 
    subtitle: 'Saúde & Peso',
    desc: 'Tratamentos seguros e individualizados, com foco em redução de gordura e preservação muscular.',
    features: ['Redução de Gordura', 'Massa Muscular']
  },
  { 
    icon: ShieldCheck, 
    title: 'Terapias hormonais e implantes', 
    subtitle: 'Otimização',
    desc: 'Indicação criteriosa e acompanhamento médico quando há necessidade de reposição hormonal.',
    features: ['Implantes Seguros', 'Acompanhamento']
  },
  { 
    icon: Soup, 
    title: 'Soroterapia e suporte metabólico', 
    subtitle: 'Vitalidade',
    desc: 'Protocolos injetáveis para suporte energético, imunológico e nutricional especializado.',
    features: ['Suporte Energético', 'Imunológico']
  },
  { 
    icon: GraduationCap, 
    title: 'Atendimento multidisciplinar', 
    subtitle: 'Performance 360',
    desc: 'Integração com nutricionista e educador físico para potencializar resultados a longo prazo.',
    features: ['Saúde 360', 'Resultados Reais']
  }
];

export const ServicesDetailed = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden" id="servicos">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Portfólio Médico</span>
              <h2 className="text-[2.6rem] md:text-7xl font-black tracking-tighter text-zinc-900 leading-[0.95] mb-10">
                Serviços <br className="hidden md:block" />
                <span className="text-gold italic font-serif leading-none">Oferecidos.</span>
              </h2>
              
              <div className="h-0.5 w-16 bg-gold/30 mb-10" />
              
              <p className="text-zinc-900 text-base md:text-lg leading-relaxed mb-10 font-bold">
                Abordagem integral focada em hormônios, metabolismo e medicina de precisão através de protocolos científicos avançados.
              </p>
              
              <button
                onClick={onOpenFilter}
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 hover:text-gold transition-colors py-4 border-b-2 border-zinc-900 hover:border-gold"
              >
                AGENDAR CONSULTA AGORA <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-2/3 flex overflow-x-auto pb-10 gap-8 md:grid md:grid-cols-2 lg:gap-8 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
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
              <div key={i} className="min-w-[280px] md:min-w-0 shrink-0">
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
