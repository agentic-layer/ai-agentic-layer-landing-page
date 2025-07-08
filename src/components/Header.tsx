import React from 'react';
import { ThemeToggle } from './ThemeToggle';


const navigationItems = [
  { name: 'Vorteile', href: '#benefits' },
  { name: 'Architektur', href: '#architecture' },
  { name: 'Whitepaper', href: '#lead-magnet' },
  { name: 'Agents', href: '#agents' },
  { name: 'Open Source', href: '#open-source' },
  { name: 'Kontakt', href: '#contact' },
];

export function Header() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#hero')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/e9f10c80-e782-424c-ace9-5144a98a8300.png" 
              alt="Agentic Layer Logo" 
              className="h-8 w-auto"
            />
          </button>

          {/* Navigation and Theme Toggle */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}