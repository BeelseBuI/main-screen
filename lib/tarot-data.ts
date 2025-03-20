export interface TarotCard {
  id: string;
  name: string;
  nameRu: string;
  arcana: 'major' | 'minor';
  suit?: 'cups' | 'pentacles' | 'swords' | 'wands';
  number: number;
  imageUrl: string;
  keywords: string[];
  meaningUpright: string;
  meaningReversed: string;
}

export interface SpreadType {
  id: string;
  name: string;
  description: string;
  positions: { name: string; description: string }[];
}

export const spreadTypes: SpreadType[] = [
  {
    id: 'single',
    name: 'Одна карта',
    description: 'Простой расклад для быстрого ответа на вопрос или совета на день.',
    positions: [
      { name: 'Карта дня', description: 'Ключевое послание или энергия дня' }
    ]
  },
  {
    id: 'three-card',
    name: 'Три карты',
    description: 'Классический расклад, показывающий прошлое, настоящее и будущее ситуации.',
    positions: [
      { name: 'Прошлое', description: 'События или влияния из прошлого' },
      { name: 'Настоящее', description: 'Текущая ситуация или энергия' },
      { name: 'Будущее', description: 'Потенциальный исход или направление' }
    ]
  },
  {
    id: 'celtic-cross',
    name: 'Кельтский крест',
    description: 'Подробный расклад из 10 карт для глубокого анализа ситуации.',
    positions: [
      { name: 'Настоящее', description: 'Текущая ситуация или проблема' },
      { name: 'Вызов', description: 'Препятствие или влияние, пересекающее ситуацию' },
      { name: 'Прошлое', description: 'Уходящие влияния' },
      { name: 'Будущее', description: 'Приближающиеся влияния' },
      { name: 'Сознательное', description: 'Ваши мысли и сознательные цели' },
      { name: 'Подсознательное', description: 'Скрытые факторы и подсознательные влияния' },
      { name: 'Ваше влияние', description: 'Ваше отношение или подход к ситуации' },
      { name: 'Внешнее влияние', description: 'Как вас видят другие или внешняя среда' },
      { name: 'Надежды и страхи', description: 'Ваши ожидания или опасения' },
      { name: 'Итог', description: 'Потенциальный результат' }
    ]
  },
  {
    id: 'love-spread',
    name: 'Расклад на любовь',
    description: 'Специальный расклад для анализа любовных отношений.',
    positions: [
      { name: 'Вы', description: 'Ваша энергия в отношениях' },
      { name: 'Партнер', description: 'Энергия вашего партнера' },
      { name: 'Отношения', description: 'Текущее состояние отношений' },
      { name: 'Препятствие', description: 'Что мешает отношениям' },
      { name: 'Совет', description: 'Что поможет улучшить отношения' }
    ]
  }
];

