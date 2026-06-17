"use client";

import { useLocale, t } from "@/lib/i18n";
import { footer } from "@/lib/content";
import Logo from "@/components/Logo";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="py-20 md:py-28 px-6 bg-charcoal text-white text-center">
      <Logo variant="light" className="h-20 md:h-28 w-auto mx-auto mb-8 opacity-90" />

      <p className="text-xs tracking-[0.3em] uppercase font-sans opacity-60 mb-6">
        {t(footer.message, locale)}
      </p>

      <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
        {footer.names}
      </h2>

      <p className="font-sans text-sm opacity-50">
        {t(footer.date, locale)}
      </p>

      <div className="w-8 h-px bg-gold/40 mx-auto mt-8" />
    </footer>
  );
}
