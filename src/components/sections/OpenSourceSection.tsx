
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function OpenSourceSection() {
  const headerRef = useScrollReveal();
  const buttonRef = useScrollReveal({ delay: 200 });
  const { t } = useTranslation('opensource');

  return (
    <section id="open-source" className="py-20 section-padding bg-muted/30 dark:bg-muted">
      <div className="container-width">
        <div className="text-center space-y-8 mb-12" ref={headerRef}>
          <h2 className="headline-text" dangerouslySetInnerHTML={{ __html: t('title') }}>
          </h2>
          <p className="subheadline-text">{t('subtitle')}</p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            {t('empowerment')}
          </p>
        </div>

        <div className="text-center mb-12" ref={buttonRef}>
          <Button size="lg" className="text-lg px-8 py-4">
            <Github className="mr-2 h-5 w-5" />
            {t('cta_button')}
          </Button>
        </div>

        {/* Open Source Technology Logos */}
        
      </div>
    </section>
  );
}
