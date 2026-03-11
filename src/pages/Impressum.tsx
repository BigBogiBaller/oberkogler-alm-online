import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";

const Impressum = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-8">
            {language === 'de' ? 'Impressum' : 'Imprint'}
          </h1>

          <div className="prose prose-stone max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Angaben gemäß § 5 ECG' : 'Information according to § 5 ECG'}</h2>
              <p>
                Oberkogler Alm<br />
                Oberkogler 1<br />
                4575 Rossleithen<br />
                Österreich
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Kontakt' : 'Contact'}</h2>
              <p>
                {language === 'de' ? 'Telefon' : 'Phone'}: +43 660 73 44 150<br />
                E-Mail: office@oberkogleralm.at
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}</h2>
              <p>
                {language === 'de'
                  ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
                  : 'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading text-foreground">{language === 'de' ? 'Urheberrecht' : 'Copyright'}</h2>
              <p>
                {language === 'de'
                  ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                  : 'The content and works created by the site operators on these pages are subject to Austrian copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.'}
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
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
