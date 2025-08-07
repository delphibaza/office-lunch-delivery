import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const InvestorsPage = () => {
  const financialHighlights = [
    {
      metric: 'Выручка 2023',
      value: '520 млн ₽',
      growth: '+45%',
      description: 'К уровню 2022 года',
      icon: 'TrendingUp'
    },
    {
      metric: 'EBITDA',
      value: '78 млн ₽',
      growth: '+52%',
      description: 'Рентабельность 15%',
      icon: 'DollarSign'
    },
    {
      metric: 'Количество клиентов',
      value: '500+',
      growth: '+67%',
      description: 'Активных корпоративных клиентов',
      icon: 'Users'
    },
    {
      metric: 'Заказов в месяц',
      value: '15 000+',
      growth: '+38%',
      description: 'Средний чек 850 ₽',
      icon: 'ShoppingCart'
    }
  ];

  const investmentRounds = [
    {
      round: 'Pre-seed',
      year: '2020',
      amount: '5 млн ₽',
      investors: ['Основатели', 'Бизнес-ангелы'],
      valuation: '25 млн ₽',
      purpose: 'Запуск MVP и первые клиенты'
    },
    {
      round: 'Seed',
      year: '2021',
      amount: '25 млн ₽',
      investors: ['Runa Capital', 'Частные инвесторы'],
      valuation: '100 млн ₽',
      purpose: 'Расширение производства и географии'
    },
    {
      round: 'Series A',
      year: '2022',
      amount: '80 млн ₽',
      investors: ['Sberbank CIB', 'VEB Ventures'],
      valuation: '400 млн ₽',
      purpose: 'Технологическое развитие и автоматизация'
    },
    {
      round: 'Series B',
      year: '2024',
      amount: '200 млн ₽',
      investors: ['Mail.ru Group', 'Yandex Ventures'],
      valuation: '1.2 млрд ₽',
      purpose: 'Экспансия в регионы и новые продукты'
    }
  ];

  const marketData = [
    {
      title: 'Размер рынка',
      value: '150 млрд ₽',
      description: 'Рынок корпоративного питания в России',
      trend: 'Рост 12% в год'
    },
    {
      title: 'Наша доля',
      value: '2.3%',
      description: 'Доля в московском сегменте',
      trend: 'Цель: 5% к 2025'
    },
    {
      title: 'Конкуренты',
      value: '15+',
      description: 'Основных игроков на рынке',
      trend: 'Мы в топ-3'
    },
    {
      title: 'Потенциал',
      value: '500%',
      description: 'Возможность роста рынка',
      trend: 'До 2030 года'
    }
  ];

  const businessModel = [
    {
      stream: 'B2B продажи',
      share: '75%',
      description: 'Корпоративные клиенты, долгосрочные контракты',
      margin: '25%',
      growth: '+40% год к году'
    },
    {
      stream: 'Кейтеринг',
      share: '15%',
      description: 'Обслуживание мероприятий и событий',
      margin: '35%',
      growth: '+60% год к году'
    },
    {
      stream: 'B2C доставка',
      share: '10%',
      description: 'Индивидуальные заказы через приложение',
      margin: '15%',
      growth: '+80% год к году'
    }
  ];

  const keyMetrics = [
    { metric: 'LTV/CAC', value: '4.2x', benchmark: '>3x' },
    { metric: 'Churn Rate', value: '8%', benchmark: '<10%' },
    { metric: 'Gross Margin', value: '45%', benchmark: '>40%' },
    { metric: 'Monthly Growth', value: '12%', benchmark: '>10%' }
  ];

  const riskFactors = [
    {
      risk: 'Конкуренция',
      level: 'Средний',
      mitigation: 'Уникальное позиционирование и качество сервиса',
      icon: 'Users'
    },
    {
      risk: 'Регулирование',
      level: 'Низкий',
      mitigation: 'Полное соответствие всем требованиям',
      icon: 'Shield'
    },
    {
      risk: 'Экономические факторы',
      level: 'Средний',
      mitigation: 'Диверсификация клиентской базы',
      icon: 'TrendingDown'
    },
    {
      risk: 'Операционные риски',
      level: 'Низкий',
      mitigation: 'Резервные мощности и поставщики',
      icon: 'Settings'
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Низкий': return 'text-green-600 bg-green-100';
      case 'Средний': return 'text-yellow-600 bg-yellow-100';
      case 'Высокий': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Инвесторам
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ОфисЕда - быстрорастущая компания в сфере food-tech с доказанной бизнес-моделью 
              и амбициозными планами развития. Присоединяйтесь к нашему успеху.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать презентацию
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Запланировать встречу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Финансовые показатели
            </h2>
            <p className="text-xl text-muted-foreground">
              Ключевые метрики, демонстрирующие устойчивый рост компании
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={highlight.icon as any} size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    {highlight.metric}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {highlight.value}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {highlight.growth}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Rounds */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              История инвестиций
            </h2>
            <p className="text-xl text-muted-foreground">
              Раунды финансирования и развитие компании
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {investmentRounds.map((round, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{round.round}</CardTitle>
                      <CardDescription>{round.year}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{round.amount}</div>
                      <div className="text-sm text-muted-foreground">Оценка: {round.valuation}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Инвесторы:</h4>
                      <div className="flex flex-wrap gap-1">
                        {round.investors.map((investor, invIndex) => (
                          <Badge key={invIndex} variant="outline" className="text-xs">
                            {investor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Цель привлечения:</h4>
                      <p className="text-sm text-muted-foreground">{round.purpose}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Анализ рынка
            </h2>
            <p className="text-xl text-muted-foreground">
              Позиция компании на рынке корпоративного питания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{data.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {data.value}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {data.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {data.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Биз нес-модель
            </h2>
            <p className="text-xl text-muted-foreground">
              Диверсифицированные источники дохода с высокой маржинальностью
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {businessModel.map((stream, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{stream.stream}</CardTitle>
                    <Badge className="text-lg font-bold">
                      {stream.share}
                    </Badge>
                  </div>
                  <CardDescription>{stream.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Маржинальность:</span>
                    <span className="font-semibold text-green-600">{stream.margin}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Рост:</span>
                    <span className="font-semibold text-blue-600">{stream.growth}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ключевые метрики
            </h2>
            <p className="text-xl text-muted-foreground">
              Показатели эффективности бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{metric.metric}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Бенчмарк: {metric.benchmark}
                  </div>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      Выше среднего
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Факторы риска
            </h2>
            <p className="text-xl text-muted-foreground">
              Анализ рисков и способы их минимизации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {riskFactors.map((risk, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon name={risk.icon as any} size={20} className="text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{risk.risk}</CardTitle>
                      <Badge className={getRiskColor(risk.level)}>
                        {risk.level} риск
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Способы минимизации:</h4>
                    <p className="text-sm text-muted-foreground">{risk.mitigation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-700">
                  Инвестиционная возможность
                </CardTitle>
                <CardDescription className="text-lg">
                  Открыт раунд Series C для масштабирования бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Цели привлечения:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Icon name="Target" size={16} className="text-blue-600" />
                        <span className="text-sm">Экспансия в 15 городов России</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Zap" size={16} className="text-blue-600" />
                        <span className="text-sm">Автоматизация производства</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Smartphone" size={16} className="text-blue-600" />
                        <span className="text-sm">Развитие IT-платформы</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Users" size={16} className="text-blue-600" />
                        <span className="text-sm">Увеличение команды в 2 раза</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Ожидаемые результаты:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-green-600" />
                        <span className="text-sm">Рост выручки в 3 раза к 2026</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Building2" size={16} className="text-green-600" />
                        <span className="text-sm">5000+ корпоративных клиентов</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="MapPin" size={16} className="text-green-600" />
                        <span className="text-sm">Присутствие в 20 городах</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Award" size={16} className="text-green-600" />
                        <span className="text-sm">Лидерство в сегменте</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">350 млн ₽</div>
                      <div className="text-sm text-muted-foreground">Размер раунда</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">2.5 млрд ₽</div>
                      <div className="text-sm text-muted-foreground">Pre-money оценка</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">12%</div>
                      <div className="text-sm text-muted-foreground">Доля для инвесторов</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Документы для инвесторов
            </h2>
            <p className="text-xl text-muted-foreground">
              Финансовая отчетность и корпоративные документы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="FileText" size={32} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Презентация для инвесторов</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Подробная презентация бизнеса и планов развития
                </p>
                <Button size="sm" className="w-full">
                  <Icon name="Download" size={14} className="mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="BarChart" size={32} className="text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Финансовая отчетность</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Аудированная отчетность за 2023 год
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Icon name="Download" size={14} className="mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="Building" size={32} className="text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Корпоративные документы</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Устав, лицензии, сертификаты
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Icon name="Download" size={14} className="mr-2" />
                  Скачать архив
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Заинтересованы в инвестициях?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нашей командой для получения подробной информации 
              об инвестиционных возможностях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                investors@офиседа.рф
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-blue-600">
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

export default InvestorsPage;