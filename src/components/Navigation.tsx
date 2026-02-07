import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import { Menu, X, Mail, Phone, Instagram, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import CartSheet from "@/components/CartSheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsSidebarOpen(false);
  };
  const closeSidebar = () => setIsSidebarOpen(false);
  return <>
      {/* Main Navigation Bar */}
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent")}>
        <div className="flex items-center justify-between">
          {/* Left Section - Hamburger + Language + Icons */}
          <div className="flex items-center gap-4 md:gap-6 px-4 py-4">
            {/* Hamburger Menu */}
            <button className={cn("p-2 transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")} onClick={() => setIsSidebarOpen(true)} aria-label="Open menu">
              <Menu size={24} strokeWidth={1.5} />
            </button>

            {/* Language Toggle */}
            <button onClick={() => setLanguage(language === 'de' ? 'en' : 'de')} className={cn("text-sm font-medium tracking-wider transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")}>
              {language.toUpperCase()}
            </button>

            {/* Email Icon */}
            <a href="mailto:info@oberkogler-alm.at" className={cn("transition-colors hidden sm:block", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")} aria-label="Email">
              <Mail size={20} strokeWidth={1.5} />
            </a>

            {/* Phone Icon */}
            <a href="tel:+436645014429" className={cn("transition-colors hidden sm:block", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")} aria-label="Phone">
              <Phone size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Center - Logo Text (clickable to scroll to top) */}
          <button onClick={goToHome} className={cn("absolute left-1/2 -translate-x-1/2 font-heading uppercase transition-all duration-300 hover:opacity-80", isScrolled ? "opacity-100 text-primary" : "opacity-0 md:opacity-0")}>
            <span className="hidden sm:inline text-base md:text-2xl tracking-[0.2em]">Oberkogler Alm</span>
            <span className="sm:hidden flex flex-col items-center leading-tight text-xs tracking-[0.12em]">
              <span>Oberkogler</span>
              <span>Alm</span>
            </span>
          </button>

          {/* Right Section - Nav Links + Shop Button + Cart */}
          <div className="flex items-center">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 mr-8">
              <NavLink to="/menu" className={cn("text-sm tracking-wider transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")} activeClassName="font-semibold">
                {t('nav.menu')}
              </NavLink>
              <button onClick={scrollToContact} className={cn("text-sm tracking-wider transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80")}>
                {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
              </button>
            </div>

            {/* Cart */}
            <div className={cn("mr-6", isScrolled ? "text-foreground" : "text-white")}>
              <CartSheet />
            </div>

            {/* Shop Button - Full height corner */}
            <NavLink to="/shop" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 md:px-20 py-6 text-sm tracking-wider font-medium transition-colors flex items-center justify-center h-full min-h-[72px]">
              Shop
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={cn("fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300", isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={closeSidebar} />

      {/* Sidebar */}
      <aside className={cn("fixed top-0 left-0 h-full w-full sm:w-[500px] bg-background z-[70] transform transition-transform duration-500 ease-out overflow-y-auto", isSidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <button onClick={closeSidebar} className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Close menu">
            <X size={24} strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-4">
            <button onClick={() => setLanguage(language === 'de' ? 'en' : 'de')} className="text-sm font-medium tracking-wider text-foreground hover:text-primary transition-colors">
              {language.toUpperCase()}
            </button>
            <a href="mailto:info@oberkogler-alm.at" className="text-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a href="tel:+436645014429" className="text-foreground hover:text-primary transition-colors" aria-label="Phone">
              <Phone size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="px-8 py-10">
          {/* Main Navigation Section */}
          

          {/* Category Links */}
          <nav className="space-y-6">
            <NavLink to="/" onClick={closeSidebar} className="block font-heading text-2xl text-foreground hover:text-primary transition-colors">
              {language === 'de' ? 'Über Uns' : 'About Us'}
            </NavLink>
            <NavLink to="/menu" onClick={closeSidebar} className="block font-heading text-2xl text-foreground hover:text-primary transition-colors">
              {t('nav.menu')}
            </NavLink>
            <NavLink to="/shop" onClick={closeSidebar} className="block font-heading text-2xl text-foreground hover:text-primary transition-colors">
              {language === 'de' ? 'Hofladen' : 'Farm Shop'}
            </NavLink>
            <NavLink to="/gallery" onClick={closeSidebar} className="block font-heading text-2xl text-foreground hover:text-primary transition-colors">
              {language === 'de' ? 'Galerie' : 'Gallery'}
            </NavLink>
            <div>
              <button onClick={() => setIsHoursOpen(!isHoursOpen)} className="flex items-center gap-2 font-heading text-2xl text-foreground hover:text-primary transition-colors text-left w-full">
                {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
                <ChevronDown className={cn("w-5 h-5 transition-transform", isHoursOpen && "rotate-180")} />
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 ease-out", isHoursOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0")}>
                <div className="pl-4 space-y-2 text-muted-foreground text-sm">
                  <p><span className="text-primary font-medium">{language === 'de' ? 'Montag' : 'Monday'}:</span> {language === 'de' ? 'Ruhetag' : 'Closed'}</p>
                  <p><span className="text-primary font-medium">{language === 'de' ? 'Dienstag bis Sonntag' : 'Tuesday to Sunday'}:</span> 10:00 - 18:00</p>
                  <p className="pt-2"><span className="text-primary font-medium">{language === 'de' ? 'Küche geöffnet' : 'Kitchen open'}:</span></p>
                  <p>10:00 - 17:00</p>
                </div>
              </div>
            </div>
            <NavLink to="/reviews" onClick={closeSidebar} className="block font-heading text-2xl text-foreground hover:text-primary transition-colors">
              {language === 'de' ? 'Rezensionen' : 'Reviews'}
            </NavLink>
          </nav>

          {/* Contact & Social Links */}
          <div className="mt-12 pt-8 border-t border-border space-y-4">
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="tel:+436645014429" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <span className="text-primary font-medium">Tel:</span>
                <span className="underline underline-offset-2">+43 664 5014429</span>
              </a>
              <a href="mailto:info@oberkogler-alm.at" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <span className="text-primary font-medium">E-Mail:</span>
                <span className="underline underline-offset-2">info@oberkogler-alm.at</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a href="https://www.facebook.com/OberKogler/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/oberkogler_alm/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@oberkogler_alm" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors" aria-label="TikTok">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>;
};
export default Navigation;