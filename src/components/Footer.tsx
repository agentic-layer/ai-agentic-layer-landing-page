import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { showBanner } = useCookieConsent();
  const { t } = useLanguage();

  const handleCookieSettings = () => {
    showBanner();
  };

  return (
    <footer className="border-t bg-background">
      <div className="container-width section-padding py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="/impressum" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Impressum
            </a>
            <a 
              href="/datenschutz" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Datenschutz
            </a>
            <a 
              href="/accessibility" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Barrierefreiheit
            </a>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleCookieSettings}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-4 w-4 mr-2" />
            Cookie-Einstellungen
          </Button>
        </div>
        
        <div className="mt-4 pt-4 border-t text-center text-xs text-muted-foreground">
          © 2024 QAware GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};