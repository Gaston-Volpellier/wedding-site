'use client';

import { useState, useEffect } from 'react';
import { useLocale, t, type Locale } from '@/lib/i18n';
import { nav } from '@/lib/content';
import Logo from '@/components/Logo';

const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  es: 'ES',
  en: 'EN',
};

export default function Navigation() {
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = nav[locale];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
            aria-label="Retour en haut"
          >
            <Logo
              variant={scrolled ? 'dark' : 'light'}
              className="h-9 w-auto"
              priority
            />
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-xs tracking-[0.15em] uppercase font-sans transition-colors duration-300 cursor-pointer ${
                  scrolled
                    ? 'text-charcoal-light hover:text-charcoal'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-4 border-l border-current/20 pl-4">
              {(Object.keys(localeLabels) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-xs tracking-wider font-sans px-1.5 py-0.5 transition-colors duration-300 cursor-pointer ${
                    locale === l
                      ? scrolled
                        ? 'text-charcoal font-medium'
                        : 'text-white font-medium'
                      : scrolled
                        ? 'text-charcoal/40 hover:text-charcoal'
                        : 'text-white/40 hover:text-white'
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: language + burger */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex items-center gap-1">
              {(Object.keys(localeLabels) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-xs tracking-wider font-sans px-1 transition-colors duration-300 cursor-pointer ${
                    locale === l
                      ? scrolled
                        ? 'text-charcoal font-medium'
                        : 'text-white font-medium'
                      : scrolled
                        ? 'text-charcoal/40'
                        : 'text-white/40'
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-opacity duration-300 lg:hidden flex flex-col items-center justify-center ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6 text-center">
          {links.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block font-serif text-2xl text-charcoal hover:text-taupe-dark transition-colors cursor-pointer"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
