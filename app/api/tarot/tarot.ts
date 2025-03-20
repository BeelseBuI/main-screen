import type { NextApiRequest, NextApiResponse } from 'next';
import { generateTarotInterpretation, TarotReadingRequest } from '@/lib/openai-client'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешён' });
  }

  try {
    const tarotRequest: TarotReadingRequest = req.body;
    const interpretation = await generateTarotInterpretation(tarotRequest);
    return res.status(200).json({ interpretation });
  } catch (error) {
    console.error('Ошибка API:', error);
    return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
}