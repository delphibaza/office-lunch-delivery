import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const CalculatorPage = () => {
  const [calculatorData, setCalculatorData] = useState({
    employees: 20,
    daysPerWeek: 5,
    mealsPerDay: 1,
    averagePrice: 400,
    deliveryZone: 'center',
    serviceType: 'standard'
  });

  const [result, setResult] = useState<any>(null);

  const serviceTypes = [
    {
      id: 'basic',
      name: 'Базовый',
      description: 'Стандартное меню, доставка 1 раз в день',
      discount: 0,
      features: ['Базовое меню', 'Стандартная доставка', 'Email поддержка']
    },
    {
      id: 'standard',
      name: 'Стандартный',
      description: 'Расширенное меню, персональный менеджер',
      discount: 10,
      features: ['Расширенное меню', 'Персональный менеджер', 'Гибкий график', 'Скидка 10%']
    },
    {
      id: 'premium',
      name: 'Премиум',
      description: 'Полное меню, максимальные скидки',
      discount: 20,
      features: ['Полное меню', 'Приоритетная поддержка', 'Индивидуальные решения', 'Скидка 20%']
    }
  ];

  const deliveryZones = [
    { id: 'center', name: 'Центр Москвы', coefficient: 1.0, description: 'В пределах Садового кольца' },
    { id: 'moscow', name: 'Москва в пределах МКАД', coefficient: 1.1, description: 'Все районы Москвы' },
    { id: 'suburbs', name: 'Ближнее Подмосковье', coefficient: 1.2, description: 'До 30 км от МКАД' }
  ];

  const calculateCost = () => {
    const basePrice = calculatorData.employees * calculatorData.averagePrice * calculatorData.mealsPerDay * calculatorData.daysPerWeek * 4; // месяц
    
    const selectedService = serviceTypes.find(s => s.id === calculatorData.serviceType);
    const selectedZone = deliveryZones.find(z => z.id === calculatorData.deliveryZone);
    
    const discount = selectedService?.discount || 0;
    const zoneCoefficient = selectedZone?.coefficient || 1;
    
    const discountAmount = (basePrice * discount) / 100;
    const priceAfterDiscount = basePrice - discountAmount;
    const finalPrice = priceAfterDiscount * zoneCoefficient;
    
    const deliveryCost = calculatorData.employees >= 20 ? 0 : 200 * calculatorData.daysPerWeek * 4;
    
    setResult({
      basePrice,
      discount: discountAmount,
      deliveryCost,
      finalPrice: finalPrice + deliveryCost,
      pricePerEmployee: (finalPrice + deliveryCost) / calculatorData.employees,
      savings: basePrice - finalPrice
    });
  };

  const examples = [
    {
      company: 'Стартап (10 человек)',
      employees: 10,
      cost: '32 000 ₽/мес',
      perEmployee: '3 200 ₽/мес',
      description: 'Базовый пакет, обеды 5 дней в неделю'
    },
    {
      company: 'Средняя компания (50 человек)',
      employees: 50,
      cost: '140 000 ₽/мес',
      perEmployee: '2 800 ₽/мес',
      description: 'Стандартный пакет со скидкой 10%'
    },
    {
      company: 'Крупная корпорация (200 человек)',
      employees: 200,
      cost: '480 000 ₽/мес',
      perEmployee: '2 400 ₽/мес',
      description: 'Премиум пакет со скидкой 20%'
    }
  ];

  const benefits = [
    {
      icon: 'TrendingDown',
      title: 'Экономия до 30%',
      description: 'По сравнению с индивидуальными заказами'
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Сотрудники не тратят время на поиск еды'
    },
    {
      icon: 'Heart',
      title: 'Забота о здоровье',
      description: 'Сбалансированное питание для команды'
    },
    {
      icon: 'Users',
      title: 'Командный дух',
      description: 'Совместные обеды укрепляют коллектив'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Калькулятор стоимости
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Рассчитайте стоимость корпоративного питания для вашей компании. 
              Узнайте, сколько вы сможете сэкономить с нашими услугами.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Параметры расчета</CardTitle>
                <CardDescription>
                  Укажите данные о вашей компании для точного расчета
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Количество сотрудников */}
                <div>
                  <Label className="text-base font-medium">
                    Количество сотрудников: {calculatorData.employees}
                  </Label>
                  <Slider
                    value={[calculatorData.employees]}
                    onValueChange={(value) => setCalculatorData({...calculatorData, employees: value[0]})}
                    max={500}
                    min={5}
                    step={5}
                    className="mt-3"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Дни в неделю */}
                <div>
                  <Label htmlFor="days">Рабочих дней в неделю</Label>
                  <Select 
                    value={calculatorData.daysPerWeek.toString()} 
                    onValueChange={(value) => setCalculatorData({...calculatorData, daysPerWeek: parseInt(value)})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 дней (Пн-Пт)</SelectItem>
                      <SelectItem value="6">6 дней (Пн-Сб)</SelectItem>
                      <SelectItem value="7">7 дней (Пн-Вс)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Приемов пищи в день */}
                <div>
                  <Label htmlFor="meals">Приемов пищи в день</Label>
                  <Select 
                    value={calculatorData.mealsPerDay.toString()} 
                    onValueChange={(value) => setCalculatorData({...calculatorData, mealsPerDay: parseInt(value)})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 (только обед)</SelectItem>
                      <SelectItem value="2">2 (завтрак + обед)</SelectItem>
                      <SelectItem value="3">3 (завтрак + обед + ужин)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Средняя стоимость */}
                <div>
                  <Label className="text-base font-medium">
                    Средняя стоимость блюда: {calculatorData.averagePrice} ₽
                  </Label>
                  <Slider
                    value={[calculatorData.averagePrice]}
                    onValueChange={(value) => setCalculatorData({...calculatorData, averagePrice: value[0]})}
                    max={800}
                    min={200}
                    step={50}
                    className="mt-3"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>200 ₽</span>
                    <span>800 ₽</span>
                  </div>
                </div>

                {/* Зона доставки */}
                <div>
                  <Label htmlFor="zone">Зона доставки</Label>
                  <Select 
                    value={calculatorData.deliveryZone} 
                    onValueChange={(value) => setCalculatorData({...calculatorData, deliveryZone: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {deliveryZones.map((zone) => (
                        <SelectItem key={zone.id} value={zone.id}>
                          {zone.name} - {zone.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Тип сервиса */}
                <div>
                  <Label>Тип сервиса</Label>
                  <div className="grid gap-3 mt-2">
                    {serviceTypes.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          calculatorData.serviceType === service.id 
                            ? 'border-cyan-200 bg-cyan-50' 
                            : 'hover:border-gray-300'
                        }`}
                        onClick={() => setCalculatorData({...calculatorData, serviceType: service.id})}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{service.name}</h4>
                          {service.discount > 0 && (
                            <Badge variant="secondary">-{service.discount}%</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {service.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button onClick={calculateCost} className="w-full" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {result && (
              <Card className="border-cyan-200 bg-cyan-50/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-700">Результат расчета</CardTitle>
                  <CardDescription>
                    Стоимость корпоративного питания для вашей компании
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-cyan-600">
                        {result.finalPrice.toLocaleString()} ₽
                      </div>
                      <div className="text-sm text-muted-foreground">в месяц</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-cyan-600">
                        {Math.round(result.pricePerEmployee).toLocaleString()} ₽
                      </div>
                      <div className="text-sm text-muted-foreground">на сотрудника</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Базовая стоимость:</span>
                      <span className="font-medium">{result.basePrice.toLocaleString()} ₽</span>
                    </div>
                    {result.discount > 0 && (
                      <div className="flex justify-between items-center text-green-600">
                        <span>Скидка:</span>
                        <span className="font-medium">-{result.discount.toLocaleString()} ₽</span>
                      </div>
                    )}
                    {result.deliveryCost > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Доставка:</span>
                        <span className="font-medium">{result.deliveryCost.toLocaleString()} ₽</span>
                      </div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Итого в месяц:</span>
                        <span className="text-cyan-600">{result.finalPrice.toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>

                  {result.savings > 0 && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="TrendingDown" size={20} className="text-green-600" />
                        <span className="font-semibold text-green-700">Ваша экономия</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {result.savings.toLocaleString()} ₽/мес
                      </div>
                      <div className="text-sm text-green-700">
                        По сравнению с базовыми ценами
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button className="flex-1">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Связаться с нами
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать расчет
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Примеры расчетов</CardTitle>
                <CardDescription>
                  Типичные варианты для компаний разного размера
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {examples.map((example, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{example.company}</h4>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-cyan-600">{example.cost}</div>
                      <div className="text-sm text-muted-foreground">{example.perEmployee}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Преимущества корпоративного питания</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                        <Icon name={benefit.icon as any} size={16} className="text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы начать экономить?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получите персональное предложение с учетом особенностей вашей компании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить предложение
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-cyan-600">
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

export default CalculatorPage;