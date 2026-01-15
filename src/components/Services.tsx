import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-coffee-50 scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
          <div className="max-w-3xl">
            <span className="text-sea-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Expertise Digital</span>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-coffee-800 leading-[1.1]">
              Como transformo seu posicionamento
            </h2>
          </div>
          <p className="text-wood-700 text-lg md:text-xl max-w-sm font-light leading-relaxed border-l-2 border-sea-500 pl-6">
            Estratégias autorais que unem o rigor da narrativa com a eficácia do digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-10 md:p-12 rounded-none shadow-sm hover:shadow-2xl transition-all duration-700 group border-b-[6px] border-transparent hover:border-sea-500"
            >
              <div className="w-16 h-16 bg-sea-50 rounded-none flex items-center justify-center mb-10 text-sea-600 group-hover:bg-sea-500 group-hover:text-white transition-all duration-500">
                <service.icon size={32} />
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-6 text-coffee-900 leading-tight">{service.title}</h3>
              <p className="text-wood-700 mb-10 text-lg leading-relaxed font-light">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-8 border-t border-gray-50">
                {service.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 bg-coffee-50 text-[9px] font-bold text-wood-700 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;