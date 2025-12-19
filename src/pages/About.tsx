import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
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
              <a href="/" className="text-white hover:text-yellow-400 transition-colors font-medium">Главная</a>
              <a href="/about" className="text-yellow-400 font-medium">О компании</a>
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
              О компании
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Профессиональная команда юристов по банкротству в Самаре
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Кто мы?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>ДОЛГИ63.РФ</strong> — это команда опытных юристов, специализирующихся на процедурах банкротства физических лиц в Самаре и Самарской области с 2015 года.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Мы помогли более <strong>500 клиентам</strong> законно списать долги на общую сумму свыше <strong>1.2 миллиарда рублей</strong> и начать жизнь с чистого листа.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Наша миссия — сделать процедуру банкротства доступной, понятной и максимально комфортной для каждого клиента.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {[
                { number: '9+', label: 'лет опыта', icon: 'Calendar' },
                { number: '500+', label: 'успешных дел', icon: 'TrendingUp' },
                { number: '1.2 млрд ₽', label: 'списанных долгов', icon: 'DollarSign' },
                { number: '98%', label: 'положительных решений', icon: 'Award' }
              ].map((stat, i) => (
                <Card key={i} className="border-2 border-yellow-400 text-center">
                  <CardContent className="p-6">
                    <Icon name={stat.icon} size={32} className="text-yellow-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Наши преимущества</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Shield',
                  title: 'Полная юридическая защита',
                  desc: 'Представляем ваши интересы на всех этапах: от подготовки документов до завершения процедуры. Работаем с любой сложностью дела.'
                },
                {
                  icon: 'Clock',
                  title: 'Экономия времени',
                  desc: 'Берём на себя все хлопоты: сбор справок, общение с кредиторами, посещение судов. Вам нужно только подписать документы.'
                },
                {
                  icon: 'Target',
                  title: 'Прозрачное ценообразование',
                  desc: 'Фиксируем стоимость на старте. Никаких скрытых платежей. Консультация и расчёт стоимости — бесплатно.'
                },
                {
                  icon: 'Users',
                  title: 'Персональный подход',
                  desc: 'Каждый клиент получает личного юриста, который на связи 24/7. Регулярно информируем о ходе дела.'
                },
                {
                  icon: 'BookOpen',
                  title: 'Глубокая экспертиза',
                  desc: 'Знаем все нюансы законодательства о банкротстве. Регулярно повышаем квалификацию и следим за изменениями в законах.'
                },
                {
                  icon: 'CheckCircle',
                  title: 'Результат гарантирован',
                  desc: '98% наших дел завершаются списанием долгов. Работаем по договору с чёткими обязательствами сторон.'
                }
              ].map((item, i) => (
                <Card key={i} className="border-2 border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} size={32} className="text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Как мы работаем</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Бесплатная консультация',
                  desc: 'Вы звоните или оставляете заявку. Мы анализируем вашу ситуацию, объясняем перспективы и рассчитываем точную стоимость услуг.'
                },
                {
                  step: '02',
                  title: 'Подписание договора',
                  desc: 'Заключаем официальный договор с фиксированной стоимостью. Вносите предоплату — мы начинаем работу.'
                },
                {
                  step: '03',
                  title: 'Сбор документов',
                  desc: 'Готовим полный пакет документов для суда. Запрашиваем справки из банков, налоговой, ГИБДД. Вам нужен минимум участия.'
                },
                {
                  step: '04',
                  title: 'Подача заявления в суд',
                  desc: 'Подаём заявление о признании банкротом в арбитражный суд. Оплачиваем госпошлину и вознаграждение финансовому управляющему.'
                },
                {
                  step: '05',
                  title: 'Судебные заседания',
                  desc: 'Представляем ваши интересы на всех заседаниях. Вам не нужно посещать суд — мы действуем по доверенности.'
                },
                {
                  step: '06',
                  title: 'Завершение процедуры',
                  desc: 'Получаем определение суда о завершении банкротства и списании долгов. Вы свободны от долговой нагрузки!'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Наша команда всегда на связи</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Получите бесплатную консультацию прямо сейчас. Мы ответим на все вопросы и поможем принять правильное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+79047298933">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-8 py-6">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить: +7 904 729-89-33
                </Button>
              </a>
              <a href="/#contact">
                <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-black hover:bg-yellow-50 text-lg px-8 py-6">
                  Оставить заявку
                </Button>
              </a>
            </div>
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