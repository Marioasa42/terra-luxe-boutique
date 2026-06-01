import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, MessageCircle } from 'lucide-react';
import logoImage from '@/assets/logo.png';

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center justify-center gap-3">
              <img src={logoImage} alt="Logo Araquin Sánchez" className="h-10 w-auto object-contain" />
              <h3 className="font-body text-lg lg:text-xl font-light tracking-[0.35em] uppercase">ARAQUIN SÁNCHEZ</h3>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 font-light leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#storia" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Storia
                </a>
              </li>
              <li>
                <a href="#collezioni" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.collections}
                </a>
              </li>
              <li>
                <a href="#sostenibilita" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.sustainability}
                </a>
              </li>
              <li>
                <a href="#contatti" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/araquinsanchez?igsh=Znh6czBpcXQ0ejVy" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/50">
              {t.footer.contact}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin size={16} />
                <span className="font-body text-sm">{t.footer.address}</span>
              </div>
              <a
                href="https://wa.me/393883978439"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle size={16} />
                <span className="font-body text-sm">+39 388 397 8439</span>
              </a>
              <a
                href="mailto:carmenaraquin@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                <span className="font-body text-sm">carmenaraquin@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40 tracking-wide">
            © {new Date().getFullYear()} ARAQUIN SÁNCHEZ. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
