import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";

const Datenschutz = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-8">
            {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>

          <div className="prose prose-stone max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Verantwortlicher' : 'Controller'}</h2>
              <p>
                Oberkogler Alm<br />
                Oberkogler 1<br />
                4575 Rossleithen<br />
                Österreich<br />
                E-Mail: office@oberkogleralm.at
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Erhebung und Speicherung personenbezogener Daten' : 'Collection and Storage of Personal Data'}</h2>
              <p>
                {language === 'de'
                  ? 'Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, die keine Rückschlüsse auf Ihre Person zulassen.'
                  : 'When you visit our website, general information is automatically collected. This information (server log files) includes the type of web browser, the operating system used, the domain name of your Internet service provider, and similar. This is exclusively information that does not allow any conclusions to be drawn about your person.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">Cookies</h2>
              <p>
                {language === 'de'
                  ? 'Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.'
                  : 'Our website partially uses so-called cookies. Cookies do not cause any damage to your computer and do not contain any viruses. Cookies serve to make our offer more user-friendly, effective, and secure.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Ihre Rechte' : 'Your Rights'}</h2>
              <p>
                {language === 'de'
                  ? 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.'
                  : 'You have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of data processing, as well as a right to correction, blocking, or deletion of this data.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Kontakt' : 'Contact'}</h2>
              <p>
                {language === 'de'
                  ? 'Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter: office@oberkogleralm.at'
                  : 'For questions about data protection, please contact us at: office@oberkogleralm.at'}
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

export default Datenschutz;
