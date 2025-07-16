
import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('Deutsch');

  const languages = [
    { label: 'Deutsch', value: 'de' },
    { label: 'English', value: 'en' },
  ];

  const handleLanguageChange = (language: string, value: string) => {
    setSelectedLanguage(language);
    // TODO: Implement actual language switching logic
    console.log('Language changed to:', value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-white hover:opacity-80 transition-opacity">
          <Globe className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.value}
            onClick={() => handleLanguageChange(language.label, language.value)}
            className="cursor-pointer hover:bg-accent"
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
