
import React from 'react';
import { useTheme } from './ThemeProvider';

const navigationItems = [
  { name: 'Vorteile', href: '#benefits' },
  { name: 'Architektur', href: '#architecture' },
  { name: 'Open Source', href: '#open-source' },
];

export function Header() {
  const { theme } = useTheme();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-width section-padding">
        <div className="flex items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#hero')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src={theme === "light" ? "/lovable-uploads/9383bbc1-3be8-4e47-af0a-b8d4afc8f2e5.png" : "/lovable-uploads/e9f10c80-e782-424c-ace9-5144a98a8300.png"} 
              alt="Agentic Layer Logo" 
              className="h-8 w-auto"
            />
          </button>

          {/* Navigation and CTA Button */}
          <div className="flex items-center space-x-8 ml-auto">
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition-all duration-200"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
