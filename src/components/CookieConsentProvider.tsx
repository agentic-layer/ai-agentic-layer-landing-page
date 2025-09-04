import React from 'react';
import { CookieConsentContext, useCookieConsentState } from '@/hooks/useCookieConsent';

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const cookieConsentState = useCookieConsentState();

  return (
    <CookieConsentContext.Provider value={cookieConsentState}>
      {children}
    </CookieConsentContext.Provider>
  );
};