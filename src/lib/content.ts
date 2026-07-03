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
    fr: '25, 26 et 27 septembre 2026',
    es: '25, 26 y 27 de septiembre de 2026',
    en: 'September 25, 26 and 27, 2026',
  },
  location: {
    fr: 'Domaine du Bijoutier, Drôme',
    es: 'Domaine du Bijoutier, Drôme',
    en: 'Domaine du Bijoutier, Drôme',
  },
  subtitle: {
    fr: 'Un voyage, une rencontre, un mariage',
    es: 'Un viaje, un encuentro, una boda',
    en: 'A journey, a meeting, a wedding',
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
      fr: '25 au 27 septembre 2026',
      es: '25 a 27 de septiembre de 2026',
      en: 'September 25 to 27, 2026',
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
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.916227304622!2d4.8994071759475695!3d44.43488060152543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b57bbd8acc02e1%3A0x89021ec77555c2f9!2sCath%C3%A9drale%20Notre-Dame%20de%20Saint-Paul-Trois-Ch%C3%A2teaux!5e0!3m2!1sen!2sfr!4v1775210755252!5m2!1sen!2sfr',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Cath%C3%A9drale%20Notre-Dame%20de%20Saint-Paul-Trois-Ch%C3%A2teaux%20Rue%20de%20Mgr%20Sibour%2026130%20Saint-Paul-Trois-Ch%C3%A2teaux',
  },
  reception: {
    label: { fr: 'Réception', es: 'Recepción', en: 'Reception' },
    value: {
      fr: 'Domaine du Bijoutier',
      es: 'Domaine du Bijoutier',
      en: 'Domaine du Bijoutier',
    },
    address: '525 route de Bayonne, 26230 Grignan',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.916227304622!2d4.8994071759475695!3d44.43488060152543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b57bbd8acc02e1%3A0x89021ec77555c2f9!2sCath%C3%A9drale%20Notre-Dame%20de%20Saint-Paul-Trois-Ch%C3%A2teaux!5e0!3m2!1sen!2sfr!4v1775210755252!5m2!1sen!2sfr',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Domaine%20du%20Bijoutier%20Chemin%20du%20Bijoutier%2026130%20Saint-Paul-Trois-Ch%C3%A2teaux%20France',
  },
  mapsLinkLabel: {
    fr: 'Voir sur Google Maps',
    es: 'Ver en Google Maps',
    en: 'View on Google Maps',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.916227304622!2d4.8994071759475695!3d44.43488060152543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b57bbd8acc02e1%3A0x89021ec77555c2f9!2sDomaine%20du%20Bijoutier%20-%20Mariages!5e0!3m2!1sen!2sfr!4v1775210755252!5m2!1sen!2sfr',
  addToCalendar: {
    buttonLabel: {
      fr: 'Ajouter au calendrier Google',
      es: 'Añadir al calendario de Google',
      en: 'Add to Google calendar',
    },
    eventTitle: {
      fr: 'Mariage Alice & Gaston',
      es: 'Boda Alice & Gaston',
      en: "Alice & Gaston's Wedding",
    },
    eventDescription: {
      fr: "Mariage d'Alice et Gaston au Domaine du Bijoutier, du 25 au 27 septembre 2026. Toute l'information sur: www.dijo-oui.com",
      es: 'Boda de Alice y Gaston en el Domaine du Bijoutier, del 25 al 27 de septiembre de 2026. Toda la información en: www.dijo-oui.com',
      en: "Alice & Gaston's wedding at Domaine du Bijoutier, September 25\u201327, 2026. All information at: www.dijo-oui.com",
    },
    eventLocation:
      'Domaine du Bijoutier, 525 route de Bayonne, 26230 Grignan, France',
    startDate: '20260925',
    endDateExclusive: '20260928',
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
      fr: 'Vous proposez ou cherchez un trajet en auto ? Inscrivez-vous sur notre feuille de covoiturage partagée.',
      es: '¿Ofrecen o buscan un viaje en auto? Inscríbanse en nuestra hoja de carpooling compartida.',
      en: 'Offering or looking for a car ride? Sign up on our shared carpooling sheet.',
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
    fr: 'Programme',
    es: 'Programa',
    en: 'Schedule',
  },
  days: [
    {
      label: { fr: 'Vendredi', es: 'Viernes', en: 'Friday' },
      date: {
        fr: '25 septembre',
        es: '25 de septiembre',
        en: 'September 25',
      },
      events: [
        {
          time: '15:00',
          title: { fr: 'Arrivée', es: 'Llegada', en: 'Arrival' },
          description: {
            fr: 'Arrivée à partir de 15h (pour ceux qui dorment sur place)',
            es: 'Llegada a partir de las 15h (para los que duerman en el lugar)',
            en: 'Arrival from 3pm (for those staying overnight)',
          },
        },
        {
          time: '16:00',
          title: {
            fr: 'Pool party',
            es: 'Pool party',
            en: 'Pool party',
          },
        },
        {
          time: '20:00',
          title: {
            fr: 'Empanadas night',
            es: 'Empanadas night',
            en: 'Empanadas night',
          },
        },
      ],
    },
    {
      label: { fr: 'Samedi', es: 'Sábado', en: 'Saturday' },
      date: {
        fr: '26 septembre',
        es: '26 de septiembre',
        en: 'September 26',
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
          time: '14:50',
          title: { fr: 'Cérémonie', es: 'Ceremonia', en: 'Ceremony' },
          description: {
            fr: 'Cérémonie religieuse',
            es: 'Ceremonia religiosa',
            en: 'Religious ceremony',
          },
        },
        {
          time: '17:00  ',
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
          time: '21:00',
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
            es: 'Música y baile hasta el fin de la noche',
            en: 'Music and dancing until the end of the night',
          },
        },
      ],
    },
    {
      label: { fr: 'Dimanche', es: 'Domingo', en: 'Sunday' },
      date: {
        fr: '27 septembre',
        es: '27 de septiembre',
        en: 'September 27',
      },
      events: [
        {
          time: '11:00',
          title: { fr: 'Brunch', es: 'Brunch', en: 'Brunch' },
          description: {
            fr: 'Brunch au domaine',
            es: 'Brunch en el dominio',
            en: 'Brunch at the domain',
          },
        },
        {
          time: '14:00',
          title: {
            fr: 'Pool party',
            es: 'Pool party',
            en: 'Pool party',
          },
        },
        {
          time: '17:00',
          title: { fr: 'Départ', es: 'Despedida', en: 'Departure' },
        },
      ],
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
    fr: 'Tenue de cocktail élégante : robes longues, sans robes blanches ni noires. Toutes les autres couleurs sont les bienvenues. Pour les hommes : costume, cravate facultative. **La palette de couleurs du mariage est donnée à titre indicatif, sans obligation.** Pour les chaussures, veuillez noter que le sol de l’espace cocktail est composé de petits cailloux, nous vous recommandons donc d’éviter les talons trop fins.',
    es: 'Traje de cóctel elegante: para las mujeres: vestidos largos, sin vestidos blancos ni negros. Todos los demás colores son bienvenidos. Para los hombres: traje, corbata opcional. **La paleta de colores de la boda es solo una guía, sin obligación.** Para el calzado tengan en cuenta que el piso del lugar donde sera el cocktail tiene pequeñas piedras, por lo que recomendamos no usar tacos muy finos.',
    en: 'Elegant cocktail attire: long dresses, no white or black dresses. All other colors are welcome. For men: suits, with ties optional. **The wedding color palette is just a guide, not a requirement.** For shoes please note that the floor of the place where the cocktail will be has small stones, so we recommend not using very thin heels.',
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
    es: 'Su presencia es el mejor regalo, no es necesario que nos den nada más. Aún así, si quieren hacernos un regalo, hemos preparado una lista de bodas en línea.',
    en: 'Your presence is the greatest gift of all, no need to give us anything more. However, if you would like to spoil us, we have prepared an online gift registry.',
  },
  buttonLabel: {
    fr: 'Voir la liste',
    es: 'Ver la lista',
    en: 'View the registry',
  },
  buttonUrl: 'https://www.millemercismariage.com/alicegaston/liste.html',
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
        fr: "Nous vous attendons à l'église à partir de 14h30 pour une cérémonie à 14h50.",
        es: 'Los esperamos en la iglesia a partir de las 14:30 para una ceremonia a las 14:50.',
        en: 'We expect guests at the church from 2:30 PM for a 2:50 PM ceremony.',
      },
    },
    {
      question: {
        fr: 'Y a-t-il un parking ?',
        es: '¿Hay estacionamiento?',
        en: 'Is there parking?',
      },
      answer: {
        fr: 'La cathédrale de la cérémonie se trouve en centre-ville, donc le stationnement peut être un peu plus compliqué. En revanche, au domaine, il y a un parking gratuit disponible.',
        es: 'La Catedral de la ceremonia queda en el centro de una ciudad por lo que estacionar puede ser un poco mas complicado. Pero en el dominio, hay un estacionamiento gratuito disponible.',
        en: 'The cathedral of the ceremony is in the center of a city, so parking can be a little more complicated. But at the domain, free parking is available.',
      },
    },
    {
      question: {
        fr: 'Où pouvons-nous séjourner ?',
        es: '¿Dónde podemos alojarnos?',
        en: 'Where can we stay?',
      },
      answer: {
        fr: 'Vous pouvez consulter Airbnb ou Booking, ou bien la liste suivante :',
        es: 'Pueden checkear Airbnb o Booking, o también la siguiente lista :',
        en: 'You can check Airbnb or Booking, or the following list:',
      },
      lodgings: {
        guestHousesTitle: {
          fr: "Chambres d'hôtes & gîtes",
          es: "Chambres d'hôtes & gîtes rurales",
          en: 'Guest houses & cottages',
        },
        guestHouses: [
          {
            name: 'Ferme le Grand Cordy',
            description: {
              fr: "Chambres et tables d'hôtes",
              es: 'Habitaciones y mesas de huéspedes',
              en: 'Rooms and guest tables',
            },
            address: '1120, Route de Montélimar',
            phones: ['+33 04 75 46 91 81'],
          },
          {
            name: 'La Maison du Moulin',
            description: {
              fr: "Chambres et tables d'hôtes",
              es: 'Habitaciones y mesas de huéspedes',
              en: 'Rooms and guest tables',
            },
            address: '550, Chemin de la Motte (Cordy)',
            phones: ['+33 04 75 46 56 94', '+33 06 23 26 23 60'],
            email: 'maisondumoulin@wanadoo.fr',
          },
          {
            name: 'La Vie de Château',
            description: {
              fr: "Maison de charme à l'entrée du château",
              es: 'Casa con encanto a la entrada del castillo',
              en: 'Charming house at the entrance of the castle',
            },
            address: '14 rue Montant au Château',
            phones: ['+33 04 75 46 57 30', '+33 06 76 52 70 96'],
            email: 'laviedechateau@gmail.com',
            website: 'www.laviedechateau26.fr',
          },
          {
            name: 'Le Clos de la Tuilière',
            description: {
              fr: "Chambres et tables d'hôtes",
              es: 'Habitaciones y mesas de huéspedes',
              en: 'Rooms and guest tables',
            },
            address: '80, Hameau de la Grande Tuilière',
            phones: ['+33 04 75 46 75 35'],
            website: 'www.leclosdelatuiliere.fr',
          },
          {
            name: 'Le Mas au Jardin Secret',
            description: {
              fr: "Un lieu de retraite provençal idéal, situé à seulement 800 mètres du plus beau château renaissance du sud-est de la France. Chambres d'hôtes.",
              es: 'Un lugar de retiro provenzal ideal; situado a tan solo 800 metros del castillo renacentista más bello del sureste de Francia. Habitaciones de huéspedes.',
              en: 'An ideal Provençal retreat located just 800 metres from the most beautiful Renaissance castle in south-east France. Guest rooms.',
            },
            address: '800 Route de Taulignan',
            phones: ['+33 04 75 00 03 83'],
            email: 'info@le-mas-au-jardin-secret.fr',
          },
          {
            name: "Le Patio Chambres d'hôtes",
            address: 'Moulin Dumas, Chemin de Carrois – 26230 Grignan',
            phones: ['+33 04 75 98 60 75'],
          },
          {
            name: 'Au fil des Flots',
            description: {
              fr: 'Gîte à 200 m du Domaine du Bijoutier',
              es: 'Casa rural a 200 m del Bijoutier',
              en: 'Country house 200 m from Le Bijoutier',
            },
            address: 'Le Foulon, 26230 Grignan',
            email: 'aufildesflots@gmail.com',
          },
          {
            name: 'La Maison Grignan',
            description: {
              fr: 'Gîte à 200 m du Domaine du Bijoutier',
              es: 'Casa rural a 200 m del Bijoutier',
              en: 'Country house 200 m from Le Bijoutier',
            },
            phones: ['+33 06 69 10 24 78'],
          },
          {
            name: 'Gîte Gonzalès',
            description: {
              fr: 'Gîte rural. Trajet aller-retour possible.',
              es: 'Casa rural. Traslado ida/vuelta posible.',
              en: 'Country house. Transfer to/from the venue possible.',
            },
            address: '95 route de Grignan, Chamaret',
            phones: ['+33 06 37 30 05 25'],
            email: 'logementsprovence@outlook.fr',
          },
        ],
        hotelsTitle: {
          fr: 'Hôtels',
          es: 'Hoteles',
          en: 'Hotels',
        },
        hotels: [
          'https://www.clairplume.com/',
          'https://www.domaine-de-montine.com',
          'https://www.labastidedegrignan.com',
        ],
      },
    },
    {
      question: {
        fr: 'Pouvons-nous prendre des photos avec nos téléphones ?',
        es: '¿Podemos tomar fotos con nuestros celulares?',
        en: 'Can we take photos with our phones?',
      },
      answer: {
        fr: "Oui, avec plaisir, mais s'il vous plaît, pas pendant la cérémonie. Il y aura un photographe professionnel qui prendra les moments les plus importants, pour que vous puissiez profiter pleinement.",
        es: '¡Si! con mucho gusto, pero por favor no durante la ceremonia. Habrá un fotografo profesional tomará los momentos mas importantes, para que ustedes puedan disfrutar a pleno.',
        en: 'Yes! with pleasure, but please no during the ceremony. There will be a professional photographer taking the most important moments, so you can enjoy to the fullest.',
      },
    },
    {
      question: {
        fr: 'Qui contacter en cas de question ?',
        es: '¿A quién contactar si tengo alguna pregunta?',
        en: 'Who should I contact with questions?',
      },
      answer: {
        fr: "N'hésitez pas à nous écrire à mariagegastonalice@gmail.com.",
        es: 'No duden en escribirnos a mariagegastonalice@gmail.com.',
        en: 'Feel free to write to us at mariagegastonalice@gmail.com.',
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
