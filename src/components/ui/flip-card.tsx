'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  icon?: any;
  stepNumber?: string;
  onClickAction?: () => void;
}

export default function FlipCard({
  title = 'Metodologia',
  subtitle = 'Abordagem Integrativa',
  description = 'Investigamos a fundo sua saúde para restaurar sua vitalidade plena.',
  features = ['Diferencial 1', 'Diferencial 2', 'Diferencial 3'],
  color = '#c09e3f',
  icon: Icon = Zap,
  stepNumber = '01',
  onClickAction
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        ['--primary' as any]: color,
      }}
      className="group relative h-[340px] md:h-[360px] w-full min-w-[300px] md:min-w-[320px] [perspective:2000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700 ease-in-out',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-[2.5rem]',
            'bg-white border-2 border-zinc-100',
            'shadow-xl shadow-zinc-200/50',
            'transition-all duration-700',
            'group-hover:border-primary/30',
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Background Decorative Element */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/5 blur-3xl rounded-full" />

          {/* Step Number Badge */}
          <div className="absolute top-8 left-8">
            <span className="text-zinc-200 text-6xl font-bold italic tracking-tighter opacity-50 font-serif">
              {stepNumber}
            </span>
          </div>

          {/* Central Icon */}
          <div className="absolute inset-0 flex items-center justify-center -translate-y-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-gold shadow-sm transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-gold/10 rounded-[1.5rem] blur-xl animate-pulse -z-10" />
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-10 left-0 right-0 px-8 text-center">
            <h3 className="text-2xl leading-none font-bold tracking-tight text-black font-serif italic mb-3">
              {title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-gold group-hover:text-black transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Toque para detalhes</span>
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back of card (LIGHT THEME - NO BLACK) */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-[2.5rem] p-6 md:p-8',
            'bg-white border-2 border-gold/30',
            'shadow-2xl shadow-gold/5',
            'flex flex-col',
            'transition-all duration-700',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          <div className="relative z-10 flex-1 flex flex-col">
             <div className="mb-6">
               <span className="text-gold text-[10px] uppercase font-bold tracking-widest block mb-2">{subtitle}</span>
               <h3 className="text-2xl font-bold text-zinc-900 font-serif italic leading-none truncate-titles">
                 {title}
               </h3>
             </div>

             <p className="text-black text-[13px] leading-relaxed mb-8 italic font-medium">
               "{description}"
             </p>

            <div className="space-y-4 flex-grow">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 text-zinc-900 transition-all duration-500"
                  style={{
                    transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 100}ms`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[11px] font-bold tracking-wider">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-zinc-100">
              <div 
                className="flex items-center justify-between text-gold group-hover:text-gold-dark transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onClickAction) onClickAction();
                }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Saiba Mais</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
