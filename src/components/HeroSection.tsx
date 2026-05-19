import { useLanguage } from '@/contexts/LanguageContext';
import portadaImage from '@/assets/portada d11.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-24 lg:pt-28 pb-0 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative min-h-[calc(100vh-7rem)] overflow-hidden rounded-[2rem] border border-border shadow-2xl">
          <img
            src={portadaImage}
            alt="Portada"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%)]" />

          <div className="relative flex h-full flex-col justify-center px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
            <span className="font-body text-xs tracking-[0.35em] uppercase text-white/80 mb-5">
              Moda sostenibile di lusso · Made in Italy
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight max-w-3xl">
              {t.hero.welcome}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base md:text-lg text-white/85 leading-relaxed tracking-wide">
              {t.hero.subtitle}
            </p>
            <a
              href="#collezioni"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-3 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-foreground duration-300"
            >
              {t.hero.shopNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
