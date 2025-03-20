"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ReadingResult } from '@/components/reading-result';
import { Button } from '@/components/ui/button';
import { Reading } from '@/lib/tarot-data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ClientReadingPage({ id }: { id: string }) {
  const [reading, setReading] = useState<Reading | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    // Load reading from localStorage
    try {
      const savedReadings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
      const foundReading = savedReadings.find((r: any) => r.id === id);
      
      if (foundReading) {
        // Convert date string back to Date object
        setReading({
          ...foundReading,
          date: new Date(foundReading.date)
        });
      }
    } catch (error) {
      console.error('Error loading reading:', error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);
  
  const handleShare = () => {
    // In a real app, this would generate a shareable link
    alert('Функция поделиться будет доступна в ближайшем обновлении.');
  };
  
  if (!reading && !isLoading) {
    return (
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center py-12">
          <div className="text-4xl mb-4">🔮</div>
          <h1 className="text-2xl font-bold mb-4">Расклад не найден</h1>
          <p className="text-muted-foreground mb-8">
            Запрошенный расклад не существует или был удален
          </p>
          <Link href="/history">
            <Button>Вернуться к истории</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад
          </Button>
          <h1 className="text-3xl font-bold">Детали расклада</h1>
        </div>
        
        {reading && (
          <ReadingResult 
            reading={reading} 
            onShare={handleShare}
          />
        )}
      </div>
    </div>
  );
}