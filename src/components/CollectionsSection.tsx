import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type CollectionBlock = {
  title: string;
  count: number;
};

const collections: CollectionBlock[] = [
  { title: 'Eredità di Lusso', count: 4 },
  { title: 'Pochet', count: 15 },
  { title: 'Mare', count: 16 },
];

function ProductPlaceholder({ collection, index }: { collection: string; index: number }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-card via-secondary to-nude border border-border transition-transform duration-500 group-hover:scale-[0.985]">
        <div className="absolute inset-4 border border-primary/10" />
        <div className="relative flex h-full items-center justify-center px-5 text-center">
          <span className="font-body text-[10px] md:text-xs tracking-[0.24em] uppercase text-muted-foreground leading-5">
            Insertar Imagen Producto Aquí
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-body text-sm tracking-[0.16em] uppercase text-foreground">
            {collection} {String(index).padStart(2, '0')}
          </h3>
          <p className="mt-2 font-body text-sm text-muted-foreground">€40,00</p>
        </div>
        <span className="hidden sm:inline-block font-body text-[10px] tracking-[0.2em] uppercase text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Scopri
        </span>
      </div>
    </article>
  );
}

export function CollectionsSection() {
  const { t } = useLanguage();

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

        <div className="space-y-20 lg:space-y-28">
          {collections.map((collection) => (
            <div key={collection.title}>
              <div className="mb-8 flex items-end justify-between gap-6">
                <h3 className="font-display text-3xl lg:text-4xl font-light tracking-wide text-foreground">
                  {collection.title}
                </h3>
                <p className="font-body text-xs tracking-[0.24em] uppercase text-muted-foreground">
                  {collection.count} pezzi
                </p>
              </div>

              <Carousel opts={{ align: 'start', loop: false }} className="relative">
                <CarouselContent className="-ml-6">
                  {Array.from({ length: collection.count }, (_, index) => (
                    <CarouselItem
                      key={`${collection.title}-${index}`}
                      className="pl-6 basis-[82%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <ProductPlaceholder collection={collection.title} index={index + 1} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:inline-flex left-auto right-12 -top-14 border-primary/25 bg-background text-primary hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="hidden lg:inline-flex right-0 -top-14 border-primary/25 bg-background text-primary hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
