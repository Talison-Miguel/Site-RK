import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalSection {
  heading: string;
  text: string;
}

interface LegalContent {
  title: string;
  lastUpdated: string;
  content: LegalSection[];
}

interface LegalPageProps {
  data: LegalContent;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ data, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfaf6] pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Back Button */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="group inline-flex items-center text-[#8d6e63] hover:text-[#2d1b18] transition-colors duration-300 font-bold text-[10px] uppercase tracking-[0.25em]"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar ao site
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-16 shadow-sm border border-gray-100">
          <header className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#2d1b18] mb-4">
              {data.title}
            </h1>
            <p className="text-[#8d6e63] text-sm uppercase tracking-widest font-bold">
              {data.lastUpdated}
            </p>
          </header>

          <div className="space-y-10">
            {data.content.map((section, index) => (
              <section key={index}>
                <h2 className="font-serif text-xl font-bold text-[#2d1b18] mb-4">
                  {section.heading}
                </h2>
                <p className="text-[#5d4037] leading-relaxed font-light text-lg">
                  {section.text}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-[#8d6e63] font-light italic">
              Se tiver dúvidas sobre esta política, entre em contato através do formulário no site.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegalPage;