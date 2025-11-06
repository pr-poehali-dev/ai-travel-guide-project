import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Problems = () => {
  const problems = [
    { icon: "Clock", title: "Планировать долго и сложно", desc: "Часы на форумах и картах" },
    { icon: "MapPin", title: "Упускаешь классные места", desc: "Узнаёшь уже дома" },
    { icon: "Wallet", title: "Траты высокие", desc: "Не всегда оправданные" },
    { icon: "HelpCircle", title: "Не знаешь, чего хочешь", desc: "Выбор парализует" },
    { icon: "Users", title: "Детям скучно", desc: "Диету нарушить легко" },
    { icon: "Home", title: "Отель далеко", desc: "Питание ужасное" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Путешествия — это проблема?
        </h2>
        <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg">
          Знакомые боли каждого путешественника
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {problems.map((pain, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name={pain.icon} size={28} className="text-destructive sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{pain.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{pain.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
