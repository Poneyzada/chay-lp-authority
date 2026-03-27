import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap, User, UserPlus, Scale, Heart, ShieldCheck } from 'lucide-react';

interface IcpFilterProps {
  isOpen: boolean;
  onClose: () => void;
}

const options = [
  {
    id: 'libido-energia',
    title: 'Libido & Disposição',
    desc: 'Recupere sua energia motora e vida sexual.',
    icon: Heart,
    message: 'Olá! Gostaria de agendar uma consulta foco em Libido e Disposição.'
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento Médico',
    desc: 'Protocolos seguros para perda de gordura.',
    icon: Scale,
    message: 'Olá! Gostaria de agendar uma avaliação para Emagrecimento Médico.'
  },
  {
    id: 'hormonal-menopausa',
    title: 'Saúde Hormonal / Menopausa',
    desc: 'Equilíbrio, implantes e reposição personalizada.',
    icon: Zap,
    message: 'Olá! Gostaria de uma avaliação para Saúde Hormonal / Menopausa.'
  },
  {
    id: 'performance-longevidade',
    title: 'Longevidade & Performance',
    desc: 'Prevenção e otimização para o dia a dia.',
    icon: ShieldCheck,
    message: 'Olá! Gostaria de informações sobre Longevidade e Performance.'
  }
];

export const IcpFilter: React.FC<IcpFilterProps> = ({ isOpen, onClose }) => {
  const handleSelect = (option: typeof options[0]) => {
    // Tracking for GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'icp_select',
        icp_type: option.id,
        icp_name: option.title
      });
    }

    const whatsappUrl = `https://wa.me/5541991475510?text=${encodeURIComponent(option.message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden border border-zinc-100"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] block mb-2">Filtro de Agendamento</span>
                <h2 className="text-3xl font-bold text-zinc-900 tracking-tight leading-tight font-serif italic">
                  Como podemos <span className="text-gold">ajudar você</span> hoje?
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-zinc-300 hover:text-zinc-600 transition-colors"
                aria-label="Frequentar"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className="group relative flex items-center gap-6 p-6 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:border-gold/30 hover:soft-shadow transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:text-gold transition-colors shrink-0">
                    <option.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-zinc-900 mb-1 uppercase tracking-tight">{option.title}</h3>
                    <p className="text-zinc-400 text-xs italic font-medium leading-relaxed">{option.desc}</p>
                  </div>
                  <Send className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-gold" size={16} />
                </button>
              ))}
            </div>

            <p className="mt-8 text-center text-[10px] text-zinc-300 uppercase font-black tracking-widest">
              Atendimento exclusivo Dra. Chayanne Bordin
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
