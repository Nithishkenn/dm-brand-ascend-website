
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-display text-black">
          THE<span className="text-brand-orange">DM</span>BRAND
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-black hover:text-brand-orange transition-colors">About</a>
          <a href="#services" className="text-black hover:text-brand-orange transition-colors">Services</a>
          <a href="#process" className="text-black hover:text-brand-orange transition-colors">Process</a>
          <a href="#case-studies" className="text-black hover:text-brand-orange transition-colors">Results</a>
          <Button asChild>
            <a href="#contact" className="ml-4 bg-brand-orange hover:bg-orange-600 text-white">Let's Talk</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#about" className="text-black hover:text-brand-orange transition-colors" onClick={toggleMobileMenu}>About</a>
          <a href="#services" className="text-black hover:text-brand-orange transition-colors" onClick={toggleMobileMenu}>Services</a>
          <a href="#process" className="text-black hover:text-brand-orange transition-colors" onClick={toggleMobileMenu}>Process</a>
          <a href="#case-studies" className="text-black hover:text-brand-orange transition-colors" onClick={toggleMobileMenu}>Results</a>
          <Button asChild className="w-full bg-brand-orange hover:bg-orange-600 text-white">
            <a href="#contact" onClick={toggleMobileMenu}>Let's Talk</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
