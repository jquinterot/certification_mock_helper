/**
 * Shared answer-checking logic.
 *
 * Both `isCorrectAnswer(answer, correctAnswer)` and the higher-level
 * `checkAnswer(question, answer)` live here so the multi-response comparison
 * rules are defined exactly once.
 */

export function isCorrectAnswer(
  answer: number | number[] | undefined,
  correctAnswer: number | number[]
): boolean {
  if (Array.isArray(correctAnswer)) {
    if (!Array.isArray(answer)) return false;
    if (correctAnswer.length !== answer.length) return false;
    return correctAnswer.every((c) => answer.includes(c));
  }
  return answer === correctAnswer;
}
