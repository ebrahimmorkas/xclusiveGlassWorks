import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-hidden">
      {/* Background with gradient and blur effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)`
        }}
      ></div>

      {/* Glass shapes in background for decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-teal-500/10 rounded-full blur-lg"></div>

      {/* Main content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-white/20 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight md:leading-tight lg:leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
              Transforming Spaces Through Glass
            </h1>
            
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Experience the beauty of custom glass work that brings elegance and light to any space. From artistic installations to functional designs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:shadow-lg">
                Our Services
              </button>
              <button className="group relative px-6 py-2 rounded-lg font-medium overflow-hidden transition-all duration-300 border-solid border-2 border-blue-500">
                {/* Background layers */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/70"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30"></div>
                </div>
                {/* Border that scales on hover */}
                <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:scale-95 transition-transform duration-300"></div>
                {/* Button text */}
                <span className="relative text-gray-800 z-10">View Gallery</span>
              </button>
            </div>

            {/* Features/highlights */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Custom Design', description: 'Unique solutions tailored to your vision' },
                { title: 'Expert Craftsmanship', description: 'Years of experience in glass artistry' },
                { title: 'Quality Materials', description: 'Premium glass and superior finishes' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/10 hover:bg-white/30 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;