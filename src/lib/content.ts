import type { Locale } from './i18n';

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
        fr: "Depuis Paris : Gare de Lyon jusqu'à Valence TGV (~2h10) ou Avignon TGV (~2h30). Et de là jusqu'à Grignan en auto, ~1h.",
        es: 'Desde Paris Gare de Lyon hasta Valence TGV (~2h10) o Avignon TGV (~2h30). Y desde cualquiera de ellas hasta Grignan en auto, ~1h.',
        en: 'From Paris Gare de Lyon to Valence TGV (~2h10) or Avignon TGV (~2h30). And from either of them to Grignan by car, ~1h.',
      },
    },
    {
      icon: 'car',
      title: { fr: 'En voiture', es: 'En coche', en: 'By car' },
      details: {
        fr: "Depuis Paris, 7h de route jusqu'à Grignan.",
        es: 'Desde París, 7h de ruta hasta Grignan.',
        en: 'From Paris, 7h drive to Grignan.',
      },
    },
    {
      icon: 'plane',
      title: { fr: 'En avion', es: 'En avión', en: 'By plane' },
      details: {
        fr: 'Les aéroports les plus proches sont Aix-en-Provence ou Marseille.',
        es: 'Los aeropuertos mas cercanos son Aix-en-Provence o Marsella.',
        en: 'The nearest airports are Aix-en-Provence or Marseille.',
      },
    },
  ],
  parking: {
    fr: 'Un parking gratuit est disponible au domaine.',
    es: 'Hay un estacionamiento gratuito disponible en el dominio.',
    en: 'Free parking is available at the domain.',
  },
  carpooling: {
    title: {
      fr: 'Covoiturage',
      es: 'Carpooling',
      en: 'Carpooling',
    },
    text: {
      fr: 'Vous proposez ou cherchez un trajet ? Inscrivez-vous sur notre feuille de covoiturage partagée.',
      es: '¿Ofrecen o buscan un viaje? Inscríbanse en nuestra hoja de carpooling compartida.',
      en: 'Offering or looking for a ride? Sign up on our shared carpooling sheet.',
    },
    buttonLabel: {
      fr: 'Voir la feuille de covoiturage',
      es: 'Ver la hoja de carpooling',
      en: 'View the carpooling sheet',
    },
    buttonUrl:
      'https://docs.google.com/spreadsheets/d/1iRLYBOoClAmuXdrqNgxUCodsKDaemEmBOv3tPOqT4aM/edit?usp=sharing',
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
        fr: 'Cocktail dans les jardins du domaine',
        es: 'Cóctel en los jardines del dominio',
        en: 'Cocktails in the domain gardens',
      },
    },
    {
      time: '20:00',
      title: { fr: 'Dîner', es: 'Cena', en: 'Dinner' },
      description: {
        fr: 'Dîner assis',
        es: 'Cena sentados',
        en: 'Seated dinner',
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
        fr: 'Brunch du lendemain au domaine – dimanche matin',
        es: 'Brunch del día siguiente en el dominio – domingo por la mañana',
        en: 'Next-day brunch at the domain — Sunday morning',
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
    fr: 'Votre présence est le plus beau des cadeaux, il n’est pas nécessaire de nous offrir autre chose. Si toutefois vous souhaitez nous gâter, nous avons préparé une liste de mariage en ligne.',
    es: 'Su presencia es el mejor regalo, no es necesario que nos den nada más. Sin embargo, si desean hacernos un obsequio, hemos preparado una lista de bodas en línea.',
    en: 'Your presence is the greatest gift of all, no need to give us anything more. However, if you would like to spoil us, we have prepared an online gift registry.',
  },
  buttonLabel: {
    fr: 'Voir la liste',
    es: 'Ver la lista',
    en: 'View the registry',
  },
  buttonUrl: 'https://www.millemercismariage.com/alicegaston/liste.html',
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
        fr: "N'hésitez pas à nous écrire à mariagegastonalice@gmail.com ou par whatsapp: Gastón REDACTED, Alice REDACTED.",
        es: 'No duden en escribirnos a mariagegastonalice@gmail.com o por whatsapp: Gastón REDACTED, Alice REDACTED.',
        en: 'Feel free to write to us at mariagegastonalice@gmail.com or by whatsapp: Gaston REDACTED, Alice REDACTED.',
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
