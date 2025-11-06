import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const stories = [
    {
      persona: "Планировщик",
      name: "Анна, 32",
      icon: "ClipboardList",
      story: "Раньше тратила дни на изучение форумов. Теперь ИИ за 10 минут создал идеальный план на неделю в Карелии с учётом погоды и моих интересов",
      badge: "Сэкономила 15 часов"
    },
    {
      persona: "Импровизатор",
      name: "Максим, 28",
      icon: "Zap",
      story: "Люблю спонтанность, но всегда упускал классные места. Теперь ИИ подсказывает что интересного рядом прямо в моменте",
      badge: "Открыл 12 новых мест"
    },
    {
      persona: "Молодая семья",
      name: "Екатерина и Дмитрий",
      icon: "Users",
      story: "С двумя детьми путешествия были стрессом. ИИ учёл режим дня, нашёл семейные кафе и детские площадки. Теперь отдыхаем, а не выживаем",
      badge: "Без стресса с детьми"
    },
    {
      persona: "Цифровой кочевник",
      name: "Игорь, 35",
      icon: "Laptop",
      story: "Работаю удалённо из разных городов. ИИ находит коворкинги с хорошим WiFi и строит маршрут вокруг моего рабочего графика",
      badge: "Работа + путешествия"
    },
    {
      persona: "Нишевый турист",
      name: "Ольга, 29",
      icon: "Mountain",
      story: "Занимаюсь йогой и ищу ретриты. ИИ нашёл уединённые места с природой и построил маршрут под мою практику",
      badge: "Идеальные локации"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Истории путешественников
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные сценарии использования ИИ-гида
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={story.icon} size={20} className="text-primary sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm sm:text-base">{story.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{story.persona}</p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-foreground mb-4 leading-relaxed">
                  "{story.story}"
                </p>

                <Badge variant="secondary" className="text-xs">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  {story.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Card className="max-w-3xl mx-auto border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-6 sm:p-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                <Icon name="Star" size={24} className="text-secondary fill-secondary" />
                <Icon name="Star" size={24} className="text-secondary fill-secondary" />
                <Icon name="Star" size={24} className="text-secondary fill-secondary" />
                <Icon name="Star" size={24} className="text-secondary fill-secondary" />
                <Icon name="Star" size={24} className="text-secondary fill-secondary" />
              </div>
              <p className="text-xl sm:text-2xl font-bold mb-3">4.9 из 5</p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Средняя оценка от 1,200+ путешественников в бета-тестировании
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
