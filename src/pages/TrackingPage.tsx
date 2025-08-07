import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const TrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const mockOrder = {
    number: '#12345',
    status: 'В пути',
    estimatedTime: '15:30',
    items: [
      { name: 'Бизнес-ланч "Классик"', quantity: 2, price: 450 },
      { name: 'Салат Цезарь', quantity: 1, price: 380 }
    ],
    total: 1280,
    address: 'Москва, ул. Примерная, д. 123, офис 456',
    courier: {
      name: 'Алексей Петров',
      phone: '+7 (999) 123-45-67',
      rating: 4.8
    },
    timeline: [
      {
        status: 'Заказ принят',
        time: '14:15',
        description: 'Ваш заказ принят в обработку',
        completed: true,
        icon: 'CheckCircle'
      },
      {
        status: 'Готовится',
        time: '14:20',
        description: 'Повара начали приготовление ваших блюд',
        completed: true,
        icon: 'ChefHat'
      },
      {
        status: 'Готов к доставке',
        time: '14:45',
        description: 'Заказ упакован и передан курьеру',
        completed: true,
        icon: 'Package'
      },
      {
        status: 'В пути',
        time: '15:00',
        description: 'Курьер направляется к вам',
        completed: false,
        current: true,
        icon: 'Truck'
      },
      {
        status: 'Доставлен',
        time: '15:30',
        description: 'Заказ будет доставлен',
        completed: false,
        icon: 'MapPin'
      }
    ]
  };

  const trackOrder = () => {
    if (orderNumber.trim()) {
      setTrackingResult(mockOrder);
    }
  };

  const recentOrders = [
    {
      number: '#12344',
      date: '19.01.2024',
      status: 'Доставлен',
      total: '890 ₽',
      items: 2
    },
    {
      number: '#12343',
      date: '18.01.2024',
      status: 'Доставлен',
      total: '1250 ₽',
      items: 3
    },
    {
      number: '#12342',
      date: '17.01.2024',
      status: 'Доставлен',
      total: '670 ₽',
      items: 1
    }
  ];

  const deliveryZones = [
    {
      zone: 'Центр Москвы',
      time: '30-45 мин',
      status: 'Нормальная загрузка',
      color: 'text-green-600 bg-green-100'
    },
    {
      zone: 'Север Москвы',
      time: '45-60 мин',
      status: 'Повышенная загрузка',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      zone: 'Восток Москвы',
      time: '40-55 мин',
      status: 'Нормальная загрузка',
      color: 'text-green-600 bg-green-100'
    },
    {
      zone: 'Запад Москвы',
      time: '35-50 мин',
      status: 'Низкая загрузка',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      zone: 'Юг Москвы',
      time: '50-70 мин',
      status: 'Высокая загрузка',
      color: 'text-red-600 bg-red-100'
    },
    {
      zone: 'Подмосковье',
      time: '60-90 мин',
      status: 'Нормальная загрузка',
      color: 'text-green-600 bg-green-100'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Принят': return 'CheckCircle';
      case 'Готовится': return 'ChefHat';
      case 'В пути': return 'Truck';
      case 'Доставлен': return 'MapPin';
      default: return 'Clock';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Принят': return 'text-blue-600 bg-blue-100';
      case 'Готовится': return 'text-orange-600 bg-orange-100';
      case 'В пути': return 'text-purple-600 bg-purple-100';
      case 'Доставлен': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-violet-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Отслеживание заказа
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Следите за статусом вашего заказа в режиме реального времени. 
              Узнайте, где находится ваш обед и когда он будет доставлен.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tracking Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Отследить заказ</CardTitle>
                <CardDescription>
                  Введите номер заказа для отслеживания
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Номер заказа (например, #12345)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                </div>
                <Button onClick={trackOrder} className="w-full">
                  <Icon name="Search" size={16} className="mr-2" />
                  Отследить
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Номер заказа указан в SMS или email подтверждении</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Последние заказы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentOrders.map((order) => (
                  <div 
                    key={order.number}
                    className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => {setOrderNumber(order.number); setTrackingResult(mockOrder);}}
                  >
                    <div>
                      <div className="font-medium text-sm">{order.number}</div>
                      <div className="text-xs text-muted-foreground">{order.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{order.total}</div>
                      <Badge variant="outline" className="text-xs">
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Tracking Results */}
          <div className="lg:col-span-2">
            {trackingResult ? (
              <div className="space-y-6">
                {/* Order Info */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">Заказ {trackingResult.number}</CardTitle>
                      <Badge className={getStatusColor(trackingResult.status)}>
                        {trackingResult.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      Ожидаемое время доставки: {trackingResult.estimatedTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Состав заказа:</h4>
                      <div className="space-y-2">
                        {trackingResult.items.map((item: any, index: number) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{item.name} × {item.quantity}</span>
                            <span className="font-medium">{item.price * item.quantity} ₽</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between items-center font-bold">
                          <span>Итого:</span>
                          <span>{trackingResult.total} ₽</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Адрес доставки:</h4>
                      <p className="text-sm text-muted-foreground">{trackingResult.address}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Статус заказа</CardTitle>
                    <CardDescription>
                      Отслеживайте прогресс выполнения вашего заказа
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trackingResult.timeline.map((step: any, index: number) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-100 text-green-600' :
                            step.current ? 'bg-violet-100 text-violet-600' :
                            'bg-gray-100 text-gray-400'
                          }`}>
                            <Icon name={step.icon} size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-semibold ${
                                step.completed ? 'text-green-700' :
                                step.current ? 'text-violet-700' :
                                'text-gray-500'
                              }`}>
                                {step.status}
                              </h4>
                              <span className="text-sm text-muted-foreground">{step.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Courier Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Информация о курьере</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{trackingResult.courier.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">{trackingResult.courier.phone}</span>
                          <div className="flex items-center">
                            <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                            <span className="text-sm ml-1">{trackingResult.courier.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Позвонить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-16">
                  <Icon name="Package" size={64} className="text-muted-foreground mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-2">Введите номер заказа</h3>
                  <p className="text-muted-foreground mb-6">
                    Для отслеживания статуса доставки введите номер заказа в поле слева
                  </p>
                  <div className="space-y-4 max-w-md mx-auto">
                    <Input
                      placeholder="Номер заказа"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                    />
                    <Button onClick={trackOrder} className="w-full">
                      Отследить заказ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Delivery Zones Status */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Статус доставки по районам
            </h2>
            <p className="text-xl text-muted-foreground">
              Актуальная информация о времени доставки в разных районах Москвы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{zone.zone}</CardTitle>
                    <Badge className={zone.color}>
                      {zone.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    Время доставки: {zone.time}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Нужна помощь с заказом?</h2>
              <p className="text-xl text-muted-foreground">
                Если у вас возникли проблемы с отслеживанием или доставкой
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Проблемы с доставкой</CardTitle>
                  <CardDescription>
                    Что делать, если заказ опаздывает или есть другие проблемы
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={20} className="text-orange-500" />
                      <div>
                        <h4 className="font-medium">Заказ опаздывает</h4>
                        <p className="text-sm text-muted-foreground">Свяжитесь с курьером или нашей поддержкой</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-red-500" />
                      <div>
                        <h4 className="font-medium">Неверный адрес</h4>
                        <p className="text-sm text-muted-foreground">Сообщите правильный адрес курьеру</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-blue-500" />
                      <div>
                        <h4 className="font-medium">Не можете дозвониться</h4>
                        <p className="text-sm text-muted-foreground">Напишите в WhatsApp или позвоните в поддержку</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="Headphones" size={16} className="mr-2" />
                    Связаться с поддержкой
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Полезная информация</CardTitle>
                  <CardDescription>
                    Часто задаваемые вопросы о доставке
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">Как долго готовится заказ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Обычно 20-30 минут в зависимости от сложности блюд
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Можно ли изменить время доставки?</h4>
                      <p className="text-sm text-muted-foreground">
                        Да, до начала приготовления заказа
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Что делать, если никого нет в офисе?</h4>
                      <p className="text-sm text-muted-foreground">
                        Курьер подождет 10 минут, затем свяжется с вами
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Icon name="HelpCircle" size={16} className="mr-2" />
                    Все вопросы и ответы
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Live Updates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Уведомления в реальном времени
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получайте SMS и push-уведомления о статусе вашего заказа
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Icon name="Smartphone" size={24} className="text-blue-600" />
                      </div>
                      <span className="text-sm">SMS уведомления</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Icon name="Mail" size={24} className="text-green-600" />
                      </div>
                      <span className="text-sm">Email уведомления</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Icon name="Bell" size={24} className="text-purple-600" />
                      </div>
                      <span className="text-sm">Push уведомления</span>
                    </div>
                  </div>
                  
                  <div className="bg-violet-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-violet-800 mb-2">
                      Настройте уведомления
                    </h4>
                    <p className="text-violet-700 text-sm mb-4">
                      Выберите, как вы хотите получать информацию о статусе заказов
                    </p>
                    <Button className="w-full">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Настроить уведомления
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-500 to-violet-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Хотите заказать обед?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Сделайте заказ прямо сейчас и отслеживайте его доставку в режиме реального времени
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Сделать заказ
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-violet-600">
                <Icon name="Menu" size={20} className="mr-2" />
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackingPage;