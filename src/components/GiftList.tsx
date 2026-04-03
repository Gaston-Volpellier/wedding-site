"use client";

import { useLocale, t } from "@/lib/i18n";
import { giftList } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

export default function GiftList() {
  const { locale } = useLocale();

  return (
    <section id="gifts" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading>{t(giftList.title, locale)}</SectionHeading>

        <RevealOnScroll>
          <p className="text-charcoal-light/80 leading-relaxed font-sans text-base md:text-lg mb-10">
            {t(giftList.text, locale)}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <a
            href={giftList.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-charcoal/30 text-charcoal px-10 py-3.5 text-sm tracking-widest uppercase font-sans hover:bg-charcoal hover:text-cream transition-colors duration-300"
          >
            {t(giftList.buttonLabel, locale)}
          </a>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="mt-10 text-sm text-charcoal-light/60 font-sans italic">
            {t(giftList.alternativeText, locale)}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
