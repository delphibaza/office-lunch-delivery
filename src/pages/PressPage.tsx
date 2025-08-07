import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const PressPage = () => {
  const pressReleases = [
    {
      id: 1,
      title: 'ОфисЕда привлекла 200 млн рублей инвестиций для развития',
      date: '20 января 2024',
      category: 'Инвестиции',
      excerpt: 'Компания планирует использовать средства для экспансии в регионы и развития технологической платформы.',
      content: 'Сервис доставки корпоративного питания ОфисЕда объявил о привлечении 200 млн рублей в рамках раунда Series B...',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'ОфисЕда запускает программу франчайзинга',
      date: '15 января 2024',
      category: 'Развитие',
      excerpt: 'Компания начинает масштабирование бизнеса через франчайзинговую модель в регионах России.',
      content: 'ОфисЕда объявляет о запуске программы франчайзинга для развития сети в российских регионах...',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Награда "Лучший сервис корпоративного питания 2023"',
      date: '10 января 2024',
      category: 'Награды',
      excerpt: 'ОфисЕда получила престижную награду от Ассоциации ресторанного бизнеса России.',
      content: 'По итогам 2023 года ОфисЕда была признана лучшим сервисом корпоративного питания...',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Партнерство с экофермой "Зеленые поля"',
      date: '5 января 2024',
      category: 'Партнерство',
      excerpt: 'Новое соглашение обеспечит поставки органических продуктов для здорового меню.',
      content: 'ОфисЕда заключила стратегическое партнерство с ведущей экофермой региона...',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      featured: false
    }
  ];

  const mediaKit = [
    {
      title: 'Логотипы компании',
      description: 'Логотипы в различных форматах и цветовых решениях',
      format: 'PNG, SVG, EPS',
      size: '2.5 МБ',
      icon: 'Image'
    },
    {
      title: 'Фотографии продукции',
      description: 'Высококачественные фото блюд и процесса приготовления',
      format: 'JPG, PNG',
      size: '15 МБ',
      icon: 'Camera'
    },
    {
      title: 'Корпоративная презентация',
      description: 'Официальная презентация компании для СМИ',
      format: 'PDF, PPTX',
      size: '8 МБ',
      icon: 'FileText'
    },
    {
      title: 'Видеоматериалы',
      description: 'Корпоративные видео и интервью с руководством',
      format: 'MP4, MOV',
      size: '120 МБ',
      icon: 'Video'
    },
    {
      title: 'Пресс-релизы',
      description: 'Архив всех пресс-релизов компании',
      format: 'PDF, DOC',
      size: '5 МБ',
      icon: 'FileText'
    },
    {
      title: 'Инфографика',
      description: 'Статистика и ключевые показатели в графическом виде',
      format: 'PNG, PDF',
      size: '3 МБ',
      icon: 'BarChart'
    }
  ];

  const mediaContacts = [
    {
      name: 'Мария Федорова',
      position: 'Директор по маркетингу и PR',
      phone: '+7 (495) 123-45-67, доб. 101',
      email: 'press@офиседа.рф',
      telegram: '@maria_fedorova_pr',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      availability: 'Пн-Пт: 9:00-18:00'
    },
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      phone: '+7 (495) 123-45-67, доб. 100',
      email: 'ceo@офиседа.рф',
      telegram: '@anna_petrova_ceo',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      availability: 'По предварительной записи'
    }
  ];

  const mediaAppearances = [
    {
      outlet: 'РБК',
      title: 'Как food-tech меняет корпоративное питание',
      date: '18 января 2024',
      type: 'Интервью',
      link: '#'
    },
    {
      outlet: 'Ведомости',
      title: 'Инвестиции в сферу доставки еды растут',
      date: '12 января 2024',
      type: 'Упоминание',
      link: '#'
    },
    {
      outlet: 'Forbes',
      title: 'Топ-10 стартапов в сфере food-tech',
      date: '8 января 2024',
      type: 'Рейтинг',
      link: '#'
    },
    {
      outlet: 'Коммерсант',
      title: 'Рынок корпоративного питания показывает рост',
      date: '5 января 2024',
      type: 'Экспертное мнение',
      link: '#'
    }
  ];

  const companyFacts = [
    { fact: 'Основана в 2020 году', icon: 'Calendar' },
    { fact: '500+ корпоративных клиентов', icon: 'Building2' },
    { fact: '15 000+ обедов в месяц', icon: 'UtensilsCrossed' },
    { fact: '150+ сотрудников', icon: 'Users' },
    { fact: '5 производственных площадок', icon: 'Factory' },
    { fact: 'Доставка в 50+ районов Москвы', icon: 'MapPin' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Пресс-центр
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Новости компании, пресс-релизы, медиа-материалы и контакты 
              для представителей СМИ и журналистов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="Newspaper" size={14} className="mr-1" />
                Актуальные новости
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Download" size={14} className="mr-1" />
                Медиа-материалы
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Phone" size={14} className="mr-1" />
                Прямые контакты
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Последние пресс-релизы
            </h2>
            <p className="text-xl text-muted-foreground">
              Актуальные новости и объявления компании
            </p>
          </div>

          <div className="space-y-8">
            {/* Featured Press Release */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={pressReleases[0].image}
                    alt={pressReleases[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-indigo-600">Главная новость</Badge>
                    <Badge variant="outline">{pressReleases[0].category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pressReleases[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{pressReleases[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{pressReleases[0].date}</span>
                    <Button>
                      Читать полностью
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Other Press Releases */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.slice(1).map((release) => (
                <Card key={release.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-video">
                    <img 
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {release.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {release.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {release.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {release.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      Читать полностью
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Медиа-материалы
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовые материалы для публикаций и использования в СМИ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Формат:</span>
                    <span className="font-medium">{item.format}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Размер:</span>
                    <span className="font-medium">{item.size}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Контакты для СМИ
            </h2>
            <p className="text-xl text-muted-foreground">
              Представители компании для интервью и комментариев
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mediaContacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={contact.image} />
                      <AvatarFallback>
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{contact.name}</CardTitle>
                      <CardDescription className="text-base">
                        {contact.position}
                      </CardDescription>
                      <Badge variant="outline" className="text-xs mt-1">
                        {contact.availability}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={16} className="text-muted-foreground" />
                      <span className="text-sm">{contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={16} className="text-muted-foreground" />
                      <span className="text-sm">{contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                      <span className="text-sm">{contact.telegram}</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Упоминания в СМИ
            </h2>
            <p className="text-xl text-muted-foreground">
              Публикации о компании в ведущих деловых изданиях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mediaAppearances.map((appearance, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{appearance.outlet}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {appearance.type}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {appearance.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-3">{appearance.title}</h4>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="ExternalLink" size={14} className="mr-2" />
                    Читать статью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Факты о компании
            </h2>
            <p className="text-xl text-muted-foreground">
              Ключевые цифры и достижения для использования в публикациях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyFacts.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={20} className="text-indigo-600" />
                  </div>
                  <p className="font-medium">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Inquiry Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Запрос для СМИ</CardTitle>
                <CardDescription>
                  Оставьте заявку, и мы предоставим необходимую информацию
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя журналиста *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Издание *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Название СМИ"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md"
                      placeholder="your@media.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full p-2 border rounded-md"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Тип запроса</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Выберите тип</option>
                    <option>Интервью с руководством</option>
                    <option>Комментарий эксперта</option>
                    <option>Информация о компании</option>
                    <option>Фото и видео материалы</option>
                    <option>Статистика и данные</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Тема публикации</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="О чем будет материал"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Дедлайн</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Подробности запроса *</label>
                  <textarea 
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="Опишите, какая информация или материалы вам нужны..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить запрос
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Мы ответим на ваш запрос в течение 2 часов в рабочее время
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Нужна дополнительная информация?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наша пресс-служба готова предоставить любую информацию 
              о компании для ваших публикаций
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                press@офиседа.рф
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-indigo-600">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать медиа-кит
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;