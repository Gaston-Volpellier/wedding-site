"use client";

import { useLocale, t } from "@/lib/i18n";
import { hero } from "@/lib/content";

export default function Hero() {
  const { locale } = useLocale();

  const scrollToProgramme = () => {
    document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/40 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundColor: "#8b7d6b",
        }}
      />

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
