import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'functional';

export interface CookieConsentState {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentContextType {
  consent: CookieConsentState | null;
  hasShownBanner: boolean;
  showBanner: () => void;
  hideBanner: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  updateConsent: (newConsent: CookieConsentState) => void;
  resetConsent: () => void;
}

const defaultConsent: CookieConsentState = {
  essential: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
};

const STORAGE_KEY = 'cookie-consent';
const BANNER_STORAGE_KEY = 'cookie-banner-shown';

export const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

export const useCookieConsentState = () => {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [hasShownBanner, setHasShownBanner] = useState(true);

  // Load consent from localStorage on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    const bannerShown = localStorage.getItem(BANNER_STORAGE_KEY);
    
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
    }
    
    setHasShownBanner(!!bannerShown);
  }, []);

  // Save consent to localStorage whenever it changes
  useEffect(() => {
    if (consent) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      
      // Load/unload Google Analytics based on analytics consent
      if (consent.analytics) {
        loadGoogleAnalytics();
      } else {
        removeGoogleAnalytics();
      }
    }
  }, [consent]);

  const showBanner = () => {
    setHasShownBanner(false);
    localStorage.removeItem(BANNER_STORAGE_KEY);
  };

  const hideBanner = () => {
    setHasShownBanner(true);
    localStorage.setItem(BANNER_STORAGE_KEY, 'true');
  };

  const acceptAll = () => {
    const allAccepted: CookieConsentState = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setConsent(allAccepted);
    hideBanner();
  };

  const rejectAll = () => {
    setConsent(defaultConsent);
    hideBanner();
  };

  const updateConsent = (newConsent: CookieConsentState) => {
    // Ensure essential cookies are always enabled
    const updatedConsent = { ...newConsent, essential: true };
    setConsent(updatedConsent);
    hideBanner();
  };

  const resetConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(BANNER_STORAGE_KEY);
    setConsent(null);
    setHasShownBanner(false);
  };

  return {
    consent,
    hasShownBanner,
    showBanner,
    hideBanner,
    acceptAll,
    rejectAll,
    updateConsent,
    resetConsent,
  };
};

// Google Analytics management functions
const loadGoogleAnalytics = () => {
  // Check if GA is already loaded
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
    return;
  }

  // Load GA script dynamically
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-N8BBZQNEPE';
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-N8BBZQNEPE');
  `;
  document.head.appendChild(script2);
};

const removeGoogleAnalytics = () => {
  // Disable GA tracking
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied'
    });
  }
  
  // Remove GA cookies
  const gaCookies = document.cookie.split(';').filter(cookie => 
    cookie.trim().startsWith('_ga') || 
    cookie.trim().startsWith('_gid') || 
    cookie.trim().startsWith('_gat')
  );
  
  gaCookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}