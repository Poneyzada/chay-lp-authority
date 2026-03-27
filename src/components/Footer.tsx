import React from 'react';
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-zinc-100">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6 font-serif">
              Dra. Chayanne <br />
              <span className="text-gold italic">Bordin Calegari</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm mb-8 leading-relaxed">
              Resgatando sua saúde e vitalidade através de uma abordagem integrativa e humanizada.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold/30 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 underline decoration-gold/30 underline-offset-8">Contato</h4>
            <div className="space-y-4">
               <div className="flex items-start gap-3 text-zinc-500 text-xs">
                  <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                  <span>Rua Comendador Araújo, 499<br />Batel, Curitiba - PR</span>
               </div>
               <div className="flex items-center gap-3 text-zinc-500 text-xs text-xs">
                  <Phone size={14} className="text-gold shrink-0" />
                  <span>(41) 99147-5510</span>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 underline decoration-gold/30 underline-offset-8">Navegação</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'Metodologia', 'Sobre', 'Agendamento'].map((item, i) => (
                <a key={i} href="#" className="text-zinc-400 text-xs hover:text-gold transition-colors font-bold uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">
            © 2026 Dra. Chayanne - CRM/PR 36.452
          </p>
          <p className="text-[9px] text-zinc-300 uppercase tracking-[0.2em] font-medium">
            Desenvolvido por <span className="text-zinc-400">Xcompany</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
