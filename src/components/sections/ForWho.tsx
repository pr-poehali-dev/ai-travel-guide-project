import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ForWho = () => {
  const personas = [
    {
      icon: "ClipboardList",
      title: "Планировщик",
      desc: "Любит организовать всё заранее и контролировать каждый шаг",
      scenario: "ИИ создаст детальный план с резервами времени и запасными вариантами"
    },
    {
      icon: "Zap",
      title: "Импровизатор",
      desc: "Путешествует спонтанно, ищет лёгкость и яркие эмоции",
      scenario: "ИИ подскажет что интересного рядом прямо сейчас и адаптирует маршрут"
    },
    {
      icon: "Users",
      title: "Молодая семья",
      desc: "Ценит надёжность, комфорт и отсутствие сюрпризов",
      scenario: "ИИ учтёт режим детей, найдёт семейные кафе и безопасные развлечения"
    },
    {
      icon: "Laptop",
      title: "Цифровой кочевник",
      desc: "Работает удалённо, нужна гибкость и хороший интернет",
      scenario: "ИИ найдёт коворкинги, кафе с WiFi и места для работы с видом"
    },
    {
      icon: "Mountain",
      title: "Нишевый турист",
      desc: "Увлечён спортом, гастротурами, ретритами или экспедициями",
      scenario: "ИИ подберёт специализированные маршруты и уникальные локации"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Для кого
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Самостоятельные путешественники по России
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={persona.icon} size={24} className="text-accent sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl">{persona.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{persona.desc}</p>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-start gap-2">
                    <Icon name="Lightbulb" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-primary font-medium">{persona.scenario}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
