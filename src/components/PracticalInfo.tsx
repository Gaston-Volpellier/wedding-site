'use client';

import { useLocale, t } from '@/lib/i18n';
import { practicalInfo } from '@/lib/content';
import SectionHeading from './SectionHeading';
import RevealOnScroll from './RevealOnScroll';
import AddToCalendarButton from './AddToCalendarButton';

function InfoCard({
  label,
  value,
  address,
  mapsUrl,
  mapsLabel,
  action,
  delay = 0,
}: {
  label: string;
  value: string;
  address?: string;
  mapsUrl?: string;
  mapsLabel?: string;
  action?: React.ReactNode;
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
        {mapsUrl && mapsLabel && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-3 items-center gap-2 text-sm tracking-widest uppercase font-sans text-taupe-dark hover:text-charcoal transition-colors duration-300 border-b border-taupe/40 pb-1"
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
            {mapsLabel}
          </a>
        )}
        {action && <div className="mt-3">{action}</div>}
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
            action={<AddToCalendarButton variant="inline" />}
            delay={0}
          />
          <InfoCard
            label={t(practicalInfo.ceremony.label, locale)}
            value={t(practicalInfo.ceremony.value, locale)}
            address={practicalInfo.ceremony.address}
            mapsUrl={practicalInfo.ceremony.mapsUrl}
            mapsLabel={t(practicalInfo.mapsLinkLabel, locale)}
            delay={100}
          />
          <InfoCard
            label={t(practicalInfo.reception.label, locale)}
            value={t(practicalInfo.reception.value, locale)}
            address={practicalInfo.reception.address}
            mapsUrl={practicalInfo.reception.mapsUrl}
            mapsLabel={t(practicalInfo.mapsLinkLabel, locale)}
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
      </div>
    </section>
  );
}
