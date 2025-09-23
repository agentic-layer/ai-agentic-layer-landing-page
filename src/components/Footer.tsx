import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { CookieSettingsModal } from './CookieSettingsModal';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const handleCookieSettings = () => {
    setShowCookieSettings(true);
  };

  return (
    <footer className="border-t bg-background">
      <div className="container-width section-padding py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href={`/impressum?lang=${language}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.impressum')}
            </a>
            <a 
              href={`/datenschutz?lang=${language}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a 
              href={`/accessibility?lang=${language}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.accessibility')}
            </a>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleCookieSettings}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-4 w-4 mr-2" />
            {t('footer.cookieSettings')}
          </Button>
        </div>
        
        <div className="mt-4 pt-4 border-t text-center text-xs text-muted-foreground">
          {t('footer.copyright')}
        </div>
      </div>
      
      <CookieSettingsModal 
        open={showCookieSettings} 
        onClose={() => setShowCookieSettings(false)} 
      />
    </footer>
  );
};