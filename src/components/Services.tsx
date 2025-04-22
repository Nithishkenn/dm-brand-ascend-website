
import React from 'react';
import { MessageSquare, TrendingUp, Video, Pen, Users, Instagram, BarChart } from 'lucide-react';
import AnimatedText from './AnimatedText';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <AnimatedText
      text={
        <div className="service-card">
          <div className="mb-4 text-brand-orange">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      }
    />
  );
};

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "Build brand presence and engagement that drives real customer connections.",
      icon: <MessageSquare size={40} strokeWidth={1.5} />,
    },
    {
      title: "Meta Ads",
      description: "Target and convert your ideal customers with precision ad campaigns.",
      icon: <Instagram size={40} strokeWidth={1.5} />,
    },
    {
      title: "Google Ads",
      description: "Capture high-intent traffic and turn search interest into revenue.",
      icon: <BarChart size={40} strokeWidth={1.5} />,
    },
    {
      title: "SEO",
      description: "Climb search rankings and attract organic traffic that converts.",
      icon: <TrendingUp size={40} strokeWidth={1.5} />,
    },
    {
      title: "Content Creation",
      description: "Develop compelling content that resonates with your audience and builds authority.",
      icon: <Pen size={40} strokeWidth={1.5} />,
    },
    {
      title: "Videography",
      description: "Tell your story with professional video that captures attention and emotion.",
      icon: <Video size={40} strokeWidth={1.5} />,
    },
    {
      title: "Video Editing",
      description: "Transform raw footage into polished content that achieves your marketing goals.",
      icon: <Video size={40} strokeWidth={1.5} />,
    },
    {
      title: "LinkedIn Content Writing",
      description: "Position yourself as an industry leader with strategic LinkedIn content.",
      icon: <Pen size={40} strokeWidth={1.5} />,
    },
    {
      title: "Influencer Marketing",
      description: "Leverage authentic voices to extend your reach and build trust.",
      icon: <Users size={40} strokeWidth={1.5} />,
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText text={<h2 className="section-title">What We Do</h2>} />
          <AnimatedText text={<p className="text-gray-600 max-w-2xl mx-auto">Strategic services designed to accelerate your brand's growth and visibility in today's digital landscape.</p>} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
