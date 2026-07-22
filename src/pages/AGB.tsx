import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";

const AGB = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <SEO title={"AGB – Oberkogler Alm"} description={"Allgemeine Geschäftsbedingungen für Bestellungen im Hofladen der Oberkogler Alm."} path="/agb" />
            <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl break-words">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-8">
            {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms & Conditions'}
          </h1>

          {language === 'de' ? (
            <div className="prose prose-stone max-w-none space-y-6 text-foreground/80">
              <section>
                <h2 className="text-xl font-heading text-foreground">1. Geltungsbereich und Anbieter</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Bestellungen, die Verbraucher und Unternehmer im Sinne der §§ 1 KSchG bzw. UGB über den Online-Shop der Oberkogler Alm, Wörschachberg 63, 8942 Wörschach, Österreich („Anbieter"), aufgeben.
                </p>
                <p>
                  Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">2. Vertragsschluss</h2>
                <p>
                  Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung dar. Durch Anklicken des Buttons „Kaufen"/„Zahlungspflichtig bestellen" im Checkout gibt der Kunde ein verbindliches Angebot zum Abschluss eines Kaufvertrags ab. Der Vertrag kommt mit der Auftragsbestätigung per E-Mail oder mit Versand der Ware zustande.
                </p>
                <p>Vertragssprache ist Deutsch.</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">3. Preise und Zahlung</h2>
                <p>
                  Alle Preise verstehen sich in Euro und sind Endpreise inklusive der jeweils geltenden gesetzlichen Umsatzsteuer. Etwaige Versandkosten werden im Bestellvorgang gesondert ausgewiesen.
                </p>
                <p>
                  Die Zahlung erfolgt über die im Checkout angebotenen Zahlungsarten (u. a. Kredit-/Debitkarte, Sofortüberweisung, Apple Pay/Google Pay – je nach Verfügbarkeit). Die Zahlungsabwicklung erfolgt durch unseren Zahlungsdienstleister Shopify Payments bzw. die dort integrierten Anbieter.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">4. Lieferung, Versand und Selbstabholung</h2>
                <p>
                  Wir liefern innerhalb Österreichs. Die Lieferzeit beträgt in der Regel 3–5 Werktage nach Zahlungseingang, sofern im Shop nichts anderes angegeben ist. Versandkosten werden im Bestellvorgang transparent angezeigt.
                </p>
                <p>
                  Sofern im Checkout angeboten, ist eine Selbstabholung am Betriebsstandort (Wörschachberg 63, 8942 Wörschach) nach Terminabsprache möglich. Bei Selbstabholung entfallen die Versandkosten.
                </p>
                <p>
                  Das Risiko des zufälligen Untergangs geht bei Verbrauchern erst mit Übergabe der Ware an den Kunden auf diesen über (§ 7b KSchG).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">5. Widerrufsrecht für Verbraucher</h2>
                <p>
                  Verbraucher haben nach § 11 FAGG das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem der Verbraucher oder ein von ihm benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen hat.
                </p>
                <p>
                  Um das Widerrufsrecht auszuüben, muss der Verbraucher uns (Oberkogler Alm, Wörschachberg 63, 8942 Wörschach, Österreich, E-Mail: info@oberkogleralm.at) mittels einer eindeutigen Erklärung (z. B. Brief oder E-Mail) über den Entschluss, diesen Vertrag zu widerrufen, informieren.
                </p>
                <p>
                  <strong>Folgen des Widerrufs:</strong> Im Fall eines wirksamen Widerrufs erstatten wir alle empfangenen Zahlungen einschließlich der Standard-Lieferkosten unverzüglich, spätestens binnen 14 Tagen. Wir können die Rückzahlung verweigern, bis wir die Waren zurückerhalten haben oder der Nachweis der Rücksendung erbracht wurde.
                </p>
                <p>
                  <strong>Ausnahmen vom Widerrufsrecht (§ 18 FAGG):</strong> Das Widerrufsrecht besteht insbesondere <em>nicht</em> für:
                </p>
                <ul className="list-disc pl-6">
                  <li>versiegelte Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde;</li>
                  <li>Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde (z. B. Lebensmittel, frische Erzeugnisse);</li>
                  <li>Waren, die nach Kundenspezifikation angefertigt oder eindeutig auf persönliche Bedürfnisse zugeschnitten sind.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">6. Gutscheine</h2>
                <p>
                  Digitale Gutscheine werden nach Zahlungseingang per E-Mail versendet und sind ab Ausstellung fünf Jahre gültig, sofern nicht anders angegeben. Eine Barauszahlung des Gutscheinguthabens ist ausgeschlossen; Restguthaben bleibt bis zum Ablauf verfügbar.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">7. Eigentumsvorbehalt</h2>
                <p>Die Ware bleibt bis zur vollständigen Bezahlung Eigentum der Oberkogler Alm.</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">8. Gewährleistung</h2>
                <p>
                  Es gelten die gesetzlichen Gewährleistungsbestimmungen. Verbraucher werden auf die Bestimmungen des Verbrauchergewährleistungsgesetzes (VGG) bzw. ABGB verwiesen. Offensichtliche Transportschäden bitten wir umgehend beim Zusteller zu reklamieren und uns zu melden.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">9. Haftung</h2>
                <p>
                  Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Zwingende gesetzliche Haftungen (insbesondere nach dem Produkthaftungsgesetz) bleiben unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">10. Datenschutz</h2>
                <p>
                  Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{' '}
                  <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">11. Streitbeilegung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr</a>.
                  Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">12. Anwendbares Recht, Gerichtsstand</h2>
                <p>
                  Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Zwingende Verbraucherschutzbestimmungen des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt. Gerichtsstand für Streitigkeiten mit Unternehmern ist das sachlich zuständige Gericht in 8942 Wörschach bzw. Liezen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">13. Salvatorische Klausel</h2>
                <p>
                  Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, so wird davon die Wirksamkeit der übrigen Bestimmungen nicht berührt.
                </p>
              </section>
            </div>
          ) : (
            <div className="prose prose-stone max-w-none space-y-6 text-foreground/80">
              <section>
                <h2 className="text-xl font-heading text-foreground">1. Scope and provider</h2>
                <p>
                  These General Terms and Conditions (GTC) apply to all orders placed by consumers and businesses (as defined by Austrian KSchG and UGB) through the online shop of Oberkogler Alm, Wörschachberg 63, 8942 Wörschach, Austria ("Provider").
                </p>
                <p>Deviating terms of the customer are not accepted unless the Provider expressly agrees to them in writing.</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">2. Conclusion of contract</h2>
                <p>
                  Product listings in the online shop do not constitute a legally binding offer but an invitation to order. By clicking the "Buy"/"Order with obligation to pay" button in checkout, the customer submits a binding offer to conclude a purchase contract. The contract is concluded upon our order confirmation by email or upon dispatch of the goods.
                </p>
                <p>Contract language is German.</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">3. Prices and payment</h2>
                <p>
                  All prices are in euro and are final prices including the applicable statutory VAT. Any shipping costs are displayed separately during checkout.
                </p>
                <p>
                  Payment is made via the payment methods offered in checkout (including credit/debit card, instant bank transfer, Apple Pay/Google Pay – subject to availability). Payment processing is handled by our payment provider Shopify Payments and its integrated providers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">4. Delivery, shipping and pickup</h2>
                <p>
                  We deliver within Austria. Delivery time is usually 3–5 business days after receipt of payment, unless otherwise stated. Shipping costs are shown transparently during checkout.
                </p>
                <p>
                  Where offered in checkout, pickup at the business location (Wörschachberg 63, 8942 Wörschach) by appointment is possible. No shipping costs apply for pickup.
                </p>
                <p>
                  For consumers, the risk of accidental loss passes to the customer only upon handover of the goods (§ 7b KSchG).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">5. Right of withdrawal for consumers</h2>
                <p>
                  Under § 11 FAGG (Austrian Distance and Off-Premises Contracts Act), consumers have the right to withdraw from this contract within 14 days without giving any reason. The withdrawal period is 14 days from the day on which the consumer or a third party (other than the carrier) designated by them takes possession of the goods.
                </p>
                <p>
                  To exercise the right of withdrawal, the consumer must inform us (Oberkogler Alm, Wörschachberg 63, 8942 Wörschach, Austria, email: info@oberkogleralm.at) by means of a clear statement (e.g. letter or email) of the decision to withdraw.
                </p>
                <p>
                  <strong>Consequences of withdrawal:</strong> In the event of an effective withdrawal, we will refund all payments received, including standard delivery costs, without undue delay and no later than 14 days. We may withhold reimbursement until we have received the goods back or until proof of return has been provided.
                </p>
                <p><strong>Exceptions to the right of withdrawal (§ 18 FAGG)</strong> — the right does not apply, in particular, to:</p>
                <ul className="list-disc pl-6">
                  <li>sealed goods which are not suitable for return for reasons of health protection or hygiene if the seal was removed after delivery;</li>
                  <li>goods that can spoil quickly or whose expiry date would soon pass (e.g. food, fresh produce);</li>
                  <li>goods made to customer specifications or clearly personalised.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">6. Gift cards</h2>
                <p>
                  Digital gift cards are sent by email after receipt of payment and are valid for five years from issue, unless otherwise stated. Cash payout of the gift card balance is excluded; any remaining balance remains available until expiry.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">7. Retention of title</h2>
                <p>The goods remain the property of Oberkogler Alm until full payment.</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">8. Warranty</h2>
                <p>
                  Statutory warranty provisions apply. Consumers are referred to the provisions of the Austrian Consumer Warranty Act (VGG) and ABGB. Please report obvious transport damage to the carrier immediately and notify us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">9. Liability</h2>
                <p>
                  The Provider is liable without limitation for intent and gross negligence and for damages resulting from injury to life, body or health. For slight negligence, the Provider is only liable in the event of a breach of material contractual obligations and limited to the foreseeable damage typical of the contract. Mandatory statutory liability (in particular under the Product Liability Act) remains unaffected.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">10. Data protection</h2>
                <p>
                  Information on the processing of personal data can be found in our{' '}
                  <Link to="/datenschutz" className="underline">Privacy Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">11. Dispute resolution</h2>
                <p>
                  The European Commission provides a platform for online dispute resolution (ODR):{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr</a>.
                  We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">12. Applicable law, jurisdiction</h2>
                <p>
                  Austrian law applies, excluding the UN Convention on Contracts for the International Sale of Goods. Mandatory consumer protection provisions of the country in which the consumer has their habitual residence remain unaffected. The place of jurisdiction for disputes with businesses is the competent court in 8942 Wörschach or Liezen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">13. Severability</h2>
                <p>
                  Should individual provisions of these GTC be or become invalid or unenforceable, the validity of the remaining provisions shall not be affected.
                </p>
              </section>
            </div>
          )}
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
