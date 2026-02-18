import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/393000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.footer.whatsapp}
      className="fixed bottom-6 right-6 z-50 bg-olive text-olive-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle size={26} />
    </a>
  );
}
