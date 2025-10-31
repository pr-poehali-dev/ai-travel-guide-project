import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
            opacity: 0.9
          }}
        />
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
        
        <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Не планируй.<br />Путешествуй.<br />Будь как дома.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Строит путешествие как твой идеальный плейлист
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 animate-scale-in">
            Создать путешествие <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Путешествия — это проблема?
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Знакомые боли каждого путешественника
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "Clock", title: "Планировать долго и сложно", desc: "Часы на форумах и картах" },
              { icon: "MapPin", title: "Упускаешь классные места", desc: "Узнаёшь уже дома" },
              { icon: "Wallet", title: "Траты высокие", desc: "Не всегда оправданные" },
              { icon: "HelpCircle", title: "Не знаешь, чего хочешь", desc: "Выбор парализует" },
              { icon: "Users", title: "Детям скучно", desc: "Диету нарушить легко" },
              { icon: "Home", title: "Отель далеко", desc: "Питание ужасное" }
            ].map((pain, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Icon name={pain.icon} size={32} className="text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{pain.title}</h3>
                  <p className="text-muted-foreground">{pain.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 text-sm px-4 py-1">Решение</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Что делает ИИ-гид
            </h2>
            <p className="text-xl text-muted-foreground">
              Умный помощник, который знает всё о путешествиях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "Sparkles", title: "Создаёт план", desc: "За минуты, не за часы. Учитывает всё: интересы, бюджет, режим дня" },
              { icon: "Target", title: "Персонализирует", desc: "Под тебя, семью, детей, диету, спорт. Как будто знает тебя лично" },
              { icon: "Map", title: "Показывает весь маршрут", desc: "Видишь всё заранее. Без сюрпризов и стресса в поездке" },
              { icon: "Zap", title: "Меняет на лету", desc: "Погода, настроение, опоздание — адаптируется моментально" },
              { icon: "Compass", title: "Подсказывает места", desc: "Лучшие кафе, достопримечательности, локальные секреты" },
              { icon: "Shield", title: "Экономит деньги", desc: "Находит лучшие цены, даёт кэшбэк, защищает от переплат" }
            ].map((solution, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={solution.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
              Тест-драйв ИИ-гида <Icon name="Play" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Как это работает
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Три простых шага до идеального путешествия
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Icon name={step.icon} size={36} className="text-white" />
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-primary/10 -z-10">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-2xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-primary" />
              </div>
              <span className="font-semibold text-lg">Диалоговое окно</span>
              <Badge variant="secondary" className="ml-auto">Powered by DeepSeek</Badge>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm">
              <p className="mb-3"><span className="text-primary font-bold">Вы:</span> Еду в Сочи с семьёй на неделю</p>
              <p className="mb-3"><span className="text-accent font-bold">ИИ:</span> Отлично! Расскажите больше: дети какого возраста? Любите активный отдых или релакс?</p>
              <p><span className="text-primary font-bold">Вы:</span> Двое детей 5 и 8 лет, хотим и пляж, и горы</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-accent/5 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Фичи продукта</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё для идеального путешествия
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: "Brain", 
                title: "ИИ-планирование", 
                desc: "В реальном времени или заранее. Адаптация под погоду и настроение",
                color: "from-primary to-primary/70"
              },
              { 
                icon: "MessageCircle", 
                title: "Аватар-гид", 
                desc: "Диалог с «живым» ИИ через веб или Telegram-бот",
                color: "from-accent to-accent/70"
              },
              { 
                icon: "Handshake", 
                title: "Интеграция с партнёрами", 
                desc: "Лучшие цены на билеты, жильё, транспорт",
                color: "from-secondary to-secondary/70"
              },
              { 
                icon: "Gift", 
                title: "Двойной кэшбэк", 
                desc: "От оператора связи и партнёров. Экономия реальная",
                color: "from-primary to-secondary"
              },
              { 
                icon: "Heart", 
                title: "Life balance", 
                desc: "Учёт режима семьи, спортсменов, диеты, детей",
                color: "from-accent to-primary"
              },
              { 
                icon: "CheckSquare", 
                title: "Чек-лист", 
                desc: "Что взять с собой, персонализировано под тебя",
                color: "from-secondary to-accent"
              },
              { 
                icon: "Star", 
                title: "Саммари отзывов", 
                desc: "Коротко, по делу, актуально. Без воды и спама",
                color: "from-primary to-accent"
              },
              { 
                icon: "Wifi", 
                title: "Домашний роуминг", 
                desc: "При приезде в другой город — связь как дома",
                color: "from-accent to-secondary"
              },
              { 
                icon: "TrendingUp", 
                title: "Апельсины (бонусы X5)", 
                desc: "Начисляются и тратятся на путешествия",
                color: "from-secondary to-primary"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Тарифы
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Попробуй бесплатно, продолжай с удовольствием
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Badge variant="secondary" className="mb-4">Freemium</Badge>
                <h3 className="text-3xl font-bold mb-2">14 дней</h3>
                <p className="text-5xl font-bold mb-6">Бесплатно</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Полный доступ к ИИ-планировщику",
                    "До 3 маршрутов",
                    "Базовые рекомендации",
                    "Чек-лист путешественника"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" size="lg">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-semibold">
                Популярный
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-primary">Активный план</Badge>
                <h3 className="text-3xl font-bold mb-2">Без ограничений</h3>
                <p className="text-5xl font-bold mb-2">500 ₽</p>
                <p className="text-muted-foreground mb-6">в месяц</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Безлимитные маршруты",
                    "Адаптация в реальном времени",
                    "Приоритетная поддержка",
                    "Двойной кэшбэк",
                    "Интеграция с партнёрами",
                    "Саммари отзывов",
                    "Апельсины (бонусы X5)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Хочу путешествовать легко
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Истории путешественников
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Для каждого — свой сценарий
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                type: "Планировщик",
                icon: "ClipboardList",
                name: "Анна, 32",
                quote: "Раньше тратила недели на планирование. Теперь — 10 минут. И план идеальный!",
                color: "from-primary/10 to-accent/10"
              },
              {
                type: "Импровизатор",
                icon: "Zap",
                name: "Максим, 28",
                quote: "Просто еду и спрашиваю ИИ что рядом. Свобода и никакого стресса.",
                color: "from-secondary/10 to-primary/10"
              },
              {
                type: "Молодая семья",
                icon: "Users",
                name: "Елена и Дмитрий",
                quote: "С двумя детьми путешествовать стало реально. ИИ учёл всё: от режима сна до кафе с детским меню.",
                color: "from-accent/10 to-secondary/10"
              },
              {
                type: "Цифровой кочевник",
                icon: "Laptop",
                name: "Артём, 26",
                quote: "Работаю удалённо из разных городов. ИИ находит коворкинги, кафе с Wi-Fi, квартиры. Идеально.",
                color: "from-primary/10 to-secondary/10"
              },
              {
                type: "Нишевый турист",
                icon: "Mountain",
                name: "Ирина, 35",
                quote: "Йога-ретрит в горах. ИИ нашёл студии, вегетарианские кафе, тихие места. Как будто читает мысли.",
                color: "from-accent/10 to-primary/10"
              },
              {
                type: "Спортсмен",
                icon: "Bike",
                name: "Сергей, 29",
                quote: "Велопутешествие по Алтаю. Маршруты с учётом рельефа, кафе с ПП, места для ночлега. Топ!",
                color: "from-secondary/10 to-accent/10"
              }
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${story.color} flex items-center justify-center mb-4`}>
                    <Icon name={story.icon} size={48} className="text-primary" />
                  </div>
                  <Badge variant="outline" className="mb-3">{story.type}</Badge>
                  <h4 className="font-bold text-lg mb-2">{story.name}</h4>
                  <p className="text-muted-foreground italic">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Icon name="Plane" size={24} className="text-primary" />
                ИИ Тревел-Гид
              </h3>
              <p className="text-muted-foreground">
                Персональный планировщик путешествий в реальном времени
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 ИИ Тревел-Гид. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
