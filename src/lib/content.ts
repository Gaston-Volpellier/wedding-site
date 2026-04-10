import type { Locale } from './i18n';

/* ──────────────────────────────────────────────
   All editable content lives here.
   Replace text, dates, and URLs to personalise.
   ────────────────────────────────────────────── */

// ─── Navigation ──────────────────────────────
export const nav: Record<Locale, { label: string; href: string }[]> = {
  fr: [
    { label: 'Infos pratiques', href: '#info' },
    { label: 'Comment venir', href: '#travel' },
    { label: 'Programme', href: '#programme' },
    { label: 'Dress code', href: '#dresscode' },
    { label: 'Liste de mariage', href: '#gifts' },
    { label: 'FAQ', href: '#faq' },
  ],
  es: [
    { label: 'Info práctica', href: '#info' },
    { label: 'Cómo llegar', href: '#travel' },
    { label: 'Programa', href: '#programme' },
    { label: 'Dress code', href: '#dresscode' },
    { label: 'Lista de bodas', href: '#gifts' },
    { label: 'FAQ', href: '#faq' },
  ],
  en: [
    { label: 'Practical info', href: '#info' },
    { label: 'Getting there', href: '#travel' },
    { label: 'Programme', href: '#programme' },
    { label: 'Dress code', href: '#dresscode' },
    { label: 'Gift list', href: '#gifts' },
    { label: 'FAQ', href: '#faq' },
  ],
};

// ─── Hero ────────────────────────────────────
export const hero = {
  names: 'Alice & Gaston',
  date: {
    fr: '26 septembre 2026',
    es: '26 de septiembre de 2026',
    en: 'September 26, 2026',
  },
  location: {
    fr: 'Domaine du Bijoutier, Drôme',
    es: 'Domaine du Bijoutier, Drôme',
    en: 'Domaine du Bijoutier, Drôme',
  },
  subtitle: {
    fr: 'Nous avons hâte de célébrer ce jour avec vous',
    es: 'Estamos deseando celebrar este día con ustedes',
    en: 'We cannot wait to celebrate this day with you',
  },
  cta: {
    fr: 'Voir le programme',
    es: 'Ver el programa',
    en: 'See the day',
  },
};

