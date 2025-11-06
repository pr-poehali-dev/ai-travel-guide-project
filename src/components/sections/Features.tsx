import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Brain",
      title: "ИИ-планирование",
      desc: "В реальном времени или заранее. Адаптация под погоду, опоздания и настроение"
    },
    {
      icon: "MessageCircle",
      title: "Аватар-гид",
      desc: "Диалог с живым ИИ через веб или Telegram-бот"
    },
    {
      icon: "Link",
      title: "Интеграция с партнёрами",
      desc: "Лучшие цены на билеты, жильё и транспорт"
    },
    {
      icon: "Gift",
      title: "Двойной кэшбэк",
      desc: "От оператора связи и партнёров одновременно"
    },
    {
      icon: "Heart",
      title: "Life balance",
      desc: "Учёт режима семьи, спортсменов, диеты и предпочтений"
    },
    {
      icon: "CheckSquare",
      title: "Чек-лист",
      desc: "Персонализированный список что взять с собой"
    },
    {
      icon: "Star",
      title: "Саммари отзывов",
      desc: "Коротко, по делу, только актуальная информация"
    },
    {
      icon: "Globe",
      title: "Домашний роуминг",
      desc: "При приезде в другой город — связь как дома"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Возможности
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё необходимое для комфортного путешествия в одном приложении
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-5 sm:p-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon} size={28} className="text-primary sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
