import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const VacanciesPage = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Повар-универсал',
      department: 'Кухня',
      location: 'Москва, Центр',
      type: 'Полная занятость',
      salary: '80 000 - 120 000 ₽',
      experience: '3+ года',
      description: 'Ищем опытного повара для работы в нашей центральной кухне. Приготовление блюд европейской и азиатской кухни.',
      requirements: [
        'Опыт работы поваром от 3 лет',
        'Знание технологий приготовления',
        'Умение работать в команде',
        'Ответственность и пунктуальность'
      ],
      responsibilities: [
        'Приготовление блюд согласно технологическим картам',
        'Контроль качества продуктов',
        'Соблюдение санитарных норм',
        'Работа с заявками на производство'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Социальный пакет',
        'Обучение и развитие',
        'Бесплатное питание'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'Курьер-доставщик',
      department: 'Логистика',
      location: 'Москва, разные районы',
      type: 'Полная занятость',
      salary: '60 000 - 90 000 ₽',
      experience: '1+ год',
      description: 'Требуется курьер для доставки готовых обедов в офисы. Работа на личном или корпоративном транспорте.',
      requirements: [
        'Водительские права категории B',
        'Опыт вождения от 1 года',
        'Знание Москвы',
        'Коммуникабельность'
      ],
      responsibilities: [
        'Доставка заказов в офисы',
        'Общение с клиентами',
        'Ведение документооборота',
        'Соблюдение графика доставки'
      ],
      benefits: [
        'Гибкий график работы',
        'Компенсация ГСМ',
        'Премии за качество',
        'Карьерный рост'
      ],
      urgent: false
    },
    {
      id: 3,
      title: 'Менеджер по продажам',
      department: 'Продажи',
      location: 'Москва, офис',
      type: 'Полная занятость',
      salary: '70 000 - 150 000 ₽',
      experience: '2+ года',
      description: 'Ищем активного менеджера для развития корпоративных продаж и работы с крупными клиентами.',
      requirements: [
        'Опыт продаж B2B от 2 лет',
        'Высшее образование',
        'Навыки переговоров',
        'Знание CRM систем'
      ],
      responsibilities: [
        'Поиск и привлечение новых клиентов',
        'Ведение переговоров',
        'Подготовка коммерческих предложений',
        'Сопровождение сделок'
      ],
      benefits: [
        'Высокий доход (оклад + %)',
        'Корпоративная мобильная связь',
        'Обучение продажам',
        'Возможность карьерного роста'
      ],
      urgent: false
    },
    {
      id: 4,
      title: 'Диетолог-консультант',
      department: 'Здоровое питание',
      location: 'Москва, офис/удаленно',
      type: 'Частичная занятость',
      salary: '50 000 - 80 000 ₽',
      experience: '2+ года',
      description: 'Требуется диетолог для разработки здорового меню и консультирования клиентов по вопросам питания.',
      requirements: [
        'Высшее медицинское образование',
        'Сертификат диетолога',
        'Опыт консультирования',
        'Знание принципов здорового питания'
      ],
      responsibilities: [
        'Разработка диетических меню',
        'Консультирование клиентов',
        'Проведение лекций и семинаров',
        'Контроль пищевой ценности блюд'
      ],
      benefits: [
        'Гибкий график работы',
        'Возможность удаленной работы',
        'Профессиональное развитие',
        'Участие в конференциях'
      ],
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда и премии за результат'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Возможности профессионального и карьерного развития'
    },
    {
      icon: 'Heart',
      title: 'Соцпакет',
      description: 'Полный социальный пакет и медицинское страхование'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение',
      description: 'Корпоративное обучение и повышение квалификации'
    },
    {
      icon: 'Coffee',
      title: 'Комфортный офис',
      description: 'Современный офис в центре Москвы с зоной отдыха'
    },
    {
      icon: 'Users',
      title: 'Дружная команда',
      description: 'Молодой и энергичный коллектив единомышленников'
    }
  ];

  const workingProcess = [
    {
      step: 1,
      title: 'Подача резюме',
      description: 'Отправьте резюме через форму или на email',
      icon: 'FileText'
    },
    {
      step: 2,
      title: 'Первичный отбор',
      description: 'HR-специалист изучит ваше резюме',
      icon: 'Search'
    },
    {
      step: 3,
      title: 'Собеседование',
      description: 'Интервью с руководителем отдела',
      icon: 'MessageCircle'
    },
    {
      step: 4,
      title: 'Принятие решения',
      description: 'Обратная связь в течение 3 дней',
      icon: 'CheckCircle'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Работа в ОфисЕда
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к нашей команде профессионалов! 
              Мы предлагаем интересную работу, достойную зарплату и возможности для роста.
            </p>
            <Button size="lg">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить резюме
            </Button>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Открытые вакансии
            </h2>
            <p className="text-xl text-muted-foreground">
              Актуальные предложения для специалистов разного уровня
            </p>
          </div>

          <div className="space-y-8">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-xl">{vacancy.title}</CardTitle>
                        {vacancy.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Срочно
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          <Icon name="Building2" size={12} className="mr-1" />
                          {vacancy.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Icon name="MapPin" size={12} className="mr-1" />
                          {vacancy.location}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {vacancy.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Icon name="Briefcase" size={12} className="mr-1" />
                          {vacancy.experience}
                        </Badge>
                      </div>
                      
                      <div className="text-2xl font-bold text-indigo-600 mb-3">
                        {vacancy.salary}
                      </div>
                      
                      <CardDescription className="text-base">
                        {vacancy.description}
                      </CardDescription>
                    </div>
                    
                    <Button className="ml-4">
                      Откликнуться
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Требования:</h4>
                      <ul className="space-y-1">
                        {vacancy.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={14} className="text-green-600 mt-0.5 shrink-0" />
                            <span className="text-xs">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Обязанности:</h4>
                      <ul className="space-y-1">
                        {vacancy.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="ArrowRight" size={14} className="text-indigo-600 mt-0.5 shrink-0" />
                            <span className="text-xs">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Мы предлагаем:</h4>
                      <ul className="space-y-1">
                        {vacancy.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Star" size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                            <span className="text-xs">{benefit}</span>
                          </li>
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

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Почему стоит работать у нас
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы создаем комфортные условия для работы и развития каждого сотрудника
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Процесс трудоустройства
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой и прозрачный процесс от подачи резюме до выхода на работу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step) => (
              <Card key={step.step} className="text-center relative">
                <CardHeader>
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon name={step.icon as any} size={24} className="text-indigo-600" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Отправить резюме</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Фамилия *</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      placeholder="Ваша фамилия"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded-md"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border rounded-md"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Желаемая позиция</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Выберите позицию</option>
                    {vacancies.map((vacancy) => (
                      <option key={vacancy.id} value={vacancy.title}>
                        {vacancy.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сопроводительное письмо</label>
                  <textarea 
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="Расскажите о себе и своем опыте..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Резюме</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <Icon name="Upload" size={24} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Перетащите файл сюда или нажмите для выбора
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Поддерживаемые форматы: PDF, DOC, DOCX (до 5 МБ)
                    </p>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить резюме
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
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
              Не нашли подходящую вакансию?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Отправьте нам свое резюме, и мы обязательно свяжемся с вами, 
              когда появится подходящая позиция
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                Отправить резюме
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-indigo-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с HR
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacanciesPage;