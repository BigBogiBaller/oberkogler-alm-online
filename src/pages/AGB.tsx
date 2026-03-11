import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";

const AGB = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-8">
            {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms & Conditions'}
          </h1>

          <div className="prose prose-stone max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? '1. Geltungsbereich' : '1. Scope'}</h2>
              <p>
                {language === 'de'
                  ? 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen über unseren Online-Shop und für alle Leistungen der Oberkogler Alm.'
                  : 'These General Terms and Conditions apply to all orders through our online shop and for all services of the Oberkogler Alm.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? '2. Vertragspartner' : '2. Contracting Party'}</h2>
              <p>
                Oberkogler Alm<br />
                Oberkogler 1<br />
                4575 Rossleithen<br />
                Österreich
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? '3. Preise und Zahlung' : '3. Prices and Payment'}</h2>
              <p>
                {language === 'de'
                  ? 'Alle angegebenen Preise sind Endpreise inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt über die im Shop angebotenen Zahlungsmethoden.'
                  : 'All prices listed are final prices including the statutory value-added tax. Payment is made through the payment methods offered in the shop.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? '4. Lieferung und Versand' : '4. Delivery and Shipping'}</h2>
              <p>
                {language === 'de'
                  ? 'Die Lieferung erfolgt innerhalb Österreichs. Ab einem Bestellwert von €50 liefern wir versandkostenfrei. Die Lieferzeit beträgt in der Regel 3-5 Werktage.'
                  : 'Delivery is within Austria. We offer free shipping on orders over €50. Delivery time is usually 3-5 business days.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? '5. Widerrufsrecht' : '5. Right of Withdrawal'}</h2>
              <p>
                {language === 'de'
                  ? 'Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Waren in Besitz genommen haben. Lebensmittel und verderbliche Waren sind vom Widerrufsrecht ausgenommen.'
                  : 'You have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the day on which you or a third party designated by you took possession of the goods. Food and perishable goods are excluded from the right of withdrawal.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? '6. Haftung' : '6. Liability'}</h2>
              <p>
                {language === 'de'
                  ? 'Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.'
                  : 'We are liable without limitation for intent and gross negligence. For slight negligence, we are only liable in case of violation of essential contractual obligations.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? '7. Streitbeilegung' : '7. Dispute Resolution'}</h2>
              <p>
                {language === 'de'
                  ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                  : 'The European Commission provides a platform for online dispute resolution (ODR). We are not obliged and not willing to participate in a dispute resolution procedure before a consumer arbitration board.'}
              </p>
            </section>
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

export default AGB;
