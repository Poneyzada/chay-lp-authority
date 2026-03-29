"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ComponentProps {
  title: string;
  description: string[];
  icon?: ReactNode;
}

const HighlightCard: FC<ComponentProps> = ({ title, description, icon }) => {
  return (
    <div className="group cursor-default w-full h-full lg:min-h-[480px]">
      <Card className="text-zinc-900 rounded-[3rem] border-2 border-zinc-100 bg-white shadow-soft relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gold/30 w-full h-full">
        
        {/* Simple Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 relative z-10 flex flex-col items-center text-center h-full">
          {/* Static Icon */}
          <div className="relative mb-8 md:mb-10">
            <div className="p-5 md:p-6 rounded-full border-2 border-gold/10 bg-zinc-50 flex items-center justify-center text-gold shadow-sm transition-transform duration-500 group-hover:scale-110">
              <div className="transform transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          {/* Title - Fixed overflow with break-words and adjusted mobile font size */}
          <h3 className="mb-6 text-xl md:text-3xl font-black tracking-tighter text-black uppercase font-serif italic break-words w-full">
            {title}
          </h3>

          <div className="space-y-4 max-w-sm mb-10 flex-grow">
            {description.map((line, idx) => (
              <div key={idx} className="flex items-center gap-3 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <p className="text-black text-[14px] md:text-base leading-relaxed font-black uppercase italic">
                  {line}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom highlight */}
          <div className="mt-auto w-20 h-1.5 bg-gold rounded-full transition-all duration-700 group-hover:w-full"></div>

          {/* Simple Static Dots - Forced Black Contrast */}
          <div className="flex space-x-2 mt-8">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <div className="w-1.5 h-1.5 bg-black rounded-full opacity-40" />
            <div className="w-1.5 h-1.5 bg-black rounded-full opacity-10" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HighlightCard;
