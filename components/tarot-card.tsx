"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TarotCard as TarotCardType } from '@/lib/tarot-data';

interface TarotCardProps {
  card: TarotCardType;
  position?: string;
  interpretation?: string;
  isRevealed?: boolean;
  onClick?: () => void;
  className?: string;
}

export function TarotCard({
  card,
  position,
  interpretation,
  isRevealed = true,
  onClick,
  className
}: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(isRevealed);
  
  const handleClick = () => {
    if (!isRevealed) {
      setIsFlipped(true);
      if (onClick) onClick();
    }
  };
  
  return (
    <div 
      className={cn(
        "card-flip relative w-full max-w-[200px] aspect-[2/3] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className={cn(
        "card-flip-inner w-full h-full transition-transform duration-700",
        isFlipped ? "flipped" : ""
      )}>
        {/* Card Back */}
        <div className="card-front absolute w-full h-full rounded-lg overflow-hidden border-2 border-secondary/50 card-glow">
          <div className="w-full h-full bg-card flex items-center justify-center p-4">
            <div className="w-full h-full bg-primary/20 rounded-md border border-secondary/30 flex items-center justify-center">
              <div className="text-secondary text-4xl font-bold transform rotate-45">
                ✦
              </div>
            </div>
          </div>
        </div>
        
        {/* Card Front */}
        <div className="card-back absolute w-full h-full rounded-lg overflow-hidden border-2 border-secondary/50 card-glow">
          <div className="relative w-full h-full bg-card">
            {/* Card Image */}
            <div className="relative w-full h-2/3 overflow-hidden">
              <Image
                src={card.imageUrl}
                alt={card.nameRu}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/90" />
            </div>
            
            {/* Card Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
              <h3 className="text-secondary font-bold text-sm">{card.nameRu}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {position || card.keywords.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interpretation (shown below card) */}
      {isFlipped && interpretation && (
        <div className="mt-3 text-sm text-foreground fade-in">
          <p className="font-medium text-secondary">{position}</p>
          <p className="mt-1">{interpretation}</p>
        </div>
      )}
    </div>
  );
}