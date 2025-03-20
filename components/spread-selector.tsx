"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { spreadTypes, SpreadType } from '@/lib/tarot-data';

interface SpreadSelectorProps {
  onSelect: (spreadId: string) => void;
  selectedSpreadId?: string;
}

export function SpreadSelector({ onSelect, selectedSpreadId }: SpreadSelectorProps) {
  const [expandedSpread, setExpandedSpread] = useState<string | null>(null);
  
  const handleSelect = (spreadId: string) => {
    onSelect(spreadId);
    setExpandedSpread(null);
  };
  
  const toggleExpand = (spreadId: string) => {
    setExpandedSpread(expandedSpread === spreadId ? null : spreadId);
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {spreadTypes.map((spread) => (
        <div 
          key={spread.id}
          className={cn(
            "bg-card rounded-lg border border-border overflow-hidden transition-all duration-300",
            selectedSpreadId === spread.id ? "border-secondary card-glow" : "hover:border-secondary/50",
            expandedSpread === spread.id ? "col-span-1 sm:col-span-2 lg:col-span-4 row-span-2" : ""
          )}
        >
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-secondary">{spread.name}</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => toggleExpand(spread.id)}
                className="text-xs"
              >
                {expandedSpread === spread.id ? "Свернуть" : "Подробнее"}
              </Button>
            </div>
            
            <p className="mt-2 text-sm text-muted-foreground">
              {spread.description}
            </p>
            
            {expandedSpread === spread.id && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Позиции карт:</h4>
                <ul className="space-y-2">
                  {spread.positions.map((position, index) => (
                    <li key={index} className="text-sm">
                      <span className="font-medium text-secondary">{position.name}</span>: {position.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <Button
              variant={selectedSpreadId === spread.id ? "secondary" : "outline"}
              size="sm"
              className="mt-4 w-full"
              onClick={() => handleSelect(spread.id)}
            >
              {selectedSpreadId === spread.id ? "Выбрано" : "Выбрать"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}