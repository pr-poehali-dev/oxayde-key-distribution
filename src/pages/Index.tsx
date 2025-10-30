import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBuyClick = () => {
    window.open('https://t.me/ebashygeroinss', '_blank');
  };

  const handleFreeClick = () => {
    window.open('https://t.me/PashaCoder', '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl w-full text-center space-y-12 animate-fade-in">
        <div className="space-y-6">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Shield" className="text-primary" size={48} />
            </div>
          </div>
          
          <h1 className="font-display font-black text-7xl md:text-9xl tracking-tight text-foreground animate-glow">
            MAGIC CHEAT
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Unlock the ultimate gaming experience with advanced features
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={handleBuyClick}
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-xl px-10 py-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] min-w-[280px]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Icon name="ShoppingCart" size={24} />
              Buy Key
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>

          <Button
            onClick={() => setIsDialogOpen(true)}
            size="lg"
            variant="outline"
            className="group relative overflow-hidden border-2 border-primary/50 hover:border-primary bg-background/50 backdrop-blur-sm text-foreground font-display font-bold text-xl px-10 py-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(217,70,239,0.4)] min-w-[280px]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Icon name="Gift" size={24} />
              Get Free Key
            </span>
          </Button>
        </div>

        <div className="pt-8 flex justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={16} className="text-secondary" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
        </div>

        <div className="relative z-10 py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(139,92,246,0.3)] animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Icon name="BadgeCheck" className="text-primary" size={48} />
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                Я оригинальный продавец
              </h2>
              <p className="text-muted-foreground text-lg">
                Покупайте только у официального поставщика. Остерегайтесь мошенников!
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleBuyClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold px-8 py-4"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться в Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-primary/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl text-center mb-2 flex items-center justify-center gap-2">
              <Icon name="Gift" className="text-primary" />
              Free Key
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-4 text-foreground/80">
              Прорекламируй 25 друзьям и свяжись с нами в Telegram @PashaCoder
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleFreeClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold px-8 py-6 text-lg"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Contact on Telegram
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;