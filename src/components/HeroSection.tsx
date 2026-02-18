import { useLanguage } from '@/contexts/LanguageContext';
import heroBanner from '@/assets/hero-banner.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Sustainable handbag lifestyle"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-primary-foreground tracking-wide opacity-0 animate-fade-up">
          {t.hero.welcome}
        </h1>
        <p className="mt-6 max-w-lg font-body text-base md:text-lg text-primary-foreground/80 font-light tracking-wide opacity-0 animate-fade-up animation-delay-200">
          {t.hero.subtitle}
        </p>
        <a
          href="#collezioni"
          className="mt-10 inline-block border border-primary-foreground/60 text-primary-foreground px-8 py-3 font-body text-sm tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-500 opacity-0 animate-fade-up animation-delay-400"
        >
          {t.hero.shopNow}
        </a>
      </div>
    </section>
  );
}
