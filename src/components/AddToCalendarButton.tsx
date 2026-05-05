'use client';

import { useLocale, t } from '@/lib/i18n';
import { practicalInfo } from '@/lib/content';
import { buildGoogleCalendarUrl } from '@/lib/calendar';

type Variant = 'inline' | 'button';

const VARIANT_CLASSES: Record<Variant, string> = {
  inline:
    'inline-flex items-center gap-2 text-sm tracking-widest uppercase font-sans text-taupe-dark hover:text-charcoal transition-colors duration-300 border-b border-taupe/40 pb-1',
  button:
    'inline-flex items-center gap-3 border border-charcoal/40 text-charcoal px-8 py-3 text-sm tracking-widest uppercase font-sans hover:bg-charcoal hover:text-cream transition-colors duration-300',
};

export default function AddToCalendarButton({
  variant = 'button',
}: {
  variant?: Variant;
}) {
  const { locale } = useLocale();

  const href = buildGoogleCalendarUrl({
    title: t(practicalInfo.addToCalendar.eventTitle, locale),
    description: t(practicalInfo.addToCalendar.eventDescription, locale),
    location: practicalInfo.addToCalendar.eventLocation,
    startDate: practicalInfo.addToCalendar.startDate,
    endDateExclusive: practicalInfo.addToCalendar.endDateExclusive,
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={VARIANT_CLASSES[variant]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <rect x="3" y="4.5" width="18" height="16" rx="1.5" />
        <path d="M3 9h18" />
        <path d="M8 3v3" />
        <path d="M16 3v3" />
      </svg>
      {t(practicalInfo.addToCalendar.buttonLabel, locale)}
    </a>
  );
}
