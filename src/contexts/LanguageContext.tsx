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
    'hero.subtitle': 'Traditionelle Alpine Spezialitäten aus den Bergen',
    'hero.toShop': 'Zum Shop',
    'hero.learnMore': 'Mehr erfahren',
    
    // About
    'about.title': 'Willkommen auf der Oberkogler Alm',
    'about.text': 'Seit Generationen produzieren wir auf unserer Alm hochwertige alpine Spezialitäten. Umgeben von den majestätischen Bergen, nutzen wir traditionelle Herstellungsmethoden und die besten natürlichen Zutaten aus unserer Region.',
    'about.regional': '100% Regional',
    'about.regionalText': 'Alle Produkte aus der Region und von unserer Alm',
    'about.tradition': 'Tradition',
    'about.traditionText': 'Traditionelle Herstellung nach alten Rezepten',
    'about.quality': 'Qualität',
    'about.qualityText': 'Höchste Qualität durch sorgfältige Handarbeit',
    
    // Team
    'team.title': 'Unser Team',
    'team.subtitle': 'Lernen Sie die Menschen hinter der Oberkogler Alm kennen',
    'team.owner': 'Familie Schwaiger',
    'team.ownerRole': 'Inhaber & Gastgeber',
    'team.ownerDesc': 'Mit Herz und Leidenschaft führen wir die Tradition unserer Alm fort',
    'team.chef': 'Küchenchef',
    'team.chefRole': 'Kulinarik',
    'team.chefDesc': 'Zaubert täglich regionale Köstlichkeiten nach traditionellen Rezepten',
    'team.service': 'Service-Team',
    'team.serviceRole': 'Herzlicher Service',
    'team.serviceDesc': 'Sorgt für einen unvergesslichen Aufenthalt auf unserer Alm',
    
    // Gallery
    'gallery.title': 'Unsere Alm',
    'gallery.subtitle': 'Entdecken Sie die Schönheit der Oberkogler Alm',
    
    // Social Media
    'social.title': 'Folgen Sie uns auf Social Media',
    
    // Virtual Tour
    'tour.title': '3D Rundgang',
    'tour.text': 'Erleben Sie die Oberkogler Alm in einer virtuellen 3D-Tour und entdecken Sie unsere authentische alpine Atmosphäre.',
    'tour.button': 'Virtuelle Tour starten',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.visit': 'Besuchen Sie uns',
    'contact.hours': 'Öffnungszeiten',
    'contact.monday': 'Montag',
    'contact.tuesday': 'Dienstag bis Sonntag',
    'contact.closed': 'Ruhetag',
    'contact.kitchen': 'Küche geöffnet',
    
    // Shop
    shop: {
      title: 'Unser Shop',
      subtitle: 'Entdecken Sie unsere handverlesenen alpinen Spezialitäten, hergestellt mit Liebe und Tradition auf unserer Alm.',
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
      subtitle: 'Genießen Sie unsere traditionellen Alm-Spezialitäten',
      qrTitle: 'Speisekarte QR-Code',
      qrSubtitle: 'Scannen Sie den QR-Code für unsere aktuelle Speisekarte',
      close: 'Schließen',
      viewMenu: 'Speisekarte ansehen'
    },
    
    // Reservation
    reservation: {
      title: 'Tisch Reservieren',
      subtitle: 'Reservieren Sie Ihren Tisch auf der Oberkogler Alm',
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
      subtitle: 'Kommende Events auf der Oberkogler Alm',
      noEvents: 'Aktuell keine Veranstaltungen geplant',
      date: 'Datum',
      time: 'Uhrzeit',
      location: 'Ort'
    },
    
    // Reviews
    reviews: {
      title: 'Gästebewertungen',
      subtitle: 'Was unsere Gäste über uns sagen',
      reviews: 'Bewertungen',
      language: 'de',
      visitUs: 'Besuchen Sie uns auf Google Maps für mehr Rezensionen',
      googleLink: 'Zu Google Maps'
    },
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
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
    'hero.subtitle': 'Traditional Alpine Specialties from the Mountains',
    'hero.toShop': 'To Shop',
    'hero.learnMore': 'Learn More',
    
    // About
    'about.title': 'Welcome to Oberkogler Alm',
    'about.text': 'For generations, we have been producing high-quality alpine specialties on our mountain pasture. Surrounded by majestic mountains, we use traditional production methods and the best natural ingredients from our region.',
    'about.regional': '100% Regional',
    'about.regionalText': 'All products from the region and our alpine pasture',
    'about.tradition': 'Tradition',
    'about.traditionText': 'Traditional production according to old recipes',
    'about.quality': 'Quality',
    'about.qualityText': 'Highest quality through careful craftsmanship',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the people behind Oberkogler Alm',
    'team.owner': 'Schwaiger Family',
    'team.ownerRole': 'Owners & Hosts',
    'team.ownerDesc': 'Continuing our alpine tradition with heart and passion',
    'team.chef': 'Head Chef',
    'team.chefRole': 'Culinary',
    'team.chefDesc': 'Creates daily regional delicacies using traditional recipes',
    'team.service': 'Service Team',
    'team.serviceRole': 'Warm Service',
    'team.serviceDesc': 'Ensures an unforgettable stay at our alpine hut',
    
    // Gallery
    'gallery.title': 'Our Alpine Hut',
    'gallery.subtitle': 'Discover the beauty of Oberkogler Alm',
    
    // Social Media
    'social.title': 'Follow Us on Social Media',
    
    // Virtual Tour
    'tour.title': '3D Virtual Tour',
    'tour.text': 'Experience Oberkogler Alm in a virtual 3D tour and discover our authentic alpine atmosphere.',
    'tour.button': 'Start Virtual Tour',
    
    // Contact
    'contact.title': 'Contact',
    'contact.visit': 'Visit Us',
    'contact.hours': 'Opening Hours',
    'contact.monday': 'Monday',
    'contact.tuesday': 'Tuesday to Sunday',
    'contact.closed': 'Closed',
    'contact.kitchen': 'Kitchen open',
    
    // Shop
    shop: {
      title: 'Our Shop',
      subtitle: 'Discover our handpicked alpine specialties, made with love and tradition on our mountain pasture.',
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
      subtitle: 'Enjoy our traditional alpine specialties',
      qrTitle: 'Menu QR Code',
      qrSubtitle: 'Scan the QR code for our current menu',
      close: 'Close',
      viewMenu: 'View Menu'
    },
    
    // Reservation
    reservation: {
      title: 'Reserve a Table',
      subtitle: 'Reserve your table at Oberkogler Alm',
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
      subtitle: 'Upcoming events at Oberkogler Alm',
      noEvents: 'No events currently scheduled',
      date: 'Date',
      time: 'Time',
      location: 'Location'
    },
    
    // Reviews
    reviews: {
      title: 'Guest Reviews',
      subtitle: 'What our guests say about us',
      reviews: 'Reviews',
      language: 'en',
      visitUs: 'Visit us on Google Maps for more reviews',
      googleLink: 'Go to Google Maps'
    },
    
    // Footer
    'footer.rights': 'All rights reserved.',
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
