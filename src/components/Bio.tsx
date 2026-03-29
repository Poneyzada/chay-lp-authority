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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white" id="sobre">
      {/* Background Image - Full Bleed */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bioImg} 
          alt="Dra. Chayanne Médica" 
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Elegant light gradient overlay - lighter to avoid "weighing" */}
        <div className="absolute inset-0 bg-white/20 md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block underline decoration-gold/30 underline-offset-8 italic">Corpo Clínico</span>
            <h2 className="text-[2.6rem] md:text-6xl font-black tracking-tighter text-black mb-8 leading-[0.95]">
              Uma abordagem científica <br />
              <span className="text-gold italic font-serif leading-none">e individualizada.</span>
            </h2>
            
            <p className="text-black text-sm md:text-base mb-10 leading-relaxed font-black max-w-xl">
              A Dra. Chayanne Bordin formou-se em Medicina pela Universidade do Sul de Santa Catarina e direcionou sua carreira para o tratamento de distúrbios hormonais, saúde metabólica e qualidade de vida.
              <br /><br />
              Atualmente, cursa pós-graduação em Sexualidade Humana pelo CSI of Miami, ampliando sua abordagem para tratar não apenas sintomas físicos, mas também aspectos hormonais e sexuais que impactam diretamente a vida.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {credentials.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gold/20 flex items-center justify-center text-gold shrink-0 shadow-sm">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-xs font-black uppercase text-black tracking-tight leading-none">{item.title}</h4>
                    <p className="text-[9px] text-black font-black uppercase tracking-widest mt-1.5 opacity-60">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CRM Badge - Pure high contrast white box */}
      <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 p-5 md:p-6 bg-white text-black rounded-2xl shadow-xl z-20 border border-zinc-100 flex flex-col items-center text-center">
        <span className="text-gold text-[9px] font-black tracking-[0.2em] uppercase block mb-1.5 leading-none">Inscrição Profissional</span>
        <p className="font-black text-[10px] md:text-sm uppercase tracking-widest text-black">CRM-SC 23.321</p>
        <div className="h-px w-8 bg-gold/30 my-2" />
        <p className="font-black text-[10px] uppercase tracking-widest opacity-80">CRM-PR 36.452</p>
      </div>
    </section>
  );
};
