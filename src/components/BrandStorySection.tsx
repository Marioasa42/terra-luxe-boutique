import { useLanguage } from '@/contexts/LanguageContext';
import designerPortrait from '@/assets/imagenDisenadora.jpg';
import logoImage from '@/assets/logo.png';

const storyTexts = {
  it: "Sono venezuelana, laureata in Design di Moda, con oltre 20 anni di esperienza. 9 anni fa ho iniziato con la juta su tela, un material riciclabile, e ho iniziato a personalizzare le mie creazioni. Le spiagge di Pesaro si sono riempite dei miei disegni, e lì mi sono resa conto della magia e del potenziale di questo meraviglioso progetto. Oggi realizzo ogni borsa in quantità limitate. Creo i miei bozzetti e collaboro con artigiani italiani per creare un prodotto Made in Italy, con anima venezuelana e amore italiano, dando importanza al paese in cui vivo. Dietro ogni prodotto c'è la mia storia di emigración, tutto ciò che ho imparato e il percorso che ho intrapreso fino ad arrivare qui, piena di amore e integrazione. Qui ho formato la mia famiglia, completamente italiana 🇮🇹. Ora che le mie figlie sono grandi, ho pensato: 'È il mio momento. Voglio fare ciò che amo: moda'. Oggi disegno borse vegane EcoGreen, con coscienza ambientale. Il concetto vegano, nato nell'alimentazione secondo quanto ho studiato, oggi si estende anche alla moda y all'abbigliamiento. Grazie per accompagnarmi.",
  es: 'Soy venezolana, graduada en Diseño de Modas, con más de 20 años de experiencia. Hace 9 años comencé con la juta en tela, un material reciclable, y empecé a personalizar mis creaciones. Las playas de Pesaro se llenaron de mis diseños, y allí me di cuenta de la magia y el potencial de este maravilloso proyecto. Hoy construyo cada bolso en cantidades limitadas. Realizo mis propios bocetos y colaboro con artesanos italianos para crear un producto Made in Italy, con alma venezolana y amor italiano, dándole importancia al país donde vivo. Detrás de cada producto está mi historia de emigración, todo lo que he aprendido y el camino que he recorrido hasta llegar aquí, llena de amor e integración. Aquí formé mi familia, completamente italiana 🇮🇹. Ahora que mis hijas están grandes, pensé: “Es mi momento. Quiero hacer lo que amo: moda”. Hoy diseño bolsos veganos EcoGreen, con conciencia ambiental. El concepto vegano, que comenzó en la alimentación según lo que he estudiado, hoy también se extiende a la moda y la ropa. Gracias por acompañarme.',
  en: "I am Venezuelan, a fashion design graduate with over 20 years of experience. Nine years ago, I began working with jute on fabric, a recyclable material, and started customizing my creations. The beaches of Pesaro were filled with my designs, and there I realized the magic and potential of this wonderful project. Today, I create each bag in limited quantities. I produce my own sketches and collaborate with Italian artisans to create a 'Made in Italy' product with a Venezuelan soul and Italian love, giving importance to the country where I live. Behind each product is my story of migration, everything I have learned, and the path I have traveled to get here, full of love and integration. Here I formed my family, completely Italian 🇮🇹. Now that my daughters are grown, I thought: 'It is my moment. I want to do what I love: fashion'. Today I design EcoGreen vegan bags, with environmental consciousness. The vegan concept, which began in food according to what I have studied, now also extends to fashion and clothing. Thank you for joining me.",
} as const;

type StoryLang = keyof typeof storyTexts;

export function BenvenuttiSection() {
  const { t } = useLanguage();

  return (
    <section id="benvenutti" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <img src={logoImage} alt="Logo Araquin Sánchez" className="h-20 w-auto object-contain" />
          </div>
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-5">
            {t.benvenutti.title}
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-foreground tracking-wide leading-tight">
            {t.benvenutti.subtitle}
          </h2>
        </div>
      </div>
    </section>
  );
}

export function BrandStorySection() {
  const { language, t } = useLanguage();

  return (
    <section id="storia" className="py-20 lg:py-32 bg-secondary/45">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-5">
              {t.nav.about}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-8">
              Made in Italy, anima venezuelana.
            </h2>

            <p className="font-body text-sm md:text-base leading-8 text-muted-foreground font-light text-justify break-words tracking-wide">
              {storyTexts[language as StoryLang]}
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border border-border shadow-lg">
              <img
                src={designerPortrait}
                alt="Araquin Sánchez — Designer"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
