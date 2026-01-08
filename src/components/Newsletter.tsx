import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    toast.success(t('newsletter.success'));
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3 text-primary-foreground">
        <CheckCircle className="h-6 w-6" />
        <span>{t('newsletter.thanks')}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder={t('newsletter.placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 bg-primary-foreground text-foreground"
          required
        />
      </div>
      <Button 
        type="submit" 
        variant="secondary"
        disabled={isLoading}
      >
        {isLoading ? t('newsletter.sending') : t('newsletter.subscribe')}
      </Button>
    </form>
  );
};

export default Newsletter;
