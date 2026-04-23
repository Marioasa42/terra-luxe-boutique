const storyText =
  'Soy venezolana, graduada en Diseño de Modas, con más de 20 años de experiencia. Hace 9 años comencé con la juta en tela, un material reciclable, y empecé a personalizar mis creaciones. Las playas de Pesaro se llenaron de mis diseños, y allí me di cuenta de la magia y el potencial de este maravilloso proyecto. Hoy construyo cada bolso en cantidades limitadas. Realizo mis propios bocetos y colaboro con artesanos italianos para crear un producto Made in Italy, con alma venezolana y amor italiano, dándole importancia al país donde vivo. Detrás de cada producto está mi historia de emigración, todo lo que he aprendido y el camino que he recorrido hasta llegar aquí, llena de amor e integración. Aquí formé mi familia, completamente italiana 🇮🇹. Ahora que mis hijas están grandes, pensé: “Es mi momento. Quiero hacer lo que amo: moda”. Hoy diseño bolsos veganos EcoGreen, con conciencia ambiental. El concepto vegano, que comenzó en la alimentación según lo que he estudiado, hoy también se extiende a la moda y la ropa. Gracias por acompañarme.';

export function BenvenuttiSection() {
  return (
    <section id="benvenutti" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-5">
            Benvenutti
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-foreground tracking-wide leading-tight">
            Borse vegane e di juta, create in serie limitate tra natura, lusso e artigianalità italiana.
          </h2>
        </div>
      </div>
    </section>
  );
}

export function BrandStorySection() {
  return (
    <section id="storia" className="py-20 lg:py-32 bg-secondary/45">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-5">
              La Historia
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-8">
              Made in Italy, alma venezolana.
            </h2>
            <p className="font-body text-sm md:text-base leading-8 text-muted-foreground font-light">
              {storyText}
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-gradient-to-br from-card via-nude to-secondary border border-border">
              <div className="absolute inset-6 border border-primary/15" />
              <div className="relative flex h-full items-center justify-center px-8 text-center">
                <span className="font-body text-xs md:text-sm tracking-[0.28em] uppercase text-muted-foreground leading-6">
                  Insertar Foto de la Diseñadora Aquí
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}