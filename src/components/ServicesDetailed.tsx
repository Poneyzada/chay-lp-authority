import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Search, FlaskConical, Activity, Zap, ShieldCheck, Soup, GraduationCap, LucideIcon } from 'lucide-react';

const services = [
  { icon: Search, title: 'Avaliação Médica Completa', desc: 'Investigação profunda da causa real dos sintomas.' },
  { icon: FlaskConical, title: 'Interpretação de Exames', desc: 'Análise estratégica correlacionando clínica e laboratório.' },
  { icon: Activity, title: 'Gestão Hormonal & Metabólica', desc: 'Tratamento de fadiga, ganho de peso e libido.' },
  { icon: Zap, title: 'Emagrecimento Médico', desc: 'Protocolos focados em gordura e massa muscular.' },
  { icon: ShieldCheck, title: 'Terapias & Implantes', desc: 'Acompanhamento especializado e indicação criteriosa.' },
  { icon: Soup, title: 'Soroterapia & Nutrologia', desc: 'Suporte energético e nutricional de alta precisão.' },
  { icon: GraduationCap, title: 'Abordagem Integral', desc: 'Integração para potencializar resultados duradouros.' }
];

const ServiceLensCard = ({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mask and ClipPath logic for the lens effect
  const clipPath = useMotionTemplate`circle(40px at ${mouseX}px ${mouseY}px)`;
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="flex flex-col gap-4">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="group relative h-24 rounded-2xl border border-zinc-100 bg-zinc-50/50 overflow-hidden cursor-none transition-all hover:shadow-lg hover:shadow-gold/5"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
      >
        {/* Base Layer: Scrolling faint data chips */}
        <div className="absolute inset-0 flex items-center px-6 pointer-events-none">
          <motion.div
            className="flex gap-4 whitespace-nowrap opacity-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {Array(6).fill(desc).map((t, i) => (
              <div key={i} className="px-3 py-1 border border-zinc-400 rounded-lg text-[10px] font-bold uppercase tracking-tighter text-zinc-500">
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Reveal Layer: High contrast sharp data chips */}
        <motion.div
          className="absolute inset-0 flex items-center px-6 bg-white z-10 pointer-events-none"
          style={{ clipPath }}
        >
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {Array(6).fill(desc).map((t, i) => (
              <div key={i} className="px-3 py-1 border border-gold/30 bg-gold/5 rounded-lg text-[10px] font-bold uppercase tracking-tighter text-gold scale-110">
                {t}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Static Icon Overlay */}
        <div className="absolute inset-y-0 left-8 flex items-center z-20 pointer-events-none">
          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-gold transition-colors duration-500">
            <Icon size={18} />
          </div>
        </div>

        {/* Custom Lens Indicator */}
        <motion.div
          className="absolute w-20 h-20 border border-gold/30 rounded-full pointer-events-none z-30 flex items-center justify-center"
          style={{ 
            x: mouseX, 
            y: mouseY,
            left: -40,
            top: -40,
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
        >
          <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(193,151,23,0.5)]" />
        </motion.div>
      </motion.div>

      {/* External Title */}
      <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-2">{title}</h3>
    </div>
  );
};

export const ServicesDetailed = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="servicos">
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
                Abordagem integral focada em hormônios, metabolismo, longevidade e medicina de precisão através de protocolos científicos.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
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
              <ServiceLensCard key={i} {...service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
