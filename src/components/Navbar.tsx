import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-150 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-black text-coffee-800 tracking-tighter">
              R<span className="text-sea-500">.</span>RODRIGUES
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold text-coffee-800/70 hover:text-sea-500 transition-colors uppercase tracking-[0.2em]"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contato"
              className="px-6 py-2 border-2 border-coffee-800 text-coffee-800 text-[10px] font-bold hover:bg-coffee-800 hover:text-white transition-all uppercase tracking-widest rounded-sm"
            >
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-800 hover:text-sea-500 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-coffee-50 animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-4 pb-10 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-sm font-bold text-coffee-800 hover:text-sea-500 border-b border-coffee-50 uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-6 bg-coffee-800 text-white py-4 font-bold text-xs uppercase tracking-[0.3em]"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;