import React from 'react';
import { MessageCircle, Linkedin, Instagram, ArrowUpRight, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-white pt-24 pb-12 border-t border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Brand Info */}
          <div className="lg:col-span-5 space-y-8 pt-4">
            <h2 className="font-serif text-3xl font-black text-[#2d1b18] tracking-tight">
              R.RODRIGUES
            </h2>
            
            <p className="text-[#8d6e63] font-light text-lg leading-relaxed max-w-sm">
              Conectando narrativas autênticas ao mercado global através de estratégia, escrita e design.
            </p>
            
            <div className="flex gap-4 pt-4">
              {[
                { Icon: FaWhatsapp, href: 'https://wa.me/seu-numero' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map((item, i) => (
                <a
                  href={item.href} 
                  key={i} 
                  className="w-12 h-12 border border-gray-200 flex items-center justify-center text-[#2d1b18] hover:border-sea-500 hover:text-sea-500 transition-all rounded-sm group"
                >
                  <item.Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#faf9f6] p-10 md:p-14 shadow-sm">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2d1b18] mb-12 flex items-center gap-3">
                Vamos conversar?
                <ArrowUpRight className="text-sea-500" size={28} strokeWidth={2.5} />
              </h3>
              
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#a1887f] uppercase tracking-[0.25em] block">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-sea-500 outline-none text-base text-[#2d1b18] transition-all placeholder:text-gray-300 font-light"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#a1887f] uppercase tracking-[0.25em] block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-sea-500 outline-none text-base text-[#2d1b18] transition-all placeholder:text-gray-300 font-light"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <label className="text-[10px] font-bold text-[#a1887f] uppercase tracking-[0.25em] block">Sua Mensagem</label>
                  <textarea 
                    rows={3}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-sea-500 outline-none text-base text-[#2d1b18] transition-all resize-none placeholder:text-gray-300 font-light"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button 
                    className="px-8 py-4 bg-[#3e2723] hover:bg-black text-white font-bold text-[10px] uppercase tracking-[0.25em] transition-all shadow-md hover:shadow-lg active:scale-95 rounded-sm"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-gray-100 flex justify-center items-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5d4037] text-center">
            © {new Date().getFullYear()} Rickelmy Rodrigues. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;