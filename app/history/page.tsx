"use client";

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { StarsBackground } from '@/components/ui/stars-background';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Reading, spreadTypes } from '@/lib/tarot-data';
import { formatDate } from '@/lib/utils';
import { Search, Calendar, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [filteredReadings, setFilteredReadings] = useState<Reading[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [spreadFilter, setSpreadFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const readingsPerPage = 5;
  
  useEffect(() => {
    // Load readings from localStorage
    try {
      const savedReadings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
      // Convert date strings back to Date objects
      const parsedReadings = savedReadings.map((reading: any) => ({
        ...reading,
        date: new Date(reading.date)
      }));
      
      setReadings(parsedReadings);
      setFilteredReadings(parsedReadings);
    } catch (error) {
      console.error('Error loading readings:', error);
      setReadings([]);
      setFilteredReadings([]);
    }
  }, []);
  
  useEffect(() => {
    // Apply filters
    let result = [...readings];
    
    // Filter by spread type
    if (spreadFilter !== 'all') {
      result = result.filter(reading => reading.spreadType === spreadFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(reading => 
        reading.question.toLowerCase().includes(query) ||
        reading.cards.some(card => 
          card.card.nameRu.toLowerCase().includes(query) ||
          card.interpretation.toLowerCase().includes(query)
        )
      );
    }
    
    // Sort by date (newest first)
    result.sort((a, b) => b.date.getTime() - a.date.getTime());
    
    setFilteredReadings(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [readings, searchQuery, spreadFilter]);
  
  // Get current page readings
  const indexOfLastReading = currentPage * readingsPerPage;
  const indexOfFirstReading = indexOfLastReading - readingsPerPage;
  const currentReadings = filteredReadings.slice(indexOfFirstReading, indexOfLastReading);
  const totalPages = Math.ceil(filteredReadings.length / readingsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  const getSpreadName = (spreadId: string) => {
    const spread = spreadTypes.find(s => s.id === spreadId);
    return spread ? spread.name : spreadId;
  };
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <StarsBackground />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">История гаданий</h1>
        <p className="text-muted-foreground text-center mb-8">
          Просмотрите историю ваших предыдущих раскладов
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по вопросу или картам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              //  className="#a1a1aa"
              />
            </div>
            
            <div className="w-full sm:w-48">
              <Select value={spreadFilter} onValueChange={setSpreadFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Тип расклада" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все расклады</SelectItem>
                  {spreadTypes.map(spread => (
                    <SelectItem key={spread.id} value={spread.id}>
                      {spread.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Readings list */}
          {currentReadings.length > 0 ? (
            <div className="space-y-4">
              {currentReadings.map((reading, index) => (
                <div 
                  key={reading.id || index}
                  className="bg-card rounded-lg border border-border p-4 hover:border-secondary/50 transition-all"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-lg font-semibold text-secondary">
                      {getSpreadName(reading.spreadType)}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(reading.date)}
                    </div>
                  </div>
                  
                  {reading.question && (
                    <p className="text-sm mb-3 line-clamp-2">
                      <span className="font-medium">Вопрос:</span> {reading.question}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {reading.cards.slice(0, 3).map((cardData, idx) => (
                      <div key={idx} className="bg-primary/10 text-xs px-2 py-1 rounded-full">
                        {cardData.card.nameRu}
                      </div>
                    ))}
                    {reading.cards.length > 3 && (
                      <div className="bg-primary/10 text-xs px-2 py-1 rounded-full">
                        +{reading.cards.length - 3}
                      </div>
                    )}
                  </div>
                  
                  <Link href={`/reading/${reading.id}`}>
                    <Button variant="outline" size="sm">
                      Просмотреть полностью
                    </Button>
                  </Link>
                </div>
              ))}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="text-sm">
                    Страница {currentPage} из {totalPages}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold mb-2">История пуста</h3>
              <p className="text-muted-foreground mb-6">
                У вас пока нет сохраненных гаданий или они не соответствуют фильтрам
              </p>
              <Link href="/reading">
                <Button
      className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Начать гадание</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}