
import React from 'react';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgb(254,255,165)_0%,rgb(255,232,182)_90%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-block overflow-hidden">
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight text-black animate-text-slide-up">
              Fueling Brands with<br/> <span className="text-brand-orange">Bold Marketing</span> Moves
            </h1>
          </div>
          
          <div className="mb-10 max-w-2xl inline-block overflow-hidden">
            <p className="text-lg md:text-xl text-gray-700 animate-text-slide-up" style={{ animationDelay: '0.2s' }}>
              We turn scrolls into sales with strategy, stories, and stunning visuals.
            </p>
          </div>
          
          <div className="mt-4 inline-block overflow-hidden">
            <div className="animate-text-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="shine-button border-black text-black group-hover:text-white py-6 text-lg">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-gray-500 hover:text-brand-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
