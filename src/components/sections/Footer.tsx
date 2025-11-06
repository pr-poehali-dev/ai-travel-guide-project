import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Compass" size={28} className="text-primary" />
              <span className="text-xl sm:text-2xl font-bold">ИИ Тревел-гид</span>
            </div>
            <p className="text-sm sm:text-base text-background/70 mb-4">
              Персональный планировщик путешествий в реальном времени
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Icon name="Send" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Продукт</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Для кого</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Telegram-бот</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Компания</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-background/60 text-center sm:text-left">
              © 2025 ИИ Тревел-гид. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-background/60">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span>Powered by DeepSeek</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
