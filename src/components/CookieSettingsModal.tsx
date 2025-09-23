import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useCookieConsent, type CookieConsentState } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, BarChart3, Target, Zap } from 'lucide-react';

interface CookieSettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({ open, onClose }) => {
  const { consent, updateConsent } = useCookieConsent();
  const { t } = useLanguage();
  
  const [localConsent, setLocalConsent] = useState<CookieConsentState>({
    essential: true,
    analytics: false,
  });

  // Initialize local state with current consent
  useEffect(() => {
    if (consent) {
      setLocalConsent(consent);
    }
  }, [consent]);

  const handleSave = () => {
    updateConsent(localConsent);
    onClose();
  };

  const handleToggle = (category: keyof CookieConsentState, value: boolean) => {
    setLocalConsent(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const cookieCategories = [
    {
      key: 'essential' as const,
      icon: Shield,
      name: t('cookieSettings.essential.name'),
      description: t('cookieSettings.essential.description'),
      disabled: true, // Essential cookies cannot be disabled
    },
    {
      key: 'analytics' as const,
      icon: BarChart3,
      name: t('cookieSettings.analytics.name'),
      description: t('cookieSettings.analytics.description'),
      disabled: false,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {t('cookieSettings.title')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            {t('cookieSettings.description')}
          </p>

          <div className="space-y-6">
            {cookieCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={category.key}>
                  <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <Label 
                          htmlFor={`cookie-${category.key}`}
                          className="text-base font-medium cursor-pointer"
                        >
                          {category.name}
                        </Label>
                        <Switch
                          id={`cookie-${category.key}`}
                          checked={localConsent[category.key]}
                          onCheckedChange={(value) => handleToggle(category.key, value)}
                          disabled={category.disabled}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  {index < cookieCategories.length - 1 && <Separator />}
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={onClose}>
              {t('cookieSettings.cancel')}
            </Button>
            <Button onClick={handleSave}>
              {t('cookieSettings.save')}
            </Button>
          </div>

          <div className="flex justify-center pt-2 border-t">
            <Button 
              variant="link" 
              className="text-sm h-auto p-2 text-primary hover:text-primary/80"
              onClick={() => {
                window.open('/datenschutz?from=cookies', '_blank', 'noopener,noreferrer');
                onClose();
              }}
            >
              Datenschutz
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};