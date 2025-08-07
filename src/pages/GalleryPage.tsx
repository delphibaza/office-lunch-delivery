import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'Все фото', count: 48 },
    { id: 'dishes', name: 'Блюда', count: 20 },
    { id: 'kitchen', name: 'Кухня', count: 12 },
    { id: 'delivery', name: 'Доставка', count: 8 },
    { id: 'events', name: 'Мероприятия', count: 8 }
  ];

  const gallery = [
    // Блюда
    {
      id: 1,
      category: 'dishes',
      title: 'Бизнес-ланч "Классик"',
      description: 'Сбалансированный обед из трех блюд',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      tags: ['бизнес-ланч', 'популярное']
    },
    {
      id: 2,
      category: 'dishes',
      title: 'Паста Карбонара',
      description: 'Классическая итальянская паста',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      tags: ['паста', 'итальянская кухня']
    },
    {
      id: 3,
      category: 'dishes',
      title: 'Салат с лососем',
      description: 'Свежий салат с слабосоленым лососем',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      tags: ['салат', 'рыба', 'здоровое питание']
    },
    {
      id: 4,
      category: 'dishes',
      title: 'Стейк из говядины',
      description: 'Сочный стейк с овощами гриль',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      tags: ['мясо', 'гриль', 'премиум']
    },
    {
      id: 5,
      category: 'dishes',
      title: 'Суп-пюре из тыквы',
      description: 'Нежный крем-суп с тыквой',
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      tags: ['суп', 'веган', 'осеннее меню']
    },
    {
      id: 6,
      category: 'dishes',
      title: 'Десерт Тирамису',
      description: 'Классический итальянский десерт',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      tags: ['десерт', 'итальянская кухня']
    },

    // Кухня
    {
      id: 7,
      category: 'kitchen',
      title: 'Главная кухня',
      description: 'Современное оборудование для приготовления',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      tags: ['производство', 'оборудование']
    },
    {
      id: 8,
      category: 'kitchen',
      title: 'Зона приготовления',
      description: 'Профессиональные повара за работой',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      tags: ['повара', 'процесс']
    },
    {
      id: 9,
      category: 'kitchen',
      title: 'Контроль качества',
      description: 'Проверка готовых блюд перед упаковкой',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      tags: ['качество', 'контроль']
    },
    {
      id: 10,
      category: 'kitchen',
      title: 'Упаковочная зона',
      description: 'Упаковка готовых блюд для доставки',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      tags: ['упаковка', 'логистика']
    },

    // Доставка
    {
      id: 11,
      category: 'delivery',
      title: 'Автопарк доставки',
      description: 'Современные автомобили с холодильными установками',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      tags: ['автопарк', 'холодовая цепь']
    },
    {
      id: 12,
      category: 'delivery',
      title: 'Курьер с заказом',
      description: 'Доставка обедов прямо в офис',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      tags: ['курьер', 'офис']
    },
    {
      id: 13,
      category: 'delivery',
      title: 'Термосумки',
      description: 'Специальные сумки для сохранения температуры',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      tags: ['термосумки', 'температура']
    },
    {
      id: 14,
      category: 'delivery',
      title: 'Загрузка автомобиля',
      description: 'Подготовка заказов к доставке',
      image: '/img/661dd9e5-9d25-4c2f-be10-202829588933.jpg',
      tags: ['загрузка', 'подготовка']
    },

    // Мероприятия
    {
      id: 15,
      category: 'events',
      title: 'Корпоративный фуршет',
      description: 'Обслуживание корпоративного мероприятия',
      image: '/img/21268956-79ff-40e0-9934-04976361f00c.jpg',
      tags: ['фуршет', 'корпоратив']
    },
    {
      id: 16,
      category: 'events',
      title: 'Кейтеринг на конференции',
      description: 'Кофе-брейк на деловом мероприятии',
      image: '/img/cfcbdfb9-9a7b-4e29-ad60-850309c7024e.jpg',
      tags: ['кейтеринг', 'конференция']
    },
    {
      id: 17,
      category: 'events',
      title: 'Праздничный банкет',
      description: 'Организация торжественного ужина',
      image: '/img/ad164f63-8d85-4ff4-9651-b60b014cdc01.jpg',
      tags: ['банкет', 'праздник']
    },
    {
      id: 18,
      category: 'events',
      title: 'Дегустация меню',
      description: 'Презентация новых блюд для клиентов',
      image: '/img/c3b3270c-9633-4adc-a530-1d8554b5eba5.jpg',
      tags: ['дегустация', 'презентация']
    }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredGallery.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredGallery.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedImage(filteredGallery[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Галерея ОфисЕда
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Посмотрите на наши блюда, кухню, процесс доставки и мероприятия. 
              Фотографии расскажут о качестве нашего сервиса лучше слов.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => openModal(item)}
            >
              <div className="aspect-square relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Icon 
                    name="ZoomIn" 
                    size={32} 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-white/90">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Загрузить еще фото
            <Icon name="ChevronDown" size={16} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedImage.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Хотите попробовать наши блюда?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Закажите дегустацию или оформите первый заказ со скидкой 20%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="UtensilsCrossed" size={20} className="mr-2" />
                Заказать дегустацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-amber-600">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Сделать заказ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;