import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ReviewsPage = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    company: '',
    rating: 5,
    text: ''
  });

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      company: 'ООО "ТехноСофт"',
      rating: 5,
      date: '15 января 2024',
      text: 'Отличный сервис! Заказываем обеды уже полгода. Всегда свежие и вкусные блюда, доставка точно в срок.',
      avatar: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      company: 'Банк "Развитие"',
      rating: 5,
      date: '12 января 2024',
      text: 'Очень довольны качеством! Большой выбор блюд, адекватные цены. Рекомендуем всем коллегам.',
      avatar: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg'
    },
    {
      id: 3,
      name: 'Елена Козлова',
      company: 'Дизайн-студия "Креатив"',
      rating: 4,
      date: '10 января 2024',
      text: 'Хорошее соотношение цена-качество. Иногда бывают задержки с доставкой, но в целом все отлично.',
      avatar: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg'
    }
  ];

  const stats = [
    { label: 'Средняя оценка', value: '4.8', icon: 'Star' },
    { label: 'Всего отзывов', value: '247', icon: 'MessageSquare' },
    { label: 'Довольных клиентов', value: '94%', icon: 'ThumbsUp' },
    { label: 'Повторных заказов', value: '87%', icon: 'Repeat' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Отзывы наших клиентов
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Узнайте, что говорят о нас компании, которые уже пользуются нашими услугами
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={20} className="text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reviews List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Последние отзывы</h2>
              
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} />
                        <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{review.name}</h3>
                            <p className="text-sm text-muted-foreground">{review.company}</p>
                          </div>
                          <Badge variant="outline">{review.date}</Badge>
                        </div>
                        <div className="flex items-center mt-2">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Review Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                  <CardDescription>
                    Поделитесь своим опытом работы с нами
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        value={newReview.company}
                        onChange={(e) => setNewReview({...newReview, company: e.target.value})}
                        placeholder="Название компании"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Оценка *</Label>
                    <div className="flex items-center space-x-1 mt-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setNewReview({...newReview, rating: i + 1})}
                          className="p-1"
                        >
                          <Icon
                            name="Star"
                            size={24}
                            className={i < newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="text">Отзыв *</Label>
                    <Textarea
                      id="text"
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      placeholder="Расскажите о вашем опыте..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить отзыв
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;