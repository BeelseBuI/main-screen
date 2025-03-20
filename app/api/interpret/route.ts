
import { NextResponse } from 'next/server';
import { generateTarotInterpretation } from '@/lib/openai-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const interpretation = await generateTarotInterpretation(body);
    return NextResponse.json({ interpretation });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate interpretation' }, { status: 500 });
  }
}
