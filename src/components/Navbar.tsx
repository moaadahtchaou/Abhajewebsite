import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/Images/Logo/logo2-Photoroom.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link (mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-2' : 'bg-transparent py-4 '
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Abhaje Construction" 
              className="h-12 mr-1" 
            />
                      <span className={`font-bold text-xl ${isScrolled? 'text-black' : 'text-white'}`}>Abhaje Frere</span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              Obtenir un Devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? (
              <FaTimes className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <FaBars className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-blue-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '65px' }}
      >
        <div className="flex flex-col p-8 space-y-6 bg-blue-900">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors duration-300 text-center mt-4"
            onClick={closeMenu}
          >
            Obtenir un Devis
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 