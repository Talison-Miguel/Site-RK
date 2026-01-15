import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white border-b border-gray-100 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d1b18] tracking-tight">
            Impacto Real
          </h2>
          <div className="h-px bg-[#2d1b18]/10 flex-grow md:ml-8 mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="relative flex flex-col group">
              {/* Quote Icon */}
              <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Quote size={32} className="text-[#00acc1] fill-[#00acc1]" />
              </div>

              {/* Quote Text */}
              <blockquote className="flex-grow mb-8">
                <p className="font-serif text-lg md:text-xl text-[#5d4037] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <cite className="not-italic block">
                  <span className="block font-bold text-[#2d1b18] text-base mb-1">
                    {item.author}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8d6e63] font-bold">
                    {item.role}
                  </span>
                </cite>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;