import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie, Settings } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { CookieSettingsModal } from './CookieSettingsModal';

export const CookieBanner: React.FC = () => {
  const { consent, hasShownBanner, acceptAll, rejectAll, hideBanner } = useCookieConsent();
  const { t } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);

  // Don't show banner if user has already given consent or if banner was dismissed
  if (consent !== null || hasShownBanner) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" />
      <Card className="fixed bottom-4 left-4 right-4 mx-auto max-w-4xl z-50 border border-border bg-card shadow-lg">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <Cookie className="h-6 w-6 text-primary" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {t('cookieBanner.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('cookieBanner.description')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptAll}
                  className="flex-1 sm:flex-none"
                >
                  {t('cookieBanner.acceptAll')}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={rejectAll}
                  className="flex-1 sm:flex-none"
                >
                  {t('cookieBanner.rejectAll')}
                </Button>
                
                <Button 
                  variant="ghost" 
                  onClick={() => setShowSettings(true)}
                  className="flex-1 sm:flex-none"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {t('cookieBanner.customize')}
                </Button>
              </div>

              <div className="flex justify-center mt-2">
                <Button 
                  variant="link" 
                  asChild
                  className="text-sm h-auto p-0 text-primary hover:text-primary/80"
                >
                  <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
                    {t('cookieBanner.privacyPolicy')} →
                  </a>
                </Button>
              </div>

            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={hideBanner}
              className="flex-shrink-0 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">{t('cookieBanner.close')}</span>
            </Button>
          </div>
        </div>
      </Card>

      <CookieSettingsModal 
        open={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
    </>
  );
};