'use client';

import { useState } from 'react';
import { useLocale, t } from '@/lib/i18n';
import { faq } from '@/lib/content';
import SectionHeading from './SectionHeading';
import RevealOnScroll from './RevealOnScroll';

type ProcessedLodging = {
  name: string;
  description?: string;
  address?: string;
  phones?: string[];
  email?: string;
  website?: string;
};

type ProcessedLodgings = {
  guestHousesTitle: string;
  guestHouses: ProcessedLodging[];
  hotelsTitle: string;
  hotels: string[];
};

function FAQItem({
  question,
  answer,
  link,
  linkLabel,
  lodgings,
  delay,
}: {
  question: string;
  answer: string;
  link?: string;
  linkLabel?: string;
  lodgings?: ProcessedLodgings;
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <RevealOnScroll delay={delay}>
      <div className="border-b border-charcoal/10">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full text-left py-6 group cursor-pointer"
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className="font-serif text-lg md:text-xl text-charcoal group-hover:text-taupe-dark transition-colors">
              {question}
            </h3>
            <span
              className={`text-taupe text-xl transition-transform duration-300 shrink-0 ${
                open ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </div>
        </button>
        <div
          className={`grid transition-all duration-300 ${
            open
              ? 'grid-rows-[1fr] opacity-100 pb-6'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm text-charcoal-light/70 leading-relaxed font-sans pr-8">
              {answer}
            </p>

            {lodgings && (
              <div className="mt-6 space-y-6 pr-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-taupe-dark font-sans mb-4">
                    {lodgings.guestHousesTitle}
                  </p>
                  <div className="space-y-5">
                    {lodgings.guestHouses.map((house, i) => (
                      <div key={i} className="text-sm font-sans space-y-0.5">
                        <p className="font-semibold text-charcoal">{house.name}</p>
                        {house.description && (
                          <p className="text-charcoal-light/70 italic">{house.description}</p>
                        )}
                        {house.address && (
                          <p className="text-charcoal-light/70">{house.address}</p>
                        )}
                        {house.phones?.map((phone, pi) => (
                          <p key={pi} className="text-charcoal-light/70">
                            <a
                              href={`tel:${phone.replace(/\s/g, '')}`}
                              className="hover:text-charcoal transition-colors"
                            >
                              {phone}
                            </a>
                          </p>
                        ))}
                        {house.email && (
                          <p>
                            <a
                              href={`mailto:${house.email}`}
                              className="text-taupe-dark hover:text-charcoal transition-colors"
                            >
                              {house.email}
                            </a>
                          </p>
                        )}
                        {house.website && (
                          <p>
                            <a
                              href={
                                house.website.startsWith('http')
                                  ? house.website
                                  : `https://${house.website}`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-taupe-dark hover:text-charcoal transition-colors"
                            >
                              {house.website}
                            </a>
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-taupe-dark font-sans mb-3">
                    {lodgings.hotelsTitle}
                  </p>
                  <div className="space-y-1">
                    {lodgings.hotels.map((url, i) => (
                      <p key={i}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-sans text-charcoal-light/70 hover:text-charcoal transition-colors"
                        >
                          {url}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {link && linkLabel && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 items-center gap-2 text-xs tracking-widest uppercase font-sans text-taupe-dark hover:text-charcoal transition-colors duration-300 border-b border-taupe/40 pb-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {linkLabel}
              </a>
            )}
          </div>
        </div>
      </div>
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
          {faq.items.map((item, i) => {
            const rawLodgings = 'lodgings' in item ? item.lodgings : undefined;
            const processedLodgings = rawLodgings
              ? {
                  guestHousesTitle: t(rawLodgings.guestHousesTitle, locale),
                  guestHouses: rawLodgings.guestHouses.map((gh) => ({
                    ...gh,
                    description: gh.description
                      ? t(gh.description, locale)
                      : undefined,
                  })),
                  hotelsTitle: t(rawLodgings.hotelsTitle, locale),
                  hotels: rawLodgings.hotels,
                }
              : undefined;

            return (
              <FAQItem
                key={i}
                question={t(item.question, locale)}
                answer={t(item.answer, locale)}
                link={'link' in item ? item.link : undefined}
                linkLabel={
                  'linkLabel' in item && item.linkLabel
                    ? t(item.linkLabel, locale)
                    : undefined
                }
                lodgings={processedLodgings}
                delay={i * 80}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
