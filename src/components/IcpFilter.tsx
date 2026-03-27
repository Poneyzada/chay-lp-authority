import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap, Scale, Heart, ShieldCheck, ChevronLeft, User, Mail } from 'lucide-react';

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
    message: 'Gostaria de agendar uma consulta foco em Libido e Disposição.'
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento Médico',
    desc: 'Protocolos seguros para perda de gordura.',
    icon: Scale,
    message: 'Gostaria de agendar uma avaliação para Emagrecimento Médico.'
  },
  {
    id: 'hormonal-menopausa',
    title: 'Saúde Hormonal / Menopausa',
    desc: 'Equilíbrio, implantes e reposição personalizada.',
    icon: Zap,
    message: 'Gostaria de uma avaliação para Saúde Hormonal / Menopausa.'
  },
  {
    id: 'performance-longevidade',
    title: 'Longevidade & Performance',
    desc: 'Prevenção e otimização para o dia a dia.',
    icon: ShieldCheck,
    message: 'Gostaria de informações sobre Longevidade e Performance.'
  }
];

export const IcpFilter: React.FC<IcpFilterProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<typeof options[0] | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSelect = (option: typeof options[0]) => {
    setSelectedOption(option);
    setStep(1);
  };

  const handleFinish = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!selectedOption) return;

    // Tracking for GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'icp_conversion',
        icp_type: selectedOption.id,
        icp_name: selectedOption.title,
        lead_name: name,
        lead_email: email
      });
    }

    const personalInfo = name ? `Olá Dra. Chay, me chamo ${name}. ` : 'Olá Dra. Chay! ';
    const fullMessage = `${personalInfo}${selectedOption.message}`;
    
    const whatsappUrl = `https://wa.me/5541991475510?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset and close
    setStep(0);
    setSelectedOption(null);
    setName('');
    setEmail('');
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
              <div className="flex items-center gap-4">
                {step === 1 && (
                  <button 
                    onClick={() => setStep(0)}
                    className="p-2 -ml-2 text-zinc-400 hover:text-gold transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
                <div>
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] block mb-2">
                    {step === 0 ? 'Filtro de Agendamento' : 'Personalização'}
                  </span>
                  <h2 className="text-3xl font-bold text-zinc-900 tracking-tight leading-tight font-serif italic">
                    {step === 0 ? (
                      <>Como podemos <span className="text-gold">ajudar você</span> hoje?</>
                    ) : (
                      <>Quase lá! <span className="text-gold">Como te chamamos?</span></>
                    )}
                  </h2>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-zinc-300 hover:text-zinc-600 transition-colors"
                aria-label="Frequentar"
              >
                <X size={24} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div 
                  key="step0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 gap-4"
                >
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
                </motion.div>
              ) : (
                <motion.form 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleFinish}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                      <input 
                        type="text" 
                        required
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-14 pr-6 py-5 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white transition-all font-medium text-zinc-900 placeholder:text-zinc-300"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                      <input 
                        type="email" 
                        placeholder="E-mail (Opcional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-14 pr-6 py-5 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white transition-all font-medium text-zinc-900 placeholder:text-zinc-300"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-6 bg-brand-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-gold transition-all shadow-xl flex items-center justify-center gap-3 group"
                  >
                    AGENDAR PELO WHATSAPP
                    <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>

                  <p className="text-center text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                    🛡️ Seus dados estão seguros conosco.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="mt-8 text-center text-[10px] text-zinc-300 uppercase font-black tracking-widest">
              Atendimento exclusivo Dra. Chayanne Calegari
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
