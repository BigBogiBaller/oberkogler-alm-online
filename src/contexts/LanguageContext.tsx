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
    'nav.events': 'Veranstaltungen',
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
    'about.text': 'Über 400 Jahre alt, auf 1.000 Metern Höhe – die Oberkogler Alm gibt es seit dem 17. Jahrhundert. Früher ein Bauernhof, in dem die Tiere noch im Haus lebten. Geblieben ist die alte Rauchkuchl, das dunkle Holz und die krummen Decken – und mittendrin entsteht jeden Tag das, was unsere Gäste bei uns lieben: der beste Braten, den du je gegessen hast.',
    'about.text2': 'Es ist kein Restaurant im klassischen Sinn. Es ist ein Ort, an dem gekocht wird wie zu Hause, mit dem, was die Region hergibt, und mit Menschen, die zur Familie gehören. Wer einmal da war, kommt wieder – wegen der Aussicht, wegen der Ruhe und wegen dem Gefühl, dass hier noch alles echt ist.',
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

    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Alles Wichtige für Ihren Besuch auf der Oberkogler Alm',
    'faq.q1': 'Muss ich einen Tisch reservieren?',
    'faq.a1': 'An Wochenenden und Feiertagen empfehlen wir eine Reservierung unter +43 677 61861537. Unter der Woche sind spontane Besuche meist problemlos möglich.',
    'faq.q2': 'Wie komme ich zur Oberkogler Alm?',
    'faq.a2': 'Sie erreichen uns über eine gut ausgebaute Almstraße bis direkt vor die Hütte. Adresse: Wörschachberg 63, 8942 Wörschach. Parkplätze sind vorhanden.',
    'faq.q3': 'Sind Hunde erlaubt?',
    'faq.a3': 'Ja, gut erzogene Hunde sind an der Leine herzlich willkommen – unsere Almhunde Frida und Bertl freuen sich über tierischen Besuch.',
    'faq.q4': 'Kann ich mit Kreditkarte bezahlen?',
    'faq.a4': 'In der Hütte bevorzugen wir Barzahlung. Im Online-Shop stehen Ihnen alle gängigen Zahlungsmethoden zur Verfügung.',
    'faq.q5': 'Bieten Sie vegetarische Gerichte an?',
    'faq.a5': 'Ja, viele unserer Klassiker wie Kasnockerl, Kaspressknödelsuppe oder Topfenstrudel sind vegetarisch.',
    'faq.q6': 'Kann ich Produkte auch direkt vor Ort im Hofladen kaufen?',
    'faq.a6': 'Ja, alle Produkte des Online-Shops sind auch direkt bei uns auf der Alm erhältlich.',
    'faq.q7': 'Ist die Alm auch im Winter geöffnet?',
    'faq.a7': 'Ja, wir haben ganzjährig geöffnet – Mittwoch ist Ruhetag. Die Zufahrt ist auch im Winter geräumt.',
    
    // Culinary
    'culinary.badge': 'Kulinarik',
    'culinary.title': 'Steirische Schmankerl',
    'culinary.subtitle': 'Genießen Sie unsere hausgemachten Spezialitäten – frisch zubereitet mit regionalen Zutaten',
    'culinary.steirerkasekrapfen.name': 'Steirerkäsekrapfen',
    'culinary.steirerkasekrapfen.desc': 'Knusprig gebackene Teigtaschen, samstags bei schönem Wetter',
    'culinary.steirerkasenockerl.name': 'Steirerkäsnockerl mit Krautsalat',
    'culinary.steirerkasenockerl.desc': 'Hausgemachte Nockerl mit würzigem Steirerkäse, dazu Krautsalat',
    'culinary.topfenstrudel.name': 'Topfen-Schwarzbeerstrudel',
    'culinary.topfenstrudel.desc': 'Hausgemachter Strudel mit Topfen und Waldheidelbeeren',
    'culinary.speckknoedelsuppe.name': 'Speckknödelsuppe',
    'culinary.speckknoedelsuppe.desc': 'Kräftige Rindsuppe mit hausgemachten Speckknödeln',
    'culinary.kaspressknoedelsuppe.name': 'Kaspressknödelsuppe',
    'culinary.kaspressknoedelsuppe.desc': 'Klare Rindsuppe mit knusprig gebratenen Käseknödeln',
    'culinary.fleischkrapfen.name': 'Fleischkrapfen mit Sauerkraut',
    'culinary.fleischkrapfen.desc': 'Herzhaft gefüllte Teigkrapfen mit hausgemachtem Sauerkraut',
    'culinary.gemischtesbrot.name': 'Gemischtes Brot',
    'culinary.gemischtesbrot.desc': 'Bauernbrot mit Käse, Bratl und Speck aus eigener Erzeugung',
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
    'contact.monday': 'Mittwoch',
    'contact.tuesday': 'Mo, Di, Do–So',
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
    
    // Events
    'events.title': 'Nächste Veranstaltungen',
    'events.subtitle': 'Erleben Sie besondere Momente auf der Oberkogler Alm',
    
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
    'nav.events': 'Events',
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
    'about.text': 'More than 400 years old and perched at 1,000 metres – the Oberkogler Alm has stood here since the 17th century. It used to be a farmhouse where the animals lived under the same roof. What remains is the old smoke kitchen, the dark timber and the crooked ceilings – and in the middle of it all, we cook what our guests come back for: quite possibly the best roast you have ever tasted.',
    'about.text2': 'This is not a restaurant in the usual sense. It is a place where food is cooked the way it is at home, with what the region has to offer, and with people who feel like family. Those who come once tend to come back – for the view, for the quiet, and for the feeling that everything here is still real.',
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
    'culinary.steirerkasekrapfen.name': 'Styrian Cheese Krapfen',
    'culinary.steirerkasekrapfen.desc': 'Crispy fried dough pockets, served on Saturdays in fair weather',
    'culinary.steirerkasenockerl.name': 'Styrian Cheese Spaetzle with Coleslaw',
    'culinary.steirerkasenockerl.desc': 'Homemade spaetzle with tangy Styrian cheese, served with coleslaw',
    'culinary.topfenstrudel.name': 'Curd & Blueberry Strudel',
    'culinary.topfenstrudel.desc': 'Homemade strudel with curd cheese and wild blueberries',
    'culinary.speckknoedelsuppe.name': 'Bacon Dumpling Soup',
    'culinary.speckknoedelsuppe.desc': 'Rich beef broth with homemade bacon dumplings',
    'culinary.kaspressknoedelsuppe.name': 'Cheese Dumpling Soup',
    'culinary.kaspressknoedelsuppe.desc': 'Clear beef broth with crispy pan-fried cheese dumplings',
    'culinary.fleischkrapfen.name': 'Meat Krapfen with Sauerkraut',
    'culinary.fleischkrapfen.desc': 'Hearty meat-filled dough pockets with homemade sauerkraut',
    'culinary.gemischtesbrot.name': 'Mixed Bread Platter',
    'culinary.gemischtesbrot.desc': 'Farmhouse bread with cheese, roast pork and bacon from our own production',
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
    'contact.monday': 'Wednesday',
    'contact.tuesday': 'Mon, Tue, Thu–Sun',
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
    
    // Events
    'events.title': 'Upcoming Events',
    'events.subtitle': 'Experience special moments at Oberkogler Alm',
    
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
