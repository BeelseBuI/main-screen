import { Suspense } from 'react';
import { Navbar } from '@/components/navbar';
import { StarsBackground } from '@/components/ui/stars-background';
import { ReadingResult } from '@/components/reading-result';
import { Button } from '@/components/ui/button';
import { Reading } from '@/lib/tarot-data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ClientReadingPage from './client-page';

// This function is required for static export with dynamic routes
export const generateStaticParams = () => {
  // For static export, we return a placeholder ID
  // The actual data will be loaded from localStorage at runtime
  return [{ id: 'placeholder' }];
};

export default function ReadingDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <StarsBackground />
      
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin"></div>
          </div>
        </div>
      }>
        <ClientReadingPage id={params.id} />
      </Suspense>
    </main>
  );
}