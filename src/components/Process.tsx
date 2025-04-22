
import React from 'react';
import AnimatedText from './AnimatedText';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay }) => {
  return (
    <AnimatedText
      text={
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-brand-orange text-white flex items-center justify-center mb-6 text-3xl font-bold">
            {number}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 text-center max-w-xs">{description}</p>
        </div>
      }
    />
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy",
      description: "We dive deep into your business goals, target audience, and competitive landscape to craft a tailored marketing approach.",
    },
    {
      number: "02",
      title: "Execution",
      description: "Our team brings the strategy to life with compelling content, engaging designs, and targeted campaigns across the right channels.",
    },
    {
      number: "03",
      title: "Results",
      description: "We track, measure, and optimize every aspect of your marketing to ensure we're delivering real, measurable business impact.",
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText text={<h2 className="section-title">How We Work</h2>} />
          <AnimatedText text={<p className="text-gray-600 max-w-2xl mx-auto">Our proven process for transforming your marketing and driving sustainable growth.</p>} />
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-1 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
