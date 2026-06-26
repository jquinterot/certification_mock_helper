/**
 * Pure helper: computes the countdown duration for a given exam attempt.
 *
 * Section mode scales the full exam duration proportionally to the number of
 * questions in the section, with a minimum of 15 minutes.
 */
export function calculateExamDuration(
  examMode: 'full' | 'section',
  fullDurationMinutes: number,
  totalQuestions: number,
  activeQuestionCount: number
): number {
  const totalSeconds = fullDurationMinutes * 60;
  if (examMode === 'section' && totalQuestions > 0) {
    const proportional = Math.round((totalSeconds * activeQuestionCount) / totalQuestions);
    return Math.max(15 * 60, proportional);
  }
  return totalSeconds;
}
