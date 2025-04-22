
import React from 'react';
import AnimatedText from './AnimatedText';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText text={<h2 className="section-title">Our Results</h2>} />
          <AnimatedText text={<p className="text-gray-600 max-w-2xl mx-auto">See the impact of our work through real client success stories.</p>} />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <AnimatedText
            text={
              <div className="bg-white border border-gray-100 rounded-lg shadow-md p-10 text-center">
                <h3 className="text-3xl font-bold font-display mb-6">Results Coming Soon</h3>
                <p className="text-gray-600 mb-8">
                  We're currently compiling our case studies and client testimonials to showcase the 
                  impact of our work. Check back soon to see how we've helped businesses like yours 
                  achieve remarkable growth.
                </p>
                <Button asChild className="bg-brand-orange hover:bg-orange-600 text-white">
                  <a href="#contact">Start Your Success Story</a>
                </Button>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
