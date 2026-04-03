"use client";

import { useState } from "react";
import { useLocale, t } from "@/lib/i18n";
import { faq } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

function FAQItem({
  question,
  answer,
  delay,
}: {
  question: string;
  answer: string;
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <RevealOnScroll delay={delay}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 border-b border-charcoal/10 group cursor-pointer"
      >
        <div className="flex justify-between items-center gap-4">
          <h3 className="font-serif text-lg md:text-xl text-charcoal group-hover:text-taupe-dark transition-colors">
            {question}
          </h3>
          <span
            className={`text-taupe text-xl transition-transform duration-300 shrink-0 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-charcoal-light/70 leading-relaxed font-sans pr-8">
            {answer}
          </p>
        </div>
      </button>
    </RevealOnScroll>
  );
}

export default function FAQ() {
  const { locale } = useLocale();

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-warm-white">
      <div className="max-w-2xl mx-auto">
        <SectionHeading>{t(faq.title, locale)}</SectionHeading>

        <div>
          {faq.items.map((item, i) => (
            <FAQItem
              key={i}
              question={t(item.question, locale)}
              answer={t(item.answer, locale)}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
