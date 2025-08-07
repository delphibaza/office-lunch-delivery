import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все вопросы', count: 24 },
    { id: 'orders', name: 'Заказы', count: 8 },
    { id: 'delivery', name: 'Доставка', count: 6 },
    { id: 'payment', name: 'Оплата', count: 4 },
    { id: 'menu', name: 'Меню', count: 3 },
    { id: 'corporate', name: 'Корпоративным клиентам', count: 3 }
  ];

  const faqData = [
    // Заказы
    {
      id: 1,
      category: 'orders',
      question: 'Как сделать заказ?',
      answer: 'Вы можете сделать заказ несколькими способами: через наш сайт, по телефону +7 (495) 123-45-67, через мобильное приложение или написав нам в WhatsApp. Выберите блюда из меню, укажите адрес доставки и время, подтвердите заказ.',
      popular: true
    },
    {
      id: 2,
      category: 'orders',
      question: 'Какой минимальный заказ?',
      answer: 'Минимальная сумма заказа составляет 500 рублей. Для корпоративных клиентов действуют специальные условия - минимальный заказ от 10 порций.',
      popular: true
    },
    {
      id: 3,
      category: 'orders',
      question: 'Можно ли изменить или отменить заказ?',
      answer: 'Изменить или отменить заказ можно до начала его приготовления, обычно это 30-40 минут после оформления. Свяжитесь с нами по телефону как можно скорее.',
      popular: false
    },
    {
      id: 4,
      category: 'orders',
      question: 'Можно ли заказать на несколько дней вперед?',
      answer: 'Да, мы принимаем предварительные заказы на срок до 7 дней. Это особенно удобно для корпоративных клиентов, которые планируют питание на неделю.',
      popular: false
    },

    // Доставка
    {
      id: 5,
      category: 'delivery',
      question: 'Как быстро вы доставляете?',
      answer: 'Стандартное время доставки составляет 30-45 минут с момента подтверждения заказа. В часы пик (12:00-14:00) доставка может занять до 60 минут.',
      popular: true
    },
    {
      id: 6,
      category: 'delivery',
      question: 'В какие районы вы доставляете?',
      answer: 'Мы доставляем по всей Москве в пределах МКАД, а также в ближайшие города Московской области: Мытищи, Королёв, Балашиха, Реутов. Полный список районов доставки можно посмотреть на странице "Доставка и оплата".',
      popular: true
    },
    {
      id: 7,
      category: 'delivery',
      question: 'Сколько стоит доставка?',
      answer: 'Доставка бесплатная при заказе от 1000 рублей в пределах МКАД. При заказе менее 1000 рублей стоимость доставки составляет 200 рублей. Для заказов в Подмосковье бесплатная доставка от 1500 рублей.',
      popular: false
    },
    {
      id: 8,
      category: 'delivery',
      question: 'Работаете ли вы в выходные?',
      answer: 'Мы работаем в субботу с 10:00 до 16:00. Воскресенье - выходной день. В праздничные дни график работы может изменяться, о чем мы сообщаем заранее.',
      popular: false
    },

    // Оплата
    {
      id: 9,
      category: 'payment',
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем оплату банковскими картами онлайн, наличными курьеру, а также безналичный расчет для юридических лиц. Доступна оплата через Apple Pay и Google Pay.',
      popular: true
    },
    {
      id: 10,
      category: 'payment',
      question: 'Можно ли оплатить корпоративной картой?',
      answer: 'Да, мы принимаем корпоративные карты. Также для юридических лиц доступна оплата по счету с отсрочкой платежа до 14 дней.',
      popular: false
    },
    {
      id: 11,
      category: 'payment',
      question: 'Выдаете ли вы чеки и документы?',
      answer: 'Да, мы выдаем все необходимые документы: чеки, счета-фактуры, акты выполненных работ. Для юридических лиц ведем полный документооборот.',
      popular: false
    },

    // Меню
    {
      id: 12,
      category: 'menu',
      question: 'Как часто обновляется меню?',
      answer: 'Основное меню обновляется еженедельно. Сезонные блюда добавляются в зависимости от времени года. Бизнес-ланчи меняются ежедневно.',
      popular: false
    },
    {
      id: 13,
      category: 'menu',
      question: 'Есть ли вегетарианские и диетические блюда?',
      answer: 'Да, в нашем меню представлены вегетарианские, веганские и диетические блюда. Также есть блюда без глютена и лактозы. Все блюда помечены соответствующими значками.',
      popular: true
    },
    {
      id: 14,
      category: 'menu',
      question: 'Можно ли заказать индивидуальное меню?',
      answer: 'Для корпоративных клиентов мы можем разработать индивидуальное меню с учетом пожеланий и диетических ограничений сотрудников. Обсуждается индивидуально.',
      popular: false
    },

    // Корпоративным клиентам
    {
      id: 15,
      category: 'corporate',
      question: 'Какие условия для корпоративных клиентов?',
      answer: 'Корпоративным клиентам мы предлагаем: скидки от 15% при заказе от 20 порций, персонального менеджера, гибкий график доставки, безналичную оплату с отсрочкой, индивидуальное меню.',
      popular: true
    },
    {
      id: 16,
      category: 'corporate',
      question: 'Организуете ли вы кейтеринг мероприятий?',
      answer: 'Да, мы организуем кейтеринг для корпоративных мероприятий: конференций, семинаров, презентаций, праздников. Предлагаем фуршетное обслуживание, кофе-брейки, банкеты.',
      popular: false
    },
    {
      id: 17,
      category: 'corporate',
      question: 'Как заключить договор на корпоративное обслуживание?',
      answer: 'Для заключения договора свяжитесь с нашим менеджером по корпоративным продажам по телефону +7 (495) 123-45-67 или оставьте заявку на сайте. Мы подготовим индивидуальное предложение.',
      popular: false
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularQuestions = faqData.filter(item => item.popular);

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Ежедневно с 9:00 до 18:00',
      action: 'tel:+74951234567'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+7 (495) 123-45-67',
      description: 'Быстрые ответы 24/7',
      action: 'https://wa.me/74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'support@офиседа.рф',
      description: 'Ответим в течение часа',
      action: 'mailto:support@офиседа.рф'
    },
    {
      icon: 'MessageSquare',
      title: 'Онлайн-чат',
      value: 'Чат на сайте',
      description: 'Мгновенные ответы',
      action: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Найдите ответы на самые популярные вопросы о нашем сервисе, 
              доставке, оплате и условиях работы
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <div 
                    key={category.id}
                    className={`flex justify-between items-center p-2 rounded cursor-pointer transition-colors ${
                      selectedCategory === category.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-muted'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="text-sm">{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Нужна помощь?</CardTitle>
                <CardDescription>
                  Свяжитесь с нами удобным способом
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name={method.icon as any} size={16} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{method.title}</h4>
                      <p className="text-sm text-blue-600">{method.value}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Popular Questions */}
            {selectedCategory === 'all' && !searchQuery && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Популярные вопросы</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {popularQuestions.slice(0, 4).map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg line-clamp-2">{item.question}</CardTitle>
                          <Badge variant="secondary" className="ml-2 shrink-0">
                            Популярный
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {item.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Accordion */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === 'all' ? 'Все вопросы' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <Badge variant="outline">
                  {filteredFAQ.length} {filteredFAQ.length === 1 ? 'вопрос' : 'вопросов'}
                </Badge>
              </div>

              {filteredFAQ.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQ.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{item.question}</span>
                          {item.popular && (
                            <Badge variant="secondary" className="text-xs">
                              Популярный
                            </Badge>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Вопросы не найдены</h3>
                    <p className="text-muted-foreground mb-4">
                      Попробуйте изменить поисковый запрос или выберите другую категорию
                    </p>
                    <Button variant="outline" onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}>
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наша служба поддержки готова помочь вам в любое время. 
              Свяжитесь с нами удобным способом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-blue-600">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;