import React from 'react';
import { BookOpen, Star, ArrowRight, ShoppingCart } from 'lucide-react';
import Button from './Button';
import { BOOK_CONTENT } from '../constants';

const BookFeature: React.FC = () => {
  return (
    <section id="livro" className="py-24 md:py-32 bg-coffee-900 relative overflow-hidden scroll-mt-24">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Book Visuals */}
          <div className="order-2 lg:order-1 flex justify-center perspective-1000">
            <div className="relative group">
              <div className="relative w-64 sm:w-80 aspect-[2/3] transform transition-all duration-1000 hover:rotate-y-12 hover:scale-105">
                <div className="absolute inset-0 bg-black/60 blur-3xl transform translate-x-8 translate-y-8 opacity-60"></div>

                <div className="absolute inset-0 bg-white shadow-2xl rounded-r-none overflow-hidden">
                   <img 
                     src="/book.jpg" 
                     alt="Capa do livro Katherine" 
                     className="w-full h-full object-cover"
                   />
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-sea-500 text-white p-4 rounded-none shadow-xl rotate-[-10deg] font-bold text-[9px] uppercase tracking-[0.3em] border-2 border-coffee-900">
                Obra<br/>Destaque
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-white space-y-10">
            <div className="inline-flex items-center space-x-4">
              <span className="h-px w-10 bg-sea-500"></span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-sea-500 uppercase">{BOOK_CONTENT.badge}</span>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                {BOOK_CONTENT.title}
              </h2>
              <p className="text-xl md:text-2xl text-sea-100 font-serif italic border-l-4 border-sea-500 pl-6 leading-relaxed">
                {BOOK_CONTENT.subtitle}
              </p>
              <p className="text-lg text-wood-100 font-light leading-relaxed max-w-lg opacity-90">
                {BOOK_CONTENT.description}
              </p>
            </div>

            <div className="flex gap-12 border-y border-white/10 py-8">
              {BOOK_CONTENT.details.map((detail, idx) => (
                <div key={idx}>
                  <span className="block text-[10px] text-sea-500 uppercase tracking-[0.25em] mb-2 font-bold">{detail.label}</span>
                  <span className="font-serif text-xl text-white font-medium">{detail.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button variant="sea" className="group px-8 py-4 text-[11px] uppercase tracking-[0.25em] rounded-none">
                {BOOK_CONTENT.cta}
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-[11px] uppercase tracking-[0.25em] rounded-none">
                {BOOK_CONTENT.ctaSecondary}
                <ShoppingCart className="ml-3 w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookFeature;