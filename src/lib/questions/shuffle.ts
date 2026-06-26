import type { ExamQuestion, ShuffledQuestion } from '@/types';
import { isCorrectAnswer } from './check';

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
    const correctIndices = q.correctAnswers ?? (Array.isArray(q.correctAnswer) ? q.correctAnswer : null);

    if (correctIndices && Array.isArray(correctIndices)) {
      const shuffledOptions = shuffleArray(q.options, random);
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
  return isCorrectAnswer(selectedIndex, question.shuffledCorrectIndex);
}
