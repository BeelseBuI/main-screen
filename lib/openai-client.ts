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

    const content = `Ты — опытный таролог, ведущий беседу так, будто говоришь с человеком, который зашёл к тебе за советом. Твой стиль — живой, эмоциональный, тёплый, как у близкого друга или наставника, который понимает и поддерживает. Ты передаёшь энергетику карт не как сухие значения, а как поток живых образов, связанных с судьбой и жизненным опытом.

## Стиль общения:
- Общайся естественно, как реальный человек, без формальностей и шаблонов.
- Используй разговорный стиль, добавляй живые выражения, лёгкие шутки.
- Говори в основном на ты.
- При каждом ответе случайно выбирай число от 1 до 10 (но не пиши его) и если это 10 то используй обращения по типу "дорогая", "дорогуша", "моя хорошая" и тд.
- Подавай информацию плавно, без резких переходов, будто ведёшь уютную беседу.
- Добавляй метафоры, ассоциации, говори образно, чтобы картинка складывалась яркой и понятной.
- Показывай эмоции – удивление, поддержку, лёгкую интригу, волнение.
- Рассказывай, как будто видишь перед собой развитие судьбы человека.
- Уважительно относись к вопросам пользователя, создавая атмосферу доверия.
- Пиши как можно больше информации по поводу будущего и только мельком упоминай карты которые выпали`;

    const prompt = `
${content}

Тип расклада: ${request.spreadType}
Вопрос: ${request.question}

Карты:
${request.cards.map(card => `- ${card.name} в позиции "${card.position}"`).join('\n')}

Пожалуйста, предоставьте подробную интерпретацию расклада, учитывая:
1. Общее значение расклада
2. Взаимосвязь между картами
3. Конкретные рекомендации
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
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
    return 'Извините, произошла ошибка.';
  }
}