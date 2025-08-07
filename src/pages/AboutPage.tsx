import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Довольных компаний', icon: 'Building2' },
    { number: '15000+', label: 'Обедов в месяц', icon: 'UtensilsCrossed' },
    { number: '4.9', label: 'Рейтинг сервиса', icon: 'Star' },
    { number: '4', label: 'Года работы', icon: 'Calendar' }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Основатель и CEO',
      description: 'Более 10 лет в ресторанном бизнесе, выпускница Кулинарной академии',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      position: 'Шеф-повар',
      description: 'Мастер европейской кухни, опыт работы в ресторанах Мишлен',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg'
    },
    {
      name: 'Елена Кузнецова',
      position: 'Директор по качеству',
      description: 'Эксперт по пищевой безопасности, сертифицированный технолог',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg'
    }
  ];

  const values = [
    {
      icon: 'Heart',
      title: 'Забота о здоровье',
      description: 'Мы используем только свежие продукты и заботимся о сбалансированности каждого блюда'
    },
    {
      icon: 'Users',
      title: 'Клиентоориентированность',
      description: 'Каждый клиент для нас важен. Мы всегда готовы найти индивидуальное решение'
    },
    {
      icon: 'Award',
      title: 'Качество превыше всего',
      description: 'Строгий контроль качества на всех этапах - от закупки до доставки'
    },
    {
      icon: 'Clock',
      title: 'Надежность',
      description: 'Точное соблюдение сроков доставки и обязательств перед клиентами'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Основание компании',
      description: 'Начали с небольшой кухни и 5 клиентов в районе Сокольники'
    },
    {
      year: '2021',
      title: 'Расширение географии',
      description: 'Запустили доставку по всему ЦАО, открыли вторую производственную площадку'
    },
    {
      year: '2022',
      title: 'Новые услуги',
      description: 'Добавили кейтеринг и диетическое меню, получили ISO сертификацию'
    },
    {
      year: '2023',
      title: 'Автоматизация',
      description: 'Внедрили мобильное приложение и систему автоматических заказов'
    },
    {
      year: '2024',
      title: 'Лидерство на рынке',
      description: 'Стали №1 по корпоративному питанию в Москве среди компаний нашего сегмента'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                О компании ОфисЕда
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Мы создали сервис корпоративного питания, который заботится не только 
                о вкусе, но и о здоровье, удобстве и времени наших клиентов. 
                За 4 года работы мы стали надежным партнером для сотен компаний.
              </p>
              <Button size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть видео о нас
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg"
                alt="Наша команда"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={20} className="text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе каждый день
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={value.icon as any} size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессионалы, которые создают вкус вашего успеха
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              История развития
            </h2>
            <p className="text-xl text-muted-foreground">
              Путь от стартапа до лидера рынка
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden md:block"></div>
              
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div key={index} className="relative flex items-start md:items-center">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center border-4 border-orange-200 relative z-10">
                      <span className="font-bold text-orange-600">{event.year}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 md:ml-8">
                      <Card className="max-w-md">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Наша миссия
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-orange-600">
                  Что мы делаем
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы создаем экосистему корпоративного питания, которая делает рабочий день 
                  сотрудников более комфортным и продуктивным. Каждое блюдо готовится с заботой 
                  о здоровье и вкусовых предпочтениях наших клиентов.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-orange-600">
                  Куда мы стремимся
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Наша цель - стать №1 сервисом корпоративного питания в России, 
                  устанавливая новые стандарты качества, скорости и клиентского сервиса. 
                  Мы хотим, чтобы каждый сотрудник получал удовольствие от рабочего обеда.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Станьте частью нашей истории
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к сотням компаний, которые уже доверили 
              питание своих сотрудников команде ОфисЕда
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <Icon name="Calendar" size={20} className="mr-2" />
                Запланировать встречу
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;