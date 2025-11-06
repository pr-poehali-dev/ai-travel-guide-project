import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Integration = () => {
  return (
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1">Экосистема</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Всё в одном месте
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Работает в экосистеме твоего мобильного оператора: связь, интернет, кэшбэк и тревел-помощник
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Smartphone" size={24} className="text-primary sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Домашний роуминг</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      При приезде в другой город твой тариф работает как дома. Никаких доплат за роуминг
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Gift" size={24} className="text-secondary sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Двойной кэшбэк</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Получай апельсины от оператора и бонусы от партнёров за каждую покупку в путешествии
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-6 sm:p-10 text-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-accent sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl">Безопасность и надёжность</h3>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Все сервисы проверены и интегрированы с твоим оператором. 
                Твои данные защищены, платежи безопасны, поддержка 24/7
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Integration;
