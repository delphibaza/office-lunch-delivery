import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CorporatePage = () => {
  const corporateServices = [
    {
      title: 'Ежедневное питание',
      description: 'Организация полноценного питания для всех сотрудников',
      price: 'от 280 ₽/день',
      features: ['Разнообразное меню', 'Скидки до 25%', 'Персональный менеджер', 'Гибкий график доставки'],
      icon: 'Calendar'
    },
    {
      title: 'Бизнес-встречи',
      description: 'Кейтеринг для деловых встреч и переговоров',
      price: 'от 500 ₽/чел',
      features: ['Презентабельная подача', 'Индивидуальное меню', 'Сервировка стола', 'Профессиональное обслуживание'],
      icon: 'Users'
    },
    {
      title: 'Корпоративные мероприятия',
      description: 'Полное обслуживание корпоративных событий',
      price: 'от 800 ₽/чел',
      features: ['Фуршетные столы', 'Горячие блюда', 'Напитки', 'Декор и оформление'],
      icon: 'PartyPopper'
    }
  ];

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Повышение продуктивности',
      description: 'Сотрудники не тратят время на поиск еды и могут сосредоточиться на работе'
    },
    {
      icon: 'Heart',
      title: 'Забота о здоровье',
      description: 'Качественное питание улучшает самочувствие и работоспособность команды'
    },
    {
      icon: 'Users',
      title: 'Командообразование',
      description: 'Совместные обеды укрепляют отношения в коллективе'
    },
    {
      icon: 'DollarSign',
      title: 'Экономия бюджета',
      description: 'Корпоративные скидки и оптимизация расходов на питание'
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Доставка прямо в офис экономит время сотрудников'
    },
    {
      icon: 'Award',
      title: 'Имидж компании',
      description: 'Забота о сотрудниках повышает репутацию работодателя'
    }
  ];

  const clients = [
    { name: 'Сбербанк', logo: '🏦', employees: '500+' },
    { name: 'Яндекс', logo: '🔍', employees: '300+' },
    { name: 'МТС', logo: '📱', employees: '250+' },
    { name: 'Газпром', logo: '⛽', employees: '400+' },
    { name: 'Ростех', logo: '🏭', employees: '200+' },
    { name: 'ВТБ', logo: '🏛️', employees: '350+' }
  ];

  const packages = [
    {
      name: 'Стартап',
      employees: '5-20 человек',
      price: '350',
      features: [
        'Базовое меню',
        'Доставка 1 раз в день',
        'Скидка 10%',
        'Email поддержка'
      ],
      popular: false
    },
    {
      name: 'Бизнес',
      employees: '21-100 человек',
      price: '320',
      features: [
        'Расширенное меню',
        'Доставка 2 раза в день',
        'Скидка 20%',
        'Персональный менеджер',
        'Индивидуальные заказы'
      ],
      popular: true
    },
    {
      name: 'Корпорация',
      employees: '100+ человек',
      price: '280',
      features: [
        'Полное меню',
        'Гибкий график доставки',
        'Скидка 30%',
        'Выделенная линия поддержки',
        'Кастомизация меню',
        'Отчетность и аналитика'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Корпоративное питание для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Организуем качественное питание для сотрудников любой компании. 
                Индивидуальный подход, гибкие условия, максимальная экономия времени.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/21268956-79ff-40e0-9934-04976361f00c.jpg"
                alt="Корпоративное питание"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Корпоративные услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг для организации питания в вашей компании
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-orange-600">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Преимущества корпоративного питания
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему компании выбирают организованное питание для сотрудников
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий план для вашей компании
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative ${
                  pkg.popular 
                    ? 'border-orange-200 ring-2 ring-orange-100 scale-105' 
                    : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.employees}</CardDescription>
                  <div className="text-4xl font-bold text-orange-600">
                    {pkg.price} ₽
                  </div>
                  <div className="text-muted-foreground">за сотрудника в день</div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-6"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Нам доверяют
            </h2>
            <p className="text-xl text-muted-foreground">
              Крупнейшие компании России выбирают наши услуги
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{client.logo}</div>
                  <h3 className="font-semibold mb-1">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.employees} сотрудников</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Начните заботиться о своих сотрудниках уже сегодня
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получите персональное предложение и начните экономить на корпоративном питании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать презентацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="Calendar" size={20} className="mr-2" />
                Запланировать встречу
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;