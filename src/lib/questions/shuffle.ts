import type { ExamQuestion } from '@/types';

export interface ShuffledQuestion extends ExamQuestion {
  shuffledOptions: string[];
  shuffledCorrectIndex: number | number[];
}

function seededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x7fffffff;
  };
}

function shuffleArray<T>(array: T[], random: () => number): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function shuffleQuestions(questions: ExamQuestion[], seed?: number): ShuffledQuestion[] {
  const random = seededRandom(seed ?? Date.now());

  return questions.map((q) => {
    if (Array.isArray(q.correctAnswer)) {
      const shuffledOptions = shuffleArray(q.options, random);
      const correctIndices = q.correctAnswer as number[];
      const shuffledCorrectIndex = correctIndices.map(idx => shuffledOptions.indexOf(q.options[idx]));
      return {
        ...q,
        shuffledOptions,
        shuffledCorrectIndex,
      };
    }

    const correctIndex = q.correctAnswer as number;
    const shuffledOptions = shuffleArray(q.options, random);
    const shuffledCorrectIndex = shuffledOptions.indexOf(q.options[correctIndex]);

    return {
      ...q,
      shuffledOptions,
      shuffledCorrectIndex,
    };
  });
}

export function checkAnswer(
  question: ShuffledQuestion,
  selectedIndex: number | number[]
): boolean {
  if (Array.isArray(question.shuffledCorrectIndex)) {
    if (!Array.isArray(selectedIndex)) return false;
    const sortedSelected = [...selectedIndex].sort();
    const sortedCorrect = [...question.shuffledCorrectIndex].sort();
    return sortedSelected.length === sortedCorrect.length &&
      sortedSelected.every((v, i) => v === sortedCorrect[i]);
  }

  return selectedIndex === question.shuffledCorrectIndex;
}
