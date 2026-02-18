import { Leaf, Recycle, Factory, Hand } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function SustainabilitySection() {
  const { t } = useLanguage();

  const features = [
    { icon: Leaf, title: t.sustainability.vegan, desc: t.sustainability.veganDesc },
    { icon: Recycle, title: t.sustainability.recycled, desc: t.sustainability.recycledDesc },
    { icon: Factory, title: t.sustainability.eco, desc: t.sustainability.ecoDesc },
    { icon: Hand, title: t.sustainability.handmade, desc: t.sustainability.handmadeDesc },
  ];

  return (
    <section id="sostenibilita" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-secondary-foreground tracking-wide">
            {t.sustainability.title}
          </h2>
          <p className="mt-4 font-body text-muted-foreground text-base max-w-md mx-auto font-light">
            {t.sustainability.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <feature.icon size={28} strokeWidth={1.5} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-medium text-secondary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
