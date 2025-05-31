import React from 'react';
import { Shield, Award, Settings, Clock, Sparkles, Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-primary-600" />,
      title: 'Durability Guaranteed',
      description: 'Our products are built to last with high-quality materials and precision engineering.',
    },
    {
      icon: <Award className="w-10 h-10 text-primary-600" />,
      title: 'Quality Assurance',
      description: 'Every product meets rigorous quality standards before reaching your doorstep.',
    },
    {
      icon: <Settings className="w-10 h-10 text-primary-600" />,
      title: 'Custom Solutions',
      description: 'Tailored designs to perfectly match your specific requirements and space.',
    },
    {
      icon: <Clock className="w-10 h-10 text-primary-600" />,
      title: 'Timely Delivery',
      description: 'We value your time and ensure prompt delivery and installation services.',
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary-600" />,
      title: 'Aesthetic Designs',
      description: 'Beautiful, modern designs that enhance the visual appeal of your property.',
    },
    {
      icon: <Check className="w-10 h-10 text-primary-600" />,
      title: 'After-Sales Support',
      description: 'Comprehensive support and maintenance services long after installation.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Experience the difference with our premium door and window solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary-50 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;