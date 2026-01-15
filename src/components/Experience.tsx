import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="jornada" className="py-24 md:py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <div className="inline-block px-6 py-2 bg-sea-50 text-sea-600 rounded-none text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border border-sea-100 shadow-sm">Jornada Profissional</div>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-coffee-800 mb-6 tracking-tight">
            Caminhos & Conquistas
          </h2>
          <p className="text-wood-600 text-xl font-light max-w-2xl mx-auto">
            Uma trajetória forjada na resiliência do interior mineiro e expandida pelo mundo.
          </p>
        </div>

        <div className="relative border-l border-coffee-200 ml-4 md:ml-0 space-y-20 max-w-4xl mx-auto">
          {EXPERIENCE.map((item, index) => (
            <div key={item.id} className="relative flex flex-col md:flex-row gap-10 md:items-start pl-12 md:pl-0 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 md:left-auto md:right-1/2 md:-mr-[9px] w-[18px] h-[18px] rounded-full bg-white border-4 border-coffee-200 group-hover:border-sea-500 z-10 transition-all duration-700"></div>
              
              {/* Desktop Left */}
              <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block pt-0.5">
                <span className="font-serif font-bold text-coffee-800 text-3xl block mb-1">{item.period}</span>
                <span className="text-[10px] font-bold text-sea-600 uppercase tracking-[0.3em]">{item.company}</span>
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 md:pl-16">
                <div className="md:hidden mb-4">
                   <span className="font-serif font-bold text-coffee-800 text-2xl block mb-1">{item.period}</span>
                   <span className="text-[10px] font-bold text-sea-600 uppercase tracking-[0.3em]">{item.company}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-coffee-900 mb-4 group-hover:text-sea-600 transition-colors duration-500 leading-tight tracking-tight">{item.role}</h3>
                <p className="text-wood-700 text-lg leading-relaxed font-light mb-6">
                  {item.description}
                </p>
                <div>
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-none text-[9px] font-bold uppercase tracking-[0.25em] shadow-sm ${
                    item.type === 'leadership' ? 'bg-coffee-900 text-white' : 
                    item.type === 'education' ? 'bg-sea-50 text-sea-700 border border-sea-100' : 
                    'bg-coffee-50 text-coffee-800 border border-coffee-100'
                  }`}>
                    {item.type === 'leadership' ? 'Liderança Global' : item.type === 'education' ? 'Educação Tech' : 'Execução'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;