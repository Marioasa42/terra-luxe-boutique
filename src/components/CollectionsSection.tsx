import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import pochette1 from '@/assets/pochettes/1.jpg';
import pochette2 from '@/assets/pochettes/2.jpg';
import pochette3 from '@/assets/pochettes/3.jpg';
import pochette4 from '@/assets/pochettes/4.jpg';
import pochette5 from '@/assets/pochettes/5.jpg';
import pochette6 from '@/assets/pochettes/6.jpg';
import pochette7 from '@/assets/pochettes/7.jpg';
import pochette8 from '@/assets/pochettes/8.jpg';
import pochette9 from '@/assets/pochettes/9.jpg';
import pochette10 from '@/assets/pochettes/10.jpg';
import pochette11 from '@/assets/pochettes/11.jpg';
import pochette12 from '@/assets/pochettes/12.jpg';
import pochette13 from '@/assets/pochettes/13.jpg';
import roja from '@/assets/lujo/roja.jpg';
import blanca from '@/assets/lujo/blanca.jpg';
import marron from '@/assets/lujo/marron.jpg';
import negra from '@/assets/lujo/negra.jpg';
import rojas1 from '@/assets/lujo/rojas/1.jpg';
import rojas2 from '@/assets/lujo/rojas/2.jpg';
import rojas3 from '@/assets/lujo/rojas/3.jpg';
import rojas4 from '@/assets/lujo/rojas/4.jpg';
import blancas1 from '@/assets/lujo/blancas/1.jpg';
import blancas2 from '@/assets/lujo/blancas/2.jpg';
import blancas3 from '@/assets/lujo/blancas/3.jpg';
import blancas4 from '@/assets/lujo/blancas/4.jpg';
import marrones1 from '@/assets/lujo/marrones/1.jpg';
import marrones2 from '@/assets/lujo/marrones/2.jpg';
import marrones3 from '@/assets/lujo/marrones/3.jpg';
import marrones4 from '@/assets/lujo/marrones/4.jpg';
import negras1 from '@/assets/lujo/negras/1.jpg';
import negras2 from '@/assets/lujo/negras/2.jpg';
import negras3 from '@/assets/lujo/negras/3.jpg';
import negras4 from '@/assets/lujo/negras/4.jpg';

type Product = {
  name: string;
  price: string;
  image?: string;
  album?: string[];
};

type CollectionBlock = {
  title: string;
  products: Product[];
};

const pochetteImages = [
  pochette1,
  pochette2,
  pochette3,
  pochette4,
  pochette5,
  pochette6,
  pochette7,
  pochette8,
  pochette9,
  pochette10,
  pochette11,
  pochette12,
  pochette13,
];

const luxuryProducts: Product[] = [
  {
    name: 'Roja',
    price: '€280,00',
    image: roja,
    album: [rojas1, rojas2, rojas3, rojas4],
  },
  {
    name: 'Blanca',
    price: '€280,00',
    image: blanca,
    album: [blancas1, blancas2, blancas3, blancas4],
  },
  {
    name: 'Marron',
    price: '€280,00',
    image: marron,
    album: [marrones1, marrones2, marrones3, marrones4],
  },
  {
    name: 'Negra',
    price: '€250,00',
    image: negra,
    album: [negras1, negras2, negras3, negras4],
  },
];

const collections: CollectionBlock[] = [
  {
    title: 'Eredità di Lusso',
    products: luxuryProducts,
  },
  {
    title: 'Pochette',
    products: pochetteImages.map((image) => ({
      name: 'Pochette',
      price: '€120,00',
      image,
    })),
  },
  {
    title: 'Mare',
    products: Array.from({ length: 16 }, (_, i) => ({
      name: `Mare ${String(i + 1).padStart(2, '0')}`,
      price: '€40,00',
    })),
  },
];

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      }}
      className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-square overflow-hidden border border-border transition-transform duration-500 group-hover:scale-[0.985]">
        {product.image ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-card via-secondary to-nude" />
        )}
        <div className="absolute inset-4 border border-primary/10" />
        {!(product.name === 'Pochette' && product.image) && (
          <div className="relative flex h-full items-center justify-center px-5 text-center">
            <span className="font-body text-[10px] md:text-xs tracking-[0.24em] uppercase text-white/90 leading-5">
              {product.name}
            </span>
          </div>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-body text-sm tracking-[0.16em] uppercase text-foreground">
            {product.name}
          </h3>
          <p className="mt-2 font-body text-sm text-muted-foreground">{product.price}</p>
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
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openProduct = (product: Product) => {
    setActiveProduct(product);
    setDialogOpen(true);
  };

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setActiveProduct(null);
    }
  };

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
                <h3 className="font-display text-4xl lg:text-5xl font-light tracking-wide text-foreground">
                  {collection.title}
                </h3>
                <p className="font-body text-xs tracking-[0.24em] uppercase text-muted-foreground">
                  {collection.products.length} pezzi
                </p>
              </div>

              <Carousel opts={{ align: 'start', loop: false }} className="relative">
                <CarouselContent className="-ml-6">
                  {collection.products.map((product, index) => (
                    <CarouselItem
                      key={`${collection.title}-${index}`}
                      className="pl-6 basis-[82%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <ProductCard product={product} onClick={() => openProduct(product)} />
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

      <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
        {activeProduct ? (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{activeProduct.name}</DialogTitle>
              <DialogDescription>{activeProduct.price}</DialogDescription>
            </DialogHeader>
            {activeProduct.album ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {activeProduct.album.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${activeProduct.name} ${index + 1}`}
                    className="h-60 w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6">
                {activeProduct.image && (
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="h-80 w-full rounded-xl object-cover"
                  />
                )}
              </div>
            )}
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  );
}
