import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    nav: {
      home: 'Home',
      shop: 'Shop',
      menu: 'Speisekarte',
      reservation: 'Reservierung',
      events: 'Events',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
      openingHours: 'Öffnungszeiten',
      vouchers: 'Gutscheine'
    },
    
    // Hero
    'hero.title': 'Oberkogler Alm',
    'hero.subtitle': 'Willkommen auf 1.350m Seehöhe – Wo alpine Tradition auf herzliche Gastfreundschaft trifft',
    'hero.toShop': 'Produkte entdecken',
    'hero.learnMore': 'Mehr erfahren',
    'hero.reserve': 'Tisch reservieren',
    
    // About
    'about.title': 'Willkommen auf der Oberkogler Alm',
    'about.text': 'Hoch über dem Ennstal, umgeben von majestätischen Gipfeln, liegt unsere Oberkogler Alm. Seit Generationen bewahren wir hier die Traditionen unserer Vorfahren und verwöhnen unsere Gäste mit authentischer steirischer Küche, hausgemachten Spezialitäten und einer Aussicht, die man nie vergisst. Ob Wanderer, Familien oder Genießer – bei uns finden Sie Ruhe, Herzlichkeit und echten Almgenuss.',
    'about.regional': '100% Regional',
    'about.regionalText': 'Alle Produkte stammen direkt von unserer Alm und aus der umliegenden Region',
    'about.tradition': 'Gelebte Tradition',
    'about.traditionText': 'Rezepte und Handwerk, weitergegeben von Generation zu Generation',
    'about.quality': 'Höchste Qualität',
    'about.qualityText': 'Mit Liebe und Sorgfalt hergestellt – schmeckt man in jedem Bissen',
    
    // Team
    'team.title': 'Unser Team',
    'team.subtitle': 'Die Herzen hinter der Oberkogler Alm – mit Leidenschaft für Sie da',
    'team.owner': 'Familie Schwaiger',
    'team.ownerRole': 'Inhaber & Gastgeber',
    'team.ownerDesc': 'Mit Herz und Seele führen wir die Tradition unserer Alm in dritter Generation fort',
    'team.chef': 'Unsere Küche',
    'team.chefRole': 'Kulinarische Erlebnisse',
    'team.chefDesc': 'Täglich frisch gekocht nach überlieferten Rezepten mit regionalen Zutaten',
    'team.service': 'Unser Service-Team',
    'team.serviceRole': 'Herzliche Betreuung',
    'team.serviceDesc': 'Wir sorgen dafür, dass Sie sich bei uns wie zu Hause fühlen',
    
    // Gallery
    'gallery.title': 'Impressionen',
    'gallery.subtitle': 'Erleben Sie die Schönheit unserer Alm – klicken Sie für die Vollansicht',
    
    // Products
    products: {
      title: 'Unsere Alm-Produkte',
      subtitle: 'Handgemachte Spezialitäten direkt von unserer Alm – zum Mitnehmen oder Verschenken',
      addToCart: 'Kaufen'
    },
    
    // Social Media
    'social.title': 'Folgen Sie uns auf Social Media',
    
    // Virtual Tour
    'tour.title': '3D Rundgang',
    'tour.text': 'Erkunden Sie unsere Alm virtuell und spüren Sie die einzigartige Atmosphäre schon vor Ihrem Besuch.',
    'tour.button': 'Virtuelle Tour starten',
    
    // Contact
    'contact.title': 'So finden Sie uns',
    'contact.visit': 'Besuchen Sie uns',
    'contact.hours': 'Öffnungszeiten',
    'contact.monday': 'Montag',
    'contact.tuesday': 'Dienstag bis Sonntag',
    'contact.closed': 'Ruhetag',
    'contact.kitchen': 'Küche geöffnet',
    
    // Shop
    shop: {
      title: 'Unser Alm-Shop',
      subtitle: 'Entdecken Sie unsere handverlesenen alpinen Spezialitäten – mit Liebe und Tradition auf unserer Alm hergestellt.',
      error: 'Fehler beim Laden der Produkte',
      tryAgain: 'Bitte versuchen Sie es später erneut',
      noProducts: 'Keine Produkte gefunden',
      noImage: 'Kein Bild verfügbar',
      addToCart: 'In den Warenkorb',
      soldOut: 'Ausverkauft',
      freeShipping: 'Kostenloser Versand',
      freeShippingText: 'Bei Bestellungen über €50'
    },
    
    // Menu
    menu: {
      title: 'Speisekarte',
      subtitle: 'Genießen Sie unsere traditionellen Alm-Spezialitäten – frisch zubereitet mit regionalen Zutaten',
      qrTitle: 'Speisekarte QR-Code',
      qrSubtitle: 'Scannen Sie den QR-Code für unsere aktuelle Speisekarte',
      close: 'Schließen',
      viewMenu: 'Speisekarte ansehen'
    },
    
    // Reservation
    reservation: {
      title: 'Tisch Reservieren',
      subtitle: 'Sichern Sie sich Ihren Platz auf der Oberkogler Alm – wir freuen uns auf Sie!',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      date: 'Datum',
      time: 'Uhrzeit',
      guests: 'Anzahl Personen',
      message: 'Nachricht (optional)',
      submit: 'Reservierung anfragen',
      success: 'Reservierungsanfrage erfolgreich gesendet!',
      error: 'Fehler beim Senden der Reservierung'
    },
    
    // Events
    events: {
      title: 'Veranstaltungen',
      subtitle: 'Erleben Sie besondere Momente auf der Oberkogler Alm',
      noEvents: 'Aktuell keine Veranstaltungen geplant',
      date: 'Datum',
      time: 'Uhrzeit',
      location: 'Ort'
    },
    
    // Reviews
    reviews: {
      title: 'Gästebewertungen',
      subtitle: 'Was unsere Gäste über uns sagen – echte Erfahrungen, echte Begeisterung',
      reviews: 'Bewertungen',
      language: 'de',
      visitUs: 'Besuchen Sie uns auf Google Maps für mehr Rezensionen',
      googleLink: 'Zu Google Maps'
    },
    
    // Newsletter
    newsletter: {
      title: 'Bleiben Sie informiert',
      subtitle: 'Erhalten Sie News zu Events, Angeboten und saisonalen Spezialitäten',
      placeholder: 'Ihre E-Mail-Adresse',
      subscribe: 'Anmelden',
      sending: 'Wird gesendet...',
      success: 'Erfolgreich angemeldet!',
      thanks: 'Vielen Dank für Ihre Anmeldung!'
    },
    
    // Review Form
    reviewForm: {
      title: 'Teilen Sie Ihre Erfahrung',
      rating: 'Ihre Bewertung',
      name: 'Ihr Name',
      namePlaceholder: 'Max Mustermann',
      review: 'Ihre Bewertung',
      reviewPlaceholder: 'Erzählen Sie uns von Ihrem Besuch auf der Oberkogler Alm...',
      submit: 'Bewertung absenden',
      sending: 'Wird gesendet...',
      success: 'Vielen Dank für Ihre Bewertung!',
      ratingRequired: 'Bitte wählen Sie eine Bewertung'
    },
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.newsletter': 'Newsletter',
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      shop: 'Shop',
      menu: 'Menu',
      reservation: 'Reservation',
      events: 'Events',
      reviews: 'Reviews',
      contact: 'Contact',
      openingHours: 'Opening Hours',
      vouchers: 'Vouchers'
    },
    
    // Hero
    'hero.title': 'Oberkogler Alm',
    'hero.subtitle': 'Welcome at 1,350m altitude – Where alpine tradition meets heartfelt hospitality',
    'hero.toShop': 'Discover Products',
    'hero.learnMore': 'Learn More',
    'hero.reserve': 'Reserve a Table',
    
    // About
    'about.title': 'Welcome to Oberkogler Alm',
    'about.text': 'High above the Enns Valley, surrounded by majestic peaks, lies our Oberkogler Alm. For generations, we have preserved the traditions of our ancestors here, treating our guests to authentic Styrian cuisine, homemade specialties, and a view you will never forget. Whether hikers, families, or connoisseurs – with us you will find peace, warmth, and genuine alpine pleasure.',
    'about.regional': '100% Regional',
    'about.regionalText': 'All products come directly from our alpine pasture and the surrounding region',
    'about.tradition': 'Living Tradition',
    'about.traditionText': 'Recipes and craftsmanship passed down from generation to generation',
    'about.quality': 'Highest Quality',
    'about.qualityText': 'Made with love and care – you can taste it in every bite',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'The hearts behind Oberkogler Alm – passionate about serving you',
    'team.owner': 'Schwaiger Family',
    'team.ownerRole': 'Owners & Hosts',
    'team.ownerDesc': 'Continuing our alpine tradition in the third generation with heart and soul',
    'team.chef': 'Our Kitchen',
    'team.chefRole': 'Culinary Experiences',
    'team.chefDesc': 'Freshly cooked daily using traditional recipes with regional ingredients',
    'team.service': 'Our Service Team',
    'team.serviceRole': 'Warm Hospitality',
    'team.serviceDesc': 'We ensure you feel at home with us',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Experience the beauty of our alpine hut – click for full view',
    
    // Products
    products: {
      title: 'Our Alpine Products',
      subtitle: 'Handmade specialties directly from our alpine pasture – to take home or as a gift',
      addToCart: 'Buy'
    },
    
    // Social Media
    'social.title': 'Follow Us on Social Media',
    
    // Virtual Tour
    'tour.title': '3D Virtual Tour',
    'tour.text': 'Explore our alpine hut virtually and feel the unique atmosphere before your visit.',
    'tour.button': 'Start Virtual Tour',
    
    // Contact
    'contact.title': 'How to Find Us',
    'contact.visit': 'Visit Us',
    'contact.hours': 'Opening Hours',
    'contact.monday': 'Monday',
    'contact.tuesday': 'Tuesday to Sunday',
    'contact.closed': 'Closed',
    'contact.kitchen': 'Kitchen open',
    
    // Shop
    shop: {
      title: 'Our Alpine Shop',
      subtitle: 'Discover our handpicked alpine specialties – made with love and tradition on our mountain pasture.',
      error: 'Error loading products',
      tryAgain: 'Please try again later',
      noProducts: 'No products found',
      noImage: 'No image available',
      addToCart: 'Add to Cart',
      soldOut: 'Sold Out',
      freeShipping: 'Free Shipping',
      freeShippingText: 'On orders over €50'
    },
    
    // Menu
    menu: {
      title: 'Menu',
      subtitle: 'Enjoy our traditional alpine specialties – freshly prepared with regional ingredients',
      qrTitle: 'Menu QR Code',
      qrSubtitle: 'Scan the QR code for our current menu',
      close: 'Close',
      viewMenu: 'View Menu'
    },
    
    // Reservation
    reservation: {
      title: 'Reserve a Table',
      subtitle: 'Secure your spot at Oberkogler Alm – we look forward to seeing you!',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      guests: 'Number of Guests',
      message: 'Message (optional)',
      submit: 'Request Reservation',
      success: 'Reservation request sent successfully!',
      error: 'Error sending reservation'
    },
    
    // Events
    events: {
      title: 'Events',
      subtitle: 'Experience special moments at Oberkogler Alm',
      noEvents: 'No events currently scheduled',
      date: 'Date',
      time: 'Time',
      location: 'Location'
    },
    
    // Reviews
    reviews: {
      title: 'Guest Reviews',
      subtitle: 'What our guests say about us – real experiences, real enthusiasm',
      reviews: 'Reviews',
      language: 'en',
      visitUs: 'Visit us on Google Maps for more reviews',
      googleLink: 'Go to Google Maps'
    },
    
    // Newsletter
    newsletter: {
      title: 'Stay Informed',
      subtitle: 'Receive news about events, offers and seasonal specialties',
      placeholder: 'Your email address',
      subscribe: 'Subscribe',
      sending: 'Sending...',
      success: 'Successfully subscribed!',
      thanks: 'Thank you for subscribing!'
    },
    
    // Review Form
    reviewForm: {
      title: 'Share Your Experience',
      rating: 'Your Rating',
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      review: 'Your Review',
      reviewPlaceholder: 'Tell us about your visit to Oberkogler Alm...',
      submit: 'Submit Review',
      sending: 'Sending...',
      success: 'Thank you for your review!',
      ratingRequired: 'Please select a rating'
    },
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.newsletter': 'Newsletter',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object') {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
