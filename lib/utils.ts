import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomDelay(min: number = 5, max: number = 30): number {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 15);
};