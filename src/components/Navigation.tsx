import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import { Menu, X, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import CartSheet from "@/components/CartSheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false);
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="flex items-center justify-between">
          {/* Left Section - Hamburger + Language + Icons */}
          <div className="flex items-center gap-4 md:gap-6 px-4 py-4">
            {/* Hamburger Menu */}
            <button 
              className={cn(
                "p-2 transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>

            {/* Language Toggle */}
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className={cn(
                "text-sm font-medium tracking-wider transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
            >
              {language.toUpperCase()}
            </button>

            {/* Email Icon */}
            <a 
              href="mailto:info@oberkogler-alm.at" 
              className={cn(
                "transition-colors hidden sm:block",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={1.5} />
            </a>

            {/* Phone Icon */}
            <a 
              href="tel:+4336873575" 
              className={cn(
                "transition-colors hidden sm:block",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              )}
              aria-label="Phone"
            >
              <Phone size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Center - Logo Text (clickable to scroll to top) */}
          <button 
            onClick={goToHome}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-heading tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80",
              isScrolled ? "opacity-100 text-primary" : "opacity-0 md:opacity-0"
            )}
          >
            Oberkogler Alm
          </button>

          {/* Right Section - Nav Links + Shop Button + Cart */}
          <div className="flex items-center">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 mr-8">
              <NavLink 
                to="/menu" 
                className={cn(
                  "text-sm tracking-wider transition-colors",
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                )}
                activeClassName="font-semibold"
              >
                {t('nav.menu')}
              </NavLink>
              <button 
                onClick={scrollToContact}
                className={cn(
                  "text-sm tracking-wider transition-colors",
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                )}
              >
                {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
              </button>
            </div>

            {/* Cart */}
            <div className={cn(
              "mr-6",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              <CartSheet />
            </div>

            {/* Shop Button - Full height corner */}
            <NavLink 
              to="/shop"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 md:px-20 py-6 text-sm tracking-wider font-medium transition-colors flex items-center justify-center h-full min-h-[72px]"
            >
              Shop
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-full sm:w-[500px] bg-background z-[70] transform transition-transform duration-500 ease-out overflow-y-auto",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <button 
            onClick={closeSidebar}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="text-sm font-medium tracking-wider text-foreground hover:text-primary transition-colors"
            >
              {language.toUpperCase()}
            </button>
            <a 
              href="mailto:info@oberkogler-alm.at" 
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="tel:+4336873575" 
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="px-8 py-10">
          {/* Main Navigation Section */}
          <div className="mb-10">
            <h3 className="text-primary font-heading text-xl mb-4 underline underline-offset-4 decoration-1">
              Oberkogler Alm
            </h3>
            <nav className="space-y-3 ml-4">
              <NavLink 
                to="/" 
                onClick={closeSidebar}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                activeClassName="text-primary font-medium"
              >
                — {t('nav.home')}
              </NavLink>
              <NavLink 
                to="/menu" 
                onClick={closeSidebar}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                activeClassName="text-primary font-medium"
              >
                — {t('nav.menu')}
              </NavLink>
              <NavLink 
                to="/shop" 
                onClick={closeSidebar}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                activeClassName="text-primary font-medium"
              >
                — Shop
              </NavLink>
              <button 
                onClick={scrollToContact}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                — {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
              </button>
              <button 
                onClick={scrollToContact}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                — {t('nav.contact')}
              </button>
            </nav>
          </div>

          {/* Category Links */}
          <nav className="space-y-6">
            <NavLink 
              to="/" 
              onClick={closeSidebar}
              className="block font-heading text-2xl text-foreground hover:text-primary transition-colors"
            >
              {language === 'de' ? 'Willkommen' : 'Welcome'}
            </NavLink>
            <NavLink 
              to="/menu" 
              onClick={closeSidebar}
              className="block font-heading text-2xl text-foreground hover:text-primary transition-colors"
            >
              {t('nav.menu')}
            </NavLink>
            <NavLink 
              to="/shop" 
              onClick={closeSidebar}
              className="block font-heading text-2xl text-foreground hover:text-primary transition-colors"
            >
              {language === 'de' ? 'Hofladen' : 'Farm Shop'}
            </NavLink>
            <button 
              onClick={scrollToContact}
              className="block font-heading text-2xl text-foreground hover:text-primary transition-colors text-left w-full"
            >
              {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
            </button>
            <button 
              onClick={scrollToContact}
              className="block font-heading text-2xl text-foreground hover:text-primary transition-colors text-left w-full"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/oberkogler_alm/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/OberKogler/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Facebook
              </a>
              <a 
                href="https://www.tiktok.com/@oberkogler_alm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
