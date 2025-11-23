import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { QrCode } from "lucide-react";

interface MenuPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MenuPopup = ({ open, onOpenChange }: MenuPopupProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            {t('menu.qrTitle')}
          </DialogTitle>
          <DialogDescription>
            {t('menu.qrSubtitle')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="bg-background p-4 rounded-lg border-2 border-primary">
            {/* Placeholder für QR-Code - hier kann später ein echter QR-Code eingefügt werden */}
            <div className="w-48 h-48 bg-muted flex items-center justify-center">
              <QrCode className="w-32 h-32 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {t('menu.viewMenu')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuPopup;
