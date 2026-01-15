import React from 'react';
import { Book } from 'lucide-react';
import { ABOUT_CONTENT, CERTIFICATIONS, PURPOSE_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white scroll-mt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Ajustei o gap para lg:gap-20 para acomodar melhor a divisão 50/50 */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
      
      {/* ALTERAÇÃO 1: Mudei de lg:col-span-5 para lg:col-span-6.
          Isso faz essa coluna ocupar metade da tela em desktops.
      */}
      <div className="lg:col-span-6 grid grid-cols-2 gap-6">
        
        {/* Image 1: Inspiração */}
        <div className="relative group mt-12">
          <img 
            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Nostalgia e Literatura" 
            className="shadow-xl w-full aspect-[4/5] object-cover grayscale"
          />
          <div className="absolute top-4 left-0 bg-[#2d1b18] text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-[0.2em]">Inspiração</div>
        </div>

        {/* Image 2: Clareza */}
        <div className="relative group">
          <img 
            src="/rk2.jpg" 
            alt="Clareza do Horizonte" 
            className="shadow-xl w-full aspect-[4/5] object-cover grayscale"
          />
          <div className="absolute top-4 left-0 bg-[#00acc1] text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-[0.2em]">Clareza</div>
        </div>

        {/* Purpose Card */}
        <div className="col-span-2 mt-6 bg-[#fffbf5] border border-[#f5efe9] p-8 md:p-10 relative overflow-hidden rounded-sm shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#e0f7fa]/60 rounded-bl-full -mr-4 -mt-4 pointer-events-none"></div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-2 bg-white rounded-full shadow-sm">
              <Book className="text-[#00acc1]" size={20} strokeWidth={2} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2d1b18]">{PURPOSE_CONTENT.title}</h3>
          </div>
          
          <p className="text-[#8d6e63] font-serif italic leading-relaxed text-sm md:text-[15px] relative z-10">
            {PURPOSE_CONTENT.quote}
          </p>
        </div>
      </div>

      {/* ALTERAÇÃO 2: Mudei de lg:col-span-7 para lg:col-span-6.
          Também aumentei o padding-left (lg:pl-12) para o texto não ficar colado nas imagens agora que elas são maiores.
      */}
      <div className="lg:col-span-6 lg:pl-12 pt-2">
        <div className="space-y-8 mb-12">
           <div>
             <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#2d1b18] tracking-tight leading-tight mb-6">
              {ABOUT_CONTENT.title}
            </h2>
            <div className="w-20 h-1.5 bg-[#00acc1]"></div>
           </div>
        </div>
        
        <div className="space-y-8 text-[#5d4037] font-light text-[15px] md:text-base leading-relaxed font-sans">
          <p>{ABOUT_CONTENT.paragraph1}</p>
          <p>{ABOUT_CONTENT.paragraph2}</p>
          <p>{ABOUT_CONTENT.paragraph3}</p>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-gray-100 my-12"></div>

        {/* Certifications */}
        <div className="space-y-10">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="flex flex-col group">
              <span className="text-[10px] font-bold text-[#00acc1] uppercase tracking-[0.25em] mb-2 group-hover:text-[#00838f] transition-colors">
                {cert.issuer}
              </span>
              <span className="text-lg font-semibold text-[#2d1b18]">
                {cert.title}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default About;