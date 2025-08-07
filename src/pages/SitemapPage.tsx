import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SitemapPage = () => {
  const siteStructure = [
    {
      section: 'Основные страницы',
      icon: 'Home',
      pages: [
        { name: 'Главная', path: '/', description: 'Основная страница сайта' },
        { name: 'Меню', path: '/menu', description: 'Каталог блюд и напитков' },
        { name: 'Услуги', path: '/services', description: 'Все виды услуг компании' },
        { name: 'О нас', path: '/about', description: 'История и команда компании' },
        { name: 'Контакты', path: '/contacts', description: 'Контактная информация' }
      ]
    },
    {
      section: 'Заказы и доставка',
      icon: 'ShoppingCart',
      pages: [
        { name: 'Оформление заказа', path: '/order', description: 'Корзина и оформление заказа' },
        { name: 'Отслеживание', path: '/tracking', description: 'Отслеживание статуса заказа' },
        { name: 'Доставка и оплата', path: '/delivery', description: 'Условия доставки и оплаты' },
        { name: 'Локации', path: '/locations', description: 'Офисы и зоны доставки' }
      ]
    },
    {
      section: 'Корпоративным клиентам',
      icon: 'Building2',
      pages: [
        { name: 'Корпоративное питание', path: '/corporate', description: 'Услуги для компаний' },
        { name: 'Кейтеринг', path: '/catering', description: 'Обслуживание мероприятий' },
        { name: 'Калькулятор стоимости', path: '/calculator', description: 'Расчет стоимости услуг' }
      ]
    },
    {
      section: 'Здоровое питание',
      icon: 'Heart',
      pages: [
        { name: 'Здоровое меню', path: '/healthy', description: 'Диетические и ПП блюда' },
        { name: 'Питание и здоровье', path: '/nutrition', description: 'Информация о правильном питании' },
        { name: 'Рецепты', path: '/recipes', description: 'Рецепты от наших поваров' }
      ]
    },
    {
      section: 'Информация и поддержка',
      icon: 'HelpCircle',
      pages: [
        { name: 'FAQ', path: '/faq', description: 'Часто задаваемые вопросы' },
        { name: 'Поддержка', path: '/support', description: 'Служба технической поддержки' },
        { name: 'Отзывы', path: '/reviews', description: 'Отзывы клиентов' }
      ]
    },
    {
      section: 'Компания',
      icon: 'Users',
      pages: [
        { name: 'О компании', path: '/company', description: 'Подробная информация о компании' },
        { name: 'Вакансии', path: '/vacancies', description: 'Открытые вакансии' },
        { name: 'Партнерам', path: '/partners', description: 'Информация для партнеров' },
        { name: 'Франшиза', path: '/franchise', description: 'Франчайзинговые возможности' }
      ]
    },
    {
      section: 'Новости и медиа',
      icon: 'Newspaper',
      pages: [
        { name: 'Новости', path: '/news', description: 'Новости компании' },
        { name: 'Блог', path: '/blog', description: 'Статьи о питании и бизнесе' },
        { name: 'Пресс-центр', path: '/press', description: 'Материалы для СМИ' },
        { name: 'Галерея', path: '/gallery', description: 'Фотографии блюд и процессов' }
      ]
    },
    {
      section: 'Акции и программы',
      icon: 'Gift',
      pages: [
        { name: 'Акции и скидки', path: '/promotions', description: 'Текущие акции и предложения' },
        { name: 'Сертификаты', path: '/certificates', description: 'Лицензии и сертификаты качества' }
      ]
    },
    {
      section: 'Инвесторам',
      icon: 'TrendingUp',
      pages: [
        { name: 'Инвесторам', path: '/investors', description: 'Информация для инвесторов' }
      ]
    },
    {
      section: 'Правовая информация',
      icon: 'Scale',
      pages: [
        { name: 'Политика конфиденциальности', path: '/privacy', description: 'Обработка персональных данных' },
        { name: 'Условия использования', path: '/terms', description: 'Правила использования сайта' },
        { name: 'Карта сайта', path: '/sitemap', description: 'Структура сайта' }
      ]
    }
  ];

  const siteStats = [
    { label: 'Всего страниц', value: '23', icon: 'FileText' },
    { label: 'Основных разделов', value: '10', icon: 'Folder' },
    { label: 'Языков', value: '1', icon: 'Globe' },
    { label: 'Последнее обновление', value: 'Сегодня', icon: 'RefreshCw' }
  ];

  const technicalInfo = [
    {
      parameter: 'Технология',
      value: 'React + TypeScript',
      description: 'Современный фронтенд фреймворк'
    },
    {
      parameter: 'Адаптивность',
      value: 'Полностью адаптивный',
      description: 'Оптимизирован для всех устройств'
    },
    {
      parameter: 'SEO',
      value: 'Оптимизирован',
      description: 'Мета-теги, структурированные данные'
    },
    {
      parameter: 'Скорость загрузки',
      value: '< 3 секунд',
      description: 'Оптимизированные изображения и код'
    },
    {
      parameter: 'Доступность',
      value: 'WCAG 2.1 AA',
      description: 'Соответствие стандартам доступности'
    },
    {
      parameter: 'Безопасность',
      value: 'HTTPS, CSP',
      description: 'Защищенное соединение и политики безопасности'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Карта сайта
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полная структура сайта ОфисЕда. Найдите нужную страницу 
              или раздел быстро и удобно.
            </p>
          </div>
        </div>
      </section>

      {/* Site Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {siteStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={20} className="text-gray-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-600 mb-2">
                    {stat.value}
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

      {/* Site Structure */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon name={section.icon as any} size={20} className="text-gray-600" />
                      </div>
                      <CardTitle className="text-xl">{section.section}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {section.pages.length} страниц
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.pages.map((page, pageIndex) => (
                        <Link
                          key={pageIndex}
                          to={page.path}
                          className="block p-4 border rounded-lg hover:shadow-md hover:border-gray-300 transition-all group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium group-hover:text-gray-600">
                              {page.name}
                            </h4>
                            <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-gray-600" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {page.description}
                          </p>
                          <div className="text-xs text-muted-foreground mt-2 font-mono">
                            {page.path}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Техническая информация
            </h2>
            <p className="text-xl text-muted-foreground">
              Технические характеристики и особенности сайта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {technicalInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{info.parameter}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {info.value}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              XML Карта сайта
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Техническая карта сайта для поисковых систем и веб-мастеров
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Icon name="FileCode" size={48} className="text-gray-600" />
                    <div className="text-left">
                      <h3 className="font-semibold">sitemap.xml</h3>
                      <p className="text-sm text-muted-foreground">
                        Структурированная карта всех страниц сайта
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg text-left">
                    <code className="text-sm text-gray-700">
                      https://офиседа.рф/sitemap.xml
                    </code>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Последнее обновление:</span>
                      <div className="text-muted-foreground">Ежедневно в 00:00</div>
                    </div>
                    <div>
                      <span className="font-medium">Формат:</span>
                      <div className="text-muted-foreground">XML Sitemap Protocol</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 p-2 border rounded-md hover:bg-muted transition-colors">
                      <Icon name="Download" size={16} className="mx-auto mb-1" />
                      <div className="text-xs">Скачать XML</div>
                    </button>
                    <button className="flex-1 p-2 border rounded-md hover:bg-muted transition-colors">
                      <Icon name="ExternalLink" size={16} className="mx-auto mb-1" />
                      <div className="text-xs">Открыть в браузере</div>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Поиск по сайту
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Не можете найти нужную страницу? Воспользуйтесь поиском
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="relative">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Поиск по сайту..."
                      className="w-full pl-10 pr-4 py-3 border rounded-md"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
                      меню
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
                      доставка
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
                      корпоративное питание
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
                      здоровое питание
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
                      отзывы
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-500 to-gray-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Не нашли нужную информацию?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами, и мы поможем найти ответ на любой вопрос 
              о наших услугах и компании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                <Icon name="Phone" size={20} className="mr-2 inline" />
                +7 (495) 123-45-67
              </button>
              <button className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-gray-600 transition-colors">
                <Icon name="Mail" size={20} className="mr-2 inline" />
                info@офиседа.рф
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;