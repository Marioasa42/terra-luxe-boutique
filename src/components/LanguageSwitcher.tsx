import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/i18n';

const languages: { code: Language; label: string }[] = [
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-body">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`tracking-wider transition-colors duration-300 px-1 ${
              language === lang.code
                ? 'text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-border">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
