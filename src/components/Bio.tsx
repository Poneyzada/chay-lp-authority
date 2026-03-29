import React from 'react';
import { motion } from 'framer-motion';
import bioImg from '../assets/chay-bio.jpg';

export const Bio = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-white" id="sobre">
      {/* Background Image - Full Bleed Cinematic */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bioImg} 
          alt="Dra. Chayanne Bordin" 
          className="w-full h-full object-cover object-[center_25%] md:object-[center_35%] grayscale-[20%] opacity-90 transition-all duration-1000"
        />
        {/* Elite light gradient overlay - editorial feel */}
        <div className="absolute inset-0 bg-white/10 md:bg-gradient-to-r md:from-white/100 md:via-white/60 md:to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 py-32 md:py-60">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] font-bold tracking-[0.6em] uppercase mb-12 block underline decoration-gold/30 underline-offset-8 italic">Manifesto Médico</span>
            
            <h2 className="text-[3.2rem] md:text-9xl font-bold tracking-tighter text-black mb-16 leading-[0.85] uppercase italic">
              Sobre a <br />
              <span className="text-gold font-serif not-italic">Dra.</span> Chayanne <br />
              <span className="text-gold italic font-serif">Bordin.</span>
            </h2>
            
            <div className="h-px w-32 bg-gold/30 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-xl">
              <p className="text-black text-xl md:text-3xl leading-[1.2] font-bold uppercase italic tracking-tighter">
                Atendimento médico focado em <span className="text-gold drop-shadow-sm border-b border-gold/30">hormônios</span>, metabolismo e longevidade.
              </p>
              
              <p className="text-black text-sm md:text-lg leading-relaxed font-bold uppercase tracking-widest opacity-90">
                A Dra. Chayanne Bordin formou-se em Medicina pela Universidade do Sul de Santa Catarina e direcionou sua carreira para o tratamento de distúrbios hormonais, saúde metabólica e qualidade de vida.
              </p>

              <div className="space-y-6 border-l-2 border-gold/40 pl-6 md:pl-8 mt-4">
                <p className="text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                  Realizou especialização em <span className="text-gold drop-shadow-sm">Endocrinologia</span> pelo IPEMED em São Paulo e em Nutrologia pela <span className="text-gold drop-shadow-sm">USP</span>, aprofundando-se em obesidade, metabolismo e terapias hormonais.
                </p>
                <p className="text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                  Atualmente, cursa pós-graduação em Sexualidade Humana pelo <span className="text-gold drop-shadow-sm">CSI of Miami</span>, ampliando sua abordagem para tratar não apenas sintomas físicos, mas também aspectos hormonais e sexuais que impactam diretamente a qualidade de vida.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CRM Badge - Elite floating box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 right-10 p-10 bg-white/90 backdrop-blur-md text-black rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-20 border border-zinc-100 hidden lg:flex flex-col items-center text-center"
      >
        <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-4 leading-none italic">Inscrição Profissional</span>
        <p className="font-bold text-xl uppercase tracking-tighter text-black tabular-nums">CRM-SC 23.321</p>
        <div className="h-px w-12 bg-gold/30 my-6" />
        <p className="font-bold text-xs uppercase tracking-[0.3em] opacity-40">CRM-PR 36.452</p>
      </motion.div>
    </section>
  );
};
