import React, { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      title: "Custom Glass Installation",
      description: "Expert installation of premium glass units for residential and commercial spaces. From windows to structural glazing.",
      icon: "🏗️",
      features: [
        "Energy-efficient solutions",
        "Custom sizing and fitting",
        "Professional installation",
        "Quality materials"
      ]
    },
    {
      title: "Glass Restoration & Repair",
      description: "Comprehensive repair and restoration services to bring your glass installations back to their original glory.",
      icon: "🛠️",
      features: [
        "Crack repair",
        "Seal replacement",
        "Moisture removal",
        "Frame restoration"
      ]
    },
    {
      title: "Glass Design Consultation",
      description: "Professional guidance for selecting the perfect glass solutions for your specific needs and aesthetic preferences.",
      icon: "📐",
      features: [
        "Material selection",
        "Design planning",
        "Cost estimation",
        "Safety compliance"
      ]
    }
  ];

  return (
    <div id="services-section" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional glass solutions tailored to your needs, combining expertise with premium materials.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-20 opacity-0'
              } transition-all duration-700 delay-${index * 200} backdrop-blur-sm bg-white/40 rounded-xl p-6 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/50`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;