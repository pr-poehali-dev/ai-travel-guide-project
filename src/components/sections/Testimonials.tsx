import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const stories = [
    {
      persona: "Планировщик",
      name: "Анна, 32",
      icon: "ClipboardList",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      story: "Раньше тратила дни на изучение форумов. Теперь ИИ за 10 минут создал идеальный план на неделю в Карелии с учётом погоды и моих интересов",
      badge: "Сэкономила 15 часов"
    },
    {
      persona: "Импровизатор",
      name: "Максим, 28",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      story: "Люблю спонтанность, но всегда упускал классные места. Теперь ИИ подсказывает что интересного рядом прямо в моменте",
      badge: "Открыл 12 новых мест"
    },
    {
      persona: "Молодая семья",
      name: "Екатерина и Дмитрий",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80",
      story: "С двумя детьми путешествия были стрессом. ИИ учёл режим дня, нашёл семейные кафе и детские площадки. Теперь отдыхаем, а не выживаем",
      badge: "Без стресса с детьми"
    },
    {
      persona: "Цифровой кочевник",
      name: "Игорь, 35",
      icon: "Laptop",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      story: "Работаю удалённо из разных городов. ИИ находит коворкинги с хорошим WiFi и строит маршрут вокруг моего рабочего графика",
      badge: "Работа + путешествия"
    },
    {
      persona: "Нишевый турист",
      name: "Ольга, 29",
      icon: "Mountain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
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
              className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Icon name={story.icon} size={20} className="text-primary" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-base">{story.name}</p>
                    <p className="text-sm opacity-90">{story.persona}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
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