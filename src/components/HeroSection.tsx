import { useLanguage } from '@/contexts/LanguageContext';

const portadaImage = new URL('../assets/portada d11.jpg', import.meta.url).href;

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-24 lg:pt-28 pb-0 bg-background">
      <div className="relative w-full min-h-[calc(100vh-7rem)] overflow-hidden border border-border shadow-2xl">
        <img
          src={portadaImage}
          alt="Portada"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%)]" />

        <div className="relative flex h-full flex-col justify-center px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-32">
          <span className="font-body text-xs tracking-[0.35em] uppercase text-white/80 mb-5">
            {t.hero.welcome} · {t.benvenutti.title}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight tracking-[0.18em] leading-tight max-w-3xl uppercase">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg md:text-xl text-white/90 leading-relaxed tracking-wide">
            {t.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
