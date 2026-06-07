'use client';

import { Fragment } from 'react';
import { useLocale, t } from '@/lib/i18n';
import { dressCode } from '@/lib/content';
import SectionHeading from './SectionHeading';
import RevealOnScroll from './RevealOnScroll';

const swatches = [
  { name: 'Soft Blush Pink', color: '#F8C8C4' },
  { name: 'Warm Peach', color: '#FFB07C' },
  { name: 'Dusty Mauve', color: '#D8A0A8' },
  { name: 'Fresh Sage Green', color: '#B8C4A0' },
];

// Renders a string with `**...**` segments wrapped in <strong>.
function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-medium text-charcoal">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function DressCode() {
  const { locale } = useLocale();

  return (
    <section id="dresscode" className="py-24 md:py-32 px-6 bg-warm-white">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading>{t(dressCode.title, locale)}</SectionHeading>

        <RevealOnScroll>
          <p className="text-charcoal-light/80 leading-relaxed font-sans text-base md:text-lg mb-10">
            {renderBold(t(dressCode.text, locale))}
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
