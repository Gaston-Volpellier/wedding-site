'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

export type Locale = 'fr' | 'es' | 'en';

function detectLocale(): Locale {
  const langCode = (navigator.language || '').split('-')[0].toLowerCase();

  if (langCode === 'es') return 'es';
  if (langCode === 'en') return 'en';

  return 'fr';
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'fr',
  setLocale: () => {},
});

const subscribe = () => () => {};
const serverLocale = (): Locale => 'fr';

export function I18nProvider({ children }: { children: ReactNode }) {
  const detected = useSyncExternalStore(subscribe, detectLocale, serverLocale);
  const [override, setOverride] = useState<Locale | null>(null);

  const locale = override ?? detected;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setOverride(l);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  return useContext(I18nContext);
}

export function t<T>(translations: Record<Locale, T>, locale: Locale): T {
  return translations[locale];
}
