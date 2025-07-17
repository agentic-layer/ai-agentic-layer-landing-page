
import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { label: 'Deutsch', value: 'de' },
    { label: 'English', value: 'en' },
  ];

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
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
            onClick={() => handleLanguageChange(language.value)}
            className="cursor-pointer hover:bg-accent"
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
