import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Все блюда', icon: 'UtensilsCrossed' },
    { id: 'business', name: 'Бизнес-ланчи', icon: 'Briefcase' },
    { id: 'soups', name: 'Супы', icon: 'Bowl' },
    { id: 'salads', name: 'Салаты', icon: 'Leaf' },
    { id: 'main', name: 'Основные блюда', icon: 'ChefHat' },
    { id: 'desserts', name: 'Десерты', icon: 'Cake' },
    { id: 'drinks', name: 'Напитки', icon: 'Coffee' }
  ];

  const menuItems = [
    // Бизнес-ланчи
    {
      id: 1,
      name: 'Бизнес-ланч "Классик"',
      category: 'business',
      description: 'Борщ с говядиной, куриная котлета с пюре, салат Оливье, хлеб, чай',
      price: 450,
      calories: 680,
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      badges: ['Хит', 'Сытный']
    },
    {
      id: 2,
      name: 'Бизнес-ланч "Премиум"',
      category: 'business',
      description: 'Крем-суп из шампиньонов, стейк из лосося, овощи гриль, десерт, кофе',
      price: 650,
      calories: 520,
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      badges: ['Премиум', 'Рыба']
    },
    {
      id: 3,
      name: 'Бизнес-ланч "Легкий"',
      category: 'business',
      description: 'Овощной суп, куриная грудка на пару, салат из свежих овощей, сок',
      price: 380,
      calories: 420,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Диетический', 'ПП']
    },

    // Супы
    {
      id: 4,
      name: 'Борщ с говядиной',
      category: 'soups',
      description: 'Классический борщ с мраморной говядиной и сметаной',
      price: 280,
      calories: 320,
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      badges: ['Классика']
    },
    {
      id: 5,
      name: 'Крем-суп из тыквы',
      category: 'soups',
      description: 'Нежный крем-суп с тыквой, имбирем и кокосовым молоком',
      price: 250,
      calories: 180,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Веган', 'Осенний']
    },
    {
      id: 6,
      name: 'Солянка мясная',
      category: 'soups',
      description: 'Солянка с копченостями, говядиной и маслинами',
      price: 320,
      calories: 410,
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      badges: ['Сытный']
    },

    // Салаты
    {
      id: 7,
      name: 'Цезарь с курицей',
      category: 'salads',
      description: 'Классический салат с куриным филе, пармезаном и соусом',
      price: 380,
      calories: 340,
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      badges: ['Популярный']
    },
    {
      id: 8,
      name: 'Греческий салат',
      category: 'salads',
      description: 'Помидоры, огурцы, оливки, фета, оливковое масло',
      price: 320,
      calories: 280,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Средиземноморье']
    },
    {
      id: 9,
      name: 'Салат с лососем',
      category: 'salads',
      description: 'Слабосоленый лосось, авокадо, микс салатов, кедровые орешки',
      price: 520,
      calories: 380,
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      badges: ['Премиум', 'Омега-3']
    },

    // Основные блюда
    {
      id: 10,
      name: 'Паста Болоньезе',
      category: 'main',
      description: 'Домашняя паста с мясным соусом и пармезаном',
      price: 420,
      calories: 580,
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      badges: ['Итальянская кухня']
    },
    {
      id: 11,
      name: 'Стейк из семги',
      category: 'main',
      description: 'Стейк семги на гриле с овощами и рисом басмати',
      price: 680,
      calories: 450,
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      badges: ['Рыба', 'Гриль']
    },
    {
      id: 12,
      name: 'Куриная грудка',
      category: 'main',
      description: 'Куриная грудка в сливочном соусе с картофельным пюре',
      price: 390,
      calories: 520,
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      badges: ['Классика']
    },

    // Десерты
    {
      id: 13,
      name: 'Тирамису',
      category: 'desserts',
      description: 'Классический итальянский десерт с кофе и маскарпоне',
      price: 280,
      calories: 380,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Итальянский']
    },
    {
      id: 14,
      name: 'Чизкейк Нью-Йорк',
      category: 'desserts',
      description: 'Нежный чизкейк с ягодным соусом',
      price: 320,
      calories: 420,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Американский']
    },

    // Напитки
    {
      id: 15,
      name: 'Свежевыжатый сок',
      category: 'drinks',
      description: 'Апельсиновый, яблочный или морковный сок',
      price: 180,
      calories: 120,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Свежий']
    },
    {
      id: 16,
      name: 'Кофе Американо',
      category: 'drinks',
      description: 'Черный кофе из зерен арабики',
      price: 120,
      calories: 5,
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      badges: ['Бодрящий']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Хит':
      case 'Популярный':
        return 'default';
      case 'Новинка':
      case 'Премиум':
        return 'secondary';
      case 'Диетический':
      case 'ПП':
      case 'Веган':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Наше меню</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свежие блюда от наших поваров. Ежедневно готовим более 50 позиций
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="Clock" size={14} className="mr-1" />
                Готовим за 30 минут
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Truck" size={14} className="mr-1" />
                Доставка по Москве
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Shield" size={14} className="mr-1" />
                Контроль качества
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
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
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video relative">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {item.badges.map((badge, index) => (
                      <Badge 
                        key={index} 
                        variant={getBadgeVariant(badge)}
                        className="text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="text-xs bg-white/90">
                      {item.calories} ккал
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter className="flex justify-between items-center pt-0">
                  <span className="text-2xl font-bold text-orange-600">
                    {item.price} ₽
                  </span>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Icon name="UtensilsCrossed" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Блюда не найдены</h3>
              <p className="text-muted-foreground">
                В этой категории пока нет доступных блюд
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Не нашли подходящее блюдо?
            </h2>
            <p className="text-muted-foreground mb-8">
              Мы можем приготовить индивидуальное меню для вашего офиса. 
              Свяжитесь с нами, и мы обсудим ваши пожелания.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать по телефону
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;