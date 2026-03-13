import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays, ShoppingBag, Utensils } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const MenuQRPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("menuPopupDismissed");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("menuPopupDismissed", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); else setIsOpen(true); }}>
      <DialogContent className="sm:max-w-md bg-background border-primary/20">
        <DialogHeader className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarDays className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-primary">
            {language === 'de' ? 'Wir öffnen bald!' : 'Opening Soon!'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base leading-relaxed">
            {language === 'de'
              ? 'Voraussichtlich ab 1. Mai haben wir wieder für euch geöffnet! Wir organisieren verschiedene Veranstaltungen – schaut vorbei!'
              : 'We are expected to reopen on May 1st! We organize various events – come visit us!'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 py-4 w-full">
          <Link to="/veranstaltungen" onClick={handleClose} className="w-full">
            <Button className="w-full gap-2" variant="default">
              <CalendarDays className="w-4 h-4" />
              {language === 'de' ? 'Veranstaltungen ansehen' : 'View Events'}
            </Button>
          </Link>
          <Link to="/shop" onClick={handleClose} className="w-full">
            <Button className="w-full gap-2" variant="outline">
              <ShoppingBag className="w-4 h-4" />
              {language === 'de' ? 'Zum Hofladen' : 'Visit Shop'}
            </Button>
          </Link>
          <a href="/speisekarte.pdf" target="_blank" rel="noopener noreferrer" onClick={handleClose} className="w-full">
            <Button className="w-full gap-2" variant="outline">
              <Utensils className="w-4 h-4" />
              {language === 'de' ? 'Speisekarte ansehen' : 'View Menu'}
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuQRPopup;
