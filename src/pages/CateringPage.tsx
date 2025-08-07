import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CateringPage = () => {
  const cateringServices = [
    {
      title: 'Корпоративные мероприятия',
      description: 'Полное обслуживание корпоративных событий любого масштаба',
      price: 'от 800 ₽/чел',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      features: ['Фуршетные столы', 'Горячие блюда', 'Профессиональные официанты', 'Декор и оформление'],
      icon: 'Building2'
    },
    {
      title: 'Деловые встречи',
      description: 'Кейтеринг для переговоров, презентаций и бизнес-встреч',
      price: 'от 500 ₽/чел',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      features: ['Кофе-брейки', 'Легкие закуски', 'Индивидуальная подача', 'Быстрое обслуживание'],
      icon: 'Users'
    },
    {
      title: 'Праздничные банкеты',
      description: 'Организация торжественных мероприятий и празднований',
      price: 'от 1200 ₽/чел',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      features: ['Праздничное меню', 'Торты и десерты', 'Живая музыка', 'Полное обслуживание'],
      icon: 'PartyPopper'
    }
  ];

  const eventTypes = [
    { name: 'Конференции', icon: 'Presentation', guests: '50-500 чел' },
    { name: 'Семинары', icon: 'GraduationCap', guests: '20-100 чел' },
    { name: 'Тимбилдинги', icon: 'Users', guests: '15-200 чел' },
    { name: 'Презентации', icon: 'Monitor', guests: '10-150 чел' },
    { name: 'Дни рождения', icon: 'Gift', guests: '20-300 чел' },
    { name: 'Свадьбы', icon: 'Heart', guests: '50-500 чел' }
  ];

  const menuOptions = [
    {
      category: 'Кофе-брейк',
      price: '350 ₽/чел',
      items: ['Кофе, чай', 'Свежая выпечка', 'Фрукты', 'Мини-сэндвичи']
    },
    {
      category: 'Легкий фуршет',
      price: '650 ₽/чел',
      items: ['Холодные закуски', 'Канапе', 'Салаты', 'Напитки']
    },
    {
      category: 'Полный фуршет',
      price: '1200 ₽/чел',
      items: ['Горячие блюда', 'Холодные закуски', 'Салаты', 'Десерты', 'Напитки']
    },
    {
      category: 'Банкет',
      price: '1800 ₽/чел',
      items: ['Многоблюдное меню', 'Алкогольные напитки', 'Торжественная подача', 'Полное обслуживание']
    }
  ];

  const additionalServices = [
    {
      service: 'Аренда оборудования',
      description: 'Столы, стулья, посуда, текстиль',
      icon: 'Package'
    },
    {
      service: 'Декор и оформление',
      description: 'Цветочные композиции, освещение',
      icon: 'Palette'
    },
    {
      service: 'Техническое обеспечение',
      description: 'Звук, свет, проекторы',
      icon: 'Settings'
    },
    {
      service: 'Развлекательная программа',
      description: 'Ведущие, музыканты, артисты',
      icon: 'Music'
    }
  ];

  const portfolio = [
    {
      title: 'Конференция IT-компании',
      guests: '200 человек',
      description: 'Двухдневная конференция с полным кейтерингом',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg'
    },
    {
      title: 'Корпоративный Новый год',
      guests: '150 человек',
      description: 'Праздничный банкет с развлекательной программой',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg'
    },
    {
      title: 'Презентация продукта',
      guests: '80 человек',
      description: 'Элегантный фуршет для презентации нового продукта',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Кейтеринг и организация мероприятий
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полный цикл организации корпоративных и частных мероприятий. 
              От кофе-брейков до торжественных банкетов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Заказать мероприятие
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наши услуги кейтеринга
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональное обслуживание мероприятий любого формата
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cateringServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-purple-600">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon as any} size={20} className="text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Типы мероприятий
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы организуем мероприятия любого формата и масштаба
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={event.icon as any} size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                  <Badge variant="outline">{event.guests}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Варианты меню
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий формат питания для вашего мероприятия
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuOptions.map((menu, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{menu.category}</CardTitle>
                  <div className="text-2xl font-bold text-purple-600">
                    {menu.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {menu.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-green-600" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг для организации идеального мероприятия
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.service}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-muted-foreground">
              Примеры успешно проведенных мероприятий
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline">{project.guests}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Как мы организуем мероприятие
            </h2>
            <p className="text-xl text-muted-foreground">
              Пошаговый процесс от идеи до реализации
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Консультация и планирование</h3>
                    <p className="text-sm text-muted-foreground">Обсуждаем детали мероприятия, бюджет и пожелания</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Разработка концепции</h3>
                    <p className="text-sm text-muted-foreground">Создаем уникальную концепцию и меню мероприятия</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Подготовка и закупки</h3>
                    <p className="text-sm text-muted-foreground">Закупаем продукты, готовим оборудование</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Приготовление блюд</h3>
                    <p className="text-sm text-muted-foreground">Готовим все блюда в день мероприятия</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold mb-1">Доставка и сервировка</h3>
                    <p className="text-sm text-muted-foreground">Доставляем и красиво оформляем все блюда</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <div>
                    <h3 className="font-semibold mb-1">Обслуживание</h3>
                    <p className="text-sm text-muted-foreground">Профессиональное обслуживание в течение мероприятия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы организовать незабываемое мероприятие?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-purple-600">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CateringPage;