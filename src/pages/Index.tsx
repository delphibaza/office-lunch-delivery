import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const menuItems = {
    monday: [
      { id: 1, name: 'Борщ с говядиной', price: 380, category: 'Супы', description: 'Классический борщ с мраморной говядиной', calories: 320, image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg' },
      { id: 2, name: 'Цезарь с курицей', price: 450, category: 'Салаты', description: 'Свежий салат с куриным филе и пармезаном', calories: 280, image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg' },
      { id: 3, name: 'Паста Болоньезе', price: 520, category: 'Основные блюда', description: 'Домашняя паста с мясным соусом', calories: 480, image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg' },
      { id: 4, name: 'Тирамису', price: 280, category: 'Десерты', description: 'Классический итальянский десерт', calories: 350, image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg' }
    ],
    tuesday: [
      { id: 5, name: 'Солянка мясная', price: 400, category: 'Супы', description: 'Сытная солянка с копченостями', calories: 340 },
      { id: 6, name: 'Греческий салат', price: 380, category: 'Салаты', description: 'С фетой, оливками и свежими овощами', calories: 220 },
      { id: 7, name: 'Стейк из семги', price: 680, category: 'Основные блюда', description: 'С овощами гриль и лимонным маслом', calories: 420 },
      { id: 8, name: 'Чизкейк', price: 320, category: 'Десерты', description: 'Нью-йоркский чизкейк с ягодами', calories: 380 }
    ],
    wednesday: [
      { id: 9, name: 'Крем-суп из тыквы', price: 350, category: 'Супы', description: 'Нежный суп с кокосовым молоком', calories: 180 },
      { id: 10, name: 'Салат с тунцом', price: 480, category: 'Салаты', description: 'С консервированным тунцом и авокадо', calories: 320 },
      { id: 11, name: 'Ризотто с грибами', price: 460, category: 'Основные блюда', description: 'Кремовое ризотто с белыми грибами', calories: 380 },
      { id: 12, name: 'Панакота', price: 250, category: 'Десерты', description: 'С ванилью и ягодным соусом', calories: 290 }
    ]
  };

  const advantages = [
    {
      icon: 'Clock',
      title: 'Быстрая доставка',
      description: 'Доставляем горячие обеды в офис за 30-45 минут'
    },
    {
      icon: 'Users',
      title: 'Корпоративные заказы',
      description: 'Специальные условия для компаний от 10 сотрудников'
    },
    {
      icon: 'Star',
      title: 'Качественные продукты',
      description: 'Используем только свежие и проверенные ингредиенты'
    },
    {
      icon: 'Truck',
      title: 'Бесплатная доставка',
      description: 'При заказе от 1500 рублей доставка бесплатная'
    },
    {
      icon: 'Calendar',
      title: 'Меню на каждый день',
      description: 'Обновляем меню ежедневно с учетом сезонности'
    },
    {
      icon: 'Shield',
      title: 'Гарантия свежести',
      description: '100% гарантия качества или вернем деньги'
    }
  ];

  const faqItems = [
    {
      question: 'Как быстро вы доставляете?',
      answer: 'Мы доставляем заказы в течение 30-45 минут с момента подтверждения. В часы пик доставка может занять до 60 минут.'
    },
    {
      question: 'Есть ли минимальная сумма заказа?',
      answer: 'Минимальная сумма заказа составляет 500 рублей. При заказе от 1500 рублей доставка бесплатная.'
    },
    {
      question: 'Можно ли заказать на несколько дней вперед?',
      answer: 'Да, вы можете сделать заказ на срок до 7 дней вперед. Это особенно удобно для корпоративных клиентов.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем оплату картой онлайн, наличными курьеру, а также безналичный расчет для юридических лиц.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="UtensilsCrossed" size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">ОфисЕда</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">Меню</a>
              <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} />
                <span className="hidden md:inline ml-2">+7 (495) 123-45-67</span>
              </Button>
              <Button size="sm">Заказать</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-orange-100/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Доставка обедов <span className="text-primary">в офис</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Вкусные и сытные обеды для вашей команды. Ежедневное меню, быстрая доставка, корпоративные скидки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="text-lg px-8">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Посмотреть меню
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Меню на каждый день
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ежедневно готовим свежие блюда из качественных продуктов. Выберите день недели и посмотрите наше меню.
            </p>
          </div>

          <Tabs value={selectedDay} onValueChange={setSelectedDay} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-8">
              <TabsTrigger value="monday" className="text-xs md:text-sm">Пн</TabsTrigger>
              <TabsTrigger value="tuesday" className="text-xs md:text-sm">Вт</TabsTrigger>
              <TabsTrigger value="wednesday" className="text-xs md:text-sm">Ср</TabsTrigger>
              <TabsTrigger value="thursday" className="text-xs md:text-sm" disabled>Чт</TabsTrigger>
              <TabsTrigger value="friday" className="text-xs md:text-sm" disabled>Пт</TabsTrigger>
              <TabsTrigger value="saturday" className="text-xs md:text-sm" disabled>Сб</TabsTrigger>
              <TabsTrigger value="sunday" className="text-xs md:text-sm" disabled>Вс</TabsTrigger>
            </TabsList>

            {Object.entries(menuItems).map(([day, items]) => (
              <TabsContent key={day} value={day}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow animate-scale-in overflow-hidden">
                      {(item as any).image && (
                        <div className="aspect-video bg-muted">
                          <img 
                            src={(item as any).image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{item.calories} ккал</span>
                        </div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center pt-0">
                        <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                        <Button size="sm" className="shrink-0">
                          <Icon name="Plus" size={16} />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы заботимся о качестве еды и сервиса, чтобы ваш рабочий день был комфортным и вкусным.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Доставка обедов в офис в Москве
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>ОфисЕда</strong> — это современный сервис доставки горячих обедов в офисы Москвы и Московской области. 
                Мы специализируемся на корпоративном питании и знаем, как важно для работающих людей получать качественную 
                и вкусную еду прямо на рабочем месте.
              </p>
              
              <p>
                Наша компания работает с 2020 года и за это время стала надежным партнером для более чем 500 компаний в Москве. 
                Мы обслуживаем как небольшие стартапы, так и крупные корпорации, предлагая индивидуальный подход к каждому клиенту.
              </p>

              <p>
                В нашем меню вы найдете разнообразные блюда европейской, азиатской и русской кухни. Каждый день наши повара 
                готовят свежие супы, салаты, горячие блюда и десерты. Мы используем только качественные продукты от проверенных 
                поставщиков и следим за соблюдением всех санитарных норм.
              </p>

              <p>
                <strong>Преимущества заказа обедов в нашей компании:</strong>
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Быстрая доставка в пределах МКАД за 30-45 минут</li>
                <li>Гибкая система скидок для корпоративных клиентов</li>
                <li>Возможность предварительного заказа на неделю вперед</li>
                <li>Специальное меню для людей с пищевыми ограничениями</li>
                <li>Экологичная упаковка и забота об окружающей среде</li>
                <li>Круглосуточная служба поддержки клиентов</li>
              </ul>

              <p>
                Заказывая обеды у нас, вы экономите время сотрудников, повышаете их лояльность и создаете комфортные условия 
                работы. Довольная и сытая команда — это более продуктивная команда!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                О нашей компании
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Мы команда профессионалов, которая искренне верит в то, что качественное питание — 
                это основа продуктивного рабочего дня.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <span className="text-foreground">Более 5 лет опыта в сфере корпоративного питания</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <span className="text-foreground">500+ довольных клиентов по всей Москве</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <span className="text-foreground">10000+ доставленных обедов ежемесячно</span>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg">
                  Стать нашим клиентом
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Качество</h3>
                </div>
                <p className="text-muted-foreground">
                  Используем только свежие продукты от проверенных поставщиков. 
                  Все блюда готовятся в день доставки.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Забота</h3>
                </div>
                <p className="text-muted-foreground">
                  Каждый заказ упакован с любовью и вниманием к деталям. 
                  Мы заботимся о комфорте наших клиентов.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Часто задаваемые вопросы
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Контакты и заказ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>hello@officeeda.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Москва, ул. Примерная, д. 123</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>Пн-Пт: 8:00 - 18:00</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Instagram" size={16} className="mr-2" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground">
                <h3 className="text-xl font-semibold mb-6">Готовы заказать?</h3>
                <p className="mb-6 opacity-90">
                  Позвоните нам или оставьте заявку на сайте. Мы свяжемся с вами в течение 15 минут 
                  и поможем оформить заказ.
                </p>
                
                <div className="space-y-4">
                  <Button variant="secondary" size="lg" className="w-full">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Написать в чат
                  </Button>
                </div>

                <div className="mt-6 text-sm opacity-75">
                  💡 При заказе от 10 порций — скидка 15%
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="UtensilsCrossed" size={20} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">ОфисЕда</h3>
              </div>
              <p className="text-background/80 text-sm">
                Доставка качественных обедов в офисы Москвы с 2020 года.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Корпоративное питание</li>
                <li>Доставка обедов</li>
                <li>Кейтеринг</li>
                <li>Индивидуальные заказы</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>О компании</li>
                <li>Условия доставки</li>
                <li>Политика качества</li>
                <li>Отзывы клиентов</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>+7 (495) 123-45-67</li>
                <li>hello@officeeda.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>

          <hr className="border-background/20 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; 2024 ОфисЕда. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-background transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;