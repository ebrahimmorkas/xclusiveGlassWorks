import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent no-underline">
                GlassWorks
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 no-underline"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 text-gray-800 hover:text-blue-600 focus:outline-none bg-white/50 rounded-lg"
                aria-label="Toggle menu"
              >
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span 
                    className={`block w-5 h-0.5 bg-current transition-all duration-300 mb-1.5 ${
                      isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1.5 ${
                      isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Transition */}
        <div 
          className={`md:hidden backdrop-blur-md bg-white/50 absolute w-full transform transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-blue-600 block px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 no-underline hover:bg-white/30"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;