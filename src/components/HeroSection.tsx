import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-24 lg:pt-28 pb-12 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid min-h-[calc(100vh-7rem)] grid-rows-[auto_1fr] gap-10 lg:gap-12">
          <div className="max-w-4xl pt-8 lg:pt-12 opacity-0 animate-fade-up">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-5">
              Moda sostenibile di lusso · Made in Italy
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-wide leading-[0.95]">
              {t.hero.welcome}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed tracking-wide">
              {t.hero.subtitle}
            </p>
            <a
              href="#collezioni"
              className="mt-9 inline-block border border-primary text-primary px-8 py-3 font-body text-xs tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              {t.hero.shopNow}
            </a>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-secondary via-card to-nude border border-border opacity-0 animate-fade-up animation-delay-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--nude)/0.65),transparent_35%),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--card)))]" />
            <div className="absolute inset-6 border border-primary/15" />
            <div className="relative flex h-full items-center justify-center px-6 text-center">
              <span className="font-body text-xs md:text-sm tracking-[0.28em] uppercase text-muted-foreground">
                Insertar Imagen de Portada Aquí
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
