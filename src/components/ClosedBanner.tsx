/**
 * Slim, fixed top banner shown on every page to inform visitors that the
 * Oberkogler Alm is temporarily closed. Alpine "Forest Moss" treatment:
 * forest-green gradient, terracotta accent border, subtle dotted texture,
 * serif uppercase bilingual notice.
 */
import { useLanguage } from "@/contexts/LanguageContext";

const ClosedBanner = () => {
  const { language } = useLanguage();
  const message = language === "de" ? "Wir haben geschlossen" : "We are currently closed";

  return (
    <div className="fixed top-0 left-0 right-0 z-50" role="status" aria-live="polite">
      <div
        className="relative h-10 w-full flex items-center justify-center px-4 border-b border-accent shadow-sm"
        style={{
          background:
            "linear-gradient(to right, hsl(140 30% 25%), hsl(140 30% 30%), hsl(140 30% 25%))",
        }}
      >
        {/* Subtle alpine-mist dotted texture overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <p className="relative z-10 font-heading text-primary-foreground text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-center opacity-90">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ClosedBanner;
