
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export function OpenSourceSection() {
  const headerRef = useScrollReveal();
  const buttonRef = useScrollReveal({ delay: 200 });
  const { t } = useLanguage();

  return (
    <section id="open-source" className="py-20 section-padding bg-muted/30 dark:bg-muted">
      <div className="container-width">
        <div className="text-center space-y-8 mb-12" ref={headerRef}>
          <h2 className="headline-text">
            {t('opensource.title').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('opensource.title').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="subheadline-text">{t('opensource.subtitle')}</p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('opensource.description')}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('opensource.control')}
          </p>
        </div>

        <div className="text-center mb-12" ref={buttonRef}>
          <Button size="lg" className="text-lg px-8 py-4">
            <Github className="mr-2 h-5 w-5" />
            {t('opensource.button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
