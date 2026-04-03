"use client";

import { useLocale, t } from "@/lib/i18n";
import { practicalInfo } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

function InfoCard({
  label,
  value,
  address,
  delay = 0,
}: {
  label: string;
  value: string;
  address?: string;
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="text-center p-6">
        <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-3 font-sans">
          {label}
        </p>
        <p className="font-serif text-xl md:text-2xl text-charcoal mb-2">
          {value}
        </p>
        {address && (
          <p className="text-sm text-charcoal-light/70 font-sans">{address}</p>
        )}
      </div>
    </RevealOnScroll>
  );
}

export default function PracticalInfo() {
  const { locale } = useLocale();

  return (
    <section id="info" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>{t(practicalInfo.title, locale)}</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <InfoCard
            label={t(practicalInfo.date.label, locale)}
            value={t(practicalInfo.date.value, locale)}
            delay={0}
          />
          <InfoCard
            label={t(practicalInfo.ceremony.label, locale)}
            value={t(practicalInfo.ceremony.value, locale)}
            address={practicalInfo.ceremony.address}
            delay={100}
          />
          <InfoCard
            label={t(practicalInfo.reception.label, locale)}
            value={t(practicalInfo.reception.value, locale)}
            address={practicalInfo.reception.address}
            delay={200}
          />
        </div>

        {/* Map placeholder */}
        <RevealOnScroll>
          <div className="w-full aspect-video bg-warm-white rounded-sm overflow-hidden mb-8">
            <iframe
              src={practicalInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
              className="w-full h-full"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-center text-charcoal-light/80 font-sans text-sm md:text-base max-w-2xl mx-auto">
            {t(practicalInfo.travelNote, locale)}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
