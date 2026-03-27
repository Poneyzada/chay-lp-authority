import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Microscope, BookOpen } from 'lucide-react';
import bioImg from '../assets/chay-bio.jpg';

const credentials = [
  { icon: GraduationCap, title: 'Formação em Medicina', institution: 'UNISUL' },
  { icon: GraduationCap, title: 'Pós Graduação em Nutrologia', institution: 'IPEMED' },
  { icon: Award, title: 'Pós em Longevidade Saudável', institution: 'São Paulo' },
  { icon: Microscope, title: 'Andrologia & Medicina de Precisão', institution: 'USP' },
  { icon: BookOpen, title: 'CSI MIAMI', institution: 'International Training' }
];

export const Bio = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="sobre">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden soft-shadow border-8 border-soft-zinc/30"
            >
              <img 
                src={bioImg} 
                alt="Dra. Chayanne Médica" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Signature detail */}
            <div className="absolute -bottom-6 -right-6 p-8 bg-brand-black text-white rounded-3xl shadow-2xl z-20 hover:scale-105 transition-transform">
              <span className="text-gold text-[10px] uppercase font-black tracking-widest block mb-1">Registro Médico</span>
              <p className="font-bold text-lg">CRM-SC 23.321</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Corpo Clínico</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-8 leading-[0.95]">
                Uma abordagem científica <br />
                <span className="text-gold italic font-serif">e individualizada.</span>
              </h2>
              
              <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
                A saúde real não é a ausência de doença, mas o equilíbrio pleno entre hormônios, metabolismo e estilo de vida. Minha missão é traduzir a ciência de precisão em resultados práticos para que você recupere o controle sobre seu corpo e sua vitalidade.
              </p>

              <div className="space-y-6">
                {credentials.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-gold group-hover:bg-soft-zinc transition-colors shrink-0">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase text-zinc-900 tracking-tight">{item.title}</h4>
                      <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
