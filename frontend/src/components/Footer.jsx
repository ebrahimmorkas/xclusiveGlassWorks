import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Glass Works</h4>
              <p className="text-gray-400 mb-4">
                Premium glass solutions for residential and commercial spaces.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Glass Installation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Glass Repair</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Custom Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Consultation</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none flex-grow"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Developer Credit & Copyright */}
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p className="mb-2">© 2024 Glass Works. All rights reserved.</p>
            <p className="text-sm">
              Developed with ❤️ by{' '}
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Your Name
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer