import React, { useState, useEffect } from 'react';

interface DotCardProps {
  target?: number;
  duration?: number;
  label?: string;
}

export default function DotCard({ target = 5500, duration = 1500, label = "Pacientes Atendidos" }: DotCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: any;
    let timeout: any;

    const startAnimation = () => {
      let current = 0;
      const end = target;
      const increment = Math.ceil(end / (duration / 30));
      
      interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(interval);
          // Wait 3 seconds at the top before restarting
          timeout = setTimeout(() => {
            setCount(0);
            startAnimation();
          }, 3000);
        }
        setCount(current);
      }, 30);
    };

    startAnimation();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [target, duration]);

  const display = count < 1000 ? count : `${(count / 1000).toFixed(1)}k`;

  return (
    <div className="outer relative w-full h-full flex items-center justify-center">
      <div className="dot absolute w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_#c19717] z-10 animate-moveDot"></div>
      <div className="card relative w-[200px] h-[140px] bg-white border border-gold/10 rounded-[2.5rem] flex flex-col items-center justify-center soft-shadow overflow-hidden group hover:border-gold/30 transition-colors">
        <div className="ray absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent z-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="text text-4xl font-black text-zinc-900 z-10 font-serif leading-none">{display}+</div>
        <div className="label text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em] mt-2 z-10 text-center px-4">{label}</div>
        
        {/* Decorative Internal Lines */}
        <div className="absolute top-3 left-3 right-3 h-px bg-gold/10"></div>
        <div className="absolute bottom-3 left-3 right-3 h-px bg-gold/10"></div>
        <div className="absolute top-3 bottom-3 left-3 w-px bg-gold/10"></div>
        <div className="absolute top-3 bottom-3 right-3 w-px bg-gold/10"></div>
      </div>
    </div>
  );
}
