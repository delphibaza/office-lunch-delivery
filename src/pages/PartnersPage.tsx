import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PartnersPage = () => {
  const partnerTypes = [
    {
      title: 'Поставщики продуктов',
      description: 'Фермерские хозяйства, оптовые базы, производители',
      icon: 'Truck',
      benefits: [
        'Стабильные объемы закупок',
        'Долгосрочные контракты',
        'Своевременная оплата',
        'Взаимовыгодные условия'
      ],
      requirements: [
        'Сертификаты качества',
        'Стабильные поставки',
        'Конкурентные цены',
        'Гибкость в работе'
      ]
    },
    {
      title: 'Логистические компании',
      description: 'Транспортные и курьерские службы',
      icon: 'MapPin',
      benefits: [
        'Регулярные заказы',
        'Расширение клиентской базы',
        'Партнерские тарифы',
        'Совместный маркетинг'
      ],
      requirements: [
        'Собственный автопарк',
        'Опыт доставки еды',
        'Покрытие Москвы и МО',
        'Система отслеживания'
      ]
    },
    {
      title: 'IT-решения',
      description: 'Разработчики систем автоматизации',
      icon: 'Code',
      benefits: [
        'Долгосрочное сотрудничество',
        'Техническая экспертиза',
        'Совместные проекты',
        'Рекомендации клиентам'
      ],
      requirements: [
        'Опыт в food-tech',
        'Современные технологии',
        'Техническая поддержка',
        'Масштабируемые решения'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'ЭкоФерма "Зеленые поля"',
      type: 'Поставщик овощей',
      since: '2021',
      description: 'Органические овощи и зелень',
      logo: '🥬',
      rating: 5
    },
    {
      name: 'Мясокомбинат "Премиум"',
      type: 'Поставщик мяса',
      since: '2020',
      description: 'Высококачественное мясо и птица',
      logo: '🥩',
      rating: 5
    },
    {
      name: 'Молочная компания "Альпина"',
      type: 'Поставщик молочных продуктов',
      since: '2022',
      description: 'Натуральные молочные продукты',
      logo: '🥛',
      rating: 4
    },
    {
      name: 'Логистик Экспресс',
      type: 'Логистика',
      since: '2021',
      description: 'Доставка в отдаленные районы',
      logo: '🚚',
      rating: 5
    },
    {
      name: 'TechFood Solutions',
      type: 'IT-партнер',
      since: '2023',
      description: 'Система управления заказами',
      logo: '💻',
      rating: 5
    },
    {
      name: 'Упаковочные решения "Эко"',
      type: 'Упаковка',
      since: '2022',
      description: 'Экологичная упаковка',
      logo: '📦',
      rating: 4
    }
  ];

  const partnershipSteps = [
    {
      step: 1,
      title: 'Заявка на партнерство',
      description: 'Заполните форму или свяжитесь с нами',
      icon: 'FileText'
    },
    {
      step: 2,
      title: 'Анализ предложения',
      description: 'Изучаем ваши возможности и условия',
      icon: 'Search'
    },
    {
      step: 3,
      title: 'Переговоры',
      description: 'Обсуждаем детали сотрудничества',
      icon: 'MessageCircle'
    },
    {
      step: 4,
      title: 'Подписание договора',
      description: 'Оформляем партнерские отношения',
      icon: 'FileCheck'
    },
    {
      step: 5,
      title: 'Начало работы',
      description: 'Запускаем совместные проекты',
      icon: 'Rocket'
    }
  ];

  const partnerBenefits = [
    {
      icon: 'TrendingUp',
      title: 'Рост бизнеса',
      description: 'Стабильные заказы и расширение клиентской базы'
    },
    {
      icon: 'Handshake',
      title: 'Долгосрочные отношения',
      description: 'Надежное партнерство на годы вперед'
    },
    {
      icon: 'Award',
      title: 'Репутация',
      description: 'Работа с известным брендом повышает статус'
    },
    {
      icon: 'Zap',
      title: 'Инновации',
      description: 'Внедрение новых технологий и решений'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Партнерство с ОфисЕда
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к нашей экосистеме партнеров и развивайте бизнес вместе с нами. 
              Мы ценим долгосрочные отношения и взаимную выгоду.
            </p>
            <Button size="lg">
              <Icon name="Handshake" size={20} className="mr-2" />
              Стать партнером
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Типы партнерства
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы открыты для сотрудничества с различными типами компаний
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={type.icon as any} size={24} className="text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Мы предлагаем:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">Требования:</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2">
                          <Icon name="ArrowRight" size={14} className="text-blue-600" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    Подать заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наши партнеры
            </h2>
            <p className="text-xl text-muted-foreground">
              Компании, которые помогают нам создавать качественный сервис
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{partner.logo}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{partner.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {partner.type}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {renderStars(partner.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {partner.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Партнеры с {partner.since} года</span>
                    <Badge variant="secondary" className="text-xs">
                      Проверенный партнер
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Как стать партнером
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой процесс от заявки до начала сотрудничества
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {partnershipSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon name={step.icon as any} size={24} className="text-teal-600" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Преимущества партнерства
            </h2>
            <p className="text-xl text-muted-foreground">
              Что вы получаете, работая с нами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={24} className="text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Заявка на партнерство</CardTitle>
                <CardDescription>
                  Расскажите о своей компании и предложении
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Название компании *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="ООО Ваша компания"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип партнерства *</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Выберите тип</option>
                      <option>Поставщик продуктов</option>
                      <option>Логистическая компания</option>
                      <option>IT-решения</option>
                      <option>Другое</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Имя Фамилия"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Должность</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Директор по развитию"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md"
                      placeholder="contact@company.com"
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

                <div>
                  <label className="block text-sm font-medium mb-2">Описание предложения *</label>
                  <textarea 
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="Расскажите о вашей компании, услугах и предложении для партнерства..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Опыт работы</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Количество лет на рынке"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Презентация компании</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <Icon name="Upload" size={24} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Загрузите презентацию или каталог услуг
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, PPT, PPTX (до 10 МБ)
                    </p>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Мы рассмотрим вашу заявку в течение 5 рабочих дней
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами для обсуждения возможностей партнерства 
              и развития совместного бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-teal-600">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать информацию
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;