import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'Как организовать здоровое питание в офисе: полное руководство',
    excerpt: 'Подробный гид по внедрению системы здорового питания для сотрудников. Рассказываем о преимуществах, способах реализации и экономической выгоде.',
    content: 'Здоровое питание сотрудников — это не просто тренд, а необходимость современного бизнеса...',
    author: 'Анна Петрова',
    authorRole: 'Диетолог',
    date: '15 января 2024',
    readTime: '8 мин',
    image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
    category: 'Здоровье',
    tags: ['питание', 'офис', 'здоровье', 'продуктивность']
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 правил выбора качественных продуктов для корпоративного питания',
      excerpt: 'Критерии отбора поставщиков и продуктов для организации питания в офисе.',
      author: 'Михаил Сидоров',
      authorRole: 'Шеф-повар',
      date: '12 января 2024',
      readTime: '5 мин',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      category: 'Качество',
      tags: ['продукты', 'качество', 'поставщики']
    },
    {
      id: 3,
      title: 'Тренды корпоративного питания 2024: что будет популярно',
      excerpt: 'Анализ современных трендов в сфере корпоративного питания и прогнозы на будущее.',
      author: 'Елена Козлова',
      authorRole: 'Маркетолог',
      date: '10 января 2024',
      readTime: '6 мин',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      category: 'Тренды',
      tags: ['тренды', '2024', 'инновации']
    },
    {
      id: 4,
      title: 'Как рассчитать бюджет на корпоративное питание',
      excerpt: 'Практические советы по планированию и оптимизации расходов на питание сотрудников.',
      author: 'Дмитрий Волков',
      authorRole: 'Финансовый консультант',
      date: '8 января 2024',
      readTime: '7 мин',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      category: 'Финансы',
      tags: ['бюджет', 'планирование', 'экономия']
    },
    {
      id: 5,
      title: 'Сезонное меню: как адаптировать питание под время года',
      excerpt: 'Преимущества сезонного питания и способы внедрения в корпоративное меню.',
      author: 'Ольга Смирнова',
      authorRole: 'Диетолог',
      date: '5 января 2024',
      readTime: '4 мин',
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      category: 'Меню',
      tags: ['сезонность', 'меню', 'продукты']
    },
    {
      id: 6,
      title: 'Безопасность пищевых продуктов: стандарты и контроль качества',
      excerpt: 'Обзор требований к безопасности продуктов и методов контроля качества.',
      author: 'Игорь Петров',
      authorRole: 'Технолог',
      date: '3 января 2024',
      readTime: '9 мин',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      category: 'Безопасность',
      tags: ['безопасность', 'стандарты', 'контроль']
    }
  ];

  const categories = [
    { name: 'Все статьи', count: 25, active: true },
    { name: 'Здоровье', count: 8 },
    { name: 'Качество', count: 6 },
    { name: 'Тренды', count: 4 },
    { name: 'Финансы', count: 3 },
    { name: 'Меню', count: 2 },
    { name: 'Безопасность', count: 2 }
  ];

  const popularTags = [
    'питание', 'офис', 'здоровье', 'качество', 'тренды', 'бюджет', 
    'меню', 'продукты', 'безопасность', 'сотрудники'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Блог о корпоративном питании
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полезные статьи, советы экспертов и последние новости 
              из мира корпоративного питания и здорового образа жизни
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
                      category.active ? 'bg-blue-100 text-blue-700' : 'hover:bg-muted'
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

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-blue-100 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Подписка на новости</CardTitle>
                <CardDescription>
                  Получайте новые статьи на email
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="w-full p-2 border rounded-md text-sm"
                />
                <Button className="w-full" size="sm">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600">Рекомендуем</Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg" />
                    <AvatarFallback>АП</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{featuredPost.author}</div>
                    <div className="text-xs text-muted-foreground">{featuredPost.authorRole}</div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground ml-auto">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  {featuredPost.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <CardTitle className="text-2xl mb-3">{featuredPost.title}</CardTitle>
                <CardDescription className="text-base">
                  {featuredPost.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button asChild>
                  <Link to={`/blog/${featuredPost.id}`}>
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Последние статьи</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-video">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-xs font-medium">{post.author}</div>
                            <div className="text-xs text-muted-foreground">{post.date}</div>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/blog/${post.id}`}>
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
                Загрузить еще статьи
                <Icon name="ChevronDown" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;