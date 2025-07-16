import React, { useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

const navigationItems = [
  { name: 'nav.benefits', href: '#benefits' },
  { name: 'nav.architecture', href: '#architecture' },
  { name: 'nav.openSource', href: '#open-source' },
];

export function Header() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scrolling to sections when navigating with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);
  
  const scrollToSection = (href: string) => {
    if (location.pathname === '/') {
      // If we're on the index page, scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to index page with hash
      navigate(`/${href}`);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If we're on the index page, scroll to hero
      const element = document.querySelector('#hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to index page
      navigate('/');
    }
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // If we're on the index page, scroll to contact
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to index page with contact hash
      navigate('/#contact');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-width section-padding">
        <div className="flex items-center h-16">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/378aa675-aad2-4802-be01-51844c0d41ef.png" 
              alt="Agentic Layer Logo" 
              className="h-6 w-auto"
            />
          </button>

          {/* Navigation, Language Selector and CTA Button */}
          <div className="flex items-center space-x-4 ml-auto">
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground hover:opacity-80 transition-opacity"
                >
                  {t(item.name)}
                </button>
              ))}
            </nav>
            <LanguageSelector />
            <button
              onClick={handleContactClick}
              className="px-6 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
