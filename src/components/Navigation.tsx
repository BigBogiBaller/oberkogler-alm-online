import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, Cloud } from "lucide-react";
import { useState } from "react";
import CartSheet from "@/components/CartSheet";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wood-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu + Contact Icons */}
          <div className="flex items-center gap-4">
            <button 
              className="text-white hover:text-alpine-cream transition-colors md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <button className="hidden md:block text-white hover:text-alpine-cream transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:maximilian_schwaiger@hotmail.com" className="text-white hover:text-alpine-cream transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+436645014429" className="text-white hover:text-alpine-cream transition-colors" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-alpine-cream">
                <Cloud className="h-4 w-4" />
                <span>-4,4°</span>
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Oberkogler Alm Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold hidden sm:block">Oberkogler Alm</span>
          </NavLink>

          {/* Right: Navigation Items */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-alpine-cream transition-colors text-sm">
              {t('nav.openingHours')}
            </button>
            <button className="text-white hover:text-alpine-cream transition-colors text-sm">
              {t('nav.vouchers')}
            </button>
            <div className="flex gap-2">
              <Button 
                variant={language === 'de' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setLanguage('de')}
                className="text-xs"
              >
                DE
              </Button>
              <Button 
                variant={language === 'en' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setLanguage('en')}
                className="text-xs"
              >
                EN
              </Button>
            </div>
            <CartSheet />
            <NavLink to="/reservation">
              <Button className="bg-reservation-red hover:bg-reservation-red/90 text-reservation-red-foreground font-semibold">
                {t('nav.reservation')}
              </Button>
            </NavLink>
          </div>

          {/* Mobile Right */}
          <div className="md:hidden flex items-center gap-2">
            <CartSheet />
            <NavLink to="/reservation">
              <Button size="sm" className="bg-reservation-red hover:bg-reservation-red/90 text-reservation-red-foreground">
                {t('nav.reservation')}
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Mobile & Desktop Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/20 py-4 flex flex-col gap-3">
            <NavLink 
              to="/" 
              className="text-white hover:text-alpine-cream transition-colors" 
              activeClassName="text-alpine-cream font-semibold" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/menu" 
              className="text-white hover:text-alpine-cream transition-colors" 
              activeClassName="text-alpine-cream font-semibold" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.menu')}
            </NavLink>
            <NavLink 
              to="/shop" 
              className="text-white hover:text-alpine-cream transition-colors" 
              activeClassName="text-alpine-cream font-semibold" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.shop')}
            </NavLink>
            <NavLink 
              to="/events" 
              className="text-white hover:text-alpine-cream transition-colors" 
              activeClassName="text-alpine-cream font-semibold" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.events')}
            </NavLink>
            <NavLink 
              to="/reviews" 
              className="text-white hover:text-alpine-cream transition-colors" 
              activeClassName="text-alpine-cream font-semibold" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.reviews')}
            </NavLink>
            
            <div className="md:hidden flex flex-col gap-2 pt-2 border-t border-white/20">
              <div className="flex gap-2">
                <Button 
                  variant={language === 'de' ? 'default' : 'ghost'} 
                  size="sm" 
                  onClick={() => setLanguage('de')}
                >
                  DE
                </Button>
                <Button 
                  variant={language === 'en' ? 'default' : 'ghost'} 
                  size="sm" 
                  onClick={() => setLanguage('en')}
                >
                  EN
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
