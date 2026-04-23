"use client";

import { useLocale, t } from "@/lib/i18n";
import { gettingThere } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

const icons: Record<string, React.ReactNode> = {
  train: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M4 15.5C4 17.433 5.567 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.933 0 3.5-1.567 3.5-3.5V5c0-2.5-2-4-5-4H9C6 1 4 2.5 4 5v10.5z" />
      <path d="M4 11h16" />
      <path d="M12 11V1" />
      <circle cx="8.5" cy="15" r="1" />
      <circle cx="15.5" cy="15" r="1" />
    </svg>
  ),
  car: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  plane: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
};

export default function GettingThere() {
  const { locale } = useLocale();

  return (
    <section id="travel" className="py-24 md:py-32 px-6 bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>{t(gettingThere.title, locale)}</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {gettingThere.methods.map((method, i) => (
            <RevealOnScroll key={method.icon} delay={i * 120}>
              <div className="text-center">
                <div className="text-taupe mx-auto mb-4 flex justify-center">
                  {icons[method.icon]}
                </div>
                <h3 className="font-serif text-xl mb-3 text-charcoal">
                  {t(method.title, locale)}
                </h3>
                <p className="text-sm text-charcoal-light/80 leading-relaxed font-sans">
                  {t(method.details, locale)}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <p className="text-center text-sm text-charcoal-light/70 font-sans mb-12">
            {t(gettingThere.parking, locale)}
          </p>
        </RevealOnScroll>

        {/* Carpooling */}
        <RevealOnScroll>
          <div className="bg-cream/60 p-8 md:p-12 text-center max-w-2xl mx-auto mb-10">
            <div className="text-taupe mx-auto mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                <circle cx="6.5" cy="16.5" r="2.5" />
                <circle cx="16.5" cy="16.5" r="2.5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-4 text-charcoal">
              {t(gettingThere.carpooling.title, locale)}
            </h3>
            <p className="text-sm text-charcoal-light/80 leading-relaxed font-sans mb-6">
              {t(gettingThere.carpooling.text, locale)}
            </p>
            <a
              href={gettingThere.carpooling.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-charcoal/40 text-charcoal px-8 py-3 text-sm tracking-widest uppercase font-sans hover:bg-charcoal hover:text-white transition-colors duration-300"
            >
              {t(gettingThere.carpooling.buttonLabel, locale)}
            </a>
          </div>
        </RevealOnScroll>

        {/* Map link */}
        <RevealOnScroll>
          <div className="text-center mt-12">
            <a
              href={gettingThere.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-sans text-taupe-dark hover:text-charcoal transition-colors duration-300 border-b border-taupe/40 pb-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Google Maps
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
