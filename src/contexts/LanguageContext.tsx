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
    'hero.subtitle': 'Traditionelle Alpine Spezialitäten aus den steirischen Bergen',
    'hero.toShop': 'Zum Shop',
    'hero.toMenu': 'Zur Speisekarte',
    'hero.learnMore': 'Mehr erfahren',
    
    // About
    'about.badge': 'Willkommen',
    'about.title': 'Herzlich Willkommen auf der Oberkogler Alm',
    'about.text': 'Auf 1.200m Seehöhe, eingebettet in die malerische Landschaft des steirischen Ennstals, liegt unsere familiengeführte Alm. Seit Generationen bewirtschaften wir diesen besonderen Ort und heißen Gäste aus nah und fern herzlich willkommen.',
    'about.text2': 'Ob zum Wandern, Verweilen oder Genießen – bei uns finden Sie Ruhe, Natur und authentische Gastfreundschaft. Probieren Sie unsere hausgemachten Spezialitäten und erleben Sie echte Almkultur.',
    'about.visitButton': 'Besuchen Sie uns',
    'about.regional': '100% Regional',
    'about.regionalText': 'Alle Produkte stammen von unserer Alm oder aus der unmittelbaren Region',
    'about.tradition': 'Tradition',
    'about.traditionText': 'Traditionelle Herstellung nach überlieferten Familienrezepten',
    'about.quality': 'Mit Herz gemacht',
    'about.qualityText': 'Höchste Qualität durch liebevolle Handarbeit und Leidenschaft',
    
    // Team
    'team.badge': 'Unser Team',
    'team.title': 'Die Menschen hinter der Alm',
    'team.subtitle': 'Lernen Sie die Familie und das Team kennen, die mit Herz und Seele für Sie da sind',
    'team.max.name': 'Max',
    'team.max.role': 'Chef & Gastgeber',
    'team.max.desc': 'Als leidenschaftlicher Gastgeber führt Max die Alm in dritter Generation und kümmert sich um das Wohl aller Gäste.',
    'team.christa.name': 'Christa',
    'team.christa.role': 'Seniorchefin & Köchin',
    'team.christa.desc': 'Mit jahrzehntelanger Erfahrung zaubert Christa täglich traditionelle Köstlichkeiten nach alten Familienrezepten.',
    'team.hubert.name': 'Hubert',
    'team.hubert.role': 'Seniorchef',
    'team.hubert.desc': 'Als Seniorchef hält Hubert die Tradition der Alm aufrecht und gibt sein Wissen an die nächste Generation weiter.',
    'team.petra.name': 'Petra',
    'team.petra.role': 'Service & Küche',
    'team.petra.desc': 'Petra sorgt mit ihrer herzlichen Art für einen reibungslosen Ablauf in Service und Küche.',
    'team.ina.name': 'Ina',
    'team.ina.role': 'Praktikantin',
    'team.ina.desc': 'Als motivierte Praktikantin lernt Ina das Almhandwerk und unterstützt das Team tatkräftig.',
    
    // Animals
    'animals.badge': 'Unsere Tiere',
    'animals.title': 'Tierische Bewohner der Alm',
    'animals.subtitle': 'Auf unserer Alm leben viele tierische Freunde, die Sie bei Ihrem Besuch kennenlernen können',
    'animals.dogs.name': 'Frida & Bertl',
    'animals.dogs.desc': 'Unsere beiden Almhunde – Frida, die freundliche Berner Sennenhündin, und Bertl, der treue Labrador – begrüßen jeden Gast herzlich.',
    'animals.cattle.name': 'Dexter-Rinder',
    'animals.cattle.desc': 'Unsere robusten Dexter-Rinder sind eine alte, ursprüngliche Rasse. Sie fühlen sich auf den Almwiesen besonders wohl.',
    'animals.ponies.name': 'Ginger & Fantasie',
    'animals.ponies.desc': 'Die Mini-Shetland-Ponys Ginger und Fantasie sind der Liebling aller Kinder und bringen Freude auf die Alm.',
    'animals.notice.title': 'Bitte beachten Sie',
    'animals.notice.text': 'Zu Ihrer Sicherheit und zum Wohl unserer Tiere bitten wir Sie, die Tiere nicht selbstständig zu füttern. Gerne geben wir Ihnen geeignetes Futter.',
    
    // Culinary
    'culinary.badge': 'Kulinarik',
    'culinary.title': 'Steirische Schmankerl',
    'culinary.subtitle': 'Genießen Sie unsere hausgemachten Spezialitäten – frisch zubereitet mit regionalen Zutaten',
    'culinary.kasnockerl.name': 'Kasnockerl',
    'culinary.kasnockerl.desc': 'Luftige Nockerl mit würzigem Bergkäse, serviert mit Krautsalat',
    'culinary.steirerkasnockerl.name': 'Steirerkaskropfn',
    'culinary.steirerkasnockerl.desc': 'Traditionelle gefüllte Teigtaschen mit Kartoffel-Topfen-Füllung',
    'culinary.bratlbrot.name': 'Bratlbrot',
    'culinary.bratlbrot.desc': 'Rustikales Hausbrot mit herzhaftem Bratl vom Schwein',
    'culinary.suppen.name': 'Hausgemachte Suppen',
    'culinary.suppen.desc': 'Täglich frisch: Frittaten-, Leberknödel- oder Kaspreßknödelsuppe',
    'culinary.button': 'Zur Speisekarte',
    
    // Farm Shop
    'farmshop.badge': 'Hofladen',
    'farmshop.title': 'Aus unserem Hofladen',
    'farmshop.subtitle': 'Nehmen Sie ein Stück Alm mit nach Hause – handgemachte Naturprodukte aus eigener Herstellung',
    'farmshop.salbe.name': 'Ringelblumensalbe',
    'farmshop.salbe.desc': 'Hautpflege aus Ringelblumen',
    'farmshop.johanniskraut.name': 'Johanniskrautöl',
    'farmshop.johanniskraut.desc': 'Traditionelles Rotöl',
    'farmshop.marmelade.name': 'Hausgemachte Marmelade',
    'farmshop.marmelade.desc': 'Verschiedene Sorten',
    'farmshop.honig.name': 'Alm-Honig',
    'farmshop.honig.desc': 'Blüten-, Wald- & Almhonig',
    'farmshop.hartwuerstl.name': 'Hartwürstl',
    'farmshop.hartwuerstl.desc': 'Hausgemachte Trockenwurst',
    'farmshop.button': 'Zum Online-Shop',
    
    // Gallery
    'gallery.badge': 'Impressionen',
    'gallery.title': 'Eindrücke von der Alm',
    'gallery.subtitle': 'Entdecken Sie die Schönheit der Oberkogler Alm',
    'gallery.button': 'Alle Bilder ansehen',
    
    // Social Media
    'social.title': 'Folgen Sie uns auf Social Media',
    
    // Virtual Tour
    'tour.badge': 'Virtueller Rundgang',
    'tour.title': '3D Rundgang',
    'tour.text': 'Erleben Sie die Oberkogler Alm in einer virtuellen 3D-Tour und entdecken Sie unsere authentische alpine Atmosphäre.',
    'tour.button': 'Virtuelle Tour starten',
    
    // Contact
    'contact.badge': 'Kontakt',
    'contact.title': 'Besuchen Sie uns',
    'contact.visit': 'Anfahrt',
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
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'footer.agb': 'AGB',
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
    'hero.subtitle': 'Traditional Alpine Specialties from the Styrian Mountains',
    'hero.toShop': 'Visit Shop',
    'hero.toMenu': 'View Menu',
    'hero.learnMore': 'Learn More',
    
    // About
    'about.badge': 'Welcome',
    'about.title': 'Welcome to Oberkogler Alm',
    'about.text': 'At 1,200m altitude, nestled in the picturesque landscape of the Styrian Enns Valley, lies our family-run alpine pasture. For generations, we have been cultivating this special place and warmly welcoming guests from near and far.',
    'about.text2': 'Whether for hiking, relaxing, or enjoying – with us you will find peace, nature, and authentic hospitality. Try our homemade specialties and experience genuine alpine culture.',
    'about.visitButton': 'Visit Us',
    'about.regional': '100% Regional',
    'about.regionalText': 'All products come from our alpine pasture or the immediate region',
    'about.tradition': 'Tradition',
    'about.traditionText': 'Traditional production according to handed-down family recipes',
    'about.quality': 'Made with Heart',
    'about.qualityText': 'Highest quality through loving craftsmanship and passion',
    
    // Team
    'team.badge': 'Our Team',
    'team.title': 'The People Behind the Alm',
    'team.subtitle': 'Meet the family and team who are here for you with heart and soul',
    'team.max.name': 'Max',
    'team.max.role': 'Host & Manager',
    'team.max.desc': 'As a passionate host, Max runs the alpine hut in the third generation and takes care of all guests.',
    'team.christa.name': 'Christa',
    'team.christa.role': 'Senior Chef & Cook',
    'team.christa.desc': 'With decades of experience, Christa creates traditional delicacies daily using old family recipes.',
    'team.hubert.name': 'Hubert',
    'team.hubert.role': 'Senior Host',
    'team.hubert.desc': 'As senior host, Hubert maintains the tradition of the alpine hut and passes on his knowledge to the next generation.',
    'team.petra.name': 'Petra',
    'team.petra.role': 'Service & Kitchen',
    'team.petra.desc': 'With her warm nature, Petra ensures smooth operations in service and kitchen.',
    'team.ina.name': 'Ina',
    'team.ina.role': 'Trainee',
    'team.ina.desc': 'As a motivated trainee, Ina learns the alpine craft and actively supports the team.',
    
    // Animals
    'animals.badge': 'Our Animals',
    'animals.title': 'Animal Residents of the Alm',
    'animals.subtitle': 'Many animal friends live on our alpine pasture that you can meet during your visit',
    'animals.dogs.name': 'Frida & Bertl',
    'animals.dogs.desc': 'Our two alpine dogs – Frida, the friendly Bernese Mountain Dog, and Bertl, the loyal Labrador – warmly greet every guest.',
    'animals.cattle.name': 'Dexter Cattle',
    'animals.cattle.desc': 'Our robust Dexter cattle are an old, original breed. They feel particularly comfortable on the alpine meadows.',
    'animals.ponies.name': 'Ginger & Fantasie',
    'animals.ponies.desc': 'The Mini-Shetland ponies Ginger and Fantasie are the favorites of all children and bring joy to the alpine hut.',
    'animals.notice.title': 'Please Note',
    'animals.notice.text': 'For your safety and the welfare of our animals, we ask that you do not feed the animals on your own. We will gladly provide suitable feed.',
    
    // Culinary
    'culinary.badge': 'Culinary',
    'culinary.title': 'Styrian Delicacies',
    'culinary.subtitle': 'Enjoy our homemade specialties – freshly prepared with regional ingredients',
    'culinary.kasnockerl.name': 'Cheese Dumplings',
    'culinary.kasnockerl.desc': 'Fluffy dumplings with flavorful mountain cheese, served with coleslaw',
    'culinary.steirerkasnockerl.name': 'Styrian Cheese Pockets',
    'culinary.steirerkasnockerl.desc': 'Traditional filled pasta pockets with potato-curd filling',
    'culinary.bratlbrot.name': 'Roast Bread',
    'culinary.bratlbrot.desc': 'Rustic house bread with hearty pork roast',
    'culinary.suppen.name': 'Homemade Soups',
    'culinary.suppen.desc': 'Fresh daily: Pancake soup, liver dumpling or cheese dumpling soup',
    'culinary.button': 'View Menu',
    
    // Farm Shop
    'farmshop.badge': 'Farm Shop',
    'farmshop.title': 'From Our Farm Shop',
    'farmshop.subtitle': 'Take a piece of the alpine home – handmade natural products from our own production',
    'farmshop.salbe.name': 'Calendula Ointment',
    'farmshop.salbe.desc': 'Skin care from calendula',
    'farmshop.johanniskraut.name': "St. John's Wort Oil",
    'farmshop.johanniskraut.desc': 'Traditional red oil',
    'farmshop.marmelade.name': 'Homemade Jam',
    'farmshop.marmelade.desc': 'Various flavors',
    'farmshop.honig.name': 'Alpine Honey',
    'farmshop.honig.desc': 'Blossom, forest & alpine honey',
    'farmshop.hartwuerstl.name': 'Dried Sausage',
    'farmshop.hartwuerstl.desc': 'Homemade dried sausage',
    'farmshop.button': 'Visit Online Shop',
    
    // Gallery
    'gallery.badge': 'Impressions',
    'gallery.title': 'Impressions from the Alm',
    'gallery.subtitle': 'Discover the beauty of Oberkogler Alm',
    'gallery.button': 'View All Photos',
    
    // Social Media
    'social.title': 'Follow Us on Social Media',
    
    // Virtual Tour
    'tour.badge': 'Virtual Tour',
    'tour.title': '3D Virtual Tour',
    'tour.text': 'Experience Oberkogler Alm in a virtual 3D tour and discover our authentic alpine atmosphere.',
    'tour.button': 'Start Virtual Tour',
    
    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'Visit Us',
    'contact.visit': 'Directions',
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
    'footer.impressum': 'Imprint',
    'footer.datenschutz': 'Privacy Policy',
    'footer.agb': 'Terms & Conditions',
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