// Sample of major arcana cards
export const majorArcanaCards: TarotCard[] = [
  {
    id: 'fool',
    name: 'The Fool',
    nameRu: 'Шут',
    arcana: 'major',
    number: 0,
    imageUrl: 'https://images.unsplash.com/photo-1659587349289-3eee4bdfe684?q=80&w=1974&auto=format&fit=crop',
    keywords: ['начало', 'невинность', 'спонтанность', 'свобода'],
    meaningUpright: 'Новые начинания, невинность, спонтанность, свободный дух.',
    meaningReversed: 'Безрассудство, риск, безответственность.'
  },
  {
    id: 'magician',
    name: 'The Magician',
    nameRu: 'Маг',
    arcana: 'major',
    number: 1,
    imageUrl: 'https://images.unsplash.com/photo-1572173838181-589fc8c3f1b7?q=80&w=1974&auto=format&fit=crop',
    keywords: ['проявление', 'сила воли', 'мастерство', 'желание'],
    meaningUpright: 'Проявление, сила воли, мастерство, желание.',
    meaningReversed: 'Манипуляция, обман, нереализованный потенциал.'
  },
  {
    id: 'high-priestess',
    name: 'The High Priestess',
    nameRu: 'Верховная Жрица',
    arcana: 'major',
    number: 2,
    imageUrl: 'https://images.unsplash.com/photo-1659587349289-3eee4bdfe684?q=80&w=1974&auto=format&fit=crop',
    keywords: ['интуиция', 'подсознание', 'тайна', 'внутренний голос'],
    meaningUpright: 'Интуиция, подсознание, тайна, внутренний голос.',
    meaningReversed: 'Секреты, скрытые мотивы, подавленная интуиция.'
  },
  {
    id: 'empress',
    name: 'The Empress',
    nameRu: 'Императрица',
    arcana: 'major',
    number: 3,
    imageUrl: 'https://images.unsplash.com/photo-1572173838181-589fc8c3f1b7?q=80&w=1974&auto=format&fit=crop',
    keywords: ['изобилие', 'плодородие', 'материнство', 'природа'],
    meaningUpright: 'Изобилие, плодородие, материнство, природа.',
    meaningReversed: 'Зависимость, пустота, чрезмерная забота.'
  },
  {
    id: 'emperor',
    name: 'The Emperor',
    nameRu: 'Император',
    arcana: 'major',
    number: 4,
    imageUrl: 'https://images.unsplash.com/photo-1659587349289-3eee4bdfe684?q=80&w=1974&auto=format&fit=crop',
    keywords: ['авторитет', 'структура', 'контроль', 'лидерство'],
    meaningUpright: 'Авторитет, структура, контроль, лидерство.',
    meaningReversed: 'Доминирование, чрезмерный контроль, негибкость.'
  },
  {
    id: 'hierophant',
    name: 'The Hierophant',
    nameRu: 'Иерофант',
    arcana: 'major',
    number: 5,
    imageUrl: 'https://images.unsplash.com/photo-1572173838181-589fc8c3f1b7?q=80&w=1974&auto=format&fit=crop',
    keywords: ['традиция', 'духовность', 'конформизм', 'мораль'],
    meaningUpright: 'Традиция, духовность, конформизм, мораль.',
    meaningReversed: 'Бунт, неортодоксальность, нетрадиционные подходы.'
  },
  {
    id: 'lovers',
    name: 'The Lovers',
    nameRu: 'Влюбленные',
    arcana: 'major',
    number: 6,
    imageUrl: 'https://images.unsplash.com/photo-1659587349289-3eee4bdfe684?q=80&w=1974&auto=format&fit=crop',
    keywords: ['любовь', 'гармония', 'выбор', 'союз'],
    meaningUpright: 'Любовь, гармония, выбор, союз.',
    meaningReversed: 'Дисбаланс, разлука, неправильный выбор.'
  },
  {
    id: 'chariot',
    name: 'The Chariot',
    nameRu: 'Колесница',
    arcana: 'major',
    number: 7,
    imageUrl: 'https://images.unsplash.com/photo-1572173838181-589fc8c3f1b7?q=80&w=1974&auto=format&fit=crop',
    keywords: ['контроль', 'сила воли', 'победа', 'напористость'],
    meaningUpright: 'Контроль, сила воли, победа, напористость.',
    meaningReversed: 'Отсутствие контроля, агрессия, поражение.'
  },
  {
    id: 'strength',
    name: 'Strength',
    nameRu: 'Сила',
    arcana: 'major',
    number: 8,
    imageUrl: 'https://images.unsplash.com/photo-1659587349289-3eee4bdfe684?q=80&w=1974&auto=format&fit=crop',
    keywords: ['сила', 'мужество', 'терпение', 'сострадание'],
    meaningUpright: 'Сила, мужество, терпение, сострадание.',
    meaningReversed: 'Слабость, сомнение, недостаток самоконтроля.'
  },
  {
    id: 'hermit',
    name: 'The Hermit',
    nameRu: 'Отшельник',
    arcana: 'major',
    number: 9,
    imageUrl: 'https://images.unsplash.com/photo-1572173838181-589fc8c3f1b7?q=80&w=1974&auto=format&fit=crop',
    keywords: ['интроспекция', 'поиск', 'одиночество', 'внутренний свет'],
    meaningUpright: 'Интроспекция, поиск, одиночество, внутренний свет.',
    meaningReversed: 'Изоляция, одиночество, отказ от помощи.'
  },
  {
    id: 'wheel-of-fortune',
    name: 'Wheel of Fortune',
    nameRu: 'Колесо Фортуны',
    arcana: 'major',
    number: 10,
    imageUrl: 'https://images.unsplash.com/photo-1659587349289-3eee4bdfe684?q=80&w=1974&auto=format&fit=crop',
    keywords: ['судьба', 'удача', 'перемены', 'циклы'],
    meaningUpright: 'Судьба, удача, перемены, циклы.',
    meaningReversed: 'Неудача, нежелательные перемены, внешний контроль.'
  }
];

// Function to get a random card
export const getRandomCard = (): TarotCard => {
  const randomIndex = Math.floor(Math.random() * majorArcanaCards.length);
  return majorArcanaCards[randomIndex];
};

// Function to get a random set of cards for a spread
export const getRandomCardsForSpread = (spreadId: string): TarotCard[] => {
  const spread = spreadTypes.find(s => s.id === spreadId);
  if (!spread) return [];
  
  const numCards = spread.positions.length;
  const cards: TarotCard[] = [];
  const usedIndices = new Set<number>();
  
  while (cards.length < numCards) {
    const randomIndex = Math.floor(Math.random() * majorArcanaCards.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      cards.push(majorArcanaCards[randomIndex]);
    }
  }
  
  return cards;
};

// Function to generate an interpretation for a card in a position
export const generateInterpretation = (card: TarotCard, position: string): string => {
  const isReversed = Math.random() > 0.7;
  const meaning = isReversed ? card.meaningReversed : card.meaningUpright;
  
  const interpretations = [
    `${card.nameRu} в позиции "${position}" указывает на ${meaning.toLowerCase()}`,
    `Карта ${card.nameRu} говорит о том, что ${meaning.toLowerCase()} в контексте "${position}".`,
    `В позиции "${position}" ${card.nameRu} раскрывает ${meaning.toLowerCase()}`,
    `${card.nameRu} ${isReversed ? '(перевернутая)' : ''} показывает: ${meaning}`,
    `"${position}" представлено картой ${card.nameRu}, что означает ${meaning.toLowerCase()}`
  ];
  
  const randomIndex = Math.floor(Math.random() * interpretations.length);
  return interpretations[randomIndex];
};

export interface Reading {
  id: string;
  date: Date;
  spreadType: string;
  question: string;
  cards: {
    card: TarotCard;
    position: string;
    interpretation: string;
  }[];
}

// Function to generate a unique random ID
const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

// Function to generate a complete reading
export const generateReading = (spreadId: string, question: string): Reading => {
  const spread = spreadTypes.find(s => s.id === spreadId);
  if (!spread) throw new Error('Spread not found');
  
  const cards = getRandomCardsForSpread(spreadId);
  const readingCards = cards.map((card, index) => {
    const position = spread.positions[index].name;
    return {
      card,
      position,
      interpretation: generateInterpretation(card, position)
    };
  });
  
  return {
    id: generateRandomId(),
    date: new Date(),
    spreadType: spreadId,
    question,
    cards: readingCards
  };
};