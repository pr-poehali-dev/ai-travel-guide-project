import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    { 
      step: "01", 
      icon: "MessageSquare", 
      title: "Расскажи о себе", 
      desc: "Кто ты, куда едешь, что любишь. Просто поговори с ИИ как с другом" 
    },
    { 
      step: "02", 
      icon: "Layout", 
      title: "Получи план", 
      desc: "По дням с маршрутами, местами, временем. Всё готово для путешествия" 
    },
    { 
      step: "03", 
      icon: "RefreshCw", 
      title: "Адаптируй в пути", 
      desc: "Меняй планы на лету. Погода, настроение — ИИ подстроится" 
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
          Как это работает
        </h2>
        <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg">
          Три простых шага до идеального путешествия
        </p>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Icon name={step.icon} size={28} className="text-white sm:w-9 sm:h-9" />
                </div>
                <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl font-bold text-primary/10 -z-10">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{step.desc}</p>
              </div>
              {index < 2 && (
                <div className="hidden sm:block absolute top-8 sm:top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto bg-card border-2 border-primary/20 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Bot" size={20} className="text-primary" />
            </div>
            <span className="font-semibold text-base sm:text-lg">Диалоговое окно</span>
            <Badge variant="secondary" className="ml-auto text-xs">Powered by DeepSeek</Badge>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 sm:p-6 space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 sm:p-4 shadow-sm max-w-[80%]">
                <p className="text-sm sm:text-base">Хочу в Казань на 3 дня с семьей. У нас двое детей 5 и 8 лет</p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-primary text-white rounded-2xl rounded-tr-none p-3 sm:p-4 shadow-sm max-w-[80%]">
                <p className="text-sm sm:text-base">Отлично! Создам маршрут с местами для всей семьи. Когда планируете поездку?</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
