export const STORAGE_KEY = 'aws-ml-exam-saved-tests';
export const PASSING_SCORE = 72;
export const SECTION_PASSING_SCORE = 65;
export const DOMAIN_MASTERY_THRESHOLD = 70;

export type ExamPassingMode = 'full' | 'section';

/**
 * Returns the pass/fail threshold for a given exam and practice mode.
 *
 * Full exams use the exam's own configured `passingScore` (e.g. 72% for AWS,
 * 65% for ISTQB). Section-mode practice has a flat 65% threshold across
 * every exam, by design.
 *
 * Single source of truth for the result-screen pass/fail decision; do not
 * hardcode numeric thresholds anywhere else.
 */
export function getPassingScore(
  examPassingScore: number,
  mode: ExamPassingMode
): number {
  return mode === 'section' ? SECTION_PASSING_SCORE : examPassingScore;
}
