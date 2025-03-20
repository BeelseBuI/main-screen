"use client";

import { useState, useEffect } from 'react';
import { generateTarotInterpretation } from '@/lib/openai-service';
import { Navbar } from '@/components/navbar';
import { StarsBackground } from '@/components/ui/stars-background';
import { SpreadSelector } from '@/components/spread-selector';
import { ReadingResult } from '@/components/reading-result';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { generateReading, Reading } from '@/lib/tarot-data';
import { useToast } from '@/hooks/use-toast';

export default function ReadingPage() {
  const [selectedSpreadId, setSelectedSpreadId] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [reading, setReading] = useState<Reading | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [aiInterpretation, setAiInterpretation] = useState<string>('');
  const { toast } = useToast();

  const handleSpreadSelect = (spreadId: string) => {
    setSelectedSpreadId(spreadId);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleDrawCards = async () => {
    if (!selectedSpreadId) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, выберите расклад",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setLoadingProgress(0);

    try {
      // Generate reading
      const newReading = generateReading(selectedSpreadId, question);

      // Send to OpenAI for interpretation
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          spreadType: newReading.spreadType,
          question: newReading.question,
          cards: newReading.cards.map(card => ({
            name: card.card.nameRu,
            position: card.position
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get interpretation');
      }

      const data = await response.json();
      setReading(newReading);
      setAiInterpretation(data.interpretation);

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось получить интерпретацию",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setLoadingProgress(100);
    }
  };

  const handleReset = () => {
    setReading(null);
    setQuestion('');
    setSelectedSpreadId('');
    setAiInterpretation('');
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <StarsBackground />

      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Гадание на Таро</h1>
        <p className="text-muted-foreground text-center mb-8">
          Выберите расклад, задайте вопрос и получите ответ от карт Таро
        </p>

        {isLoading ? (
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin"></div>
            </div>
            <h2 className="text-xl font-semibold">Поиск специалиста</h2>
            <div className="w-full bg-primary/10 rounded-full h-2">
              <div 
                className="bg-secondary h-2 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="text-muted-foreground">
              Пожалуйста, подождите, пока мы найдем свободного специалиста...
            </p>
          </div>
        ) : !reading ? (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Выберите тип расклада</h2>
              <SpreadSelector 
                onSelect={handleSpreadSelect} 
                selectedSpreadId={selectedSpreadId} 
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Задайте вопрос картам</h2>
              <Textarea
                placeholder="Какой вопрос вы хотите задать картам?"
                value={question}
                onChange={handleQuestionChange}
                className="min-h-[120px]"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Сформулируйте ясный и конкретный вопрос для более точного ответа.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={handleDrawCards}
                disabled={isLoading}
              >
                Разложить карты
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 max-w-5xl mx-auto">
            <ReadingResult reading={reading} />

            {aiInterpretation && (
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-xl font-semibold text-secondary mb-4">
                  Интерпретация специалиста
                </h2>
                <div className="prose prose-invert">
                  {aiInterpretation.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleReset}
              >
                Новое гадание
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}