
import React, { useState, useRef } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetElement = document.querySelector(href);

    if (targetElement) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative">
        <a href="#home" onClick={handleLinkClick} className="text-xl md:text-2xl font-bold text-white">
          <span className="hidden md:inline">Yardman Projects & Development</span>
          <span className="md:hidden">YPDC</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#services" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors duration-300">Services</a>
          <a href="#about" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a>
          <a href="#contact" onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
          <a href="#consultation" onClick={handleLinkClick} className="bg-purple-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            Schedule Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none z-20">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#services" onClick={handleLinkClick} className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">Services</a>
            <a href="#about" onClick={handleLinkClick} className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">About Us</a>
            <a href="#contact" onClick={handleLinkClick} className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            <a href="#consultation" onClick={handleLinkClick} className="bg-purple-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mt-4 text-lg">
              Schedule Consultation
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