// ─── Practical information ───────────────────
export const practicalInfo = {
  title: {
    fr: 'Infos pratiques',
    es: 'Información práctica',
    en: 'Practical information',
  },
  date: {
    label: { fr: 'Date', es: 'Fecha', en: 'Date' },
    value: {
      fr: 'Samedi 26 septembre 2026',
      es: 'Sábado 26 de septiembre de 2026',
      en: 'Saturday, September 26, 2026',
    },
  },
  ceremony: {
    label: { fr: 'Cérémonie', es: 'Ceremonia', en: 'Ceremony' },
    value: {
      fr: 'Cathédrale Notre-Dame de Saint-Paul-Trois-Châteaux',
      es: 'Catedral Notre-Dame de Saint-Paul-Trois-Châteaux',
      en: 'Cathedral of Notre-Dame de Saint-Paul-Trois-Châteaux',
    },
    address: 'Rue de Mgr Sibour, 26130 Saint-Paul-Trois-Châteaux',
  },
  reception: {
    label: { fr: 'Réception', es: 'Recepción', en: 'Reception' },
    value: {
      fr: 'Domaine du Bijoutier',
      es: 'Domaine du Bijoutier',
      en: 'Domaine du Bijoutier',
    },
    address: 'Chemin du Bijoutier, 26130 Saint-Paul-Trois-Châteaux, France',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.916227304622!2d4.8994071759475695!3d44.43488060152543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b57bbd8acc02e1%3A0x89021ec77555c2f9!2sDomaine%20du%20Bijoutier%20-%20Mariages!5e0!3m2!1sen!2sfr!4v1775210755252!5m2!1sen!2sfr',
  travelNote: {
    fr: "Le domaine se trouve à 1h30 de route des gares d'Avignon ou de Valence.",
    es: 'El dominio està a 1h30 de auto de las estaciones de tren de Avignon o Valence.',
    en: 'The estate is a 1.5-hour drive from the train stations in Avignon or Valence.',
  },
};

// ─── Getting there ───────────────────────────
export const gettingThere = {
  title: {
    fr: 'Comment venir',
    es: 'Cómo llegar',
    en: 'Getting there',
  },
  methods: [
    {
      icon: 'train',
      title: { fr: 'En train', es: 'En tren', en: 'By train' },
      details: {
        fr: 'Gare de Sens (TER depuis Paris Bercy, ~1h10). Nous organiserons des navettes depuis la gare.',
        es: 'Estación de Sens (TER desde Paris Bercy, ~1h10). Organizaremos shuttles desde la estación.',
        en: 'Sens station (TER from Paris Bercy, ~1h10). We will arrange shuttles from the station.',
      },
    },
    {
      icon: 'car',
      title: { fr: 'En voiture', es: 'En coche', en: 'By car' },
      details: {
        fr: 'Depuis Paris : A6 direction Lyon, sortie Courtenay. Parking disponible sur place.',
        es: 'Desde París: A6 dirección Lyon, salida Courtenay. Estacionamiento disponible en el lugar.',
        en: 'From Paris: A6 towards Lyon, exit Courtenay. Free parking available on-site.',
      },
    },
    {
      icon: 'plane',
      title: { fr: 'En avion', es: 'En avión', en: 'By plane' },
      details: {
        fr: 'Aéroports de Paris (CDG ou Orly). Location de voiture ou TGV + TER recommandés.',
        es: 'Aeropuertos de París (CDG u Orly). Se recomienda alquilar un coche o TGV + TER.',
        en: 'Paris airports (CDG or Orly). Car rental or TGV + TER recommended.',
      },
    },
  ],
  parking: {
    fr: 'Un parking gratuit est disponible au château.',
    es: 'Hay un estacionamiento gratuito disponible en el castillo.',
    en: 'Free parking is available at the château.',
  },
  accommodation: {
    title: {
      fr: 'Hébergement',
      es: 'Alojamiento',
      en: 'Accommodation',
    },
    text: {
      fr: 'Quelques chambres sont disponibles au château (premier arrivé, premier servi). Nous recommandons également les hôtels et gîtes à proximité de Sens et Villeneuve-sur-Yonne.',
      es: 'Hay algunas habitaciones disponibles en el castillo (por orden de llegada). También recomendamos hoteles y casas rurales cerca de Sens y Villeneuve-sur-Yonne.',
      en: 'A few rooms are available at the château (first come, first served). We also recommend hotels and guesthouses near Sens and Villeneuve-sur-Yonne.',
    },
  },
  mapUrl: 'https://maps.app.goo.gl/sx6hDY5QsLikCHGM6',
};

// ─── Programme / Timeline ────────────────────
export const programme = {
  title: {
    fr: 'Programme de la journée',
    es: 'Programa del día',
    en: 'The wedding day',
  },
  events: [
    {
      time: '14:30',
      title: {
        fr: 'Accueil des invités',
        es: 'Recepción de invitados',
        en: 'Guest arrival',
      },
      description: {
        fr: 'Rendez-vous à la Cathédrale Notre-Dame de Saint-Paul-Trois-Châteaux',
        es: 'Encuentro en la Catedral Notre-Dame de Saint-Paul-Trois-Châteaux',
        en: 'Meet at the Cathedral of Notre-Dame de Saint-Paul-Trois-Châteaux',
      },
    },
    {
      time: '15:00',
      title: {
        fr: 'Cérémonie',
        es: 'Ceremonia',
        en: 'Ceremony',
      },
      description: {
        fr: 'Cérémonie religieuse',
        es: 'Ceremonia religiosa',
        en: 'Religious ceremony',
      },
    },
    {
      time: '16:30',
      title: {
        fr: "Vin d'honneur",
        es: 'Cóctel de honor',
        en: 'Cocktail reception',
      },
      description: {
        fr: 'Cocktail dans les jardins du château',
        es: 'Cóctel en los jardines del castillo',
        en: 'Cocktails in the château gardens',
      },
    },
    {
      time: '20:00',
      title: { fr: 'Dîner', es: 'Cena', en: 'Dinner' },
      description: {
        fr: 'Dîner assis dans la grande salle du château',
        es: 'Cena sentada en el gran salón del castillo',
        en: "Seated dinner in the château's grand hall",
      },
    },
    {
      time: '23:00',
      title: { fr: 'Soirée dansante', es: 'Fiesta', en: 'Party' },
      description: {
        fr: "Musique et danse jusqu'au bout de la nuit",
        es: 'Música y baile hasta el amanecer',
        en: 'Music and dancing until the early hours',
      },
    },
    {
      time: '11:00',
      title: { fr: 'Brunch', es: 'Brunch', en: 'Brunch' },
      description: {
        fr: 'Brunch du lendemain au château – dimanche matin',
        es: 'Brunch del día siguiente en el castillo – domingo por la mañana',
        en: 'Next-day brunch at the château — Sunday morning',
      },
    },
  ],
};

// ─── Dress code ──────────────────────────────
export const dressCode = {
  title: {
    fr: 'Dress code',
    es: 'Dress code',
    en: 'Dress code',
  },
  text: {
    fr: "Tenue de cocktail élégante. Nous vous invitons à privilégier des tons doux et naturels — pensez beige, terracotta, sauge, bleu poudré. Merci d'éviter le blanc, réservé à la mariée.",
    es: 'Traje de cóctel elegante. Los invitamos a privilegiar tonos suaves y naturales — piensen en beige, terracota, salvia, azul empolvado. Por favor, eviten el blanco, reservado para la novia.',
    en: 'Elegant cocktail attire. We encourage soft, natural tones — think beige, terracotta, sage, powder blue. Please avoid white, reserved for the bride.',
  },
};

// ─── Gift list ───────────────────────────────
export const giftList = {
  title: {
    fr: 'Liste de mariage',
    es: 'Lista de bodas',
    en: 'Gift list',
  },
  text: {
    fr: 'Votre présence est le plus beau des cadeaux. Si toutefois vous souhaitez nous gâter, nous avons préparé une liste de mariage en ligne.',
    es: 'Su presencia es el mejor regalo. Sin embargo, si desean hacernos un obsequio, hemos preparado una lista de bodas en línea.',
    en: 'Your presence is the greatest gift of all. However, if you would like to spoil us, we have prepared an online gift registry.',
  },
  buttonLabel: {
    fr: 'Voir la liste',
    es: 'Ver la lista',
    en: 'View the registry',
  },
  buttonUrl: 'https://www.millemercismariage.com',
  alternativeText: {
    fr: 'Si vous préférez contribuer autrement, une urne sera également à disposition le jour J.',
    es: 'Si prefieren contribuir de otra manera, habrá también una urna disponible el día de la boda.',
    en: 'If you prefer to contribute differently, a card box will also be available on the day.',
  },
};

// ─── FAQ ─────────────────────────────────────
export const faq = {
  title: { fr: 'Questions fréquentes', es: 'Preguntas frecuentes', en: 'FAQ' },
  items: [
    {
      question: {
        fr: 'À quelle heure dois-je arriver ?',
        es: '¿A qué hora debo llegar?',
        en: 'What time should I arrive?',
      },
      answer: {
        fr: "Nous vous attendons à l'église à partir de 14h30 pour une cérémonie à 15h.",
        es: 'Los esperamos en la iglesia a partir de las 14:30 para una ceremonia a las 15:00.',
        en: 'We expect guests at the church from 2:30 PM for a 3:00 PM ceremony.',
      },
    },
    {
      question: {
        fr: 'Y a-t-il un parking ?',
        es: '¿Hay estacionamiento?',
        en: 'Is there parking?',
      },
      answer: {
        fr: 'Oui, un parking gratuit est disponible.',
        es: 'Sí, hay un estacionamiento gratuito disponible.',
        en: 'Yes, free parking is available.',
      },
    },
    {
      question: {
        fr: 'Où pouvons-nous séjourner ?',
        es: '¿Dónde podemos alojarnos?',
        en: 'Where can we stay?',
      },
      answer: {
        fr: 'ASDASDASDASDDS',
        es: 'ASDASDASDASDDS',
        en: 'ASDASDASDASDDS',
      },
    },
    {
      question: {
        fr: 'Qui contacter en cas de question ?',
        es: '¿A quién contactar si tengo alguna pregunta?',
        en: 'Who should I contact with questions?',
      },
      answer: {
        fr: "N'hésitez pas à nous écrire à mariagegastonalice@gmail.com ou à contacter nos témoins.",
        es: 'No duden en escribirnos a mariagegastonalice@gmail.com o en contactar a nuestros testigos.',
        en: 'Feel free to write to us at mariagegastonalice@gmail.com or reach out to our best man / maid of honour.',
      },
    },
  ],
};

// ─── Footer ──────────────────────────────────
export const footer = {
  names: 'Alice & Gaston',
  date: {
    fr: '26 septembre 2026',
    es: '26 de septiembre de 2026',
    en: 'September 26, 2026',
  },
  message: {
    fr: 'Avec tout notre amour',
    es: 'Con todo nuestro amor',
    en: 'With all our love',
  },
};
