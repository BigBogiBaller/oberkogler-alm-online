import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Download, Utensils } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import speisekarteQR from "@/assets/speisekarte-qr.png";

const MenuQRPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if user has already dismissed the popup in this session
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

  const handleDownload = () => {
    window.open("/speisekarte.pdf", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-background border-primary/20">
        <DialogHeader className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
            <Utensils className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-primary">
            {language === 'de' ? 'Unsere Speisekarte' : 'Our Menu'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {language === 'de' 
              ? 'Scannen Sie den QR-Code oder laden Sie unsere Speisekarte herunter' 
              : 'Scan the QR code or download our menu'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <img 
              src={speisekarteQR} 
              alt="Speisekarte QR Code" 
              className="w-48 h-48 object-contain"
            />
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            {language === 'de' 
              ? 'Scannen Sie den Code mit Ihrem Smartphone' 
              : 'Scan the code with your smartphone'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button 
              onClick={handleDownload}
              className="flex-1 gap-2"
              variant="default"
            >
              <Download className="w-4 h-4" />
              {language === 'de' ? 'PDF herunterladen' : 'Download PDF'}
            </Button>
            <Button 
              onClick={handleClose}
              variant="outline"
              className="flex-1"
            >
              {language === 'de' ? 'Später' : 'Later'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuQRPopup;
