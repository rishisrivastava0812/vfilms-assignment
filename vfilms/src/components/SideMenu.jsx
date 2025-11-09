// components/SideMenu.jsx

import React from 'react';
import PropTypes from 'prop-types'; // 💡 Required for prop type checking

function SideMenu({ isOpen, onClose }) {
  // Define menu items (customize these links as needed)
  const menuItems = [
    { name: 'Home', href: '#hero' }, 
    { name: 'Services', href: '#services' }, 
    { name: 'Portfolio', href: '#portfolio' }, 
    { name: 'About Us', href: '#about' }, 
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* 1. Backdrop (Fades in/out) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose} 
      />

      {/* 2. Slider Panel (Slides in/out) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Close menu"
            >
              {/* Standard SVG for a close 'X' icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-grow">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={onClose}
                    className="block text-2xl font-semibold text-gray-800 hover:text-orange-600 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* "Let's Talk" Button */}
          <button
            onClick={onClose}
            className="mt-6 px-4 py-3 bg-orange-600 text-white rounded-full font-bold shadow-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
          >
            Let's Talk 
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </button>
        </div>
      </div>
    </>
  );
}

// 💡 Define prop types for type checking in JavaScript
SideMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SideMenu;