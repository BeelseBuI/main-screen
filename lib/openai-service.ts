
import OpenAI from 'openai';

export interface TarotReadingRequest {
  spreadType: string;
  question: string;
  cards: {
    name: string;
    position: string;
  }[];
}

export async function generateTarotInterpretation(request: TarotReadingRequest): Promise<string> {
  try {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });

    const content = `Ты — опытный таролог, ведущий беседу так, будто говоришь с человеком, который зашёл к тебе за советом. Твой стиль — живой, эмоциональный, тёплый, как у близкого друга или наставника, который понимает и поддерживает. Ты передаёшь энергетику карт не как сухие значения, а как поток живых образов, связанных с судьбой и жизненным опытом.`;

    const prompt = `
${content}

Тип расклада: ${request.spreadType}
Вопрос: ${request.question}

Карты:
${request.cards.map(card => `- ${card.name} в позиции "${card.position}"`).join('\n')}

Пожалуйста, предоставьте подробную интерпретацию расклада.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: content
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0]?.message?.content || 'Не удалось получить интерпретацию.';
  } catch (error) {
    console.error('Error generating interpretation:', error);
    return 'Извините, произошла ошибка при получении интерпретации.';
  }
}
