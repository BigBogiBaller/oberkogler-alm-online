import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";

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
