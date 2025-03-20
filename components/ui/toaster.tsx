"use client";

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Toaster() {
  const [toasts, setToasts] = useState<any[]>([]);
  
  useEffect(() => {
    // Listen for toast events
    const handleToast = (event: CustomEvent) => {
      const { toast } = event.detail;
      setToasts((prev) => [...prev, toast]);
      
      // Auto dismiss
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, toast.duration || 5000);
    };
    
    window.addEventListener('toast' as any, handleToast as any);
    
    return () => {
      window.removeEventListener('toast' as any, handleToast as any);
    };
  }, []);
  
  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  
  if (toasts.length === 0) return null;
  
  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-4 w-full max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "p-4 rounded-lg shadow-lg border transition-all transform translate-x-0",
            "bg-card text-card-foreground border-border",
            toast.variant === 'destructive' && "bg-destructive text-destructive-foreground border-destructive"
          )}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{toast.title}</h3>
              {toast.description && (
                <p className="text-sm opacity-90 mt-1">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => dismiss(toast.id)}
              className="ml-4 p-1 rounded-full hover:bg-primary/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}