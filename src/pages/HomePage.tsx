import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HomePage = () => {
  const features = [
    {
      icon: 'Clock',
      title: 'Быстрая доставка',
      description: 'Доставим горячий обед в офис за 30-45 минут'
    },
    {
      icon: 'Shield',
      title: 'Качество продуктов',
      description: 'Используем только свежие и качественные ингредиенты'
    },
    {
      icon: 'Users',
      title: 'Корпоративные скидки',
      description: 'Специальные условия для коллективных заказов'
    },
    {
      icon: 'Leaf',
      title: 'Здоровое питание',
      description: 'Сбалансированные блюда от диетологов'
    },
    {
      icon: 'Calendar',
      title: 'Регулярные заказы',
      description: 'Настройте автоматическую доставку на неделю'
    },
    {
      icon: 'CreditCard',
      title: 'Удобная оплата',
      description: 'Безналичный расчет и корпоративные счета'
    }
  ];

  const popularDishes = [
    {
      id: 1,
      name: 'Бизнес-ланч "Классик"',
      description: 'Салат, суп, основное блюдо, напиток',
      price: 450,
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      badge: 'Хит'
    },
    {
      id: 2,
      name: 'Паста Карбонара',
      description: 'С беконом, пармезаном и сливочным соусом',
      price: 390,
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      badge: 'Популярно'
    },
    {
      id: 3,
      name: 'Салат с лососем',
      description: 'Слабосоленый лосось, микс салатов, авокадо',
      price: 520,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badge: 'Новинка'
    }
  ];

  const stats = [
    { number: '500+', label: 'Довольных компаний' },
    { number: '15000+', label: 'Обедов в месяц' },
    { number: '4.9', label: 'Рейтинг сервиса' },
    { number: '2020', label: 'Год основания' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100/50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit">Доставка по Москве и области</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Вкусные обеды прямо в ваш 
                  <span className="text-orange-600"> офис</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Качественное корпоративное питание от профессиональных поваров. 
                  Доставим горячие обеды за 30 минут.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                  <Link to="/menu">
                    <Icon name="Menu" size={20} className="mr-2" />
                    Посмотреть меню
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-orange-600">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 rounded-full absolute -top-4 -right-4 w-72 h-72 opacity-20"></div>
              <img 
                src="/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg"
                alt="Вкусный обед"
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальное решение для корпоративного питания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Популярные блюда</h2>
            <p className="text-xl text-muted-foreground">
              Самые заказываемые позиции нашего меню
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {popularDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video relative">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3">{dish.badge}</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardDescription>{dish.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{dish.price} ₽</span>
                  <Button>
                    <Icon name="Plus" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/menu">
                Все блюда меню
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <h2 className="text-3xl font-bold text-center mb-12">
              Доставка обедов в офисы Москвы - качественное корпоративное питание
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-muted-foreground">
              <div className="space-y-6">
                <p>
                  <strong>ОфисЕда</strong> - это современный сервис доставки качественного корпоративного 
                  питания в офисы Москвы и Московской области. С 2020 года мы обеспечиваем 
                  более 500 компаний вкусными и полезными обедами, создавая комфортные условия 
                  для работы и отдыха сотрудников.
                </p>

                <p>
                  Наша команда профессиональных поваров готовит блюда из свежих и качественных 
                  продуктов, следуя принципам здорового питания. Мы предлагаем разнообразное 
                  меню, которое обновляется еженедельно и включает блюда европейской, 
                  азиатской и русской кухни.
                </p>

                <p>
                  <strong>Преимущества работы с нами:</strong>
                </p>
                <ul className="space-y-2">
                  <li>• Быстрая доставка за 30-45 минут</li>
                  <li>• Корпоративные скидки от 15%</li>
                  <li>• Безналичная оплата</li>
                  <li>• Диетическое и вегетарианское меню</li>
                </ul>
              </div>

              <div className="space-y-6">
                <p>
                  Мы понимаем важность качественного питания для продуктивности работы, 
                  поэтому уделяем особое внимание свежести продуктов, скорости приготовления 
                  и соблюдению всех санитарных норм. Все блюда готовятся в день доставки 
                  на современной кухне с соблюдением технологий.
                </p>

                <p>
                  <strong>Популярные направления доставки:</strong> Центральный административный округ, 
                  Северный административный округ, Восточный административный округ, а также 
                  ближайшие города Московской области - Мытищи, Королёв, Балашиха, Реутов.
                </p>

                <p>
                  Заказывайте корпоративное питание в ОфисЕда и обеспечьте своих сотрудников 
                  качественными обедами без отрыва от работы. Мы работаем ежедневно с 9:00 до 18:00 
                  и готовы предложить индивидуальные условия для крупных заказчиков.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">
                    Закажите тестовую доставку со скидкой 20%!
                  </p>
                  <p className="text-orange-700">
                    Оцените качество нашей кухни и сервиса доставки. 
                    Звоните: +7 (495) 123-45-67
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы попробовать?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Закажите первый обед со скидкой 20%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;