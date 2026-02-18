import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contatti" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground tracking-wide">
            {t.contact.title}
          </h2>
          <p className="mt-4 font-body text-muted-foreground text-base font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-body text-sm text-muted-foreground mb-2 tracking-wide">
              {t.contact.name}
            </label>
            <input
              type="text"
              required
              placeholder={t.contact.namePlaceholder}
              className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block font-body text-sm text-muted-foreground mb-2 tracking-wide">
              {t.contact.email}
            </label>
            <input
              type="email"
              required
              placeholder={t.contact.emailPlaceholder}
              className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block font-body text-sm text-muted-foreground mb-2 tracking-wide">
              {t.contact.message}
            </label>
            <textarea
              required
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 font-body text-sm tracking-[0.2em] uppercase hover:bg-foreground transition-colors duration-500"
          >
            <Send size={16} />
            {submitted ? '✓' : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
