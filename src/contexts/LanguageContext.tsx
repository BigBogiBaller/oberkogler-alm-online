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
    'nav.reviews': 'Rezensionen',
    'nav.menu': 'Speisekarte',
    
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
    
    // Reviews
    'reviews.title': 'Gästebewertungen',
    'reviews.subtitle': 'Was unsere Gäste über uns sagen',
    'reviews.reviews': 'Bewertungen',
    'reviews.language': 'de',
    'reviews.visitUs': 'Besuchen Sie uns auf Google Maps für mehr Rezensionen',
    'reviews.googleLink': 'Zu Google Maps',
    
    // Menu
    'menu.title': 'Unsere Speisekarte',
    'menu.subtitle': 'Genießen Sie traditionelle alpine Köstlichkeiten, zubereitet mit frischen Zutaten aus der Region.',
    'menu.badge': 'Kulinarische Spezialitäten',
    'menu.qrTitle': 'Speisekarte zum Mitnehmen',
    'menu.qrDescription': 'Scannen Sie den QR-Code, um unsere Speisekarte auf Ihrem Smartphone zu speichern.',
    'menu.qrScan': 'Mit der Kamera Ihres Smartphones scannen',
    'menu.qrClose': 'Speisekarte ansehen',
    'menu.showQR': 'QR-Code anzeigen',
    'menu.allergens': 'Allergene',
    'menu.vegetarian': 'Vegetarisch',
    'menu.contains': 'Enthält',
    'menu.hoursTitle': 'Unsere Öffnungszeiten',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.contact': 'Contact',
    'nav.reviews': 'Reviews',
    'nav.menu': 'Menu',
    
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
    
    // Reviews
    'reviews.title': 'Guest Reviews',
    'reviews.subtitle': 'What our guests say about us',
    'reviews.reviews': 'Reviews',
    'reviews.language': 'en',
    'reviews.visitUs': 'Visit us on Google Maps for more reviews',
    'reviews.googleLink': 'Go to Google Maps',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Enjoy traditional alpine delicacies prepared with fresh regional ingredients.',
    'menu.badge': 'Culinary Specialties',
    'menu.qrTitle': 'Menu To Go',
    'menu.qrDescription': 'Scan the QR code to save our menu on your smartphone.',
    'menu.qrScan': 'Scan with your smartphone camera',
    'menu.qrClose': 'View Menu',
    'menu.showQR': 'Show QR Code',
    'menu.allergens': 'Allergens',
    'menu.vegetarian': 'Vegetarian',
    'menu.contains': 'Contains',
    'menu.hoursTitle': 'Our Opening Hours',
    
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
