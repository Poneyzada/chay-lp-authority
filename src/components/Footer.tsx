import React from 'react';
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-10 md:py-16 bg-white border-t border-zinc-100">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          <div className="col-span-1 lg:col-span-2 text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter text-zinc-900 mb-6 font-serif uppercase italic leading-none">
              Dra. Chayanne <br />
              <span className="text-gold not-italic font-black">Bordin Calegari</span>
            </h2>
            <p className="text-zinc-900 text-xs md:text-sm max-w-sm mb-8 leading-relaxed mx-auto md:mx-0 font-bold italic">
              "Resgatando sua saúde e vitalidade através de uma abordagem integrativa e humanizada."
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center text-zinc-900 hover:text-gold hover:border-gold/30 hover:soft-shadow transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 mb-8 underline decoration-gold/30 underline-offset-8">Contato</h4>
            <div className="space-y-4">
               <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-zinc-900 text-xs font-black">
                  <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-center md:text-left">Florianópolis | São Paulo | Cuiabá<br />Balneário Camboriú | Itapema</span>
               </div>
               <div className="flex flex-col md:flex-row items-center gap-3 text-zinc-900 text-xs font-black">
                  <Phone size={14} className="text-gold shrink-0" />
                  <span>(41) 99147-5510</span>
               </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 mb-8 underline decoration-gold/30 underline-offset-8">Navegação</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'Metodologia', 'Sobre', 'Agendamento'].map((item, i) => (
                <a key={i} href="#" className="text-zinc-900 text-[10px] md:text-xs hover:text-gold transition-colors font-black uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[9px] text-zinc-900 uppercase tracking-widest font-black">
            © 2026 Dra. Chayanne Bordin Calegari - CRM/SC 23.321 | CRM/PR 36.452
          </p>
          <p className="text-[9px] text-zinc-900 uppercase tracking-[0.2em] font-black">
            Desenvolvido por <span className="text-gold">Xcompany</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
