import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const FranchisePage = () => {
  const franchisePackages = [
    {
      name: 'Стартовый',
      investment: '1 500 000 ₽',
      royalty: '5%',
      territory: 'Район города',
      description: 'Идеальный вариант для начинающих предпринимателей',
      features: [
        'Готовая бизнес-модель',
        'Обучение персонала',
        'Маркетинговая поддержка',
        'Поставка оборудования',
        'Эксклюзивная территория'
      ],
      support: [
        'Помощь в поиске помещения',
        '2 недели обучения',
        'Запуск за 60 дней',
        'Техническая поддержка'
      ]
    },
    {
      name: 'Стандартный',
      investment: '2 500 000 ₽',
      royalty: '4%',
      territory: 'Несколько районов',
      description: 'Оптимальное решение для развития бизнеса',
      features: [
        'Расширенная территория',
        'Дополнительные услуги',
        'Приоритетная поддержка',
        'Гибкие условия',
        'Больше возможностей'
      ],
      support: [
        'Персональный менеджер',
        '3 недели обучения',
        'Маркетинговый бюджет',
        'Онлайн поддержка 24/7'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      investment: '4 000 000 ₽',
      royalty: '3%',
      territory: 'Весь город',
      description: 'Максимальные возможности для крупного бизнеса',
      features: [
        'Эксклюзивные права на город',
        'Полный спектр услуг',
        'Индивидуальные условия',
        'Минимальный роялти',
        'Максимальная прибыль'
      ],
      support: [
        'Выделенная команда',
        'Месяц обучения',
        'Совместный маркетинг',
        'Стратегическое планирование'
      ]
    }
  ];

  const businessModel = [
    {
      title: 'Производство',
      description: 'Собственная кухня с современным оборудованием',
      icon: 'ChefHat',
      details: ['Профессиональное оборудование', 'Стандартизированные процессы', 'Контроль качества']
    },
    {
      title: 'Логистика',
      description: 'Эффективная система доставки',
      icon: 'Truck',
      details: ['Оптимизированные маршруты', 'Отслеживание заказов', 'Холодовая цепь']
    },
    {
      title: 'Продажи',
      description: 'Работа с корпоративными клиентами',
      icon: 'Users',
      details: ['B2B продажи', 'Долгосрочные контракты', 'Высокая маржинальность']
    },
    {
      title: 'Технологии',
      description: 'IT-платформа для управления бизнесом',
      icon: 'Smartphone',
      details: ['CRM система', 'Мобильное приложение', 'Аналитика и отчеты']
    }
  ];

  const advantages = [
    {
      icon: 'TrendingUp',
      title: 'Растущий рынок',
      description: 'Рынок корпоративного питания растет на 15% в год'
    },
    {
      icon: 'Award',
      title: 'Проверенная модель',
      description: 'Успешно работающая бизнес-модель с 2020 года'
    },
    {
      icon: 'Shield',
      title: 'Низкие риски',
      description: 'Стабильный доход от корпоративных клиентов'
    },
    {
      icon: 'Zap',
      title: 'Быстрый запуск',
      description: 'Открытие франшизы за 60-90 дней'
    },
    {
      icon: 'Users',
      title: 'Полная поддержка',
      description: 'Обучение, маркетинг и операционная поддержка'
    },
    {
      icon: 'DollarSign',
      title: 'Высокая прибыль',
      description: 'Рентабельность до 25% при правильном управлении'
    }
  ];

  const requirements = [
    {
      category: 'Финансовые',
      items: [
        'Инвестиции от 1,5 млн рублей',
        'Оборотные средства на 3 месяца',
        'Собственные средства не менее 70%',
        'Кредитная история без просрочек'
      ]
    },
    {
      category: 'Личные',
      items: [
        'Опыт управления бизнесом',
        'Готовность к активной работе',
        'Коммуникативные навыки',
        'Ориентация на результат'
      ]
    },
    {
      category: 'Территориальные',
      items: [
        'Город с населением от 100 тыс. человек',
        'Развитый офисный сегмент',
        'Отсутствие прямых конкурентов',
        'Хорошая транспортная доступность'
      ]
    }
  ];

  const timeline = [
    {
      step: 1,
      title: 'Подача заявки',
      duration: '1 день',
      description: 'Заполнение анкеты и первичное собеседование'
    },
    {
      step: 2,
      title: 'Анализ заявки',
      duration: '5-7 дней',
      description: 'Проверка документов и финансовых возможностей'
    },
    {
      step: 3,
      title: 'Встреча с руководством',
      duration: '1 день',
      description: 'Личная встреча и презентация проекта'
    },
    {
      step: 4,
      title: 'Подписание договора',
      duration: '3-5 дней',
      description: 'Оформление франчайзингового соглашения'
    },
    {
      step: 5,
      title: 'Поиск помещения',
      duration: '2-4 недели',
      description: 'Подбор и согласование локации'
    },
    {
      step: 6,
      title: 'Обучение',
      duration: '2-4 недели',
      description: 'Теоретическое и практическое обучение'
    },
    {
      step: 7,
      title: 'Запуск',
      duration: '2-3 недели',
      description: 'Открытие и первые продажи'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Франшиза ОфисЕда
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Откройте прибыльный бизнес в сфере корпоративного питания. 
                Проверенная модель, полная поддержка, быстрый запуск.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Получить презентацию
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-muted-foreground">Рентабельность</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">60</div>
                  <div className="text-sm text-muted-foreground">Дней до запуска</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-muted-foreground">Городов России</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/21268956-79ff-40e0-9934-04976361f00c.jpg"
                alt="Франшиза ОфисЕда"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Пакеты франшизы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий вариант для вашего бизнеса
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {franchisePackages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-lg transition-all ${
                  pkg.popular ? 'border-purple-200 ring-2 ring-purple-100 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-purple-600">
                      {pkg.investment}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Роялти: {pkg.royalty} с оборота
                    </div>
                    <Badge variant="outline">{pkg.territory}</Badge>
                  </div>
                  <CardDescription className="text-center">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Что входит:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Поддержка:</h4>
                    <ul className="space-y-2">
                      {pkg.support.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <Icon name="Star" size={14} className="text-purple-600" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Бизнес-модель
            </h2>
            <p className="text-xl text-muted-foreground">
              Четыре ключевых направления успешного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessModel.map((model, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={model.icon as any} size={24} className="text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{model.title}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {model.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-muted-foreground">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Преимущества франшизы
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему стоит выбрать нашу франшизу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Требования к франчайзи
            </h2>
            <p className="text-xl text-muted-foreground">
              Что необходимо для успешного запуска франшизы
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{req.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Этапы запуска франшизы
            </h2>
            <p className="text-xl text-muted-foreground">
              От заявки до открытия за 7 простых шагов
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Заявка на франшизу</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение дня
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Фамилия *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Ваша фамилия"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      className="w-full p-2 border rounded-md"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Город *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Москва"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Пакет франшизы</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Выберите пакет</option>
                      <option>Стартовый</option>
                      <option>Стандартный</option>
                      <option>Премиум</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Размер инвестиций</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Выберите размер</option>
                    <option>1-2 млн рублей</option>
                    <option>2-3 млн рублей</option>
                    <option>3-5 млн рублей</option>
                    <option>Более 5 млн рублей</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Опыт в бизнесе</label>
                  <textarea 
                    className="w-full p-2 border rounded-md"
                    rows={3}
                    placeholder="Расскажите о своем опыте в бизнесе..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы начать свой бизнес?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получите подробную презентацию франшизы и узнайте все условия сотрудничества
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать презентацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-purple-600">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на встречу
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;