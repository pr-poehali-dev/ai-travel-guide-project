import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Solution = () => {
  const solutions = [
    { icon: "Sparkles", title: "Создаёт план", desc: "За минуты, не за часы. Учитывает всё: интересы, бюджет, режим дня" },
    { icon: "Target", title: "Персонализирует", desc: "Под тебя, семью, детей, диету, спорт. Как будто знает тебя лично" },
    { icon: "Map", title: "Показывает весь маршрут", desc: "Видишь всё заранее. Без сюрпризов и стресса в поездке" },
    { icon: "Zap", title: "Меняет на лету", desc: "Погода, настроение, опоздание — адаптируется моментально" },
    { icon: "Compass", title: "Подсказывает места", desc: "Лучшие кафе, достопримечательности, локальные секреты" },
    { icon: "DollarSign", title: "Экономит деньги", desc: "Находит лучшие цены, даёт кэшбэк, защищает от переплат" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <Badge className="mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1">Решение</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Что делает ИИ-гид
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Умный помощник, который знает всё о путешествиях
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={solution.icon} size={20} className="text-primary sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2">{solution.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{solution.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-8">
            Тест-драйв ИИ-гида <Icon name="Play" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
