import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const SupportPage = () => {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    priority: '',
    subject: '',
    description: ''
  });

  const contactMethods = [
    {
      method: 'Телефон',
      value: '+7 (495) 123-45-67',
      hours: '9:00 - 18:00 (Пн-Пт)',
      responseTime: 'Мгновенно',
      description: 'Для срочных вопросов и экстренных ситуаций',
      icon: 'Phone',
      color: 'bg-green-100 text-green-600'
    },
    {
      method: 'WhatsApp',
      value: '+7 (495) 123-45-67',
      hours: '24/7',
      responseTime: 'До 15 минут',
      description: 'Быстрые ответы в любое время',
      icon: 'MessageCircle',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      method: 'Email',
      value: 'support@офиседа.рф',
      hours: '24/7',
      responseTime: 'До 1 часа',
      description: 'Для подробных вопросов и документов',
      icon: 'Mail',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      method: 'Онлайн-чат',
      value: 'Чат на сайте',
      hours: '9:00 - 20:00',
      responseTime: 'До 5 минут',
      description: 'Быстрая помощь прямо на сайте',
      icon: 'MessageSquare',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const supportCategories = [
    {
      category: 'Заказы',
      description: 'Вопросы по оформлению, изменению и отмене заказов',
      commonIssues: ['Как изменить заказ', 'Отмена заказа', 'Повторный заказ', 'История заказов'],
      icon: 'ShoppingCart'
    },
    {
      category: 'Доставка',
      description: 'Проблемы с доставкой, отслеживание, время доставки',
      commonIssues: ['Где мой заказ', 'Опоздание курьера', 'Изменить адрес', 'Время доставки'],
      icon: 'Truck'
    },
    {
      category: 'Оплата',
      description: 'Вопросы по оплате, возврату средств, счетам',
      commonIssues: ['Проблемы с оплатой', 'Возврат средств', 'Счет для юр.лиц', 'Промокоды'],
      icon: 'CreditCard'
    },
    {
      category: 'Качество',
      description: 'Жалобы на качество блюд, рекламации',
      commonIssues: ['Качество блюда', 'Неполный заказ', 'Температура еды', 'Аллергены'],
      icon: 'Shield'
    },
    {
      category: 'Техническая поддержка',
      description: 'Проблемы с сайтом, приложением, регистрацией',
      commonIssues: ['Не работает сайт', 'Проблемы с входом', 'Мобильное приложение', 'Регистрация'],
      icon: 'Settings'
    },
    {
      category: 'Корпоративные клиенты',
      description: 'Вопросы по корпоративному обслуживанию',
      commonIssues: ['Договор', 'Скидки', 'Персональный менеджер', 'Отчетность'],
      icon: 'Building2'
    }
  ];

  const tickets = [
    {
      id: '#12345',
      subject: 'Опоздание курьера',
      category: 'Доставка',
      status: 'В работе',
      priority: 'Высокий',
      created: '20.01.2024 14:30',
      updated: '20.01.2024 15:15'
    },
    {
      id: '#12344',
      subject: 'Вопрос по корпоративному договору',
      category: 'Корпоративные клиенты',
      status: 'Решен',
      priority: 'Средний',
      created: '19.01.2024 10:20',
      updated: '19.01.2024 16:45'
    },
    {
      id: '#12343',
      subject: 'Проблема с оплатой картой',
      category: 'Оплата',
      status: 'Ожидает ответа',
      priority: 'Низкий',
      created: '18.01.2024 16:10',
      updated: '18.01.2024 16:10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'В работе': return 'bg-yellow-100 text-yellow-800';
      case 'Решен': return 'bg-green-100 text-green-800';
      case 'Ожидает ответа': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Высокий': return 'bg-red-100 text-red-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Низкий': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Служба поддержки
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы готовы помочь вам в любое время. Выберите удобный способ связи 
              или создайте заявку в службу поддержки.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="Clock" size={14} className="mr-1" />
                Ответ в течение часа
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Headphones" size={14} className="mr-1" />
                Профессиональная поддержка
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Heart" size={14} className="mr-1" />
                Индивидуальный подход
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Способы связи</h2>
            <p className="text-xl text-muted-foreground">
              Выберите наиболее удобный для вас способ получения помощи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${method.color}`}>
                    <Icon name={method.icon as any} size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{method.method}</h3>
                  <p className="text-lg font-medium text-indigo-600 mb-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground mb-2">{method.hours}</p>
                  <Badge variant="outline" className="text-xs mb-3">
                    {method.responseTime}
                  </Badge>
                  <p className="text-xs text-muted-foreground mb-4">{method.description}</p>
                  <Button size="sm" className="w-full">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs defaultValue="create-ticket" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create-ticket">Создать заявку</TabsTrigger>
            <TabsTrigger value="my-tickets">Мои заявки</TabsTrigger>
            <TabsTrigger value="categories">Категории помощи</TabsTrigger>
          </TabsList>

          {/* Create Ticket */}
          <TabsContent value="create-ticket">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Создать заявку в поддержку</CardTitle>
                  <CardDescription>
                    Опишите вашу проблему, и мы поможем ее решить
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={ticketForm.name}
                        onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={ticketForm.phone}
                        onChange={(e) => setTicketForm({...ticketForm, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={ticketForm.email}
                      onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Категория *</Label>
                      <Select onValueChange={(value) => setTicketForm({...ticketForm, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="orders">Заказы</SelectItem>
                          <SelectItem value="delivery">Доставка</SelectItem>
                          <SelectItem value="payment">Оплата</SelectItem>
                          <SelectItem value="quality">Качество</SelectItem>
                          <SelectItem value="technical">Техническая поддержка</SelectItem>
                          <SelectItem value="corporate">Корпоративные клиенты</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="priority">Приоритет</Label>
                      <Select onValueChange={(value) => setTicketForm({...ticketForm, priority: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите приоритет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Низкий</SelectItem>
                          <SelectItem value="medium">Средний</SelectItem>
                          <SelectItem value="high">Высокий</SelectItem>
                          <SelectItem value="urgent">Срочный</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Тема обращения *</Label>
                    <Input
                      id="subject"
                      value={ticketForm.subject}
                      onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                      placeholder="Кратко опишите проблему"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Подробное описание *</Label>
                    <Textarea
                      id="description"
                      value={ticketForm.description}
                      onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                      placeholder="Опишите проблему подробно..."
                      rows={5}
                    />
                  </div>

                  <div>
                    <Label>Прикрепить файлы</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center mt-2">
                      <Icon name="Upload" size={24} className="mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Перетащите файлы сюда или нажмите для выбора
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Поддерживаемые форматы: JPG, PNG, PDF (до 10 МБ)
                      </p>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Help */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Быстрая помощь</CardTitle>
                    <CardDescription>
                      Популярные вопросы и быстрые решения
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="MapPin" size={16} className="mr-2" />
                        Отследить заказ
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="RotateCcw" size={16} className="mr-2" />
                        Повторить последний заказ
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="CreditCard" size={16} className="mr-2" />
                        Проблемы с оплатой
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Связаться с курьером
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Экстренная помощь</CardTitle>
                    <CardDescription>
                      Для срочных вопросов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Позвонить сейчас
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        WhatsApp чат
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* My Tickets */}
          <TabsContent value="my-tickets">
            <Card>
              <CardHeader>
                <CardTitle>Мои обращения</CardTitle>
                <CardDescription>
                  История ваших обращений в службу поддержки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold">{ticket.id}</span>
                            <Badge variant="outline" className="text-xs">
                              {ticket.category}
                            </Badge>
                          </div>
                          <h3 className="font-medium">{ticket.subject}</h3>
                        </div>
                        <div className="text-right space-y-1">
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Создано: {ticket.created}</span>
                        <span>Обновлено: {ticket.updated}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Categories */}
          <TabsContent value="categories">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={category.icon as any} size={24} className="text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Частые вопросы:</h4>
                      <ul className="space-y-1">
                        {category.commonIssues.map((issue, issueIndex) => (
                          <li key={issueIndex} className="text-sm text-muted-foreground">
                            • {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Создать заявку
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Knowledge Base */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              База знаний
            </h2>
            <p className="text-xl text-muted-foreground">
              Полезные статьи и инструкции для решения популярных вопросов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-lg">Как сделать заказ</CardTitle>
                <CardDescription>Пошаговая инструкция по оформлению заказа</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать инструкцию
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-lg">Отслеживание доставки</CardTitle>
                <CardDescription>Как узнать статус вашего заказа</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать инструкцию
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-lg">Корпоративные заказы</CardTitle>
                <CardDescription>Особенности работы с юридическими лицами</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать инструкцию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Нужна срочная помощь?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Для экстренных ситуаций и срочных вопросов звоните нам прямо сейчас. 
              Мы работаем для вас каждый день.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-indigo-600">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp чат
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;