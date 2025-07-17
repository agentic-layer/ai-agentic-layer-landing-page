import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';
export function CTASection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const { t } = useTranslation('cta');
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal({ delay: 200 });
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Erfolgreich angemeldet!",
      description: "Sie erhalten Updates zu unseren wichtigsten Meilensteinen."
    });
    setEmail('');
  };
  const handleEmailClick = () => {
    const emailAddress = 'agenticlayer@qaware.de';
    const subject = 'Hello Agentic Layer';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoUrl, '_self');
  };
  return <section id="contact" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center space-y-8 mb-16" ref={headerRef}>
          <h2 className="headline-text">
            {t('title')}
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            {t('description')}
          </p>
        </div>

        <div className="flex justify-center" ref={cardRef}>
          <Card className="border-2 hover:border-primary/20 transition-colors flex flex-col max-w-md w-full">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-medium">Hast du weitere Fragen?</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Two-column layout below headline */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <img src="/lovable-uploads/177aaf0a-da67-4298-a8d4-3ce33d908677.png" alt="Team member" className="w-full object-contain rounded-lg" />
                </div>
                <div className="flex items-start">
                  <p className="text-sm text-muted-foreground">Das Agentic Layer Team freut sich auf deine Kontaktaufnahme!
                  <br /><br />
                  Schreibe uns, wie wir dir auf deinem Weg zum Agentic Layer weiterhelfen können.</p>
                </div>
              </div>
              <Button onClick={handleEmailClick} className="w-full mt-6">{t('cta_button')}</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}