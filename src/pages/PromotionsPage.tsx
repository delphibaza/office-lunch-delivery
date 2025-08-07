import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PromotionsPage = () => {
  const activePromotions = [
    {
      id: 1,
      title: 'Скидка 20% на первый заказ',
      description: 'Попробуйте наши услуги со значительной скидкой',
      discount: '20%',
      validUntil: '31 января 2024',
      conditions: [
        'Для новых клиентов',
        'Минимальный заказ 1000 ₽',
        'Действует на все меню',
        'Промокод: FIRST20'
      ],
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      type: 'new-client',
      urgent: false
    },
    {
      id: 2,
      title: 'Бесплатная доставка в январе',
      description: 'Весь январь доставляем бесплатно при любой сумме заказа',
      discount: 'Бесплатно',
      validUntil: '31 января 2024',
      conditions: [
        'Для всех клиентов',
        'В пределах МКАД',
        'При заказе от 500 ₽',
        'Промокод не требуется'
      ],
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      type: 'delivery',
      urgent: true
    },
    {
      id: 3,
      title: 'Корпоративная программа лояльности',
      description: 'Накопительные скидки для постоянных корпоративных клиентов',
      discount: 'до 25%',
      validUntil: 'Постоянно',
      conditions: [
        'Для корпоративных клиентов',
        'От 20 заказов в месяц',
        'Прогрессивная шкала скидок',
        'Персональный менеджер'
      ],
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      type: 'corporate',
      urgent: false
    },
    {
      id: 4,
      title: 'Здоровое питание -15%',
      description: 'Скидка на все блюда из раздела "Здоровое питание"',
      discount: '15%',
      validUntil: '15 февраля 2024',
      conditions: [
        'На блюда категории ПП',
        'Веганские и вегетарианские блюда',
        'Низкокалорийные варианты',
        'Промокод: HEALTHY15'
      ],
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      type: 'healthy',
      urgent: false
    },
    {
      id: 5,
      title: 'Приведи друга - получи скидку',
      description: 'Рекомендуйте нас и получайте бонусы',
      discount: '500 ₽',
      validUntil: 'Постоянно',
      conditions: [
        'За каждого приведенного клиента',
        'Друг должен сделать заказ от 1000 ₽',
        'Бонус на ваш счет',
        'Неограниченное количество'
      ],
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      type: 'referral',
      urgent: false
    }
  ];

  const seasonalOffers = [
    {
      season: 'Зимние предложения',
      period: 'Декабрь - Февраль',
      offers: [
        'Горячие супы со скидкой 10%',
        'Согревающие напитки в подарок',
        'Зимнее меню с сезонными блюдами'
      ],
      color: 'blue'
    },
    {
      season: 'Весенние акции',
      period: 'Март - Май',
      offers: [
        'Детокс-программы со скидкой 20%',
        'Свежие салаты и витаминные коктейли',
        'Легкие блюда для весеннего настроения'
      ],
      color: 'green'
    },
    {
      season: 'Летние спецпредложения',
      period: 'Июнь - Август',
      offers: [
        'Холодные супы и освежающие блюда',
        'Фруктовые десерты со скидкой',
        'Пикник-наборы для корпоративов'
      ],
      color: 'yellow'
    },
    {
      season: 'Осенние предложения',
      period: 'Сентябрь - Ноябрь',
      offers: [
        'Сезонные блюда из тыквы и грибов',
        'Укрепляющие иммунитет блюда',
        'Согревающие напитки в подарок'
      ],
      color: 'orange'
    }
  ];

  const loyaltyProgram = {
    levels: [
      {
        name: 'Бронзовый',
        requirement: '5 заказов',
        discount: '5%',
        benefits: ['Скидка 5%', 'Приоритетная поддержка']
      },
      {
        name: 'Серебряный',
        requirement: '15 заказов',
        discount: '10%',
        benefits: ['Скидка 10%', 'Бесплатная доставка', 'Персональные предложения']
      },
      {
        name: 'Золотой',
        requirement: '30 заказов',
        discount: '15%',
        benefits: ['Скидка 15%', 'Приоритетная доставка', 'Эксклюзивные блюда']
      },
      {
        name: 'Платиновый',
        requirement: '50 заказов',
        discount: '20%',
        benefits: ['Скидка 20%', 'Персональный менеджер', 'Индивидуальное меню']
      }
    ]
  };

  const getPromotionIcon = (type: string) => {
    switch (type) {
      case 'new-client': return 'UserPlus';
      case 'delivery': return 'Truck';
      case 'corporate': return 'Building2';
      case 'healthy': return 'Heart';
      case 'referral': return 'Users';
      default: return 'Gift';
    }
  };

  const getPromotionColor = (type: string) => {
    switch (type) {
      case 'new-client': return 'bg-blue-100 text-blue-600';
      case 'delivery': return 'bg-green-100 text-green-600';
      case 'corporate': return 'bg-purple-100 text-purple-600';
      case 'healthy': return 'bg-emerald-100 text-emerald-600';
      case 'referral': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-rose-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Акции и скидки
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Выгодные предложения для новых и постоянных клиентов. 
              Экономьте на качественном корпоративном питании.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="Percent" size={14} className="mr-1" />
                Скидки до 25%
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Gift" size={14} className="mr-1" />
                Бонусы за лояльность
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Truck" size={14} className="mr-1" />
                Бесплатная доставка
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Active Promotions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Активные акции
            </h2>
            <p className="text-xl text-muted-foreground">
              Актуальные предложения, которыми вы можете воспользоваться прямо сейчас
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {activePromotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-all relative">
                {promo.urgent && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="destructive" className="animate-pulse">
                      Срочно!
                    </Badge>
                  </div>
                )}
                
                <div className="aspect-video relative">
                  <img 
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getPromotionColor(promo.type)}`}>
                      <Icon name={getPromotionIcon(promo.type) as any} size={20} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 px-3 py-1 rounded-full">
                      <span className="font-bold text-rose-600">{promo.discount}</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      до {promo.validUntil}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {promo.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Условия акции:</h4>
                    <ul className="space-y-1">
                      {promo.conditions.map((condition, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-green-600" />
                          <span className="text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Воспользоваться акцией
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Программа лояльности
            </h2>
            <p className="text-xl text-muted-foreground">
              Чем больше заказываете, тем больше экономите
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyProgram.levels.map((level, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Crown" size={24} className="text-rose-600" />
                  </div>
                  <CardTitle className="text-lg">{level.name}</CardTitle>
                  <div className="text-2xl font-bold text-rose-600">{level.discount}</div>
                  <CardDescription>от {level.requirement}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Icon name="Star" size={14} className="text-yellow-500" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Сезонные предложения
            </h2>
            <p className="text-xl text-muted-foreground">
              Специальные акции в зависимости от времени года
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    offer.color === 'blue' ? 'bg-blue-100' :
                    offer.color === 'green' ? 'bg-green-100' :
                    offer.color === 'yellow' ? 'bg-yellow-100' :
                    'bg-orange-100'
                  }`}>
                    <Icon 
                      name={
                        offer.color === 'blue' ? 'Snowflake' :
                        offer.color === 'green' ? 'Flower' :
                        offer.color === 'yellow' ? 'Sun' :
                        'Leaf'
                      } 
                      size={20} 
                      className={
                        offer.color === 'blue' ? 'text-blue-600' :
                        offer.color === 'green' ? 'text-green-600' :
                        offer.color === 'yellow' ? 'text-yellow-600' :
                        'text-orange-600'
                      }
                    />
                  </div>
                  <CardTitle className="text-lg">{offer.season}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {offer.period}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {offer.offers.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <Icon name="Sparkles" size={14} className="text-rose-500 mt-0.5 shrink-0" />
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

      {/* Promo Codes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Активировать промокод
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Введите промокод при оформлении заказа и получите скидку
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="promo">Промокод</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="promo"
                        placeholder="Введите промокод"
                        className="uppercase"
                      />
                      <Button>
                        <Icon name="Check" size={16} className="mr-2" />
                        Применить
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-rose-800 mb-2">Активные промокоды:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <code className="bg-white px-2 py-1 rounded text-sm">FIRST20</code>
                        <span className="text-sm text-rose-700">20% на первый заказ</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <code className="bg-white px-2 py-1 rounded text-sm">HEALTHY15</code>
                        <span className="text-sm text-rose-700">15% на здоровое питание</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Не пропускайте выгодные предложения
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Подпишитесь на рассылку и первыми узнавайте о новых акциях и скидках
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      className="flex-1"
                    />
                    <Button>
                      <Icon name="Mail" size={16} className="mr-2" />
                      Подписаться
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Gift" size={14} className="mr-1" />
                      Эксклюзивные акции
                    </span>
                    <span className="flex items-center">
                      <Icon name="Bell" size={14} className="mr-1" />
                      Первыми о скидках
                    </span>
                    <span className="flex items-center">
                      <Icon name="Shield" size={14} className="mr-1" />
                      Без спама
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Начните экономить уже сегодня
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Воспользуйтесь одной из наших акций и убедитесь в качестве наших услуг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Сделать заказ
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-rose-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Узнать о скидках
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionsPage;