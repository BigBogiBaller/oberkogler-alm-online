import { useLanguage } from "@/contexts/LanguageContext";
import { Clock } from "lucide-react";

/**
 * Slim, fixed top banner shown on every page to inform visitors that the
 * Oberkogler Alm is temporarily closed. Bilingual (DE/EN) via LanguageContext.
 */
const ClosedBanner = () => {
  const { language } = useLanguage();
  const text =
    language === "de"
      ? "Wir haben derzeit geschlossen"
      : "We are currently closed";
  const sub =
    language === "de"
      ? "Die Alm ist vorübergehend geschlossen – wir freuen uns auf Ihren baldigen Besuch."
      : "The alm is temporarily closed – we look forward to welcoming you back soon.";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center gap-2 px-4 bg-primary text-primary-foreground text-center shadow-md"
      role="status"
      aria-live="polite"
    >
      <Clock className="w-4 h-4 flex-shrink-0 hidden sm:block" strokeWidth={2} />
      <span className="text-xs sm:text-sm font-medium tracking-wide truncate">
        <span className="font-semibold uppercase">{text}</span>
        <span className="hidden md:inline opacity-90"> — {sub}</span>
      </span>
    </div>
  );
};

export default ClosedBanner;
