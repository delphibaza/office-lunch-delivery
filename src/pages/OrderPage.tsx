import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const OrderPage = () => {
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Бизнес-ланч "Классик"', price: 450, quantity: 2 },
    { id: 2, name: 'Салат Цезарь', price: 380, quantity: 1 }
  ]);

  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    phone: '',
    time: '',
    comment: ''
  });

  const total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Корзина */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.price} ₽ × {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{item.price * item.quantity} ₽</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Итого:</span>
                      <span>{total} ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Форма доставки */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Информация о доставке</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Адрес доставки *</Label>
                    <Input
                      id="address"
                      placeholder="Москва, ул. Примерная, д. 123, офис 456"
                      value={deliveryInfo.address}
                      onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={deliveryInfo.phone}
                      onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">Время доставки</Label>
                    <Select onValueChange={(value) => setDeliveryInfo({...deliveryInfo, time: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">Как можно скорее</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comment">Комментарий к заказу</Label>
                    <Textarea
                      id="comment"
                      placeholder="Дополнительные пожелания..."
                      value={deliveryInfo.comment}
                      onChange={(e) => setDeliveryInfo({...deliveryInfo, comment: e.target.value})}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;