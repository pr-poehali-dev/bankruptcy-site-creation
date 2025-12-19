import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/slafka1996@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'Новое обращение с долги63.рф'
        })
      });

      if (response.ok) {
        toast({
          title: "Спасибо за обращение!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: '', phone: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позвонить нам напрямую",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={28} className="text-black" />
              </div>
              <span className="text-yellow-400 text-2xl font-bold tracking-tight">ДОЛГИ63.РФ</span>
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-yellow-400 font-medium">Главная</a>
              <a href="/about" className="text-white hover:text-yellow-400 transition-colors font-medium">О компании</a>
              <a href="/faq" className="text-white hover:text-yellow-400 transition-colors font-medium">Вопросы и ответы</a>
            </nav>
          </div>
          <a href="tel:+79047298933" className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all hover:scale-105">
            <Icon name="Phone" size={20} />
            <span className="hidden sm:inline">+7 904 729-89-33</span>
            <span className="sm:hidden">Позвонить</span>
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Банкротство<br />физических лиц
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Законный способ списать долги и начать жизнь с чистого листа
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Профессиональная юридическая помощь в Самаре и области
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-8 py-6 rounded-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить консультацию
              </Button>
              <a href="tel:+79047298933" className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2">
                <Icon name="Phone" size={20} />
                +7 904 729-89-33
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Когда нужно банкротство?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'TrendingDown', title: 'Долги свыше 500 000 ₽', desc: 'Сумма задолженности превышает полмиллиона рублей' },
              { icon: 'Calendar', title: 'Просрочка 3+ месяца', desc: 'Невозможность платить по кредитам более 3 месяцев' },
              { icon: 'AlertTriangle', title: 'Давление коллекторов', desc: 'Постоянные звонки, угрозы, испорченная кредитная история' }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 animate-scale-in hover:scale-105" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Частые вопросы
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Отвечаем на самые популярные вопросы о банкротстве
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Сколько стоит процедура банкротства?',
                a: 'Стоимость зависит от сложности дела. Включает госпошлину, оплату финансового управляющего и юридические услуги. На консультации мы рассчитаем точную стоимость для вашей ситуации.'
              },
              {
                q: 'Какие долги можно списать через банкротство?',
                a: 'Списываются кредиты, займы, долги по ЖКХ, налоги, штрафы ГИБДД. Не списываются алименты, возмещение вреда здоровью, зарплаты сотрудникам.'
              },
              {
                q: 'Сколько длится процедура банкротства?',
                a: 'В среднем 6-12 месяцев. Срок зависит от количества кредиторов, наличия имущества и сложности дела.'
              },
              {
                q: 'Заберут ли моё жильё при банкротстве?',
                a: 'Единственное жильё защищено законом и останется у вас. Исключение — ипотечная квартира или дорогостоящая недвижимость свыше 100 млн рублей.'
              },
              {
                q: 'Смогу ли я брать кредиты после банкротства?',
                a: 'Да, но в течение 5 лет нужно сообщать банку о факте банкротства. После этого срока — без ограничений.'
              },
              {
                q: 'Можно ли работать во время банкротства?',
                a: 'Да, работать можно и нужно. Есть ограничения только на руководящие должности в некоторых организациях.'
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border-2 border-yellow-400 rounded-lg px-6 hover:border-yellow-500 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 hover:text-yellow-600">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Отзывы клиентов
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Реальные истории людей, которым мы помогли
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей М.',
                debt: 'Долг: 1.2 млн ₽',
                text: 'Долги накопились после увольнения. Думал, никогда не выберусь. Благодаря специалистам все долги списали за 8 месяцев. Теперь могу спокойно жить и планировать будущее.',
                rating: 5
              },
              {
                name: 'Ирина С.',
                debt: 'Долг: 780 тыс ₽',
                text: 'Коллекторы звонили по 20 раз в день. Юристы взяли всё на себя — подготовили документы, представляли интересы в суде. Процедура прошла без стресса, долги списаны полностью.',
                rating: 5
              },
              {
                name: 'Дмитрий К.',
                debt: 'Долг: 2.5 млн ₽',
                text: 'Банкротство казалось чем-то страшным, но оказалось единственным выходом. Профессиональный подход, всё объяснили простым языком. Через 10 месяцев я свободен от долгов!',
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i} className="border-2 border-yellow-400 hover:border-yellow-500 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-yellow-400/20" style={{ animationDelay: `${i * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-lg">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.debt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Бесплатная консультация по вашей ситуации
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in relative z-10">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 h-14 text-lg focus:border-yellow-400"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 h-14 text-lg focus:border-yellow-400"
              />
            </div>
            <div>
              <Textarea
                placeholder="Опишите вашу ситуацию"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 text-lg focus:border-yellow-400"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full bg-yellow-400 text-black hover:bg-yellow-300 text-lg py-6 font-semibold"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
            <p className="text-sm text-gray-400 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
          <div className="mt-12 text-center relative z-10">
            <p className="text-gray-400 mb-4">Или позвоните прямо сейчас:</p>
            <a href="tel:+79047298933" className="text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center gap-3">
              <Icon name="Phone" size={32} />
              +7 904 729-89-33
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-yellow-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Icon name="Scale" size={24} className="text-black" />
                </div>
                <span className="text-xl font-bold text-yellow-400">ДОЛГИ63.РФ</span>
              </div>
              <p className="text-gray-400">
                Профессиональная помощь в банкротстве физических лиц
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+79047298933" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Icon name="Phone" size={18} />
                  +7 904 729-89-33
                </a>
                <a href="mailto:slafka1996@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Icon name="Mail" size={18} />
                  slafka1996@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Режим работы</h3>
              <p className="text-gray-400">
                Пн-Пт: 9:00 - 19:00<br />
                Сб-Вс: 10:00 - 16:00
              </p>
            </div>
          </div>
          <div className="border-t border-yellow-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 ДОЛГИ63.РФ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}