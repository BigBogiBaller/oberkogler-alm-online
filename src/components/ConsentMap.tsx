import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MAPS_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.9642510758026!2d14.17117247626381!3d47.56848397118633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47716d88a3786ecd%3A0x8b4f23744d2c760a!2sOberkogler%20Alm!5e0!3m2!1sen!2srs!4v1763413665846!5m2!1sen!2srs";

const ConsentMap = () => {
  const [loaded, setLoaded] = useState(false);
  const { language } = useLanguage();

  return (
    <Card className="border-border/50 overflow-hidden shadow-lg">
      <CardContent className="p-0">
        {loaded ? (
          <iframe
            src={MAPS_URL}
            className="w-full h-[300px] sm:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Oberkogler Alm Location"
          />
        ) : (
          <div className="w-full h-[300px] sm:h-[450px] bg-muted flex flex-col items-center justify-center gap-4 p-6 text-center">
            <MapPin className="w-10 h-10 text-primary" />
            <div className="max-w-md text-sm text-muted-foreground">
              {language === "de"
                ? "Beim Laden der Karte werden Daten (u. a. Ihre IP-Adresse) an Google übertragen. Mit einem Klick auf „Karte laden“ stimmen Sie der Übertragung zu."
                : "Loading the map transfers data (including your IP address) to Google. By clicking “Load map” you agree to this transfer."}
            </div>
            <Button onClick={() => setLoaded(true)}>
              {language === "de" ? "Karte laden" : "Load map"}
            </Button>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline text-muted-foreground hover:text-primary"
            >
              {language === "de" ? "Datenschutz von Google" : "Google Privacy Policy"}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConsentMap;