import { NextResponse } from 'next/server';
import { generateTarotInterpretation, TarotReadingRequest } from '@/lib/openai-client';

export async function POST(request: Request) {
  try {
    const data: TarotReadingRequest = await request.json();
    
    const interpretation = await generateTarotInterpretation(data);
    
    return NextResponse.json({ interpretation });
  } catch (error) {
    console.error('Error in tarot reading API:', error);
    return NextResponse.json(
      { error: 'Failed to generate reading' },
      { status: 500 }
    );
  }
}