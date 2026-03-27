import React from 'react';
import { motion } from 'framer-motion';
import { Search, FlaskConical, Activity, Zap, ShieldCheck, Soup, GraduationCap } from 'lucide-react';

const services = [
  { icon: Search, title: 'Avaliação Médica Completa', desc: 'Investigação profunda da causa real dos sintomas.' },
  { icon: FlaskConical, title: 'Interpretação de Exames', desc: 'Análise estratégica correlacionando clínica e laboratório.' },
  { icon: Activity, title: 'Gestão Hormonal & Metabólica', desc: 'Tratamento de fadiga, ganho de peso e queda de libido.' },
  { icon: Zap, title: 'Emagrecimento Médico', desc: 'Protocolos seguros focados em gordura e massa muscular.' },
  { icon: ShieldCheck, title: 'Terapias Hormonais & Implantes', desc: 'Indicação criteriosa e acompanhamento especializado.' },
  { icon: Soup, title: 'Soroterapia & Nutrologia', desc: 'Suporte energético e nutricional de alta precisão.' },
  { icon: GraduationCap, title: 'Abordagem Multidisciplinar', desc: 'Integração com parceiros para potencializar resultados.' }
];

export const ServicesDetailed = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-10"
            >
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Portfólio Médico</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-none mb-10">
                Serviços <br />
                <span className="text-gold italic font-serif">Oferecidos.</span>
              </h2>
              <div className="h-0.5 w-20 bg-zinc-900 mb-8" />
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Abordagem integral focada em hormônios, metabolismo, longevidade e medicina de precisão.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
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
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-300 group-hover:text-gold group-hover:scale-110 transition-all shrink-0">
                    <service.icon size={20} />
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform">
                    <h3 className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-widest">{service.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed uppercase font-medium">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
