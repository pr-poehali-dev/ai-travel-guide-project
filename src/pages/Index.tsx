import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeTab, setActiveTab] = useState("для тебя");

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Icon name="Menu" size={24} />
            </Button>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} className="text-muted-foreground" />
              <span className="font-medium">Москва</span>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-secondary"></div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              помощь
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full px-6">
              ВОЙТИ
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-24 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary"></div>
          <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-secondary"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                ОГООО<br />
                №1 в метрооо!
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                билайн — лидер по качеству связи
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full px-8 py-6 text-lg"
              >
                подробнее
              </Button>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-full border-[40px] border-primary"></div>
                <div className="absolute inset-8 rounded-full border-[30px] border-secondary"></div>
                <div className="absolute inset-16 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                    alt="Happy person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-primary text-secondary px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                  <Icon name="Plus" className="inline mr-2" size={20} />
                  1 ТБ
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-3 flex items-center gap-2 flex-wrap justify-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-primary text-secondary rounded-full hover:bg-primary/90"
              >
                <Icon name="Plus" size={20} />
              </Button>
              {["для тебя", "для дома", "для семьи", "для устройств", "для бизнеса", "для карьеры"].map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  className={`rounded-full px-6 ${activeTab === tab ? 'bg-muted' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="text-4xl font-black">для тебя</h2>
              <div className="flex gap-3 flex-wrap">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  тарифы и подписки
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  перенести номер
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  роуминг
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  безопасность
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  услуги
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 border-0">
                <CardContent className="p-8 h-64 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-white text-secondary mb-4">подписка</Badge>
                    <h3 className="text-2xl font-black mb-2">подписка Bee START</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-500"></div>
                      <div className="w-8 h-8 rounded-full bg-green-600"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary to-yellow-500 border-0 text-secondary">
                <CardContent className="p-8 h-64 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-white text-primary mb-4">подписка</Badge>
                    <h3 className="text-2xl font-black mb-2">подписка Bee HIT</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-500"></div>
                      <div className="w-8 h-8 rounded-full bg-green-600"></div>
                      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 border-0 text-white">
                <CardContent className="p-8 h-64 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-primary text-secondary mb-4">план Б.</Badge>
                    <h3 className="text-2xl font-black mb-2">план Б.</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black">1 ТБ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Почему выбирают билайн
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: "Zap", 
                  title: "Быстрая связь", 
                  desc: "Высокая скорость интернета в метро и по всей России" 
                },
                { 
                  icon: "Shield", 
                  title: "Надёжность", 
                  desc: "Стабильное покрытие и качество связи в любой точке" 
                },
                { 
                  icon: "Heart", 
                  title: "Забота", 
                  desc: "Поддержка 24/7 и выгодные условия для каждого" 
                },
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name={feature.icon} size={40} className="text-primary" />
                    </div>
                    <h3 className="font-black text-2xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Готовы начать?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Подключайтесь к билайн и получите лучшие условия связи
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-secondary font-bold rounded-full px-12 py-6 text-xl"
            >
              Подключиться сейчас
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h4 className="font-bold mb-4">О компании</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">О нас</a></li>
                <li><a href="#" className="hover:text-foreground">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground">Пресс-центр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Помощь</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Поддержка</a></li>
                <li><a href="#" className="hover:text-foreground">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Сервисы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Личный кабинет</a></li>
                <li><a href="#" className="hover:text-foreground">Приложение</a></li>
                <li><a href="#" className="hover:text-foreground">Роуминг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 билайн. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
