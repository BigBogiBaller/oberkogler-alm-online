import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";

const Impressum = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <SEO title={"Impressum – Oberkogler Alm"} description={"Impressum und rechtliche Informationen der Oberkogler Alm in Wörschach, Steiermark."} path="/impressum" />
            <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl break-words">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-8">
            {language === 'de' ? 'Impressum' : 'Imprint'}
          </h1>

          {language === 'de' ? (
            <div className="prose prose-stone max-w-none space-y-6 text-foreground/80">
              <section>
                <h2 className="text-xl font-heading text-foreground">Angaben gemäß § 5 ECG und § 25 MedienG</h2>
                <p>
                  <strong>Oberkogler Alm</strong><br />
                  Inhaber: Maximilian Schwaiger<br />
                  Wörschachberg 63<br />
                  8942 Wörschach<br />
                  Österreich
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Kontakt</h2>
                <p>
                  Telefon: +43 677 61861537<br />
                  E-Mail: info@oberkogleralm.at<br />
                  Web: https://oberkogleralm.at
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Unternehmensgegenstand</h2>
                <p>Landwirtschaftlicher Betrieb, Almgastronomie und Hofladen (Direktvermarktung).</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Kammer / Berufsrecht</h2>
                <p>
                  Mitglied der Landwirtschaftskammer Steiermark bzw. Wirtschaftskammer Steiermark (soweit gewerblich).<br />
                  Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO), abrufbar unter{' '}
                  <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="underline">www.ris.bka.gv.at</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Aufsichtsbehörde</h2>
                <p>Bezirkshauptmannschaft Liezen</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Online-Streitbeilegung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr</a>.
                  Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Haftung für Inhalte</h2>
                <p>
                  Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr.
                  Als Diensteanbieter sind wir gemäß § 18 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Bildnachweise</h2>
                <p>Alle Bilder, Videos und Grafiken © Oberkogler Alm, soweit nicht anders angegeben.</p>
              </section>
            </div>
          ) : (
            <div className="prose prose-stone max-w-none space-y-6 text-foreground/80">
              <section>
                <h2 className="text-xl font-heading text-foreground">Information according to § 5 ECG and § 25 MedienG (Austria)</h2>
                <p>
                  <strong>Oberkogler Alm</strong><br />
                  Owner: Maximilian Schwaiger<br />
                  Wörschachberg 63<br />
                  8942 Wörschach<br />
                  Austria
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Contact</h2>
                <p>
                  Phone: +43 677 61861537<br />
                  Email: info@oberkogleralm.at<br />
                  Web: https://oberkogleralm.at
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Business purpose</h2>
                <p>Agricultural business, alpine gastronomy and farm shop (direct marketing).</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Chamber / Professional law</h2>
                <p>
                  Member of the Chamber of Agriculture Styria and/or the Chamber of Commerce Styria (where commercial).<br />
                  Applicable legal provisions: Austrian Trade Regulation Act (Gewerbeordnung), available at{' '}
                  <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="underline">www.ris.bka.gv.at</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Supervisory authority</h2>
                <p>District administration (Bezirkshauptmannschaft) Liezen</p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Online dispute resolution</h2>
                <p>
                  The European Commission provides a platform for online dispute resolution (ODR):{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr</a>.
                  We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Liability for content</h2>
                <p>
                  The contents of this website were created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws under § 18 ECG.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Liability for links</h2>
                <p>
                  Our website contains links to external third-party websites over whose content we have no control. The respective provider or operator is always responsible for the content of the linked pages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Copyright</h2>
                <p>
                  The content and works created by the site operators on these pages are subject to Austrian copyright law. Duplication, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading text-foreground">Image credits</h2>
                <p>All images, videos and graphics © Oberkogler Alm, unless otherwise stated.</p>
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

export default Impressum;
