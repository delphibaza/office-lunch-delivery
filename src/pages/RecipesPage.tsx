import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const RecipesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все рецепты', icon: 'UtensilsCrossed' },
    { id: 'salads', name: 'Салаты', icon: 'Leaf' },
    { id: 'soups', name: 'Супы', icon: 'Bowl' },
    { id: 'main', name: 'Основные блюда', icon: 'ChefHat' },
    { id: 'desserts', name: 'Десерты', icon: 'Cake' },
    { id: 'healthy', name: 'ПП рецепты', icon: 'Heart' }
  ];

  const recipes = [
    {
      id: 1,
      title: 'Салат Цезарь с курицей',
      category: 'salads',
      difficulty: 'Легко',
      cookTime: '15 мин',
      servings: 4,
      calories: 340,
      description: 'Классический салат с хрустящими сухариками и пармезаном',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      ingredients: [
        '300г куриного филе',
        '1 кочан салата романо',
        '100г пармезана',
        '2 ломтика белого хлеба',
        '3 ст.л. оливкового масла',
        '2 ст.л. лимонного сока',
        '1 зубчик чеснока',
        'Соль, перец по вкусу'
      ],
      instructions: [
        'Куриное филе отварить или запечь, нарезать кубиками',
        'Хлеб нарезать кубиками и обжарить до золотистого цвета',
        'Салат вымыть, обсушить и нарезать',
        'Приготовить заправку из масла, лимонного сока и чеснока',
        'Смешать все ингредиенты, заправить соусом',
        'Посыпать тертым пармезаном и подавать'
      ],
      tags: ['классика', 'быстро', 'популярное'],
      nutrition: { protein: 28, carbs: 12, fat: 18 }
    },
    {
      id: 2,
      title: 'Крем-суп из тыквы',
      category: 'soups',
      difficulty: 'Средне',
      cookTime: '45 мин',
      servings: 6,
      calories: 180,
      description: 'Нежный суп с имбирем и кокосовым молоком',
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      ingredients: [
        '1 кг тыквы',
        '1 луковица',
        '2 зубчика чеснока',
        '1 ст.л. свежего имбиря',
        '400мл кокосового молока',
        '500мл овощного бульона',
        '2 ст.л. оливкового масла',
        'Соль, перец, мускатный орех'
      ],
      instructions: [
        'Тыкву очистить и нарезать кубиками',
        'Лук и чеснок мелко нарезать, имбирь натереть',
        'Обжарить лук, чеснок и имбирь в масле',
        'Добавить тыкву, тушить 5 минут',
        'Влить бульон, варить 25 минут до мягкости тыквы',
        'Взбить блендером, добавить кокосовое молоко',
        'Приправить специями и подавать горячим'
      ],
      tags: ['веган', 'осеннее', 'согревающее'],
      nutrition: { protein: 4, carbs: 15, fat: 12 }
    },
    {
      id: 3,
      title: 'Стейк из лосося с овощами',
      category: 'main',
      difficulty: 'Средне',
      cookTime: '25 мин',
      servings: 2,
      calories: 420,
      description: 'Сочный стейк лосося с овощами гриль',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      ingredients: [
        '2 стейка лосося (по 150г)',
        '1 цукини',
        '1 баклажан',
        '1 красный перец',
        '200г спаржи',
        '3 ст.л. оливкового масла',
        '1 лимон',
        'Розмарин, тимьян',
        'Соль, перец'
      ],
      instructions: [
        'Овощи нарезать крупными кусками',
        'Замариновать овощи в масле с травами',
        'Разогреть гриль или сковороду-гриль',
        'Обжарить овощи до мягкости',
        'Лосось посолить, поперчить',
        'Обжарить лосось по 4-5 минут с каждой стороны',
        'Подавать с лимоном и овощами'
      ],
      tags: ['рыба', 'гриль', 'здоровое'],
      nutrition: { protein: 35, carbs: 8, fat: 28 }
    },
    {
      id: 4,
      title: 'Панакота с ягодами',
      category: 'desserts',
      difficulty: 'Сложно',
      cookTime: '4 часа',
      servings: 6,
      calories: 290,
      description: 'Нежный итальянский десерт с ягодным соусом',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      ingredients: [
        '500мл сливок 33%',
        '100г сахара',
        '1 пакетик желатина',
        '1 стручок ванили',
        '200г смешанных ягод',
        '50г сахарной пудры',
        '2 ст.л. лимонного сока'
      ],
      instructions: [
        'Желатин замочить в холодной воде',
        'Сливки нагреть с сахаром и ванилью',
        'Добавить набухший желатин, размешать',
        'Разлить по формочкам, охладить 4 часа',
        'Ягоды протереть с сахарной пудрой',
        'Добавить лимонный сок в ягодное пюре',
        'Подавать панакоту с ягодным соусом'
      ],
      tags: ['десерт', 'итальянская кухня', 'праздничное'],
      nutrition: { protein: 6, carbs: 25, fat: 22 }
    },
    {
      id: 5,
      title: 'Боул с киноа и авокадо',
      category: 'healthy',
      difficulty: 'Легко',
      cookTime: '20 мин',
      servings: 2,
      calories: 380,
      description: 'Питательный боул с суперфудами',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      ingredients: [
        '1 стакан киноа',
        '1 авокадо',
        '150г черри томатов',
        '1 огурец',
        '100г шпината',
        '50г кедровых орешков',
        '3 ст.л. оливкового масла',
        '1 ст.л. лимонного сока',
        'Соль, перец'
      ],
      instructions: [
        'Киноа промыть и отварить в подсоленной воде',
        'Авокадо нарезать кубиками',
        'Томаты разрезать пополам',
        'Огурец нарезать кружочками',
        'Орешки слегка обжарить',
        'Приготовить заправку из масла и лимона',
        'Выложить все ингредиенты в боул, заправить'
      ],
      tags: ['суперфуд', 'веган', 'полезно'],
      nutrition: { protein: 12, carbs: 45, fat: 18 }
    },
    {
      id: 6,
      title: 'Паста Карбонара',
      category: 'main',
      difficulty: 'Средне',
      cookTime: '20 мин',
      servings: 4,
      calories: 580,
      description: 'Классическая римская паста с беконом',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      ingredients: [
        '400г спагетти',
        '200г бекона',
        '4 яичных желтка',
        '100г пармезана',
        '2 зубчика чеснока',
        '50мл белого вина',
        'Черный перец',
        'Соль'
      ],
      instructions: [
        'Отварить спагетти до состояния аль денте',
        'Бекон нарезать и обжарить до хрустящей корочки',
        'Добавить чеснок, обжарить 1 минуту',
        'Влить вино, выпарить алкоголь',
        'Смешать желтки с тертым пармезаном',
        'Горячую пасту смешать с беконом',
        'Добавить яично-сырную смесь, быстро перемешать',
        'Подавать немедленно с черным перцем'
      ],
      tags: ['итальянская кухня', 'классика', 'сытное'],
      nutrition: { protein: 25, carbs: 65, fat: 28 }
    }
  ];

  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легко': return 'text-green-600 bg-green-100';
      case 'Средне': return 'text-yellow-600 bg-yellow-100';
      case 'Сложно': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tips = [
    {
      icon: 'Lightbulb',
      title: 'Совет шеф-повара',
      text: 'Всегда используйте свежие продукты и не бойтесь экспериментировать со специями'
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      text: 'Подготовьте все ингредиенты заранее - это сократит время готовки вдвое'
    },
    {
      icon: 'Heart',
      title: 'Здоровое питание',
      text: 'Добавляйте больше овощей и зелени в каждое блюдо для пользы организма'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Рецепты от наших поваров
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Секретные рецепты популярных блюд из нашего меню. 
              Готовьте дома как профессиональные повара!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="ChefHat" size={14} className="mr-1" />
                От профессиональных поваров
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Clock" size={14} className="mr-1" />
                Пошаговые инструкции
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Calculator" size={14} className="mr-1" />
                Точные пропорции
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <Icon name={category.icon as any} size={16} />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Recipes Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="aspect-square relative">
                    <img 
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <Badge className={getDifficultyColor(recipe.difficulty)}>
                        {recipe.difficulty}
                      </Badge>
                      <Badge variant="outline" className="bg-white/90">
                        {recipe.calories} ккал
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-3">
                        <span className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {recipe.cookTime}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Users" size={14} className="mr-1" />
                          {recipe.servings} порций
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      {/* Nutrition */}
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div>
                          <div className="font-semibold text-green-600">{recipe.nutrition.protein}г</div>
                          <div className="text-muted-foreground">Белки</div>
                        </div>
                        <div>
                          <div className="font-semibold text-orange-600">{recipe.nutrition.carbs}г</div>
                          <div className="text-muted-foreground">Углеводы</div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-600">{recipe.nutrition.fat}г</div>
                          <div className="text-muted-foreground">Жиры</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {recipe.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full" size="sm">
                        <Icon name="BookOpen" size={16} className="mr-2" />
                        Посмотреть рецепт
                      </Button>
                    </CardContent>
                  </div>
                </div>

                {/* Detailed Recipe (expandable) */}
                <div className="border-t bg-muted/30">
                  <Tabs defaultValue="ingredients" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="ingredients" className="text-xs">Ингредиенты</TabsTrigger>
                      <TabsTrigger value="instructions" className="text-xs">Приготовление</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="ingredients" className="p-4">
                      <ul className="space-y-1">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={12} className="text-green-600" />
                            <span className="text-sm">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="instructions" className="p-4">
                      <ol className="space-y-2">
                        {recipe.instructions.map((step, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-5 h-5 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Советы от шеф-повара
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональные секреты для домашней кухни
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={tip.icon as any} size={24} className="text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Request */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Хотите рецепт любимого блюда?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Напишите нам, и мы поделимся рецептом вашего любимого блюда из нашего меню
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Название блюда"
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Ваш email"
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Дополнительные пожелания..."
                      className="w-full p-3 border rounded-md"
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Запросить рецепт
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Попробуйте наши блюда в ресторанном качестве
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Закажите готовые блюда от наших поваров и насладитесь 
              профессиональным качеством без хлопот с готовкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать блюда
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-yellow-600">
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

export default RecipesPage;