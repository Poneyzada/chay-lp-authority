import React from 'react';
import { motion } from 'framer-motion';
import bioImg from '../assets/chay-bio.webp';

export const Bio = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-white" id="sobre">
      {/* Background Image - Full Bleed Cinematic */}
      <div className="absolute inset-0 z-0">
        {/* MOBILE: object-cover framed perfectly without cutting face */}
        <img
          src={bioImg}
          alt="Dra. Chayanne Bordin"
          width={800}
          height={1000}
          loading="lazy"
          decoding="async"
          className="md:hidden w-full h-full object-cover grayscale-[10%] opacity-90"
          style={{ objectPosition: 'center 28%' }}
        />

        {/* DESKTOP: Zoomed & Blended - Cola na dobra e some no branco */}
        <div
          className="hidden md:flex absolute inset-y-0 right-0 w-[55%] items-end overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 65%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 65%, transparent 100%)'
          }}
        >
          <img
            src={bioImg}
            alt="Dra. Chayanne Bordin"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale-[5%] contrast-[1.05] brightness-[1.02] scale-[1.1]"
            style={{
              objectPosition: '65% 15%',
              filter: 'drop-shadow(-20px 0 50px white)'
            }}
          />
        </div>

        {/* Multi-stop smooth white wash */}
        <div className="absolute inset-0 bg-white/20 md:hidden" />
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 70%)' }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] font-bold tracking-[0.6em] uppercase mb-6 md:mb-8 block underline decoration-gold/30 underline-offset-8 italic">Manifesto Médico</span>

            <h2 className="text-[2.2rem] md:text-7xl font-bold tracking-tighter text-black mb-6 md:mb-10 uppercase italic">
              Sobre a <br />
              <span className="text-gold font-serif not-italic">Dra.</span> Chayanne <br />
              <span className="text-gold italic font-serif">Bordin.</span>
            </h2>

            <div className="h-px w-32 bg-gold/30 mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl bg-white/40 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-white/60 shadow-xl">
              <p className="text-lg md:text-2xl leading-[1.2] font-bold italic tracking-tighter">
                Atendimento médico focado em <span className="text-gold drop-shadow-sm border-b border-gold/30">hormônios</span>, metabolismo e longevidade.
              </p>

              <p className="text-black text-xs md:text-md leading-relaxed font-bold tracking-widest opacity-90">
                A Dra. Chayanne Bordin formou-se em Medicina pela Universidade do Sul de Santa Catarina e direcionou sua carreira para o tratamento de distúrbios hormonais, saúde metabólica e qualidade de vida.
              </p>

              <div className="space-y-6 border-l-2 border-gold/40 pl-6 md:pl-8 mt-4">
                <p className="text-black text-[10px] md:text-xs font-bold tracking-[0.2em] leading-relaxed">
                  Realizou especialização em <span className="text-gold drop-shadow-sm">Endocrinologia</span> pelo IPEMED em São Paulo e em Nutrologia pela <span className="text-gold drop-shadow-sm">USP</span>, aprofundando-se em obesidade, metabolismo e terapias hormonais.
                </p>
                <p className="text-black text-[10px] md:text-xs font-bold tracking-[0.2em] leading-relaxed">
                  Atualmente, cursa pós-graduação em Sexualidade Humana pelo <span className="text-gold drop-shadow-sm">CSI of Miami</span>, ampliando sua abordagem para tratar não apenas sintomas físicos, mas também aspectos hormonais e sexuais que impactam diretamente a qualidade de vida.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE CRM - Absolute to avoid pushing the main box up */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="lg:hidden absolute bottom-4 right-6 z-30 p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-white/20 text-right"
      >
        <span className="text-gold text-[7px] font-bold tracking-[0.2em] uppercase block mb-0.5 leading-none italic">Inscrição Profissional</span>
        <p className="font-bold text-[9px] uppercase tracking-tighter text-black tabular-nums">CRM-SC 22.074 | CRM-SP 276.904</p>
      </motion.div>

      {/* CRM Badge - Elite floating box (Desktop) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 right-10 p-10 bg-white/90 backdrop-blur-md text-black rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-20 border border-zinc-100 hidden lg:flex flex-col items-center text-center"
      >
        <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-4 leading-none italic">Inscrição Profissional</span>
        <p className="font-bold text-xl uppercase tracking-tighter text-black tabular-nums">CRM-SC 22.074 | CRM-SP 276.904</p>
      </motion.div>
    </section>
  );
};
