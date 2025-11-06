import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Тарифы
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Попробуй бесплатно 14 дней и оцени все возможности
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <Card className="border-2 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 sm:p-8">
              <Badge variant="outline" className="mb-4 text-xs sm:text-sm">Freemium</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Бесплатно</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">14 дней полного доступа</p>
              
              <ul className="space-y-3 sm:space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Все функции ИИ-гида</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Неограниченное планирование</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Доступ к партнёрским ценам</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Базовый кэшбэк</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full text-sm sm:text-base">
                Начать бесплатно
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-white px-3 sm:px-4 py-1 rounded-bl-lg text-xs sm:text-sm font-semibold">
              Популярный
            </div>
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-4 text-xs sm:text-sm">Активный план</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">500 ₽</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">в месяц или 1 поездка</p>
              
              <ul className="space-y-3 sm:space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium">Всё из бесплатного тарифа</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Приоритетная поддержка 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Двойной кэшбэк апельсинами</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Эксклюзивные предложения партнёров</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Расширенная персонализация</span>
                </li>
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base">
                Хочу путешествовать легко
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-secondary/20 bg-secondary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="Apple" size={24} className="text-secondary" />
                <h4 className="font-bold text-lg sm:text-xl">Апельсины (бонусы Х5)</h4>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Начисляются за покупки в путешествиях и тратятся на следующие поездки. 
                1 апельсин = 1 рубль скидки
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
