import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { StarsBackground } from '@/components/ui/stars-background';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <StarsBackground />
      
      <div className="flex-1 flex flex-col items-center justify-center mystical-bg px-4 py-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="float-animation">
            <div className="inline-block text-6xl text-secondary mb-2">✦</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
              Добро пожаловать в мир <span className="text-secondary">Таро</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте свою судьбу с помощью древних карт. Погрузитесь в мистический мир предсказаний и откройте тайны своего будущего.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-secondary/50 transition-all card-glow">
              <div className="text-3xl text-secondary mb-4">🔮</div>
              <h3 className="text-xl font-semibold mb-2">Бесплатные гадания</h3>
              <p className="text-muted-foreground">Получите доступ к различным раскладам Таро без ограничений и платежей.</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-secondary/50 transition-all card-glow">
              <div className="text-3xl text-secondary mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Всегда с вами</h3>
              <p className="text-muted-foreground">Гадайте в любое время и в любом месте прямо в вашем Telegram.</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-secondary/50 transition-all card-glow">
              <div className="text-3xl text-secondary mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-2">История раскладов</h3>
              <p className="text-muted-foreground">Сохраняйте и просматривайте историю ваших гаданий в любое время.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/reading">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
                Начать гадание
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Таро – это древняя система символов, отражающая различные аспекты человеческого опыта.</p>
            <p className="mt-2">Помните, что карты Таро предлагают руководство, но окончательный выбор всегда остается за вами.</p>
          </div>
        </div>
      </div>
    </main>
  );
}