'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocale, t } from '@/lib/i18n';
import { hero } from '@/lib/content';

const DESKTOP_CANDIDATES = [
  '/images/hero_1.jpeg',
  '/images/hero_2.jpeg',
  '/images/hero_3.jpeg',
  '/images/hero_4.jpeg',
];

const MOBILE_CANDIDATES = [
  '/images/hero_mobile_1.jpeg',
  '/images/hero_mobile_2.jpeg',
  '/images/hero_mobile_3.jpeg',
  '/images/hero_mobile_4.jpeg',
];

const INTERVAL_MS = 4000;

function probeImages(urls: string[]): Promise<string[]> {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<string | null>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(url);
          img.onerror = () => resolve(null);
          img.src = url;
        }),
    ),
  ).then((results) => results.filter((url): url is string => url !== null));
}

export default function Hero() {
  const { locale } = useLocale();
  const [desktopImages, setDesktopImages] = useState<string[]>([]);
  const [mobileImages, setMobileImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxLength = useRef(1);

  useEffect(() => {
    Promise.all([
      probeImages(DESKTOP_CANDIDATES),
      probeImages(MOBILE_CANDIDATES),
    ]).then(([desktop, mobile]) => {
      setDesktopImages(desktop);
      setMobileImages(mobile);
      maxLength.current = Math.max(desktop.length, mobile.length, 1);
    });
  }, []);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % maxLength.current);
  }, []);

  useEffect(() => {
    if (maxLength.current <= 1) return;
    const id = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(id);
  }, [advance, desktopImages, mobileImages]);

  const scrollToProgramme = () => {
    document
      .getElementById('programme')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/40 z-10" />

      {/* Desktop slides */}
      {desktopImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundColor: '#8b7d6b',
            opacity: i === activeIndex % desktopImages.length ? 1 : 0,
          }}
          aria-hidden={i !== activeIndex % desktopImages.length}
        />
      ))}

      {/* Mobile slides */}
      {mobileImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundColor: '#8b7d6b',
            opacity: i === activeIndex % mobileImages.length ? 1 : 0,
          }}
          aria-hidden={i !== activeIndex % mobileImages.length}
        />
      ))}

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase font-sans mb-6 opacity-90">
          {t(hero.date, locale)}
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
          {hero.names}
        </h1>

        <p className="font-serif text-lg md:text-xl italic opacity-90 mb-3">
          {t(hero.location, locale)}
        </p>

        <div className="w-12 h-px bg-white/50 mx-auto my-8" />

        <p className="font-sans text-base md:text-lg opacity-80 mb-10 max-w-md mx-auto">
          {t(hero.subtitle, locale)}
        </p>

        <button
          onClick={scrollToProgramme}
          className="inline-block border border-white/60 text-white px-8 py-3 text-sm tracking-widest uppercase font-sans hover:bg-white hover:text-charcoal transition-colors duration-300 cursor-pointer"
        >
          {t(hero.cta, locale)}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-px h-12 bg-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  );
}
