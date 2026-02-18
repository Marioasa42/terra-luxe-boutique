import { useLanguage } from '@/contexts/LanguageContext';
import bagTote from '@/assets/bag-tote.jpg';
import bagCrossbody from '@/assets/bag-crossbody.jpg';
import bagClutch from '@/assets/bag-clutch.jpg';
import bagBucket from '@/assets/bag-bucket.jpg';
import bagShoulder from '@/assets/bag-shoulder.jpg';
import bagMini from '@/assets/bag-mini.jpg';

export function CollectionsSection() {
  const { t } = useLanguage();

  const products = [
    { image: bagTote, name: t.products.tote, price: '€40,00' },
    { image: bagCrossbody, name: t.products.crossbody, price: '€40,00' },
    { image: bagClutch, name: t.products.clutch, price: '€40,00' },
    { image: bagBucket, name: t.products.bucket, price: '€40,00' },
    { image: bagShoulder, name: t.products.shoulder, price: '€40,00' },
    { image: bagMini, name: t.products.mini, price: '€40,00' },
  ];

  return (
    <section id="collezioni" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground tracking-wide">
            {t.collections.title}
          </h2>
          <p className="mt-4 font-body text-muted-foreground text-base max-w-md mx-auto font-light">
            {t.collections.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-body text-sm tracking-wide text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {product.price}
                  </p>
                </div>
                <span className="font-body text-xs tracking-[0.15em] uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t.collections.viewDetails}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
