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
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.contact': 'Kontakt',
    
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
    'shop.title': 'Unser Shop',
    'shop.subtitle': 'Entdecken Sie unsere handverlesenen alpinen Spezialitäten, hergestellt mit Liebe und Tradition auf unserer Alm.',
    'shop.error': 'Fehler beim Laden der Produkte',
    'shop.tryAgain': 'Bitte versuchen Sie es später erneut',
    'shop.noProducts': 'Keine Produkte gefunden',
    'shop.noImage': 'Kein Bild verfügbar',
    'shop.addToCart': 'In den Warenkorb',
    'shop.soldOut': 'Ausverkauft',
    'shop.freeShipping': 'Kostenloser Versand',
    'shop.freeShippingText': 'Bei Bestellungen über €50',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.contact': 'Contact',
    
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
    'shop.title': 'Our Shop',
    'shop.subtitle': 'Discover our handpicked alpine specialties, made with love and tradition on our mountain pasture.',
    'shop.error': 'Error loading products',
    'shop.tryAgain': 'Please try again later',
    'shop.noProducts': 'No products found',
    'shop.noImage': 'No image available',
    'shop.addToCart': 'Add to Cart',
    'shop.soldOut': 'Sold Out',
    'shop.freeShipping': 'Free Shipping',
    'shop.freeShippingText': 'On orders over €50',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
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
