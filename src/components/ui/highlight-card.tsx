"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ComponentProps {
  title: string;
  subtitle?: string;
  description: string[];
  footer?: string;
  icon?: ReactNode;
}

const HighlightCard: FC<ComponentProps> = ({ title, subtitle, description, footer, icon }) => {
  return (
    <div className="group cursor-default w-full h-auto min-h-[320px] lg:min-h-[460px]">
      <Card className="text-black rounded-[2.5rem] border-2 border-zinc-100 bg-white shadow-soft relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gold/30 w-full h-full">
        
        {/* Simple Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 relative z-10 flex flex-col items-center text-center h-full">
          {/* Static Icon - Restored Gold Branding */}
          <div className="relative mb-4 md:mb-6">
            <div className="p-4 rounded-full border-2 border-gold/10 bg-zinc-50 flex items-center justify-center text-gold shadow-sm transition-transform duration-500 group-hover:scale-110">
              <div className="transform transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          {/* Title - Optimized for long phrases */}
          <h3 className="mb-3 text-lg md:text-xl font-bold tracking-tighter text-black uppercase font-serif italic break-words w-full leading-[1.1]">
            {title}
          </h3>

          {subtitle && (
            <p className="text-black text-[10px] md:text-[11px] font-bold italic opacity-80 mb-3 whitespace-pre-line leading-tight">
              {subtitle}
            </p>
          )}

          <div className="space-y-2 mb-4 flex-grow flex flex-col justify-center">
            {description.map((line, idx) => (
              <div key={idx} className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-1 h-1 rounded-full bg-black shrink-0" />
                <p className="text-black text-[10px] md:text-[11px] leading-[1.2] font-bold tracking-tight italic text-left">
                  {line}
                </p>
              </div>
            ))}
          </div>

          {footer && (
            <p className="text-black text-[9px] md:text-[10px] font-bold italic opacity-70 mt-1 mb-3 leading-tight">
              {footer}
            </p>
          )}

          {/* Bottom highlight */}
          <div className="mt-auto w-16 h-1 bg-gold rounded-full transition-all duration-700 group-hover:w-full"></div>

          {/* Simple Static Dots - Contrast without weighing */}
          <div className="flex space-x-1 mt-6">
            <div className="w-1 h-1 bg-gold rounded-full opacity-60 group-hover:bg-black group-hover:opacity-100 transition-all" />
            <div className="w-1 h-1 bg-black rounded-full opacity-20" />
            <div className="w-1 h-1 bg-black rounded-full opacity-5" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HighlightCard;
