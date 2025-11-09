// App.jsx (Corrected)

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero.jsx';
import TeamShowcase from './components/TeamShowcase.jsx';
import AboutUs from './components/AboutUs.jsx';
import SideMenu from './components/SideMenu'; 
import ContactUsSection from './components/ContactUsSection.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const toggleMenu = () => {
    // This will open the side menu and close it if it's already open
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Pass the state and the toggle function */}
      <Header onNavIconClick={toggleMenu} isMenuOpen={isMenuOpen} /> 
      
      <main>
        <Hero />
        <TeamShowcase />
        <AboutUs />
        <ContactUsSection />
      </main>

      {/* 💥 FIX: This line replaces the problematic <ContactFrame /> */}
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} /> 
      
      {/* ⚠️ Ensure that the old line below is DELETED or commented out in your file: */}
      {/* <ContactFrame isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} /> */}
    </div>
  );
}

export default App;