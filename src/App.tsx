import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-between selection:bg-gold/30 relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-900/60 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Bar */}
      <header className="p-8 md:p-12 relative z-10 flex justify-between items-center max-w-6xl mx-auto w-full">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-500"
        >
          [ 404 ]
        </motion.span>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800/80 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
          Página Indisponível
        </motion.div>
      </header>

      {/* Main Quote Content */}
      <main className="container max-w-4xl mx-auto px-6 py-12 relative z-10 text-center md:text-left my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-block">
            <span className="text-gold text-xs md:text-sm font-mono tracking-[0.4em] uppercase block mb-2">
              Mensagem
            </span>
            <div className="h-0.5 w-12 bg-gold/40 mx-auto md:mx-0" />
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-4xl lg:text-[2.6rem] font-serif leading-[1.35] tracking-tight text-zinc-200">
            <span className="text-zinc-400">“</span>Eu não sou anjo, mas não sou demônio <br className="hidden sm:block" />
            Que te causa insônia e <span className="text-gold italic font-normal">te vende um sonho</span> <span className="text-zinc-500 font-sans text-sm md:text-xl font-normal">(eu não)</span> <br className="hidden sm:block" />
            Olha, só não confunda com pegar no colo <br className="hidden sm:block" />
            E te vender o óbvio, ou um falso código, <br className="hidden sm:block" />
            ou motivos mornos <span className="text-zinc-500 font-sans text-sm md:text-xl font-normal">(eu não)</span><span className="text-zinc-400">”</span>
          </blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6"
          >
            <p className="text-lg md:text-2xl font-serif italic text-gold font-bold tracking-wide">
              Boa sorte!
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-8 md:p-12 relative z-10 max-w-6xl mx-auto w-full text-center md:text-left">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-600">
          Link desativado pela equipe de desenvolvimento.
        </p>
      </footer>
    </div>
  );
}

export default App;

