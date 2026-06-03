import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Product = {
  name: string;
  price: string;
  image?: string;
  album?: string[];
};

type CollectionBlock = {
  title: string;
  products: Product[];
  layout?: 'carousel' | 'grid';
};

const pochetteFiles = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '8B.jpg',
  '9.jpg',
  '10A.jpg',
  '10B.jpg',
  '10D.jpg',
  '10C.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
];

const mareFiles = [
  '1.jpg',
  '10.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
];

const pochetteImages = pochetteFiles.map((file) => new URL(`../assets/pochettes/${file}`, import.meta.url).href);
const mareImages = mareFiles.map((file) => new URL(`../assets/mare/${file}`, import.meta.url).href);
const lujoImages = {
  Vitto: new URL('../assets/lujo/roja.jpg', import.meta.url).href,
  Aurora: new URL('../assets/lujo/blanca.jpg', import.meta.url).href,
  Luisa: new URL('../assets/lujo/marron.jpg', import.meta.url).href,
  Tina: new URL('../assets/lujo/negra.jpg', import.meta.url).href,
};
const lujoAlbums = {
  Vitto: [
    new URL('../assets/lujo/rojas/1.jpg', import.meta.url).href,
    new URL('../assets/lujo/rojas/2.jpg', import.meta.url).href,
    new URL('../assets/lujo/rojas/3.jpg', import.meta.url).href,
    new URL('../assets/lujo/rojas/4.jpg', import.meta.url).href,
  ],
  Aurora: [
    new URL('../assets/lujo/blancas/1.jpg', import.meta.url).href,
    new URL('../assets/lujo/blancas/2.jpg', import.meta.url).href,
    new URL('../assets/lujo/blancas/3.jpg', import.meta.url).href,
    new URL('../assets/lujo/blancas/4.jpg', import.meta.url).href,
  ],
  Luisa: [
    new URL('../assets/lujo/marrones/1.jpg', import.meta.url).href,
    new URL('../assets/lujo/marrones/2.jpg', import.meta.url).href,
    new URL('../assets/lujo/marrones/3.jpg', import.meta.url).href,
    new URL('../assets/lujo/marrones/4.jpg', import.meta.url).href,
  ],
  Tina: [
    new URL('../assets/lujo/negras/1.jpg', import.meta.url).href,
    new URL('../assets/lujo/negras/2.jpg', import.meta.url).href,
    new URL('../assets/lujo/negras/3.jpg', import.meta.url).href,
    new URL('../assets/lujo/negras/4.jpg', import.meta.url).href,
  ],
};

const luxuryProducts: Product[] = [
  {
    name: 'Vitto',
    price: '€280,00',
    image: lujoImages.Vitto,
    album: lujoAlbums.Vitto,
  },
  {
    name: 'Aurora',
    price: '€280,00',
    image: lujoImages.Aurora,
    album: lujoAlbums.Aurora,
  },
  {
    name: 'Luisa',
    price: '€280,00',
    image: lujoImages.Luisa,
    album: lujoAlbums.Luisa,
  },
  {
    name: 'Tina',
    price: '€250,00',
    image: lujoImages.Tina,
    album: lujoAlbums.Tina,
  },
];

const collections: CollectionBlock[] = [
  {
    title: 'Eredità di Lusso',
    layout: 'grid',
    products: luxuryProducts,
  },
  {
    title: 'Pochette',
    layout: 'grid',
    products: pochetteImages.map((image) => ({
      name: '',
      price: '€120,00',
      image,
    })),
  },
  {
    title: 'Mare',
    layout: 'grid',
    products: mareImages.map((image, idx) => ({
      name: '',
      price: idx >= mareImages.length - 2 ? '€75,00' : '€89,00',
      image,
    })),
  },
];

function FadeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [prevSrc, setPrevSrc] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (src === currentSrc) return;
    setPrevSrc(currentSrc);
    setCurrentSrc(src);
    setVisible(false);
    const showTimeout = window.setTimeout(() => setVisible(true), 20);
    const clearTimeoutId = window.setTimeout(() => setPrevSrc(null), 720);

    return () => {
      window.clearTimeout(showTimeout);
      window.clearTimeout(clearTimeoutId);
    };
  }, [src, currentSrc]);

  return (
    <>
      {prevSrc && (
        <img
          src={prevSrc}
          alt={alt}
          className={`${className ?? ''} absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            visible ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className ?? ''} absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}

function ProductCard({ product, displayImage }: { product: Product; displayImage?: string }) {
  const altText = product.name || 'Product image';

  return (
    <article
      className="group cursor-pointer w-full"
      role="button"
      tabIndex={0}
      onClick={() => (window.location.href = '#contatti')}
    >
      {/* aspect-square = cuadrado, object-contain = sin recorte, max-w para que no crezca demasiado */}
      <div className="relative w-full aspect-square overflow-hidden border border-border transition-transform duration-500 group-hover:scale-[0.98] bg-background flex items-center justify-center">
        {displayImage ? (
          <FadeImage
            src={displayImage}
            alt={altText}
            className="absolute inset-0 h-full w-full object-contain p-4"
          />
        ) : product.image ? (
          <img
            src={product.image}
            alt={altText}
            className="absolute inset-0 h-full w-full object-contain p-4"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-card via-secondary to-nude" />
        )}

        <div className="absolute inset-3 border border-primary/10 pointer-events-none" />

        {product.name && (
          <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white bg-black/40 px-2 py-1">
              Scopri
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-0.5">
        {product.name && (
          <h3 className="font-body text-xs tracking-[0.16em] uppercase text-foreground">
            {product.name}
          </h3>
        )}
        <p className={`font-body text-xs ${product.name ? 'text-muted-foreground' : 'text-foreground'}`}>
          {product.price}
        </p>
      </div>
    </article>
  );
}

export function CollectionsSection() {
  const { t } = useLanguage();
  const [activeAlbumIndices, setActiveAlbumIndices] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlbumIndices((prev) => {
        const next: Record<string, number> = { ...prev };
        luxuryProducts.forEach((product) => {
          if (product.album) {
            const current = prev[product.name] ?? 0;
            next[product.name] = (current + 1) % product.album.length;
          }
        });
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
                <h3 className="font-display text-5xl lg:text-6xl font-light tracking-wide text-foreground">
                  {collection.title}
                </h3>
                <p className="font-body text-xs tracking-[0.24em] uppercase text-muted-foreground">
                  {collection.products.length} pezzi
                </p>
              </div>

              {collection.layout === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
                  {collection.products.map((product, index) => {
                    const displayImage = product.album
                      ? product.album[activeAlbumIndices[product.name] ?? 0]
                      : product.image;

                    return (
                      <div key={`${collection.title}-${index}`} className="flex justify-center w-full">
                        <ProductCard
                          product={product}
                          displayImage={displayImage}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <Carousel opts={{ align: 'start', loop: false }} className="relative">
                  <CarouselContent className="-ml-6">
                    {collection.products.map((product, index) => {
                      const displayImage = product.album
                        ? product.album[activeAlbumIndices[product.name] ?? 0]
                        : product.image;

                      return (
                        <CarouselItem
                          key={`${collection.title}-${index}`}
                          className="pl-6 basis-[82%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                          <div className="flex justify-center w-full">
                            <ProductCard
                              product={product}
                              displayImage={displayImage}
                            />
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="hidden lg:inline-flex left-auto right-12 -top-14 border-primary/25 bg-background text-primary hover:bg-primary hover:text-primary-foreground" />
                  <CarouselNext className="hidden lg:inline-flex right-0 -top-14 border-primary/25 bg-background text-primary hover:bg-primary hover:text-primary-foreground" />
                </Carousel>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
