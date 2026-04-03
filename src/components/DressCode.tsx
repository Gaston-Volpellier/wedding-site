"use client";

import { useLocale, t } from "@/lib/i18n";
import { dressCode } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

const swatches = [
  { name: "Beige", color: "#d4c5a9" },
  { name: "Terracotta", color: "#c68b6e" },
  { name: "Sage", color: "#a3b18a" },
  { name: "Powder blue", color: "#b8ccd8" },
  { name: "Mauve", color: "#c4a6b5" },
];

export default function DressCode() {
  const { locale } = useLocale();

  return (
    <section id="dresscode" className="py-24 md:py-32 px-6 bg-warm-white">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading>{t(dressCode.title, locale)}</SectionHeading>

        <RevealOnScroll>
          <p className="text-charcoal-light/80 leading-relaxed font-sans text-base md:text-lg mb-10">
            {t(dressCode.text, locale)}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="flex justify-center gap-4">
            {swatches.map((s) => (
              <div key={s.name} className="group">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: s.color }}
                />
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
