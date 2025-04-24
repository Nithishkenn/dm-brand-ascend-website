
import React from 'react';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="mb-4 inline-block overflow-hidden">
              <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight text-[#0B4619]">
                BRINGING YOUR<br/> VISION TO LIFE.
              </h1>
            </div>
            
            <div className="mb-8 max-w-2xl">
              <p className="text-lg md:text-xl text-gray-700">
                Combining creativity and strategy to help brands stand out and achieve their goals.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8"
            >
              Let's Collab!
            </Button>

            <div className="mt-12 flex gap-4">
              <Button variant="outline" className="rounded-full" asChild>
                <a href="#about">About Us</a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="#services">Services</a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="#case-studies">Portfolio</a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <img 
              src="/lovable-uploads/ecbc032b-198f-489e-91b1-1b81030afade.png"
              alt="Refreshing Brand Vision"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
