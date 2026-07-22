import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";

const PolicyDE = () => (
  <>
    <section>
      <h2 className="text-xl font-heading text-foreground">1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:<br /><br />
        Oberkogler Alm – Maximilian Schwaiger<br />
        Wörschachberg 63<br />
        8942 Wörschach, Österreich<br />
        Tel.: +43 677 61861537<br />
        E-Mail: info@oberkogleralm.at
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
        Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
        erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a (Einwilligung),
        lit. b (Vertragserfüllung), lit. c (rechtliche Verpflichtung) und lit. f (berechtigtes
        Interesse) DSGVO.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">3. Server-Logfiles (Hosting)</h2>
      <p>
        Beim Aufruf unserer Website werden durch unseren Hosting-Provider automatisch Daten in
        sogenannten Server-Logfiles gespeichert: IP-Adresse (gekürzt/anonymisiert soweit möglich),
        Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge, Browsertyp und
        -version, Betriebssystem sowie Referrer-URL. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an einem stabilen, sicheren Betrieb). Die Speicherung erfolgt
        maximal 30 Tage.
      </p>
      <p>
        Hosting-Dienstleister: Lovable / GPT Engineer AB, Stockholm, Schweden.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">4. Cookies und lokaler Speicher</h2>
      <p>
        Diese Website verwendet <strong>keine Tracking- oder Marketing-Cookies</strong>. Zur
        Bereitstellung der Warenkorb-Funktion wird technisch notwendiger lokaler Speicher
        (localStorage) Ihres Browsers verwendet. Rechtsgrundlage ist § 165 Abs. 3 TKG 2021 bzw.
        Art. 6 Abs. 1 lit. b DSGVO (technisch erforderlich, keine Einwilligung nötig).
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">5. Kontaktaufnahme</h2>
      <p>
        Bei Kontakt per E-Mail oder Telefon werden Ihre Angaben zur Bearbeitung der Anfrage sowie
        für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. b bzw. lit. f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck der Erhebung
        nicht mehr erforderlich sind, spätestens jedoch nach Ablauf gesetzlicher
        Aufbewahrungsfristen (i. d. R. 7 Jahre gem. § 132 BAO).
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">6. Online-Shop (Shopify)</h2>
      <p>
        Unser Hofladen wird über <strong>Shopify International Ltd.</strong>, Victoria Buildings,
        1–2 Haddington Road, Dublin 4, Irland betrieben. Bei Bestellungen werden die von Ihnen
        angegebenen Daten (Name, Anschrift, E-Mail, Telefon, Zahlungsdaten, Bestellinhalt) zur
        Vertragsabwicklung an Shopify übermittelt und dort verarbeitet. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. b DSGVO. Es besteht ein Auftragsverarbeitungsvertrag mit Shopify. Weitere
        Informationen: <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="underline">shopify.com/legal/privacy</a>.
      </p>
      <p>
        Für Zahlungen können abhängig von der gewählten Zahlungsart weitere Dienstleister
        (z. B. Shopify Payments, Stripe, PayPal, Klarna) Daten verarbeiten. Details entnehmen Sie
        deren Datenschutzerklärungen.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">7. Google Maps (mit Einwilligung)</h2>
      <p>
        Auf unserer Kontaktseite bieten wir eine Karte des Anbieters <strong>Google Ireland
        Limited</strong>, Gordon House, Barrow Street, Dublin 4, Irland an. Die Karte wird
        <strong> erst nach Ihrem aktiven Klick</strong> auf „Karte laden“ geladen. Vorher werden
        keine Daten an Google übertragen. Beim Laden werden u. a. Ihre IP-Adresse und die
        aufgerufene Seite an Google übertragen, ggf. auch in die USA. Rechtsgrundlage ist Ihre
        Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO, die Sie jederzeit widerrufen können, indem
        Sie die Seite neu laden. Datenschutz von Google:
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline"> policies.google.com/privacy</a>.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">8. Schriftarten</h2>
      <p>
        Wir verwenden Schriftarten (Merriweather, Lora), die <strong>lokal auf unserem Server
        gehostet</strong> werden. Es findet keine Verbindung zu Google Fonts oder anderen Dritten
        statt.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">9. Eingebettete Inhalte (Instagram, TikTok, Facebook)</h2>
      <p>
        Auf unserer Website verlinken wir auf Social-Media-Profile bei Meta Platforms Ireland
        Ltd. (Instagram, Facebook) und TikTok Technology Limited. Eine Datenübertragung an diese
        Anbieter erfolgt erst, wenn Sie aktiv auf einen entsprechenden Link klicken. Eingebettete
        Videos oder Feeds laden wir nur mit Ihrer Zustimmung. Für die Datenverarbeitung auf den
        Plattformen selbst sind die jeweiligen Anbieter verantwortlich.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">10. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf: Auskunft (Art. 15), Berichtigung (Art. 16), Löschung
        (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
        Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Erteilte Einwilligungen können Sie
        jederzeit mit Wirkung für die Zukunft widerrufen.
      </p>
      <p>
        Sie haben zudem das Recht auf Beschwerde bei der Aufsichtsbehörde:
        <br /><strong>Österreichische Datenschutzbehörde</strong>, Barichgasse 40–42, 1030 Wien,
        <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="underline"> www.dsb.gv.at</a>.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-heading text-foreground">11. Kontakt für Datenschutz</h2>
      <p>
        Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten wenden Sie sich bitte an:
        <br />E-Mail: info@oberkogleralm.at
      </p>
    </section>
  </>
);

