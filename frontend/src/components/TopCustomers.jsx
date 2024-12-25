import React from 'react';

const TopCustomers = () => {
  const customers = [
    {
      id: 1,
      name: "Tech Hub Offices",
      logo: "/api/placeholder/120/80",
      industry: "Corporate",
      project: "Complete Office Glass Installation",
      testimonial: "The glass installations transformed our office space completely. The quality and professionalism were outstanding."
    },
    {
      id: 2,
      name: "Luxury Heights Hotel",
      logo: "/api/placeholder/120/80",
      industry: "Hospitality",
      project: "Custom Glass Facades",
      testimonial: "Their expertise in large-scale glass installations helped us achieve our vision for a modern luxury hotel."
    },
    {
      id: 3,
      name: "Metro Mall",
      logo: "/api/placeholder/120/80",
      industry: "Retail",
      project: "Storefront Solutions",
      testimonial: "The glass storefronts they installed have significantly improved our shopping center's appearance and energy efficiency."
    },
    {
      id: 4,
      name: "Urban Residences",
      logo: "/api/placeholder/120/80",
      industry: "Residential",
      project: "Residential Glass Solutions",
      testimonial: "Their attention to detail in our luxury apartment complex's glass installations was remarkable."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Top Customers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading businesses and organizations across industries
          </p>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Logo Section */}
              <div className="flex justify-center mb-4">
                <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                  <img
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Customer Info */}
              <div className="text-center mb-4">
                <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {customer.name}
                </h3>
                <p className="text-sm text-gray-500">{customer.industry}</p>
              </div>

              {/* Project & Testimonial */}
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 mb-2">{customer.project}</p>
                <p className="text-sm text-gray-600 italic">
                  "{customer.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600 mb-2">100+</span>
              <span className="text-gray-600">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600 mb-2">50+</span>
              <span className="text-gray-600">Corporate Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600 mb-2">15+</span>
              <span className="text-gray-600">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600 mb-2">98%</span>
              <span className="text-gray-600">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCustomers;