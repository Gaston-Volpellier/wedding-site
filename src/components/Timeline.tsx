'use client';

import { useLocale, t } from '@/lib/i18n';
import { programme } from '@/lib/content';
import SectionHeading from './SectionHeading';
import RevealOnScroll from './RevealOnScroll';
import AddToCalendarButton from './AddToCalendarButton';

export default function Timeline() {
  const { locale } = useLocale();
  const days = programme.days;

  return (
    <section id="programme" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>{t(programme.title, locale)}</SectionHeading>

        {/* Desktop vertical timeline */}
        <div className="hidden md:block relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

          <div className="space-y-12">
            {days.map((day, dIdx) => (
              <div key={dIdx} className="space-y-10">
                {/* Day header */}
                <RevealOnScroll>
                  <div className="relative flex justify-center">
                    <div className="bg-cream px-6 py-2 text-center">
                      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-1 font-sans">
                        {t(day.label, locale)}
                      </p>
                      <p className="font-serif text-lg text-charcoal">
                        {t(day.date, locale)}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>

                <div className="space-y-16">
                  {day.events.map((event, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <RevealOnScroll key={i} delay={i * 80}>
                        <div className="relative flex items-center">
                          {/* Dot */}
                          <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold z-10" />

                          {isLeft ? (
                            <>
                              <div className="w-1/2 pr-12 text-right">
                                <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-1 font-sans">
                                  {event.time}
                                </p>
                                <h3 className="font-serif text-xl text-charcoal mb-1">
                                  {t(event.title, locale)}
                                </h3>
                                {event.description && (
                                  <p className="text-sm text-charcoal-light/70 font-sans">
                                    {t(event.description, locale)}
                                  </p>
                                )}
                              </div>
                              <div className="w-1/2" />
                            </>
                          ) : (
                            <>
                              <div className="w-1/2" />
                              <div className="w-1/2 pl-12">
                                <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-1 font-sans">
                                  {event.time}
                                </p>
                                <h3 className="font-serif text-xl text-charcoal mb-1">
                                  {t(event.title, locale)}
                                </h3>
                                {event.description && (
                                  <p className="text-sm text-charcoal-light/70 font-sans">
                                    {t(event.description, locale)}
                                  </p>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </RevealOnScroll>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-10">
          {days.map((day, dIdx) => (
            <div key={dIdx} className="space-y-6">
              <RevealOnScroll>
                <div className="text-center">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold mb-1 font-sans">
                    {t(day.label, locale)}
                  </p>
                  <p className="font-serif text-lg text-charcoal">
                    {t(day.date, locale)}
                  </p>
                </div>
              </RevealOnScroll>
              {day.events.map((event, i) => (
                <RevealOnScroll key={i} delay={i * 60}>
                  <div className="border-l-2 border-gold/30 pl-6 py-2">
                    <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-1 font-sans">
                      {event.time}
                    </p>
                    <h3 className="font-serif text-lg text-charcoal mb-1">
                      {t(event.title, locale)}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-charcoal-light/70 font-sans">
                        {t(event.description, locale)}
                      </p>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ))}
        </div>

        <RevealOnScroll>
          <div className="flex justify-center mt-16 md:mt-20">
            <AddToCalendarButton variant="button" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
