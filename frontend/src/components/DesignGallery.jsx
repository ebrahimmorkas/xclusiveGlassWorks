import React, { useEffect, useState } from 'react';

const DesignGallery = () => {
  const [position, setPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const galleryItems = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Modern Office Partition",
      description: "Frameless glass partition system"
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Luxury Shower Enclosure",
      description: "Custom curved glass design"
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Storefront Installation",
      description: "Commercial glass facade"
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "Glass Staircase",
      description: "Floating glass steps with railings"
    },
    {
      id: 5,
      image: "/api/placeholder/400/300",
      title: "Sliding Glass Door",
      description: "Automated sliding system"
    },
    {
      id: 6,
      image: "/api/placeholder/400/300",
      title: "Glass Balustrade",
      description: "Seamless balcony installation"
    }
  ];

  const extendedItems = [...galleryItems, ...galleryItems];

  useEffect(() => {
    const animate = () => {
      if (hoveredIndex === null) {
        setPosition((prevPosition) => {
          if (prevPosition <= -50 * galleryItems.length) {
            return 0;
          }
          return prevPosition - 0.5;
        });
      }
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [galleryItems.length, hoveredIndex]);

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Designs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium glass installations and custom designs
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Carousel container */}
          <div 
            className="flex gap-6 py-8"
            style={{
              transform: `translateX(${position}px)`,
              transition: hoveredIndex !== null ? 'none' : 'transform 0.05s linear'
            }}
          >
            {extendedItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  flex-none w-80 bg-white rounded-xl overflow-hidden cursor-pointer
                  transition-all duration-300 ease-in-out
                  ${hoveredIndex === index ? 'shadow-2xl scale-110 z-20' : 'shadow-lg scale-100 z-10'}
                `}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      w-full h-full object-cover
                      transition-transform duration-300 ease-in-out
                      ${hoveredIndex === index ? 'scale-110' : 'scale-100'}
                    `}
                  />
                </div>
                <div className={`
                  p-4 
                  transition-transform duration-300 ease-in-out
                  ${hoveredIndex === index ? 'scale-105' : 'scale-100'}
                `}>
                  <h3 className={`
                    font-semibold text-gray-800 
                    transition-all duration-300
                    ${hoveredIndex === index ? 'underline' : ''}
                  `}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explore Designs
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignGallery;