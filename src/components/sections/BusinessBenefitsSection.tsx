
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Infinity, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Custom Dirigentenstab icon as SVG
const DirigentenStabIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="21" x2="21" y2="3"/>
    <circle cx="18" cy="6" r="3"/>
    <path d="m6 15 3-3"/>
  </svg>
);


export function BusinessBenefitsSection() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ delay: 200 });
  const { t } = useTranslation('benefits');

  const benefitsData = t('benefits', { returnObjects: true }) as Array<{title: string, description: string}>;
  const icons = [Shield, DirigentenStabIcon, Infinity, BadgeCheck, DirigentenStabIcon, Shield];
  
  const benefits = benefitsData.map((benefit, index) => ({
    icon: icons[index],
    title: benefit.title,
    description: benefit.description
  }));

  return (
    <section id="benefits" className="py-20 section-padding bg-muted/30 dark:bg-muted">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16" ref={headerRef}>
          <h2 className="headline-text">
            {t('title')}
          </h2>
          <p className="subheadline-text max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={cardsRef}>
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-medium">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
