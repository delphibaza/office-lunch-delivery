import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const HealthyPage = () => {
  const [selectedDiet, setSelectedDiet] = useState('all');

  const dietTypes = [
    { id: 'all', name: 'Все блюда', icon: 'UtensilsCrossed' },
    { id: 'keto', name: 'Кето', icon: 'Zap' },
    { id: 'vegan', name: 'Веган', icon: 'Leaf' },
    { id: 'paleo', name: 'Палео', icon: 'Mountain' },
    { id: 'lowcarb', name: 'Низкоуглеводное', icon: 'TrendingDown' },
    { id: 'protein', name: 'Белковое', icon: 'Dumbbell' }
  ];

  const healthyDishes = [
    {
      id: 1,
      name: 'Боул с киноа и авокадо',
      category: 'vegan',
      description: 'Киноа, авокадо, огурцы, помидоры черри, кунжут',
      price: 420,
      calories: 380,
      protein: 12,
      carbs: 45,
      fat: 18,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Веган', 'Без глютена', 'Суперфуд']
    },
    {
      id: 2,
      name: 'Лосось с брокколи на пару',
      category: 'keto',
      description: 'Стейк лосося, брокколи, спаржа, лимонное масло',
      price: 680,
      calories: 420,
      protein: 35,
      carbs: 8,
      fat: 28,
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      badges: ['Кето', 'Омега-3', 'Низкоуглеводное']
    },
    {
      id: 3,
      name: 'Куриная грудка с овощами гриль',
      category: 'protein',
      description: 'Куриная грудка, цукини, баклажаны, перец',
      price: 450,
      calories: 320,
      protein: 40,
      carbs: 12,
      fat: 8,
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      badges: ['Белковое', 'Низкокалорийное']
    }
  ];

  const nutritionPrograms = [
    {
      name: 'Детокс программа',
      duration: '7 дней',
      price: '2800 ₽',
      description: 'Очищение организма с помощью натуральных продуктов',
      features: ['Смузи и соки', 'Легкие салаты', 'Травяные чаи', 'План питания'],
      icon: 'Sparkles'
    },
    {
      name: 'Похудение',
      duration: '30 дней',
      price: '8500 ₽',
      description: 'Сбалансированное питание для снижения веса',
      features: ['1200-1500 ккал/день', 'Контроль БЖУ', 'Консультации диетолога', 'Трекинг прогресса'],
      icon: 'TrendingDown'
    },
    {
      name: 'Набор мышечной массы',
      duration: '30 дней',
      price: '9500 ₽',
      description: 'Высокобелковое питание для спортсменов',
      features: ['2000-2500 ккал/день', 'Высокое содержание белка', 'Спортивные добавки', 'Индивидуальный план'],
      icon: 'Dumbbell'
    }
  ];

  const healthBenefits = [
    {
      icon: 'Heart',
      title: 'Здоровье сердца',
      description: 'Омега-3 кислоты и антиоксиданты укрепляют сердечно-сосудистую систему'
    },
    {
      icon: 'Brain',
      title: 'Ясность ума',
      description: 'Правильное питание улучшает концентрацию и память'
    },
    {
      icon: 'Zap',
      title: 'Больше энергии',
      description: 'Сбалансированные блюда дают стабильную энергию на весь день'
    },
    {
      icon: 'Shield',
      title: 'Крепкий иммунитет',
      description: 'Витамины и минералы укрепляют защитные силы организма'
    }
  ];

  const filteredDishes = selectedDiet === 'all' 
    ? healthyDishes 
    : healthyDishes.filter(dish => dish.category === selectedDiet);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Здоровое питание
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Сбалансированные блюда для поддержания здоровья и хорошего самочувствия. 
              Индивидуальные программы питания от наших диетологов.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="Leaf" size={14} className="mr-1" />
                100% натуральные продукты
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Calculator" size={14} className="mr-1" />
                Подсчет калорий и БЖУ
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="UserCheck" size={14} className="mr-1" />
                Консультации диетолога
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Diet Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Выберите тип питания</h2>
            <p className="text-xl text-muted-foreground">
              Мы предлагаем блюда для различных диетических предпочтений
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {dietTypes.map((diet) => (
              <Button
                key={diet.id}
                variant={selectedDiet === diet.id ? "default" : "outline"}
                onClick={() => setSelectedDiet(diet.id)}
                className="flex items-center space-x-2"
              >
                <Icon name={diet.icon as any} size={16} />
                <span>{diet.name}</span>
              </Button>
            ))}
          </div>

          {/* Healthy Dishes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video relative">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {dish.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{dish.name}</CardTitle>
                  <CardDescription>{dish.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{dish.price} ₽</span>
                    <Badge variant="outline">{dish.calories} ккал</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                    <div>
                      <div className="font-semibold text-green-600">{dish.protein}г</div>
                      <div className="text-muted-foreground">Белки</div>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-600">{dish.carbs}г</div>
                      <div className="text-muted-foreground">Углеводы</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600">{dish.fat}г</div>
                      <div className="text-muted-foreground">Жиры</div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Программы питания
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовые программы для достижения ваших целей
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nutritionPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} size={24} className="text-green-600" />
                  </div>
                  <CardTitle>{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{program.price}</span>
                    <Badge>{program.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Польза здорового питания
            </h2>
            <p className="text-xl text-muted-foreground">
              Как правильное питание влияет на ваше здоровье и самочувствие
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Калькулятор калорий
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Рассчитайте свою дневную норму калорий и подберите подходящую программу питания
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Возраст</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded-md"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Вес (кг)</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded-md"
                      placeholder="70"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Рост (см)</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded-md"
                      placeholder="175"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Пол</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Мужской</option>
                      <option>Женский</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full mb-4">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать норму калорий
                </Button>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2150 ккал/день</div>
                  <div className="text-sm text-muted-foreground">Ваша дневная норма</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Начните питаться правильно уже сегодня
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получите персональную консультацию диетолога и подберите идеальную программу питания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="UserCheck" size={20} className="mr-2" />
                Консультация диетолога
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-green-600">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать меню
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthyPage;