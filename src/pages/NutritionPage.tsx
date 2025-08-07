import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const NutritionPage = () => {
  const [calculatorData, setCalculatorData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: '',
    activity: '',
    goal: ''
  });

  const [nutritionResult, setNutritionResult] = useState<any>(null);

  const nutritionPrograms = [
    {
      id: 1,
      name: 'Здоровое похудение',
      duration: '30 дней',
      price: '8500 ₽',
      calories: '1200-1500 ккал/день',
      description: 'Сбалансированная программа для безопасного снижения веса',
      features: [
        'Индивидуальный план питания',
        'Контроль калорий и БЖУ',
        'Еженедельные консультации диетолога',
        'Рецепты и рекомендации',
        'Трекинг прогресса'
      ],
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      popular: true
    },
    {
      id: 2,
      name: 'Набор мышечной массы',
      duration: '30 дней',
      price: '9500 ₽',
      calories: '2200-2800 ккал/день',
      description: 'Высокобелковая программа для спортсменов и активных людей',
      features: [
        'Повышенное содержание белка',
        'Спортивное питание',
        'Консультации спортивного диетолога',
        'Планы тренировок',
        'Добавки и витамины'
      ],
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      popular: false
    },
    {
      id: 3,
      name: 'Детокс и очищение',
      duration: '7 дней',
      price: '3500 ₽',
      calories: '1000-1200 ккал/день',
      description: 'Программа очищения организма натуральными продуктами',
      features: [
        'Натуральные соки и смузи',
        'Легкие салаты и супы',
        'Травяные чаи',
        'Ежедневная поддержка',
        'План выхода из детокса'
      ],
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      popular: false
    },
    {
      id: 4,
      name: 'Поддержание веса',
      duration: 'Постоянно',
      price: '7500 ₽/мес',
      calories: '1800-2200 ккал/день',
      description: 'Сбалансированное питание для поддержания текущего веса',
      features: [
        'Разнообразное меню',
        'Гибкий план питания',
        'Сезонные корректировки',
        'Консультации по запросу',
        'Читмилы и праздничные дни'
      ],
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      popular: false
    }
  ];

  const nutritionFacts = [
    {
      nutrient: 'Белки',
      dailyNorm: '1.2-2.0 г/кг веса',
      function: 'Строительство и восстановление тканей',
      sources: ['Мясо', 'Рыба', 'Яйца', 'Бобовые'],
      icon: 'Dumbbell',
      color: 'text-red-600 bg-red-100'
    },
    {
      nutrient: 'Углеводы',
      dailyNorm: '45-65% от калорий',
      function: 'Основной источник энергии',
      sources: ['Крупы', 'Овощи', 'Фрукты', 'Хлеб'],
      icon: 'Zap',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      nutrient: 'Жиры',
      dailyNorm: '20-35% от калорий',
      function: 'Энергия, усвоение витаминов',
      sources: ['Масла', 'Орехи', 'Авокадо', 'Рыба'],
      icon: 'Droplets',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      nutrient: 'Клетчатка',
      dailyNorm: '25-35 г/день',
      function: 'Пищеварение, очищение',
      sources: ['Овощи', 'Фрукты', 'Цельные злаки'],
      icon: 'Leaf',
      color: 'text-green-600 bg-green-100'
    }
  ];

  const healthyTips = [
    {
      title: 'Пейте больше воды',
      description: 'Норма - 30-35 мл на кг веса в день',
      icon: 'Droplets'
    },
    {
      title: 'Ешьте регулярно',
      description: '4-5 приемов пищи в день небольшими порциями',
      icon: 'Clock'
    },
    {
      title: 'Больше овощей',
      description: 'Половина тарелки должна состоять из овощей',
      icon: 'Leaf'
    },
    {
      title: 'Контролируйте порции',
      description: 'Используйте правило тарелки для контроля порций',
      icon: 'Scale'
    },
    {
      title: 'Качественный сон',
      description: '7-9 часов сна влияют на метаболизм',
      icon: 'Moon'
    },
    {
      title: 'Физическая активность',
      description: 'Минимум 150 минут умеренной активности в неделю',
      icon: 'Activity'
    }
  ];

  const calculateNutrition = () => {
    if (!calculatorData.age || !calculatorData.weight || !calculatorData.height || !calculatorData.gender) {
      return;
    }

    const age = parseInt(calculatorData.age);
    const weight = parseInt(calculatorData.weight);
    const height = parseInt(calculatorData.height);
    
    // Расчет BMR по формуле Миффлина-Сан Жеора
    let bmr;
    if (calculatorData.gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Коэффициенты активности
    const activityCoefficients: { [key: string]: number } = {
      'sedentary': 1.2,
      'light': 1.375,
      'moderate': 1.55,
      'active': 1.725,
      'very-active': 1.9
    };

    const coefficient = activityCoefficients[calculatorData.activity] || 1.2;
    const dailyCalories = Math.round(bmr * coefficient);

    // Расчет БЖУ
    const protein = Math.round((dailyCalories * 0.25) / 4); // 25% от калорий, 4 ккал/г
    const carbs = Math.round((dailyCalories * 0.45) / 4); // 45% от калорий, 4 ккал/г
    const fat = Math.round((dailyCalories * 0.30) / 9); // 30% от калорий, 9 ккал/г

    // Корректировка в зависимости от цели
    let adjustedCalories = dailyCalories;
    if (calculatorData.goal === 'lose') {
      adjustedCalories = dailyCalories - 500; // дефицит 500 ккал
    } else if (calculatorData.goal === 'gain') {
      adjustedCalories = dailyCalories + 300; // профицит 300 ккал
    }

    setNutritionResult({
      bmr: Math.round(bmr),
      dailyCalories: adjustedCalories,
      protein,
      carbs,
      fat,
      water: Math.round(weight * 35) // мл воды в день
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Питание и здоровье
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Научный подход к питанию. Узнайте о правильном питании, 
              рассчитайте свою норму калорий и выберите подходящую программу.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Nutrition Calculator */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Калькулятор питания</CardTitle>
                <CardDescription>
                  Рассчитайте свою дневную норму калорий и БЖУ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Возраст</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={calculatorData.age}
                      onChange={(e) => setCalculatorData({...calculatorData, age: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Вес (кг)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={calculatorData.weight}
                      onChange={(e) => setCalculatorData({...calculatorData, weight: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height">Рост (см)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="175"
                      value={calculatorData.height}
                      onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Пол</Label>
                    <Select onValueChange={(value) => setCalculatorData({...calculatorData, gender: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите пол" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Мужской</SelectItem>
                        <SelectItem value="female">Женский</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="activity">Уровень активности</Label>
                  <Select onValueChange={(value) => setCalculatorData({...calculatorData, activity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите уровень" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Малоподвижный</SelectItem>
                      <SelectItem value="light">Легкая активность</SelectItem>
                      <SelectItem value="moderate">Умеренная активность</SelectItem>
                      <SelectItem value="active">Высокая активность</SelectItem>
                      <SelectItem value="very-active">Очень высокая активность</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="goal">Цель</Label>
                  <Select onValueChange={(value) => setCalculatorData({...calculatorData, goal: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите цель" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose">Похудение</SelectItem>
                      <SelectItem value="maintain">Поддержание веса</SelectItem>
                      <SelectItem value="gain">Набор массы</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateNutrition} className="w-full">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать норму
                </Button>

                {nutritionResult && (
                  <div className="bg-emerald-50 p-6 rounded-lg space-y-4">
                    <h3 className="font-semibold text-emerald-800">Ваши нормы:</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          {nutritionResult.dailyCalories}
                        </div>
                        <div className="text-sm text-emerald-700">ккал/день</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          {nutritionResult.water}
                        </div>
                        <div className="text-sm text-emerald-700">мл воды/день</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-semibold text-red-600">{nutritionResult.protein}г</div>
                        <div className="text-xs text-emerald-700">Белки</div>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-600">{nutritionResult.carbs}г</div>
                        <div className="text-xs text-emerald-700">Углеводы</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-600">{nutritionResult.fat}г</div>
                        <div className="text-xs text-emerald-700">Жиры</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Nutrition Programs */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Программы питания</h2>
            
            {nutritionPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-all relative">
                {program.popular && (
                  <Badge className="absolute -top-2 left-4">
                    Популярная
                  </Badge>
                )}
                
                <div className="grid md:grid-cols-3">
                  <div className="aspect-square md:aspect-auto">
                    <img 
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{program.name}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-emerald-600">{program.price}</div>
                          <div className="text-sm text-muted-foreground">{program.duration}</div>
                        </div>
                      </div>
                      <CardDescription>{program.description}</CardDescription>
                      <Badge variant="outline" className="w-fit">
                        {program.calories}
                      </Badge>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <ul className="space-y-1">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-green-600" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full">
                        Выбрать программу
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Nutrition Facts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Основы правильного питания
            </h2>
            <p className="text-xl text-muted-foreground">
              Важная информация о макронутриентах и их роли в организме
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionFacts.map((fact, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${fact.color}`}>
                    <Icon name={fact.icon as any} size={20} />
                  </div>
                  <CardTitle className="text-lg">{fact.nutrient}</CardTitle>
                  <Badge variant="outline" className="text-xs w-fit">
                    {fact.dailyNorm}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{fact.function}</p>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Источники:</h4>
                    <div className="flex flex-wrap gap-1">
                      {fact.sources.map((source, sourceIndex) => (
                        <Badge key={sourceIndex} variant="secondary" className="text-xs">
                          {source}
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

      {/* Healthy Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Советы диетолога
            </h2>
            <p className="text-xl text-muted-foreground">
              Простые правила здорового питания от наших экспертов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthyTips.map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={tip.icon as any} size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Нужна персональная консультация?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наши диетологи помогут составить индивидуальный план питания 
              с учетом ваших особенностей и целей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="UserCheck" size={20} className="mr-2" />
                Консультация диетолога
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-emerald-600">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать гид по питанию
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NutritionPage;