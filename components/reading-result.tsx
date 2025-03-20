"use client";

import { useState, useEffect } from 'react';
import { TarotCard } from '@/components/tarot-card';
import { Button } from '@/components/ui/button';
import { Reading } from '@/lib/tarot-data';
import { formatDate } from '@/lib/utils';
import { Share2 } from 'lucide-react';

interface ReadingResultProps {
  reading: Reading;
  onSave?: () => void;
  onShare?: () => void;
  revealDelay?: number;
}

export function ReadingResult({ 
  reading, 
  onSave, 
  onShare,
  revealDelay = 0 
}: ReadingResultProps) {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(revealDelay > 0);
  
  useEffect(() => {
    if (revealDelay > 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, revealDelay);
      
      return () => clearTimeout(timer);
    }
  }, [revealDelay]);
  
  useEffect(() => {
    if (!isLoading && reading.cards.length > 0) {
      const revealSequence = reading.cards.map((_, index) => index);
      
      revealSequence.forEach((cardIndex, i) => {
        setTimeout(() => {
          setRevealedCards(prev => [...prev, cardIndex]);
        }, i * 800);
      });
    }
  }, [isLoading, reading.cards.length]);
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin"></div>
        </div>
        <p className="mt-6 text-lg text-center">Поиск свободного специалиста...</p>
        <p className="mt-2 text-sm text-muted-foreground text-center">Пожалуйста, подождите, пока мы соединяемся с картами Таро</p>
      </div>
    );
  }
  
  const getSpreadLayout = () => {
    switch (reading.spreadType) {
      case 'single':
        return 'flex justify-center';
      case 'three-card':
        return 'grid grid-cols-1 sm:grid-cols-3 gap-6';
      case 'celtic-cross':
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
      case 'love-spread':
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6';
      default:
        return 'flex flex-wrap justify-center gap-6';
    }
  };
  
  return (
    <div className="bg-card rounded-lg border border-border p-6 fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-secondary">Результат гадания</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {formatDate(reading.date)}
          </p>
        </div>
        
        <div className="flex gap-2 mt-4 sm:mt-0">
          {onSave && (
            <Button variant="outline" size="sm" onClick={onSave}>
              Сохранить
            </Button>
          )}
          
          {onShare && (
            <Button variant="secondary" size="sm" onClick={onShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Поделиться
            </Button>
          )}
        </div>
      </div>
      
      {reading.question && (
        <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h3 className="text-sm font-medium text-muted-foreground">Ваш вопрос:</h3>
          <p className="mt-1 text-foreground">{reading.question}</p>
        </div>
      )}
      
      <div className={getSpreadLayout()}>
        {reading.cards.map((cardData, index) => (
          <TarotCard
            key={index}
            card={cardData.card}
            position={cardData.position}
            interpretation={cardData.interpretation}
            isRevealed={revealedCards.includes(index)}
            className="mx-auto"
          />
        ))}
      </div>
    </div>
  );
}