import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Health Care', path: '/health-care' },
    { name: 'Defense', path: '/defense-sector' },
    { name: 'Business Immigration', path: '/business-immigration' },
  ];

  const isContactPage = location.pathname === '/contact';

  const getLogoPath = () => {
    switch (location.pathname) {
      case '/health-care':
        return '/Healthcare_Logo.png';
      case '/defense-sector':
        return '/Defense_Logo.png';
      case '/business-immigration':
        return '/Immigration_Logo.png';
      default:
        // Use general logo for Home ('/'), About ('/about'), Contact ('/contact'), etc.
        return '/General_Logo.png';
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={getLogoPath()}
            alt="TriLink.Mobility"
            className="h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path
                  ? 'text-primary font-semibold'
                  : 'text-slate-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/contact">
            <Button
              className="rounded-full px-6 font-semibold shadow-none bg-primary text-white hover:bg-primary/90"
              size="sm"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-slate-900 hover:bg-slate-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-lg font-medium text-gray-800 border-b border-gray-100 pb-3"
            >
              {link.name}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full mt-2">Contact Us</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
