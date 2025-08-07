import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DeliveryPage = () => {
  const deliveryZones = [
    {
      name: 'Центральный АО',
      time: '30-45 мин',
      cost: 'Бесплатно от 1000 ₽',
      areas: ['Арбат', 'Басманный', 'Замоскворечье', 'Красносельский', 'Мещанский', 'Пресненский', 'Таганский', 'Тверской', 'Хамовники', 'Якиманка']
    },
    {
      name: 'Северный АО',
      time: '45-60 мин',
      cost: 'Бесплатно от 1500 ₽',
      areas: ['Аэропорт', 'Беговой', 'Бескудниковский', 'Войковский', 'Головинский', 'Дегунино Восточное', 'Дегунино Западное', 'Дмитровский', 'Коптево', 'Левобережный', 'Молжаниновский', 'Савеловский', 'Сокол', 'Тимирязевский', 'Ховрино', 'Хорошевский']
    },
    {
      name: 'Восточный АО',
      time: '45-60 мин',
      cost: 'Бесплатно от 1500 ₽',
      areas: ['Богородское', 'Вешняки', 'Гольяново', 'Ивановское', 'Измайлово', 'Косино-Ухтомский', 'Метрогородок', 'Новогиреево', 'Новокосино', 'Перово', 'Преображенское', 'Соколиная Гора', 'Сокольники']
    }
  ];

  const deliverySteps = [
    {
      step: 1,
      title: 'Оформление заказа',
      description: 'Выберите блюда и укажите адрес доставки',
      time: '5 минут',
      icon: 'ShoppingCart'
    },
    {
      step: 2,
      title: 'Подтверждение',
      description: 'Мы свяжемся с вами для подтверждения заказа',
      time: '2-3 минуты',
      icon: 'Phone'
    },
    {
      step: 3,
      title: 'Приготовление',
      description: 'Наши повара готовят ваш заказ из свежих продуктов',
      time: '20-30 минут',
      icon: 'ChefHat'
    },
    {
      step: 4,
      title: 'Доставка',
      description: 'Курьер доставит заказ по указанному адресу',
      time: '15-30 минут',
      icon: 'Truck'
    }
  ];

  const deliveryRules = [
    {
      icon: 'Clock',
      title: 'Время работы',
      description: 'Принимаем заказы с 9:00 до 17:00, доставляем до 18:00'
    },
    {
      icon: 'MapPin',
      title: 'Зона доставки',
      description: 'Доставляем в пределах МКАД и ближайшего Подмосковья'
    },
    {
      icon: 'CreditCard',
      title: 'Оплата',
      description: 'Наличными курьеру или безналичный расчет'
    },
    {
      icon: 'Shield',
      title: 'Гарантии',
      description: 'Возврат денег, если заказ не соответствует качеству'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Доставка и оплата
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Быстрая доставка горячих обедов в ваш офис. 
              Узнайте все условия доставки и оплаты.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Как происходит доставка
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой процесс от заказа до получения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step) => (
              <Card key={step.step} className="text-center relative">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon name={step.icon as any} size={24} className="text-orange-600" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <Badge variant="outline">{step.time}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Зоны доставки
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы доставляем по всей Москве и ближайшему Подмосковью
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {deliveryZones.map((zone, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {zone.name}
                    <Badge>{zone.time}</Badge>
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-orange-600">
                    {zone.cost}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium">Районы:</h4>
                    <div className="flex flex-wrap gap-1">
                      {zone.areas.map((area, areaIndex) => (
                        <Badge key={areaIndex} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Rules */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Условия доставки
            </h2>
            <p className="text-xl text-muted-foreground">
              Важная информация о работе нашего сервиса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryRules.map((rule, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={rule.icon as any} size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{rule.title}</h3>
                <p className="text-muted-foreground text-sm">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Часто задаваемые вопросы о доставке
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли заказать доставку на выходные?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, мы работаем в субботу с 10:00 до 16:00. Воскресенье - выходной день.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Что делать, если курьер опаздывает?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Свяжитесь с нами по телефону +7 (495) 123-45-67. Мы отследим заказ и сообщим точное время доставки.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли изменить адрес доставки после оформления заказа?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, но только до начала приготовления заказа. Обычно это возможно в течение 10-15 минут после оформления.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы сделать заказ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Закажите вкусный обед прямо сейчас и получите его в течение часа
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Сделать заказ
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPage;