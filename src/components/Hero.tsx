import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 md:py-32 overflow-hidden bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-coffee-900 leading-[1.1] tracking-tight">
                {HERO_CONTENT.headline}
              </h1>
              <p className="text-lg md:text-xl text-wood-600 max-w-lg leading-relaxed font-light">
                {HERO_CONTENT.subheadline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#servicos">
                <Button className="w-full sm:w-auto px-10 py-5 bg-coffee-900 hover:bg-black text-white rounded-none border-none flex items-center justify-center group text-[11px] uppercase tracking-[0.25em] shadow-xl active:scale-95 transition-transform">
                  {HERO_CONTENT.cta}
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#sobre">
                <Button variant="outline" className="w-full sm:w-auto px-10 py-5 border-coffee-200 text-coffee-800 rounded-none bg-transparent hover:bg-coffee-100 flex items-center justify-center text-[11px] uppercase tracking-[0.25em]">
                  Minha história
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative animate-in fade-in zoom-in duration-1000 mt-16">
            <div className="relative aspect-[4/5] mx-auto group">
              {/* Decorative Frame Behind */}
              <div className="absolute -inset-5 border border-coffee-200 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-1000"></div>
              
              <img 
                src="/rk.jpeg" 
                alt="Rickelmy Rodrigues - Retrato Autoral" 
                className="w-full h-full object-cover shadow-xl grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000 brightness-[0.98] group-hover:brightness-100"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border-l-4 border-sea-500 max-w-[200px] hidden md:block">
                <p className="text-[10px] font-bold text-coffee-900 uppercase tracking-[0.25em] leading-relaxed">
                  Rickelmy Rodrigues<br/>
                  <span className="text-sea-500 mt-1.5 block opacity-90">Estrategista & Copywriter</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;