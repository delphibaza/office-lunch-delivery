import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Ежедневно с 8:00 до 20:00',
      action: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@офиседа.рф',
      description: 'Ответим в течение часа',
      action: 'mailto:info@офиседа.рф'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+7 (495) 123-45-67',
      description: 'Быстрые ответы 24/7',
      action: 'https://wa.me/74951234567'
    },
    {
      icon: 'MapPin',
      title: 'Офис',
      value: 'Москва, ул. Примерная, 123',
      description: 'Пн-Пт: 9:00-18:00',
      action: ''
    }
  ];

  const offices = [
    {
      title: 'Главный офис',
      address: 'Москва, ул. Примерная, 123, офис 456',
      phone: '+7 (495) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
      description: 'Административный центр, встречи с клиентами'
    },
    {
      title: 'Производство №1',
      address: 'Москва, Промышленная зона Сокольники',
      phone: '+7 (495) 123-45-68',
      hours: 'Пн-Пт: 6:00-18:00',
      description: 'Основная кухня, приготовление и упаковка'
    },
    {
      title: 'Производство №2',
      address: 'МО, г. Мытищи, ул. Заводская, 15',
      phone: '+7 (495) 123-45-69',
      hours: 'Пн-Пт: 6:00-18:00',
      description: 'Дополнительные мощности для крупных заказов'
    }
  ];

  const faq = [
    {
      question: 'Какой минимальный заказ?',
      answer: 'Минимальный заказ составляет 5 порций. Для корпоративных клиентов действуют специальные условия.'
    },
    {
      question: 'До скольки можно оформить заказ?',
      answer: 'Заказы принимаются до 15:00 текущего дня. Срочные заказы возможны за дополнительную плату.'
    },
    {
      question: 'Есть ли доставка в выходные?',
      answer: 'Да, мы работаем в субботу с 10:00 до 16:00. Воскресенье - выходной день.'
    },
    {
      question: 'Можно ли изменить заказ?',
      answer: 'Изменения в заказ можно внести до 12:00 дня доставки. После этого изменения невозможны.'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Готовы ответить на все вопросы и помочь организовать питание в вашем офисе. 
              Выберите удобный способ связи.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <p className="text-lg font-medium mb-1">{contact.value}</p>
                  <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                  {contact.action && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={contact.action}>
                        Связаться
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+7 (999) 123-45-67"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Название компании</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="ООО Ваша компания"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Интересующая услуга</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Корпоративное питание</SelectItem>
                          <SelectItem value="business">Бизнес-ланчи</SelectItem>
                          <SelectItem value="catering">Кейтеринг</SelectItem>
                          <SelectItem value="healthy">Здоровое питание</SelectItem>
                          <SelectItem value="breakfast">Завтраки</SelectItem>
                          <SelectItem value="vip">VIP обслуживание</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Расскажите о ваших потребностях..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Наши офисы</h2>
              
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{office.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Icon name="MapPin" size={16} className="text-muted-foreground mt-1 shrink-0" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={16} className="text-muted-foreground shrink-0" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground shrink-0" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {office.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faq.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Не нашли ответ на свой вопрос?
              </p>
              <Button>
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-20">
            <Card>
              <CardHeader>
                <CardTitle>Как нас найти</CardTitle>
                <CardDescription>
                  Главный офис в центре Москвы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Интерактивная карта</h3>
                    <p className="text-muted-foreground">
                      Москва, ул. Примерная, 123
                    </p>
                    <Button className="mt-4" variant="outline">
                      <Icon name="Navigation" size={16} className="mr-2" />
                      Построить маршрут
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;