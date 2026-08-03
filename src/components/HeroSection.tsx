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
          // En móvil enfoca la derecha (bolso), en desktop centra normalmente
          className="absolute inset-0 h-full w-full object-cover object-[45%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-black/30" />
        {/* Gradiente solo en la mitad izquierda para proteger texto sin oscurecer la cara */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative flex h-full min-h-[calc(100vh-7rem)] flex-col justify-end pb-10 sm:pb-20 md:pb-32 lg:pb-48 px-6 text-white sm:px-10 lg:px-16">
          {/* En móvil el texto va abajo del todo para no tapar la cara */}
          <div className="max-w-[55%] sm:max-w-xl md:max-w-2xl">
            <span className="font-body text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/70 mb-2 block">
              {t.hero.welcome}
            </span>
            <h1 className="font-display text-xl sm:text-3xl md:text-5xl lg:text-8xl font-extralight tracking-[0.18em] leading-tight uppercase">
              {t.hero.title}
            </h1>
            <p className="mt-2 sm:mt-3 font-body text-xs sm:text-base md:text-xl text-white/85 leading-relaxed tracking-wide">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}