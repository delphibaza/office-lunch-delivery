import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CertificatesPage = () => {
  const certificates = [
    {
      id: 1,
      title: 'ISO 22000:2018',
      description: 'Система менеджмента безопасности пищевых продуктов',
      issuer: 'Международная организация по стандартизации',
      validUntil: '15.12.2025',
      number: 'ISO-22000-2024-001',
      category: 'Качество',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      status: 'Действующий'
    },
    {
      id: 2,
      title: 'HACCP',
      description: 'Анализ рисков и критические контрольные точки',
      issuer: 'Роспотребнадзор',
      validUntil: '20.11.2025',
      number: 'HACCP-2024-007',
      category: 'Безопасность',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      status: 'Действующий'
    },
    {
      id: 3,
      title: 'Санитарно-эпидемиологическое заключение',
      description: 'Соответствие санитарным нормам и правилам',
      issuer: 'Роспотребнадзор г. Москвы',
      validUntil: '10.08.2025',
      number: 'СЭЗ-77.01.16.000.М.000123.08.24',
      category: 'Санитария',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      status: 'Действующий'
    },
    {
      id: 4,
      title: 'Декларация соответствия ТР ТС',
      description: 'Соответствие техническим регламентам Таможенного союза',
      issuer: 'Росстандарт',
      validUntil: '05.06.2026',
      number: 'ТС-RU-Д-RU.АГ98.В.00123',
      category: 'Стандарты',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      status: 'Действующий'
    },
    {
      id: 5,
      title: 'Лицензия на розничную торговлю',
      description: 'Право осуществления торговой деятельности',
      issuer: 'Департамент торговли г. Москвы',
      validUntil: 'Бессрочно',
      number: 'ЛТ-77-000123',
      category: 'Лицензии',
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      status: 'Действующий'
    },
    {
      id: 6,
      title: 'Сертификат системы менеджмента качества',
      description: 'ISO 9001:2015 - Система менеджмента качества',
      issuer: 'Ростест-Москва',
      validUntil: '12.03.2026',
      number: 'СМК-9001-2024-045',
      category: 'Качество',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      status: 'Действующий'
    }
  ];

  const categories = [
    { name: 'Все сертификаты', count: certificates.length, id: 'all' },
    { name: 'Качество', count: 2, id: 'quality' },
    { name: 'Безопасность', count: 1, id: 'safety' },
    { name: 'Санитария', count: 1, id: 'sanitary' },
    { name: 'Стандарты', count: 1, id: 'standards' },
    { name: 'Лицензии', count: 1, id: 'licenses' }
  ];

  const qualityStandards = [
    {
      standard: 'ISO 22000',
      description: 'Международный стандарт безопасности пищевых продуктов',
      icon: 'Shield'
    },
    {
      standard: 'HACCP',
      description: 'Система анализа рисков и критических контрольных точек',
      icon: 'Search'
    },
    {
      standard: 'ISO 9001',
      description: 'Система менеджмента качества',
      icon: 'Award'
    },
    {
      standard: 'ТР ТС',
      description: 'Технические регламенты Таможенного союза',
      icon: 'CheckCircle'
    }
  ];

  const controlPoints = [
    {
      point: 'Входной контроль сырья',
      description: 'Проверка качества всех поступающих продуктов',
      frequency: 'При каждой поставке'
    },
    {
      point: 'Контроль процесса приготовления',
      description: 'Мониторинг температурных режимов и времени готовки',
      frequency: 'Постоянно'
    },
    {
      point: 'Контроль готовой продукции',
      description: 'Проверка качества готовых блюд перед упаковкой',
      frequency: 'Каждая партия'
    },
    {
      point: 'Контроль условий хранения',
      description: 'Мониторинг температуры и влажности в складских помещениях',
      frequency: '24/7'
    },
    {
      point: 'Контроль доставки',
      description: 'Соблюдение холодовой цепи при транспортировке',
      frequency: 'Каждая доставка'
    },
    {
      point: 'Микробиологический контроль',
      description: 'Лабораторные исследования продукции',
      frequency: 'Еженедельно'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Сертификаты и лицензии
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы работаем в полном соответствии с российскими и международными стандартами качества. 
              Все наши процессы сертифицированы и регулярно проверяются.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Icon name="Shield" size={14} className="mr-1" />
                ISO 22000 сертифицирован
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="CheckCircle" size={14} className="mr-1" />
                HACCP внедрен
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Icon name="Award" size={14} className="mr-1" />
                Роспотребнадзор одобрен
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Стандарты качества</h2>
            <p className="text-xl text-muted-foreground">
              Международные и российские стандарты, которым мы следуем
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={standard.icon as any} size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-700">{standard.standard}</h3>
                  <p className="text-sm text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наши сертификаты
            </h2>
            <p className="text-xl text-muted-foreground">
              Документы, подтверждающие соответствие нашей деятельности установленным требованиям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-all">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant={cert.status === 'Действующий' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="text-xs bg-white/90">
                      {cert.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Выдан:</span>
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Номер:</span>
                      <span className="font-mono text-xs">{cert.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Действует до:</span>
                      <span className="font-medium text-green-600">{cert.validUntil}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" size="sm">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать копию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Control Points */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Контрольные точки качества
            </h2>
            <p className="text-xl text-muted-foreground">
              Система контроля качества на всех этапах производства и доставки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {controlPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{point.point}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {point.frequency}
                    </Badge>
                  </div>
                  <CardDescription>{point.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                  <Icon name="Scale" size={24} className="text-green-600" />
                  <span>Соответствие законодательству</span>
                </CardTitle>
                <CardDescription>
                  Наша деятельность полностью соответствует требованиям российского законодательства
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Федеральные законы:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• ФЗ-29 "О качестве и безопасности пищевых продуктов"</li>
                      <li>• ФЗ-52 "О санитарно-эпидемиологическом благополучии населения"</li>
                      <li>• ФЗ-2300-1 "О защите прав потребителей"</li>
                      <li>• ФЗ-381 "Об основах государственного регулирования торговой деятельности"</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Технические регламенты:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• ТР ТС 021/2011 "О безопасности пищевой продукции"</li>
                      <li>• ТР ТС 022/2011 "Пищевая продукция в части ее маркировки"</li>
                      <li>• ТР ТС 029/2012 "Требования безопасности пищевых добавок"</li>
                      <li>• СанПиН 2.3/2.4.3590-20 "Санитарно-эпидемиологические требования"</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-green-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">
                        Гарантия соответствия
                      </h4>
                      <p className="text-green-700 text-sm">
                        Мы гарантируем, что вся наша деятельность осуществляется в строгом 
                        соответствии с действующим законодательством Российской Федерации. 
                        Все сертификаты и лицензии регулярно обновляются и проходят проверку 
                        контролирующими органами.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Проверка подлинности сертификатов
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Вы можете самостоятельно проверить подлинность наших сертификатов 
              на официальных сайтах выдавших их организаций
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Номер сертификата</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-md"
                      placeholder="Введите номер сертификата для проверки"
                    />
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="Search" size={16} className="mr-2" />
                    Проверить подлинность
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-sm text-muted-foreground">
              <p>
                Для проверки сертификатов ISO посетите: 
                <a href="#" className="text-blue-600 hover:underline ml-1">iso.org/certification</a>
              </p>
              <p className="mt-1">
                Для проверки российских сертификатов: 
                <a href="#" className="text-blue-600 hover:underline ml-1">fsa.gov.ru</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Вопросы о качестве и сертификации?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наш отдел качества готов предоставить дополнительную информацию 
              о наших стандартах и сертификатах
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                quality@офиседа.рф
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-green-600">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать все сертификаты
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificatesPage;