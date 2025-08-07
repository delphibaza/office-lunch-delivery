import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const LocationsPage = () => {
  const [searchAddress, setSearchAddress] = useState('');

  const offices = [
    {
      id: 1,
      name: 'Главный офис',
      type: 'Административный центр',
      address: 'Москва, ул. Примерная, д. 123, офис 456',
      district: 'Центральный АО',
      metro: 'Кропоткинская',
      phone: '+7 (495) 123-45-67',
      email: 'office@офиседа.рф',
      hours: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
      services: ['Встречи с клиентами', 'Консультации', 'Заключение договоров'],
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 2,
      name: 'Производство №1',
      type: 'Основная кухня',
      address: 'Москва, Промышленная зона Сокольники, д. 15',
      district: 'Восточный АО',
      metro: 'Сокольники',
      phone: '+7 (495) 123-45-68',
      email: 'kitchen1@офиседа.рф',
      hours: 'Пн-Пт: 6:00-18:00, Сб: 8:00-16:00',
      services: ['Приготовление блюд', 'Упаковка', 'Контроль качества'],
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      coordinates: { lat: 55.7887, lng: 37.6693 }
    },
    {
      id: 3,
      name: 'Производство №2',
      type: 'Дополнительная кухня',
      address: 'МО, г. Мытищи, ул. Заводская, д. 25',
      district: 'Московская область',
      metro: 'Медведково + автобус',
      phone: '+7 (495) 123-45-69',
      email: 'kitchen2@офиседа.рф',
      hours: 'Пн-Пт: 6:00-18:00',
      services: ['Крупные заказы', 'Кейтеринг', 'Специальные мероприятия'],
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      coordinates: { lat: 55.9116, lng: 37.7307 }
    },
    {
      id: 4,
      name: 'Логистический центр',
      type: 'Центр доставки',
      address: 'Москва, МКАД 47 км, Логопарк',
      district: 'Северный АО',
      metro: 'Алтуфьево + автобус',
      phone: '+7 (495) 123-45-70',
      email: 'logistics@офиседа.рф',
      hours: 'Пн-Сб: 7:00-20:00',
      services: ['Координация доставки', 'Автопарк', 'Диспетчерская'],
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      coordinates: { lat: 55.8970, lng: 37.5719 }
    }
  ];

  const deliveryAreas = [
    {
      area: 'Центральный АО',
      districts: ['Арбат', 'Басманный', 'Замоскворечье', 'Красносельский', 'Мещанский', 'Пресненский', 'Таганский', 'Тверской', 'Хамовники', 'Якиманка'],
      deliveryTime: '30-45 мин',
      minOrder: '500 ₽',
      freeDelivery: '1000 ₽',
      coverage: '100%'
    },
    {
      area: 'Северный АО',
      districts: ['Аэропорт', 'Беговой', 'Бескудниковский', 'Войковский', 'Головинский', 'Дегунино', 'Дмитровский', 'Коптево', 'Левобережный', 'Савеловский', 'Сокол', 'Тимирязевский'],
      deliveryTime: '45-60 мин',
      minOrder: '800 ₽',
      freeDelivery: '1500 ₽',
      coverage: '95%'
    },
    {
      area: 'Восточный АО',
      districts: ['Богородское', 'Вешняки', 'Гольяново', 'Измайлово', 'Косино-Ухтомский', 'Новогиреево', 'Перово', 'Преображенское', 'Сокольники'],
      deliveryTime: '40-55 мин',
      minOrder: '800 ₽',
      freeDelivery: '1500 ₽',
      coverage: '90%'
    },
    {
      area: 'Западный АО',
      districts: ['Внуково', 'Дорогомилово', 'Крылатское', 'Кунцево', 'Можайский', 'Ново-Переделкино', 'Очаково-Матвеевское', 'Проспект Вернадского', 'Раменки', 'Солнцево', 'Тропарево-Никулино', 'Филевский Парк', 'Фили-Давыдково'],
      deliveryTime: '35-50 мин',
      minOrder: '800 ₽',
      freeDelivery: '1500 ₽',
      coverage: '85%'
    },
    {
      area: 'Южный АО',
      districts: ['Бирюлево Восточное', 'Бирюлево Западное', 'Братеево', 'Даниловский', 'Донской', 'Зябликово', 'Москворечье-Сабурово', 'Нагатино-Садовники', 'Нагатинский Затон', 'Нагорный', 'Орехово-Борисово', 'Царицыно', 'Чертаново'],
      deliveryTime: '50-70 мин',
      minOrder: '1000 ₽',
      freeDelivery: '2000 ₽',
      coverage: '80%'
    },
    {
      area: 'Московская область',
      districts: ['Мытищи', 'Королёв', 'Балашиха', 'Реутов', 'Железнодорожный', 'Люберцы', 'Котельники', 'Дзержинский'],
      deliveryTime: '60-90 мин',
      minOrder: '1500 ₽',
      freeDelivery: '2500 ₽',
      coverage: '70%'
    }
  ];

  const checkDelivery = () => {
    // Здесь будет логика проверки адреса доставки
    console.log('Checking delivery for:', searchAddress);
  };

  const getCoverageColor = (coverage: string) => {
    const percent = parseInt(coverage);
    if (percent >= 95) return 'text-green-600 bg-green-100';
    if (percent >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Наши локации и зоны доставки
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Узнайте, где мы находимся и доставляем ли мы в ваш район. 
              Проверьте время доставки и условия для вашего адреса.
            </p>
            
            {/* Address Check */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  placeholder="Введите ваш адрес"
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={checkDelivery}>
                  <Icon name="Search" size={16} className="mr-2" />
                  Проверить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="offices" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="offices">Наши офисы</TabsTrigger>
            <TabsTrigger value="delivery-zones">Зоны доставки</TabsTrigger>
          </TabsList>

          {/* Offices */}
          <TabsContent value="offices">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Офисы и производства</h2>
                <p className="text-muted-foreground">
                  Наши локации в Москве и Московской области
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {offices.map((office) => (
                  <Card key={office.id} className="hover:shadow-lg transition-all">
                    <div className="aspect-video">
                      <img 
                        src={office.image}
                        alt={office.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{office.name}</CardTitle>
                        <Badge variant="outline">{office.type}</Badge>
                      </div>
                      <CardDescription>{office.district}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Icon name="MapPin" size={16} className="text-muted-foreground mt-1 shrink-0" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Train" size={16} className="text-muted-foreground shrink-0" />
                          <span className="text-sm">м. {office.metro}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={16} className="text-muted-foreground shrink-0" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={16} className="text-muted-foreground shrink-0" />
                          <span className="text-sm">{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="text-muted-foreground shrink-0" />
                          <span className="text-sm">{office.hours}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Услуги:</h4>
                        <div className="flex flex-wrap gap-1">
                          {office.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Icon name="Navigation" size={14} className="mr-1" />
                          Маршрут
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Icon name="Phone" size={14} className="mr-1" />
                          Позвонить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Delivery Zones */}
          <TabsContent value="delivery-zones">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Зоны доставки</h2>
                <p className="text-muted-foreground">
                  Районы Москвы и Подмосковья, куда мы доставляем заказы
                </p>
              </div>

              <div className="space-y-6">
                {deliveryAreas.map((area, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{area.area}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge className={getCoverageColor(area.coverage)}>
                            {area.coverage} покрытие
                          </Badge>
                          <Badge variant="outline">
                            {area.deliveryTime}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Время доставки:</span>
                          <div className="font-semibold">{area.deliveryTime}</div>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Минимальный заказ:</span>
                          <div className="font-semibold">{area.minOrder}</div>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Бесплатная доставка от:</span>
                          <div className="font-semibold text-green-600">{area.freeDelivery}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Районы:</h4>
                        <div className="flex flex-wrap gap-1">
                          {area.districts.map((district, districtIndex) => (
                            <Badge key={districtIndex} variant="secondary" className="text-xs">
                              {district}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Интерактивная карта</h2>
            <p className="text-xl text-muted-foreground">
              Наши офисы и зоны доставки на карте Москвы
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Интерактивная карта</h3>
                  <p className="text-muted-foreground mb-4">
                    Здесь будет отображена карта с нашими офисами и зонами доставки
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Офисы</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Зоны доставки</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Производства</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Планы расширения</h2>
              <p className="text-xl text-muted-foreground">
                Мы постоянно расширяем географию доставки и открываем новые точки
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="MapPin" size={20} className="text-teal-600" />
                    <span>2024 год</span>
                  </CardTitle>
                  <CardDescription>Планы на текущий год</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Icon name="Plus" size={14} className="text-green-600" />
                      <span className="text-sm">Открытие офиса в Зеленограде</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Plus" size={14} className="text-green-600" />
                      <span className="text-sm">Расширение в Одинцово и Красногорск</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Plus" size={14} className="text-green-600" />
                      <span className="text-sm">Новое производство в Подольске</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Plus" size={14} className="text-green-600" />
                      <span className="text-sm">Покрытие всех районов ЮАО</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Target" size={20} className="text-teal-600" />
                    <span>2025 год</span>
                  </CardTitle>
                  <CardDescription>Долгосрочные планы</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Icon name="Star" size={14} className="text-blue-600" />
                      <span className="text-sm">Выход в Санкт-Петербург</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Star" size={14} className="text-blue-600" />
                      <span className="text-sm">Франшиза в 10 городах России</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Star" size={14} className="text-blue-600" />
                      <span className="text-sm">Автоматизированные кухни</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Star" size={14} className="text-blue-600" />
                      <span className="text-sm">Доставка дронами в центре</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Не доставляем в ваш район?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Сообщите нам ваш адрес, и мы рассмотрим возможность 
              расширения зоны доставки в ваш район
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="MapPin" size={20} className="mr-2" />
                Предложить район
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-teal-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;