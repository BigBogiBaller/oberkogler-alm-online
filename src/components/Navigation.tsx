import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import CartSheet from "@/components/CartSheet";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Oberkogler Alm Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-primary">Oberkogler Alm</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="text-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold">
              {t('nav.home')}
            </NavLink>
            <NavLink to="/shop" className="text-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold">
              {t('nav.shop')}
            </NavLink>
            <NavLink to="/reviews" className="text-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold">
              {t('nav.reviews')}
            </NavLink>
            <Button variant="default" size="sm" onClick={scrollToContact}>
              {t('nav.contact')}
            </Button>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/oberkogler_alm/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/OberKogler/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@oberkogler_alm" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <div className="flex gap-2">
              <Button variant={language === 'de' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('de')}>
                DE
              </Button>
              <Button variant={language === 'en' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('en')}>
                EN
              </Button>
            </div>
            <CartSheet />
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="md:hidden flex items-center gap-2">
            <CartSheet />
            <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <NavLink to="/" className="text-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold" onClick={() => setIsMenuOpen(false)}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/shop" className="text-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold" onClick={() => setIsMenuOpen(false)}>
              {t('nav.shop')}
            </NavLink>
            <NavLink to="/reviews" className="text-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold" onClick={() => setIsMenuOpen(false)}>
              {t('nav.reviews')}
            </NavLink>
            <Button variant="default" size="sm" onClick={scrollToContact}>
              {t('nav.contact')}
            </Button>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/oberkogler_alm/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/OberKogler/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@oberkogler_alm" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <div className="flex gap-2">
              <Button variant={language === 'de' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('de')}>
                DE
              </Button>
              <Button variant={language === 'en' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('en')}>
                EN
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;