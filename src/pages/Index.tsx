import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { WaitlistModal } from "@/components/WaitlistModal";
import { TravelLeadModal } from "@/components/TravelLeadModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTravelLeadModalOpen, setIsTravelLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/files/50fe5921-7bb9-4ae4-a7e6-61b334a4dc59.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)'
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Не планируй.<br />Путешествуй.<br />Будь как дома.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 px-2">
            Собери путешествие как свой идеальный плейлист
          </p>
          <Button 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-secondary hover:bg-secondary/90 text-white animate-scale-in"
            onClick={() => setIsModalOpen(true)}
          >
            Создать путешествие <Icon name="ArrowRight" className="ml-2" />
          </Button>

          <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
          <TravelLeadModal open={isTravelLeadModalOpen} onOpenChange={setIsTravelLeadModalOpen} />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 px-2">
            Путешествия — это проблема?
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-2">
            Знакомые боли каждого путешественника
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { icon: "Clock", quote: "Трачу часы на форумах и картах. Планировать долго и сложно — уже устал ещё до поездки" },
              { icon: "MapPin", quote: "Узнаю о классных местах уже дома. Обидно упускать то, что было рядом" },
              { icon: "Wallet", quote: "Траты всегда выше, чем планировал. Не всегда понимаю, за что переплачиваю" },
              { icon: "HelpCircle", quote: "Не знаю, чего хочу. Выбор парализует — слишком много вариантов" },
              { icon: "Users", quote: "Детям скучно, не знаю чем их занять. Поездка превращается в стресс" },
              { icon: "Home", quote: "Отель далеко от всего, а питание ужасное. Надо было лучше выбирать" }
            ].map((pain, index) => (
              <Card key={index} className="border-l-4 border-l-destructive hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={pain.icon} size={24} className="text-destructive" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg italic text-muted-foreground">"{pain.quote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 text-sm px-4 py-1">Решение</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-2">
              Что делает ИИ-гид
            </h2>
            <p className="text-xl text-muted-foreground">
              Умный помощник, который знает всё о путешествиях
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "Sparkles", title: "Создаёт план", desc: "За минуты, не за часы. Учитывает всё: интересы, бюджет, режим дня" },
              { icon: "Target", title: "Персонализирует", desc: "Под тебя, семью, детей, диету, спорт. Как будто знает тебя лично" },
              { icon: "Map", title: "Показывает весь маршрут", desc: "Видишь всё заранее. Без сюрпризов и стресса в поездке" },
              { icon: "Zap", title: "Меняет на лету", desc: "Погода, настроение, опоздание — адаптируется моментально" },
              { icon: "Compass", title: "Подсказывает места", desc: "Лучшие кафе, достопримечательности, локальные секреты" },
              { icon: "Shield", title: "Экономит деньги", desc: "Находит лучшие цены, даёт кэшбэк, защищает от переплат" }
            ].map((solution, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={solution.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 px-2">
            Как это работает
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-2">
            Три простых шага до идеального путешествия
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <h3 className="font-bold text-xl sm:text-2xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg px-2">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-card border-2 border-primary/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-primary" />
              </div>
              <span className="font-semibold text-lg">Диалоговое окно</span>
              <Badge variant="secondary" className="ml-auto">Powered by DeepSeek</Badge>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3">
              <p><span className="text-primary font-bold">Вы:</span> Еду в Сочи с семьёй на неделю</p>
              <p><span className="text-accent font-bold">ИИ:</span> Отлично! Расскажи, чего хочется: активного отдыха или побольше релакса?</p>
              <p><span className="text-primary font-bold">Вы:</span> Двое детей 5 и 8 лет, хотим и пляж, и горы</p>
              <p><span className="text-accent font-bold">ИИ:</span> Отлично, вот ваша программа, которая понравится и вам, и вашим детям:</p>
              <div className="ml-4 mt-2 space-y-1 text-muted-foreground">
                <p>📅 День 1-2: Акклиматизация на пляже Ривьера (детская площадка рядом)</p>
                <p>📅 День 3: Олимпийский парк + океанариум</p>
                <p>📅 День 4: Роза Хутор — канатка, горы, активности для детей</p>
                <p>📅 День 5: Сочи Парк — аттракционы</p>
                <p>📅 День 6-7: Свободное время, пляж, резервные планы</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 px-2">
            Тарифы
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-2">Попробуй бесплатно, продолжи с удовольствием</p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <Badge variant="secondary" className="mb-4">Freemium</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">14 дней</h3>
                <p className="text-4xl sm:text-5xl font-bold mb-6">Бесплатно</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Планирование путешествия за 1 минуту с учетом всех пожеланий",
                    "Чек-лист путешественника, чтобы ничего не забыть",
                    "Адаптация плана на месте",
                    "Подсказка хороших мест",
                    "Лайфхаки и локальные секреты"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold">
                Популярный
              </div>
              <CardContent className="p-6 sm:p-8">
                <Badge className="mb-4 bg-primary">Активный план</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Без ограничений</h3>
                <p className="text-4xl sm:text-5xl font-bold mb-2">499 ₽</p>
                <p className="text-muted-foreground mb-6">в месяц</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Безлимитное планирование с учетом всех пожеланий",
                    "Чек-лист, чтобы ничего не забыть",
                    "Адаптация на месте",
                    "Лучшие предложения по бронированию",
                    "Двойной кешбек",
                    "Лайфхаки",
                    "Саммари отзывов обо всех достопримечательностях",
                    "Поддержка связи"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90" 
                  size="lg"
                  onClick={() => setIsTravelLeadModalOpen(true)}
                >
                  Хочу путешествовать легко
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Экосистема</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-2">
                Работает в экосистеме твоего мобильного оператора
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Связь, интернет, кэшбэк и тревел-помощник — всё в одном месте
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: "Smartphone",
                  title: "Домашний роуминг",
                  desc: "При приезде в другой город — связь работает как дома. Без доплат и сюрпризов"
                },
                {
                  icon: "Wifi",
                  title: "Быстрый интернет",
                  desc: "Стабильное подключение в любой точке маршрута. Навигация всегда под рукой"
                },
                {
                  icon: "Coins",
                  title: "Двойной кэшбэк",
                  desc: "Бонусы от оператора и партнёров. Путешествуй — копи на следующую поездку и получай бонусы"
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
                <Icon name="Sparkles" size={32} />
                <span className="text-xl sm:text-2xl font-bold text-center">Бонус для абонентов</span>
              </div>
              <p className="text-base sm:text-lg mb-6 opacity-90 max-w-2xl mx-auto px-4">
                Используй баллы X5 для оплаты подписки. Путешествуй больше - плати меньше
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 px-2">
            Истории путешественников
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-2">
            Для каждого — свой сценарий
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                type: "Планировщик",
                icon: "ClipboardList",
                name: "Анна, 32",
                quote: "Раньше тратила недели на планирование. Теперь — 10 минут. И план идеальный!",
                image: "https://cdn.poehali.dev/projects/b10c7d8f-c8ea-4f01-b0fe-c291bd161778/files/4a773b27-37f9-408e-8ca5-6db9508e1f49.jpg"
              },
              {
                type: "Импровизатор",
                icon: "Zap",
                name: "Максим, 28",
                quote: "Просто еду и спрашиваю ИИ что рядом. Свобода и никакого стресса.",
                image: "https://cdn.poehali.dev/projects/b10c7d8f-c8ea-4f01-b0fe-c291bd161778/files/c0baf497-298e-4693-b1ca-b67ab436e749.jpg"
              },
              {
                type: "Молодая семья",
                icon: "Users",
                name: "Елена и Дмитрий",
                quote: "С двумя детьми путешествовать стало реально. ИИ учёл всё: от режима сна до кафе с детским меню.",
                image: "https://cdn.poehali.dev/projects/b10c7d8f-c8ea-4f01-b0fe-c291bd161778/files/35ae28e0-379a-46ed-ac8e-6dac3e7daf7e.jpg"
              },
              {
                type: "Цифровой кочевник",
                icon: "Laptop",
                name: "Артём, 26",
                quote: "Работаю удалённо из разных городов. ИИ находит коворкинги, кафе с Wi-Fi, квартиры. Идеально.",
                image: "https://cdn.poehali.dev/projects/b10c7d8f-c8ea-4f01-b0fe-c291bd161778/files/f26ca836-9622-4785-9951-179ccbf97109.jpg"
              },
              {
                type: "Нишевый турист",
                icon: "Mountain",
                name: "Ирина, 35",
                quote: "Йога-ретрит в горах. ИИ нашёл студии, вегетарианские кафе, тихие места. Как будто читает мысли.",
                image: "https://cdn.poehali.dev/projects/b10c7d8f-c8ea-4f01-b0fe-c291bd161778/files/2ef58b8a-ad4b-4739-9047-539af6cf7ce1.jpg"
              },
              {
                type: "Спортсмен",
                icon: "Bike",
                name: "Сергей, 29",
                quote: "Велопутешествие по Алтаю. Маршруты с учётом рельефа, кафе с ПП, места для ночлега. Топ!",
                image: "https://cdn.poehali.dev/projects/b10c7d8f-c8ea-4f01-b0fe-c291bd161778/files/68682521-03b3-4a9b-9bbb-0bae89dd4e87.jpg"
              }
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-64 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600 backdrop-blur-sm">{story.type}</Badge>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="font-bold text-lg mb-2">{story.name}</h4>
                    <p className="text-muted-foreground italic">"{story.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-8 sm:py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
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

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;