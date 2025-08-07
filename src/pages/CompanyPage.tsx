import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CompanyPage = () => {
  const companyInfo = {
    fullName: 'Общество с ограниченной ответственностью "ОфисЕда"',
    shortName: 'ООО "ОфисЕда"',
    inn: '1234567890',
    kpp: '123456789',
    ogrn: '1234567890123',
    address: '123456, г. Москва, ул. Примерная, д. 123, офис 456',
    phone: '+7 (495) 123-45-67',
    email: 'info@офиседа.рф',
    website: 'https://офиседа.рф',
    founded: '2020',
    employees: '150+',
    revenue: 'Более 500 млн ₽'
  };

  const leadership = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      experience: '15 лет в ресторанном бизнесе',
      education: 'МГУ, экономический факультет',
      achievements: ['Лауреат премии "Ресторатор года 2023"', 'Эксперт по корпоративному питанию'],
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Операционный директор',
      experience: '12 лет в логистике и операциях',
      education: 'МГТУ им. Баумана, инженер',
      achievements: ['Внедрил систему качества ISO 22000', 'Оптимизировал логистические процессы'],
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg'
    },
    {
      name: 'Елена Козлова',
      position: 'Финансовый директор',
      experience: '10 лет в финансовом менеджменте',
      education: 'Финансовая академия при Правительстве РФ',
      achievements: ['Привлекла инвестиции на развитие', 'Внедрила управленческий учет'],
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Основание компании',
      description: 'Запуск сервиса доставки обедов в офисы',
      metrics: ['5 клиентов', '1 кухня', '3 сотрудника']
    },
    {
      year: '2021',
      title: 'Первое расширение',
      description: 'Открытие второй кухни и расширение географии',
      metrics: ['50 клиентов', '2 кухни', '25 сотрудников']
    },
    {
      year: '2022',
      title: 'Получение сертификатов',
      description: 'Внедрение системы качества и получение ISO 22000',
      metrics: ['200 клиентов', '3 кухни', '80 сотрудников']
    },
    {
      year: '2023',
      title: 'Технологический прорыв',
      description: 'Запуск мобильного приложения и автоматизация',
      metrics: ['400 клиентов', '4 кухни', '120 сотрудников']
    },
    {
      year: '2024',
      title: 'Лидерство на рынке',
      description: 'Признание лучшим сервисом корпоративного питания',
      metrics: ['500+ клиентов', '5 кухонь', '150+ сотрудников']
    }
  ];

  const departments = [
    {
      name: 'Производство',
      head: 'Дмитрий Соколов',
      employees: 45,
      description: 'Приготовление блюд, контроль качества',
      icon: 'ChefHat'
    },
    {
      name: 'Логистика',
      head: 'Сергей Волков',
      employees: 35,
      description: 'Доставка, управление автопарком',
      icon: 'Truck'
    },
    {
      name: 'Продажи',
      head: 'Ольга Смирнова',
      employees: 20,
      description: 'Работа с клиентами, развитие продаж',
      icon: 'Users'
    },
    {
      name: 'IT и разработка',
      head: 'Алексей Иванов',
      employees: 15,
      description: 'Техническая поддержка, разработка',
      icon: 'Code'
    },
    {
      name: 'Маркетинг',
      head: 'Мария Федорова',
      employees: 12,
      description: 'Реклама, PR, digital-маркетинг',
      icon: 'Megaphone'
    },
    {
      name: 'Администрация',
      head: 'Анна Петрова',
      employees: 23,
      description: 'Управление, HR, финансы, юридические вопросы',
      icon: 'Building2'
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Лучший сервис корпоративного питания',
      organization: 'Ассоциация ресторанного бизнеса',
      description: 'За выдающиеся достижения в сфере корпоративного питания'
    },
    {
      year: '2023',
      title: 'Премия "Качество и безопасность"',
      organization: 'Роспотребнадзор',
      description: 'За соблюдение высочайших стандартов качества'
    },
    {
      year: '2022',
      title: 'Лучший работодатель года',
      organization: 'HeadHunter',
      description: 'За создание комфортных условий труда'
    },
    {
      year: '2022',
      title: 'Инновация года в food-tech',
      organization: 'TechCrunch Russia',
      description: 'За внедрение передовых технологий'
    }
  ];

  const socialResponsibility = [
    {
      program: 'Помощь детским домам',
      description: 'Еженедельные поставки обедов в детские учреждения',
      impact: '500+ детей получают качественное питание',
      icon: 'Heart'
    },
    {
      program: 'Экологические инициативы',
      description: 'Использование биоразлагаемой упаковки и сортировка отходов',
      impact: '80% упаковки - экологичная',
      icon: 'Leaf'
    },
    {
      program: 'Поддержка местных фермеров',
      description: 'Закупка продуктов у местных производителей',
      impact: '60% продуктов от российских поставщиков',
      icon: 'Tractor'
    },
    {
      program: 'Образовательные программы',
      description: 'Лекции о здоровом питании в школах и университетах',
      impact: '2000+ студентов прослушали лекции',
      icon: 'GraduationCap'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                О компании ОфисЕда
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Мы - динамично развивающаяся компания, которая с 2020 года 
                устанавливает новые стандарты в сфере корпоративного питания в России.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600">{companyInfo.founded}</div>
                  <div className="text-sm text-muted-foreground">Год основания</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600">{companyInfo.employees}</div>
                  <div className="text-sm text-muted-foreground">Сотрудников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600">500+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/21268956-79ff-40e0-9934-04976361f00c.jpg"
                alt="Офис ОфисЕда"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Реквизиты компании</CardTitle>
                <CardDescription>
                  Официальная информация для корпоративных клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium text-muted-foreground">Полное наименование:</span>
                      <div className="font-semibold">{companyInfo.fullName}</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">ИНН/КПП:</span>
                      <div className="font-mono">{companyInfo.inn} / {companyInfo.kpp}</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">ОГРН:</span>
                      <div className="font-mono">{companyInfo.ogrn}</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Юридический адрес:</span>
                      <div>{companyInfo.address}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium text-muted-foreground">Телефон:</span>
                      <div className="font-semibold">{companyInfo.phone}</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Email:</span>
                      <div className="font-semibold">{companyInfo.email}</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Веб-сайт:</span>
                      <div className="font-semibold">{companyInfo.website}</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Годовой оборот:</span>
                      <div className="font-semibold text-green-600">{companyInfo.revenue}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Руководство компании
            </h2>
            <p className="text-xl text-muted-foreground">
              Опытная команда профессионалов, которая ведет компанию к успеху
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-slate-600 font-medium mb-3">{leader.position}</p>
                  
                  <div className="space-y-3 text-left">
                    <div>
                      <span className="font-medium text-sm">Опыт:</span>
                      <p className="text-sm text-muted-foreground">{leader.experience}</p>
                    </div>
                    <div>
                      <span className="font-medium text-sm">Образование:</span>
                      <p className="text-sm text-muted-foreground">{leader.education}</p>
                    </div>
                    <div>
                      <span className="font-medium text-sm">Достижения:</span>
                      <ul className="text-sm text-muted-foreground">
                        {leader.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              История развития
            </h2>
            <p className="text-xl text-muted-foreground">
              Путь от стартапа до лидера рынка корпоративного питания
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {milestone.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="secondary">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Структура компании
            </h2>
            <p className="text-xl text-muted-foreground">
              Отделы и подразделения, которые обеспечивают качественный сервис
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={dept.icon as any} size={24} className="text-slate-600" />
                  </div>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Руководитель:</span>
                      <span className="font-medium text-sm">{dept.head}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Сотрудников:</span>
                      <Badge variant="outline" className="text-xs">
                        {dept.employees} чел.
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Награды и достижения
            </h2>
            <p className="text-xl text-muted-foreground">
              Признание профессионального сообщества и государственных органов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-yellow-600" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs mb-1">
                        {award.year}
                      </Badge>
                      <CardTitle className="text-lg">{award.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {award.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Социальная ответственность
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы активно участвуем в социальных и экологических программах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialResponsibility.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={program.icon as any} size={24} className="text-slate-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{program.program}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {program.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-500 to-slate-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Хотите стать частью нашей истории?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к нашей команде или станьте нашим клиентом. 
              Вместе мы создаем будущее корпоративного питания.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Users" size={20} className="mr-2" />
                Работа у нас
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-slate-600">
                <Icon name="Handshake" size={20} className="mr-2" />
                Стать клиентом
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;