import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Корпоративное питание',
      description: 'Полноценное питание для сотрудников вашего офиса',
      price: 'от 350 ₽/день',
      icon: 'Building2',
      features: [
        'Индивидуальное меню',
        'Скидки от 15% при заказе от 20 обедов',
        'Бесплатная доставка',
        'Безналичная оплата',
        'Постоянный менеджер'
      ],
      popular: true
    },
    {
      id: 2,
      title: 'Бизнес-ланчи',
      description: 'Готовые комплексные обеды для экономии времени',
      price: 'от 280 ₽',
      icon: 'Briefcase',
      features: [
        '3 варианта на каждый день',
        'Первое, второе, салат, напиток',
        'Доставка за 30 минут',
        'Возможность предзаказа',
        'Диетические варианты'
      ],
      popular: false
    },
    {
      id: 3,
      title: 'Кейтеринг мероприятий',
      description: 'Организация питания на корпоративных мероприятиях',
      price: 'от 800 ₽/чел',
      icon: 'PartyPopper',
      features: [
        'Фуршетное обслуживание',
        'Горячие и холодные закуски',
        'Профессиональные официанты',
        'Полная сервировка',
        'Индивидуальное оформление'
      ],
      popular: false
    },
    {
      id: 4,
      title: 'Здоровое питание',
      description: 'Диетическое меню для поддержания здоровья',
      price: 'от 420 ₽',
      icon: 'Apple',
      features: [
        'Низкокалорийные блюда',
        'Без глютена и лактозы',
        'Веганские опции',
        'Контроль БЖУ',
        'Консультации диетолога'
      ],
      popular: false
    },
    {
      id: 5,
      title: 'Завтраки в офис',
      description: 'Энергичное начало рабочего дня',
      price: 'от 180 ₽',
      icon: 'Coffee',
      features: [
        'Доставка с 7:00',
        'Свежая выпечка',
        'Каши и мюсли',
        'Свежевыжатые соки',
        'Премиум кофе'
      ],
      popular: false
    },
    {
      id: 6,
      title: 'VIP обслуживание',
      description: 'Премиум сервис для руководства',
      price: 'от 1200 ₽',
      icon: 'Crown',
      features: [
        'Индивидуальный шеф-повар',
        'Авторские блюда',
        'Персональная подача',
        'Эксклюзивные продукты',
        'Приоритетное обслуживание'
      ],
      popular: false
    }
  ];

  const tariffs = [
    {
      name: 'Стартовый',
      price: '350',
      period: 'в день',
      description: 'Для небольших команд до 10 человек',
      features: [
        'Бизнес-ланч на выбор',
        'Доставка в офис',
        'Скидка 5%',
        'Оплата после доставки'
      ],
      recommended: false
    },
    {
      name: 'Корпоративный',
      price: '320',
      period: 'в день',
      description: 'Для средних компаний до 50 человек',
      features: [
        'Расширенное меню',
        'Бесплатная доставка',
        'Скидка 15%',
        'Безналичная оплата',
        'Персональный менеджер'
      ],
      recommended: true
    },
    {
      name: 'Премиум',
      price: '280',
      period: 'в день',
      description: 'Для крупных организаций от 50 человек',
      features: [
        'Полное меню',
        'Бесплатная доставка',
        'Скидка 25%',
        'Корпоративные счета',
        'Выделенная линия',
        'Индивидуальное меню'
      ],
      recommended: false
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Сотрудники не тратят время на поиск еды'
    },
    {
      icon: 'TrendingUp',
      title: 'Повышение продуктивности',
      description: 'Качественное питание улучшает работоспособность'
    },
    {
      icon: 'Users',
      title: 'Командный дух',
      description: 'Совместные обеды сплачивают коллектив'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Контролируемое качество и свежесть продуктов'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Услуги корпоративного питания
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полный спектр услуг по организации питания в офисе. 
              Индивидуальный подход к каждому клиенту.
            </p>
            <Button size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий формат питания для вашего офиса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`relative hover:shadow-lg transition-all ${
                  service.popular ? 'border-orange-200 ring-2 ring-orange-100' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-4">
                    Популярная услуга
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-orange-600 mt-2">
                    {service.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <Button className="w-full mt-6">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-muted-foreground">
              Гибкие условия для компаний любого размера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index}
                className={`relative ${
                  tariff.recommended 
                    ? 'border-orange-200 ring-2 ring-orange-100 scale-105' 
                    : ''
                }`}
              >
                {tariff.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Рекомендуем
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-orange-600">
                      {tariff.price} ₽
                    </div>
                    <div className="text-muted-foreground">
                      {tariff.period}
                    </div>
                  </div>
                  <CardDescription className="text-center">
                    {tariff.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {tariff.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className="w-full mt-6"
                    variant={tariff.recommended ? "default" : "outline"}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Преимущества корпоративного питания
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему стоит организовать питание сотрудников
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Начните уже сегодня
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Оставьте заявку и получите персональное предложение 
              с учетом потребностей вашей компании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;