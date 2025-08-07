import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const NewsPage = () => {
  const featuredNews = {
    id: 1,
    title: 'ОфисЕда запускает новую линейку здорового питания',
    excerpt: 'Компания представила меню из суперфудов и органических продуктов для поддержания здоровья офисных сотрудников.',
    content: 'В рамках развития направления здорового питания...',
    date: '20 января 2024',
    category: 'Новости компании',
    image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
    tags: ['здоровое питание', 'новинки', 'суперфуды'],
    views: 1250,
    featured: true
  };

  const news = [
    {
      id: 2,
      title: 'Открытие нового производственного цеха в Мытищах',
      excerpt: 'Расширение производственных мощностей позволит увеличить объемы доставки на 40%.',
      date: '18 января 2024',
      category: 'Развитие',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      tags: ['расширение', 'производство'],
      views: 890
    },
    {
      id: 3,
      title: 'Партнерство с экофермой "Зеленые поля"',
      excerpt: 'Новое соглашение обеспечит поставки органических овощей и зелени.',
      date: '15 января 2024',
      category: 'Партнерство',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      tags: ['партнерство', 'органика'],
      views: 650
    },
    {
      id: 4,
      title: 'Награда "Лучший сервис корпоративного питания 2023"',
      excerpt: 'ОфисЕда получила престижную награду от Ассоциации ресторанного бизнеса.',
      date: '12 января 2024',
      category: 'Достижения',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      tags: ['награда', 'признание'],
      views: 1100
    },
    {
      id: 5,
      title: 'Внедрение ИИ для оптимизации логистики',
      excerpt: 'Новая система машинного обучения сократит время доставки на 15%.',
      date: '10 января 2024',
      category: 'Технологии',
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      tags: ['технологии', 'ИИ', 'логистика'],
      views: 780
    },
    {
      id: 6,
      title: 'Запуск программы лояльности для корпоративных клиентов',
      excerpt: 'Новая программа предлагает дополнительные скидки и бонусы.',
      date: '8 января 2024',
      category: 'Программы',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      tags: ['лояльность', 'скидки'],
      views: 920
    },
    {
      id: 7,
      title: 'Участие в выставке "Ресторан & Отель 2024"',
      excerpt: 'Компания представит новые решения для корпоративного питания.',
      date: '5 января 2024',
      category: 'События',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      tags: ['выставка', 'презентация'],
      views: 540
    }
  ];

  const categories = [
    { name: 'Все новости', count: 25, active: true },
    { name: 'Новости компании', count: 8 },
    { name: 'Развитие', count: 5 },
    { name: 'Партнерство', count: 4 },
    { name: 'Достижения', count: 3 },
    { name: 'Технологии', count: 3 },
    { name: 'События', count: 2 }
  ];

  const upcomingEvents = [
    {
      title: 'Дегустация нового меню',
      date: '25 января 2024',
      time: '14:00',
      location: 'Офис ОфисЕда'
    },
    {
      title: 'Вебинар "Здоровое питание в офисе"',
      date: '30 января 2024',
      time: '15:00',
      location: 'Онлайн'
    },
    {
      title: 'Открытие нового филиала',
      date: '5 февраля 2024',
      time: '12:00',
      location: 'Москва, Сокольники'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Новости ОфисЕда
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Следите за последними новостями компании, новинками меню, 
              достижениями и планами развития
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center p-2 rounded cursor-pointer transition-colors ${
                      category.active ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-muted'
                    }`}
                  >
                    <span className="text-sm">{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Предстоящие события</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-2 border-emerald-200 pl-4">
                    <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={12} className="mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={12} className="mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" size={12} className="mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Subscribe */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Подписка на новости</CardTitle>
                <CardDescription>
                  Получайте уведомления о новостях
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="w-full p-2 border rounded-md text-sm"
                />
                <Button className="w-full" size="sm">
                  <Icon name="Bell" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured News */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600">Главная новость</Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white text-sm">
                  <Icon name="Eye" size={14} />
                  <span>{featuredNews.views}</span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{featuredNews.category}</Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {featuredNews.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {featuredNews.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <CardTitle className="text-2xl mb-3">{featuredNews.title}</CardTitle>
                <CardDescription className="text-base">
                  {featuredNews.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button asChild>
                  <Link to={`/news/${featuredNews.id}`}>
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* News Grid */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Последние новости</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {news.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-video relative">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 flex items-center space-x-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        <Icon name="Eye" size={12} />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2">
                        {item.title}
                      </CardTitle>
                      
                      <CardDescription className="line-clamp-3">
                        {item.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/news/${item.id}`}>
                            <Icon name="ArrowRight" size={14} />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Загрузить еще новости
                <Icon name="ChevronDown" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Не пропускайте важные новости
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Подпишитесь на нашу рассылку и получайте уведомления 
              о новинках, акциях и важных событиях компании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 p-3 rounded-md text-gray-900"
              />
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;