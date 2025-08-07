import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TermsPage = () => {
  const sections = [
    {
      title: '1. Общие положения',
      content: [
        'Настоящие Условия использования (далее - "Условия") регулируют отношения между ООО "ОфисЕда" (далее - "Компания", "мы") и пользователями (далее - "Пользователь", "вы") веб-сайта офиседа.рф и связанных с ним сервисов.',
        'Используя наш веб-сайт и сервисы, вы соглашаетесь с настоящими Условиями в полном объеме. Если вы не согласны с какими-либо положениями данных Условий, пожалуйста, не используйте наши сервисы.',
        'Мы оставляем за собой право изменять данные Условия в любое время. Изменения вступают в силу с момента их публикации на сайте. Продолжение использования сервисов после внесения изменений означает ваше согласие с новыми условиями.'
      ]
    },
    {
      title: '2. Описание услуг',
      content: [
        'Компания предоставляет услуги по доставке готовых блюд и организации корпоративного питания, включая:',
        '• Доставку готовых обедов в офисы и другие организации;',
        '• Организацию корпоративного питания на постоянной основе;',
        '• Кейтеринговые услуги для мероприятий;',
        '• Консультации по организации здорового питания;',
        '• Разработку индивидуальных меню.',
        'Полный перечень услуг и их описание представлены на нашем веб-сайте.'
      ]
    },
    {
      title: '3. Регистрация и учетная запись',
      content: [
        'Для использования некоторых функций сайта может потребоваться регистрация учетной записи.',
        'При регистрации вы обязуетесь предоставить точную, актуальную и полную информацию о себе.',
        'Вы несете ответственность за сохранение конфиденциальности данных вашей учетной записи и за все действия, совершенные под вашей учетной записью.',
        'Немедленно уведомите нас о любом несанкционированном использовании вашей учетной записи.',
        'Мы оставляем за собой право приостановить или удалить учетную запись в случае нарушения настоящих Условий.'
      ]
    },
    {
      title: '4. Заказы и оплата',
      content: [
        'Заказы принимаются через веб-сайт, мобильное приложение, по телефону или другими способами, указанными на сайте.',
        'Все цены указаны в российских рублях и включают НДС.',
        'Оплата производится одним из доступных способов: банковской картой онлайн, наличными курьеру, безналичным переводом.',
        'Заказ считается принятым после получения подтверждения от нашего оператора.',
        'Мы оставляем за собой право отказать в выполнении заказа в случае отсутствия товара, технических проблем или других обстоятельств.',
        'Изменение или отмена заказа возможны до начала его приготовления.'
      ]
    },
    {
      title: '5. Доставка',
      content: [
        'Доставка осуществляется в пределах зон, указанных на сайте.',
        'Время доставки составляет от 30 до 60 минут в зависимости от района и загруженности.',
        'Стоимость доставки указана на сайте и может изменяться в зависимости от района и суммы заказа.',
        'Риск случайной гибели или повреждения товара переходит к покупателю с момента передачи товара.',
        'В случае невозможности доставки по вине покупателя (неверный адрес, отсутствие по адресу) дополнительная доставка оплачивается отдельно.'
      ]
    },
    {
      title: '6. Качество и возврат',
      content: [
        'Мы гарантируем качество и свежесть всех поставляемых блюд.',
        'В случае получения товара ненадлежащего качества немедленно сообщите нам об этом.',
        'Возврат денежных средств производится в случае подтверждения ненадлежащего качества товара.',
        'Возврат товара надлежащего качества не производится в связи со спецификой товара (готовые блюда).',
        'Рекламации принимаются в течение 2 часов с момента получения заказа.'
      ]
    },
    {
      title: '7. Интеллектуальная собственность',
      content: [
        'Все материалы сайта (тексты, изображения, дизайн, логотипы, товарные знаки) являются объектами интеллектуальной собственности Компании.',
        'Использование материалов сайта без письменного разрешения Компании запрещено.',
        'Пользователь может использовать информацию сайта исключительно в личных некоммерческих целях.',
        'Копирование, распространение или иное использование материалов в коммерческих целях без согласия правообладателя запрещено.'
      ]
    },
    {
      title: '8. Ограничение ответственности',
      content: [
        'Компания не несет ответственности за:',
        '• Временную недоступность сайта или отдельных его функций;',
        '• Ущерб, причиненный вирусами или другим вредоносным программным обеспечением;',
        '• Действия третьих лиц, включая нарушение ими авторских прав;',
        '• Убытки, связанные с использованием или невозможностью использования сайта;',
        '• Неточности в информации, размещенной на сайте.',
        'Максимальная ответственность Компании ограничивается стоимостью конкретного заказа.'
      ]
    },
    {
      title: '9. Заключительные положения',
      content: [
        'Настоящие Условия регулируются законодательством Российской Федерации.',
        'Все споры, возникающие в связи с использованием сайта, подлежат рассмотрению в судах г. Москвы.',
        'Если какое-либо положение настоящих Условий будет признано недействительным, остальные положения сохраняют свою силу.',
        'Бездействие Компании в случае нарушения Пользователем положений настоящих Условий не лишает Компанию права предпринять соответствующие действия в защиту своих интересов позднее.',
        'Настоящие Условия составляют полное соглашение между Пользователем и Компанией относительно использования сайта.'
      ]
    }
  ];

  const keyPoints = [
    {
      icon: 'Shield',
      title: 'Защита данных',
      description: 'Мы используем современные технологии для защиты ваших персональных данных'
    },
    {
      icon: 'Lock',
      title: 'Безопасные платежи',
      description: 'Все платежи обрабатываются через защищенные платежные системы'
    },
    {
      icon: 'Eye',
      title: 'Прозрачность',
      description: 'Мы открыто сообщаем о том, как используем вашу информацию'
    },
    {
      icon: 'UserCheck',
      title: 'Ваши права',
      description: 'Вы имеете полный контроль над своими персональными данными'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Условия использования
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Правила и условия использования сервисов ОфисЕда. 
              Пожалуйста, внимательно ознакомьтесь с данными условиями.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Icon name="Calendar" size={16} className="mr-1" />
                Действует с: 1 января 2024
              </span>
              <span className="flex items-center">
                <Icon name="FileText" size={16} className="mr-1" />
                Версия 2.1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ключевые принципы</h2>
            <p className="text-muted-foreground">
              Основные принципы нашей работы с пользователями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyPoints.map((point, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={point.icon as any} size={20} className="text-gray-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Содержание</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index + 1}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-muted"
                  >
                    {section.title}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {sections.map((section, index) => (
              <Card key={index} id={`section-${index + 1}`}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* Important Notice */}
            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amber-700">
                  <Icon name="AlertTriangle" size={24} />
                  <span>Важное уведомление</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  Данные Условия использования являются публичной офертой. 
                  Начиная использовать наши сервисы, вы автоматически соглашаетесь 
                  с данными условиями. Рекомендуем периодически проверять обновления 
                  данной страницы.
                </p>
              </CardContent>
            </Card>

            {/* Contact for Legal Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Scale" size={24} className="text-gray-600" />
                  <span>Юридические вопросы</span>
                </CardTitle>
                <CardDescription>
                  Контактная информация для решения правовых вопросов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Юридический адрес:</h4>
                    <p className="text-sm text-muted-foreground">
                      123456, г. Москва, ул. Примерная, д. 123, офис 456
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">ОГРН:</h4>
                    <p className="text-sm text-muted-foreground">
                      1234567890123
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">ИНН/КПП:</h4>
                    <p className="text-sm text-muted-foreground">
                      1234567890 / 123456789
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email для правовых вопросов:</h4>
                    <p className="text-sm text-muted-foreground">
                      legal@офиседа.рф
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-500 to-gray-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Вопросы по условиям использования?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наша юридическая служба готова ответить на все ваши вопросы 
              относительно условий использования наших сервисов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                legal@офиседа.рф
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-gray-600">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;