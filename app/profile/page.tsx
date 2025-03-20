"use client";

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { StarsBackground } from '@/components/ui/stars-background';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Reading, spreadTypes } from '@/lib/tarot-data';
import { useTelegramUser } from '@/lib/telegram';
import { useToast } from '@/hooks/use-toast';
import { User, Bell, Download, Trash2 } from 'lucide-react';

interface UserProfile {
  username: string;
  email: string;
  preferredSpread: string;
  notifications: boolean;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    username: '',
    email: '',
    preferredSpread: 'three-card',
    notifications: true
  });
  const [readings, setReadings] = useState<Reading[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const telegramUser = useTelegramUser();
  const { toast } = useToast();
  
  useEffect(() => {
    // Load profile from localStorage
    const savedProfile = localStorage.getItem('tarotUserProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else if (telegramUser) {
      // Initialize with Telegram data if available
      setProfile(prev => ({
        ...prev,
        username: telegramUser.username || telegramUser.first_name || 'Пользователь'
      }));
    }
    
    // Load readings count
    try {
      const savedReadings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
      setReadings(savedReadings);
    } catch (error) {
      console.error('Error loading readings:', error);
    }
  }, [telegramUser]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setProfile(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setProfile(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaveProfile = () => {
    localStorage.setItem('tarotUserProfile', JSON.stringify(profile));
    setIsEditing(false);
    toast({
      title: "Профиль сохранен",
      description: "Ваши настройки успешно обновлены.",
    });
  };
  
  const handleExportReadings = () => {
    try {
      // Convert readings to CSV
      const headers = ['Дата', 'Тип расклада', 'Вопрос', 'Карты'];
      const csvRows = [headers];
      
      readings.forEach(reading => {
        const spreadName = spreadTypes.find(s => s.id === reading.spreadType)?.name || reading.spreadType;
        const cards = reading.cards.map(c => c.card.nameRu).join(', ');
        const row = [
          new Date(reading.date).toLocaleString('ru-RU'),
          spreadName,
          reading.question,
          cards
        ];
        csvRows.push(row);
      });
      
      const csvContent = csvRows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
      
      // Create download link
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'tarot-readings.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Экспорт завершен",
        description: "История гаданий успешно экспортирована в CSV.",
      });
    } catch (error) {
      toast({
        title: "Ошибка экспорта",
        description: "Не удалось экспортировать историю гаданий.",
        variant: "destructive",
      });
    }
  };
  
  const handleClearHistory = () => {
    if (confirm('Вы уверены, что хотите удалить всю историю гаданий? Это действие нельзя отменить.')) {
      localStorage.removeItem('tarotReadings');
      setReadings([]);
      toast({
        title: "История очищена",
        description: "Вся история гаданий была удалена.",
      });
    }
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
        <h1 className="text-3xl font-bold text-center mb-2">Профиль</h1>
        <p className="text-muted-foreground text-center mb-8">
          Управляйте своими настройками и данными
        </p>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-2 bg-card rounded-lg border border-border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <User className="h-5 w-5 mr-2" />
                Личные данные
              </h2>
              <Button 
                variant={isEditing ? "secondary" : "outline"} 
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Отмена" : "Редактировать"}
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Имя пользователя</Label>
                <Input
                  id="username"
                  name="username"
                  value={profile.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preferredSpread">Предпочитаемый расклад</Label>
                <Select 
                  disabled={!isEditing}
                  value={profile.preferredSpread}
                  onValueChange={(value) => handleSelectChange('preferredSpread', value)}
                >
                  <SelectTrigger id="preferredSpread">
                    <SelectValue placeholder="Выберите расклад" />
                  </SelectTrigger>
                  <SelectContent>
                    {spreadTypes.map(spread => (
                      <SelectItem key={spread.id} value={spread.id}>
                        {spread.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <Label htmlFor="notifications">Уведомления</Label>
                </div>
                <Switch
                  id="notifications"
                  checked={profile.notifications}
                  onCheckedChange={(checked) => handleSwitchChange('notifications', checked)}
                  disabled={!isEditing}
                />
              </div>
              
              {isEditing && (
                <Button 
                  className="w-full mt-4" 
                  onClick={handleSaveProfile}
                >
                  Сохранить изменения
                </Button>
              )}
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold mb-6">Статистика</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm">Всего гаданий</p>
                <p className="text-3xl font-bold text-secondary">{readings.length}</p>
              </div>
              
              {readings.length > 0 && (
                <>
                  <div>
                    <p className="text-muted-foreground text-sm">Последнее гадание</p>
                    <p className="font-medium">
                      {new Date(Math.max(...readings.map(r => new Date(r.date).getTime()))).toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground text-sm">Любимый расклад</p>
                    <p className="font-medium">
                      {getSpreadName(
                        Object.entries(
                          readings.reduce((acc: Record<string, number>, reading) => {
                            acc[reading.spreadType] = (acc[reading.spreadType] || 0) + 1;
                            return acc;
                          }, {})
                        )
                        .sort((a, b) => b[1] - a[1])[0][0]
                      )}
                    </p>
                  </div>
                </>
              )}
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={handleExportReadings}
                  disabled={readings.length === 0}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Экспорт истории
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-destructive hover:text-destructive"
                  onClick={handleClearHistory}
                  disabled={readings.length === 0}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Очистить историю
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}