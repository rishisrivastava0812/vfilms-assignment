import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const desktopLinks = [
  { name: 'Services', href: '#services-showcase' },
  { name: 'Their Stories', href: '#portfolio' },
  { name: 'Our Story', href: '#about-us' },
  { name: 'Varnan', href: '#contact-section' }, 
];

function Header({ onNavIconClick, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 251, 251, 0.65)' : 'rgba(255, 251, 251, 0.5)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1920px' }}>
        <div className="flex items-center justify-between" style={{ height: '88px', padding: '0 24px' }}>
          
          
          <div className="flex items-center gap-3">
            <a href="/" aria-label="V Films home">
              <img
                src="/nav/logo.png"
                alt="V Films logo"
                className="h-12 w-auto select-none"
                draggable={false}
              />
            </a>
          </div>

          
          <nav className="hidden md:flex items-center gap-6">
            {desktopLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-ink/80 hover:text-ink transition-colors"
              >
                {link.name}
              </a>
            ))}
           
            <a
              href="#contact-section"
              className="flex items-center justify-center px-5 py-2 text-white rounded-full shadow-md hover:bg-accentDark transition-colors"
              style={{ backgroundColor: '#F26938' }}
            >
              Let's Talk
              
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </nav>

          
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={onNavIconClick}
            className="relative flex items-center justify-center rounded-md shadow-sm transition-all md:hidden" // Added md:hidden
            style={{
              width: 56,
              height: 40,
              background: 'transparent'
            }}
          >
            <img 
              src={isMenuOpen ? "/nav/close.png" : "/nav/menu.png"} 
              alt={isMenuOpen ? "close menu" : "menu"} 
              className="h-5 w-5" 
              draggable={false} 
            />
          </button>
        </div>
      </div>
    </header>
  );
}


Header.propTypes = {
  onNavIconClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Header;