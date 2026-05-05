export type GoogleCalendarAllDayEvent = {
  title: string;
  description?: string;
  location?: string;
  // YYYYMMDD format. End date is exclusive for all-day events,
  // so a Sept 25–27 event needs startDate=20260925, endDateExclusive=20260928.
  startDate: string;
  endDateExclusive: string;
};

export function buildGoogleCalendarUrl(event: GoogleCalendarAllDayEvent): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.startDate}/${event.endDateExclusive}`,
  });
  if (event.description) params.set('details', event.description);
  if (event.location) params.set('location', event.location);
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
