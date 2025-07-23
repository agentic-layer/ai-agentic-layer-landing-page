
import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { label: 'Deutsch', value: 'de' },
    { label: 'English', value: 'en' },
  ];

  const handleLanguageChange = (value: 'de' | 'en') => {
    setLanguage(value);
    console.log('Language changed to:', value);
    // Remove focus from the trigger button after language change
    setTimeout(() => {
      (document.activeElement as HTMLElement)?.blur();
    }, 0);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="text-white hover:opacity-80 transition-opacity focus:outline-none"
          aria-label="Sprache auswählen"
        >
          <Globe className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => handleLanguageChange(lang.value as 'de' | 'en')}
            className={`cursor-pointer hover:bg-accent ${
              language === lang.value ? 'bg-accent' : ''
            }`}
            role="menuitem"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
