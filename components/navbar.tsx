"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, BookOpen, History, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  initTelegramWebApp, 
  showTelegramBackButton, 
  hideTelegramBackButton,
  useTelegramUser
} from '@/lib/telegram';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const telegramUser = useTelegramUser();

  useEffect(() => {
    initTelegramWebApp();
    
    // Show back button on all pages except home
    if (pathname !== '/') {
      showTelegramBackButton();
    } else {
      hideTelegramBackButton();
    }
    
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Главная', icon: Home },
    { href: '/reading', label: 'Гадание', icon: BookOpen },
    { href: '/history', label: 'История', icon: History },
    { href: '/profile', label: 'Профиль', icon: User },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-secondary">Таро</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск..."
                className="pl-10 pr-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-secondary"
                    : "text-foreground hover:bg-primary/10"
                )}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Открыть меню"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "bg-primary/10 text-secondary"
                    : "text-foreground hover:bg-primary/10"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </span>
              </Link>
            ))}
            
            <div className="relative mt-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск..."
                className="w-full pl-10 pr-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}