const PolicyEN = () => (
  <>
    <section>
      <h2 className="text-xl font-heading text-foreground">1. Controller</h2>
      <p>
        Controller within the meaning of the GDPR:<br /><br />
        Oberkogler Alm – Maximilian Schwaiger<br />
        Wörschachberg 63, 8942 Wörschach, Austria<br />
        Phone: +43 677 61861537 · Email: info@oberkogleralm.at
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">2. General information</h2>
      <p>
        We process personal data only to the extent necessary to provide a functional website and
        our services. Legal bases are in particular Art. 6(1)(a), (b), (c) and (f) GDPR.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">3. Server log files</h2>
      <p>
        Our hosting provider automatically stores technical data (IP address, date/time, page,
        browser, OS, referrer) for up to 30 days based on our legitimate interest in a secure and
        stable operation (Art. 6(1)(f) GDPR). Hosting provider: Lovable / GPT Engineer AB, Sweden.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">4. Cookies & local storage</h2>
      <p>
        This website uses <strong>no tracking or marketing cookies</strong>. Only technically
        necessary local storage is used for the shopping cart (Art. 6(1)(b) GDPR).
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">5. Contact</h2>
      <p>
        When contacting us by email or phone your information is stored to handle the request
        (Art. 6(1)(b)/(f) GDPR) and deleted once no longer necessary, at the latest after the
        statutory retention periods (usually 7 years under Austrian tax law).
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">6. Online shop (Shopify)</h2>
      <p>
        Our shop is operated via <strong>Shopify International Ltd.</strong>, Dublin, Ireland.
        Order data (name, address, email, phone, payment details, order content) is transferred to
        Shopify to fulfil the contract (Art. 6(1)(b) GDPR). A data processing agreement is in
        place. See <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="underline">shopify.com/legal/privacy</a>.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">7. Google Maps (with consent)</h2>
      <p>
        Our contact page offers a map by <strong>Google Ireland Limited</strong>. The map is only
        loaded <strong>after you actively click “Load map”</strong>. Only then is data (incl. IP
        address) transferred to Google, possibly to the USA. Legal basis: your consent (Art. 6(1)
        (a) GDPR), revocable at any time by reloading the page.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">8. Fonts</h2>
      <p>
        We use fonts (Merriweather, Lora) that are <strong>hosted locally on our server</strong>.
        No connection to Google Fonts or any third party is established.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">9. Social media</h2>
      <p>
        We only link to our profiles on Instagram, Facebook (Meta) and TikTok. Data is transferred
        to those providers only if you actively click a link.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">10. Your rights</h2>
      <p>
        You have the rights of access, rectification, erasure, restriction, data portability and
        objection (Art. 15–21 GDPR), and to lodge a complaint with the Austrian Data Protection
        Authority (dsb.gv.at).
      </p>
    </section>
    <section>
      <h2 className="text-xl font-heading text-foreground">11. Data protection contact</h2>
      <p>Email: info@oberkogleralm.at</p>
    </section>
  </>
);

const Datenschutz = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <SEO title={"Datenschutz – Oberkogler Alm"} description={"Datenschutzerklärung der Oberkogler Alm: wie wir mit Ihren Daten umgehen."} path="/datenschutz" />
            <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl break-words">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-8">
            {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>

          <div className="prose prose-stone max-w-none space-y-8 text-foreground/80">
            {language === 'de' ? <PolicyDE /> : <PolicyEN />}
            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              {language === 'de'
                ? 'Stand: Jänner 2026. Diese Datenschutzerklärung ist ein Muster und ersetzt keine individuelle Rechtsberatung.'
                : 'Last updated: January 2026. This privacy policy is a template and does not replace individual legal advice.'}
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-muted/50 border-t border-border py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-8">
            <Link to="/"><img src={oberkoglerLogo} alt="Oberkogler Alm" className="h-16 opacity-70" /></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
            <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">{t('footer.impressum')}</Link>
            <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">{t('footer.datenschutz')}</Link>
            <Link to="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">{t('footer.agb')}</Link>
          </div>
          <p className="text-center text-xs text-muted-foreground">© 2026 Oberkogler Alm. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Datenschutz;
