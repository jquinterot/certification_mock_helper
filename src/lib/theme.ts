export type ThemeName = 'aws' | 'istqb';
export type ThemeMode = 'light' | 'dark';

export interface Theme {
  name: ThemeName;
  mode: ThemeMode;
  primary: string;
  primaryHover: string;
  primaryBg: string;
  primaryBgHover: string;
  primaryBorder: string;
  primaryBorderHover: string;
  primaryText: string;
  primaryLightText: string;
  primaryDarkText: string;
  primaryRing: string;
  primaryProgress: string;
  gradient: string;
  badge: string;
  currentQuestion: string;
  correctAnswer: string;
  correctAnswerText: string;
  selectedAnswerBg: string;
  selectedAnswerBorder: string;
  selectedAnswerText: string;
  correctAnswerBg: string;
  correctAnswerBorder: string;
  correctAnswerTextColor: string;
  selectedCorrectAnswer: string;
  selectedCorrectAnswerText: string;
  explanationBadge: string;
  explanationBadgeText: string;
  iconBg: string;
  iconText: string;
  accent: string;
  accentHover: string;
  accentBg: string;
  accentText: string;
  bgGradientFrom: string;
  bgGradientVia: string;
  bgGradientTo: string;
  bgText: string;
  bgTextSecondary: string;
  bgCard: string;
  bgCardHover: string;
  bgButton: string;
  bgButtonHover: string;
  bgInput: string;
  borderColor: string;
  borderHover: string;
  iconDefault: string;
}

const createDarkTheme = (base: Omit<Theme, 'mode' | 'bgGradientFrom' | 'bgGradientVia' | 'bgGradientTo' | 'bgText' | 'bgTextSecondary' | 'bgCard' | 'bgCardHover' | 'bgButton' | 'bgButtonHover' | 'bgInput' | 'borderColor' | 'borderHover' | 'iconDefault'>): Theme => ({
  ...base,
  mode: 'dark',
  bgGradientFrom: 'from-slate-900',
  bgGradientVia: 'via-slate-800',
  bgGradientTo: 'to-slate-900',
  bgText: 'text-white',
  bgTextSecondary: 'text-slate-300',
  bgCard: 'bg-white/5',
  bgCardHover: 'hover:bg-white/10',
  bgButton: 'bg-white/10',
  bgButtonHover: 'hover:bg-white/20',
  bgInput: 'bg-white/10',
  borderColor: 'border-white/10',
  borderHover: 'hover:border-white/20',
  iconDefault: 'text-slate-300',
});

const createLightTheme = (base: Omit<Theme, 'mode' | 'bgGradientFrom' | 'bgGradientVia' | 'bgGradientTo' | 'bgText' | 'bgTextSecondary' | 'bgCard' | 'bgCardHover' | 'bgButton' | 'bgButtonHover' | 'bgInput' | 'borderColor' | 'borderHover' | 'iconDefault'>): Theme => ({
  ...base,
  mode: 'light',
  bgGradientFrom: 'from-slate-100',
  bgGradientVia: 'via-white',
  bgGradientTo: 'to-slate-100',
  bgText: 'text-slate-900',
  bgTextSecondary: 'text-slate-600',
  bgCard: 'bg-white',
  bgCardHover: 'hover:bg-slate-50',
  bgButton: 'bg-slate-100',
  bgButtonHover: 'hover:bg-slate-200',
  bgInput: 'bg-slate-100',
  borderColor: 'border-slate-200',
  borderHover: 'hover:border-slate-300',
  iconDefault: 'text-slate-700',
});

const awsBase: Omit<Theme, 'mode' | 'bgGradientFrom' | 'bgGradientVia' | 'bgGradientTo' | 'bgText' | 'bgTextSecondary' | 'bgCard' | 'bgCardHover' | 'bgButton' | 'bgButtonHover' | 'bgInput' | 'borderColor' | 'borderHover' | 'iconDefault'> = {
  name: 'aws',
  primary: 'orange-500',
  primaryHover: 'orange-600',
  primaryBg: 'bg-orange-500',
  primaryBgHover: 'hover:bg-orange-600',
  primaryBorder: 'border-orange-500/20',
  primaryBorderHover: 'hover:border-orange-500/50',
  primaryText: 'text-orange-500',
  primaryLightText: 'text-orange-400',
  primaryDarkText: 'text-orange-300',
  primaryRing: 'ring-orange-500',
  primaryProgress: 'bg-orange-500',
  gradient: 'from-orange-500 to-amber-500',
  badge: 'bg-orange-500/20',
  currentQuestion: 'bg-orange-500',
  correctAnswer: 'bg-green-500',
  correctAnswerText: 'text-green-400',
  selectedAnswerBg: 'bg-orange-500/20',
  selectedAnswerBorder: 'border-orange-500/50',
  selectedAnswerText: 'text-orange-300',
  correctAnswerBg: 'bg-green-500/20',
  correctAnswerBorder: 'border-green-500/50',
  correctAnswerTextColor: 'text-green-300',
  selectedCorrectAnswer: 'bg-orange-500',
  selectedCorrectAnswerText: 'text-white',
  explanationBadge: 'bg-orange-500/20',
  explanationBadgeText: 'text-orange-400',
  iconBg: 'bg-orange-500/20',
  iconText: 'text-orange-400',
  accent: 'bg-orange-500',
  accentHover: 'hover:bg-orange-600',
  accentBg: 'bg-orange-500/20',
  accentText: 'text-orange-400',
};

const istqbBase: Omit<Theme, 'mode' | 'bgGradientFrom' | 'bgGradientVia' | 'bgGradientTo' | 'bgText' | 'bgTextSecondary' | 'bgCard' | 'bgCardHover' | 'bgButton' | 'bgButtonHover' | 'bgInput' | 'borderColor' | 'borderHover' | 'iconDefault'> = {
  name: 'istqb',
  primary: 'blue-500',
  primaryHover: 'blue-600',
  primaryBg: 'bg-blue-500',
  primaryBgHover: 'hover:bg-blue-600',
  primaryBorder: 'border-blue-500/20',
  primaryBorderHover: 'hover:border-blue-500/50',
  primaryText: 'text-blue-500',
  primaryLightText: 'text-blue-400',
  primaryDarkText: 'text-blue-300',
  primaryRing: 'ring-blue-500',
  primaryProgress: 'bg-blue-500',
  gradient: 'from-blue-500 to-cyan-500',
  badge: 'bg-blue-500/20',
  currentQuestion: 'bg-blue-500',
  correctAnswer: 'bg-green-500',
  correctAnswerText: 'text-green-400',
  selectedAnswerBg: 'bg-blue-500/20',
  selectedAnswerBorder: 'border-blue-500/50',
  selectedAnswerText: 'text-blue-300',
  correctAnswerBg: 'bg-green-500/20',
  correctAnswerBorder: 'border-green-500/50',
  correctAnswerTextColor: 'text-green-300',
  selectedCorrectAnswer: 'bg-blue-500',
  selectedCorrectAnswerText: 'text-white',
  explanationBadge: 'bg-blue-500/20',
  explanationBadgeText: 'text-blue-400',
  iconBg: 'bg-blue-500/20',
  iconText: 'text-blue-400',
  accent: 'bg-blue-500',
  accentHover: 'hover:bg-blue-600',
  accentBg: 'bg-blue-500/20',
  accentText: 'text-blue-400',
};

export const awsDarkTheme = createDarkTheme(awsBase);
export const awsLightTheme = createLightTheme(awsBase);
export const istqbDarkTheme = createDarkTheme(istqbBase);
export const istqbLightTheme = createLightTheme(istqbBase);

export function getTheme(category: string, mode: ThemeMode = 'dark'): Theme {
  const isIstqb = category === 'ISTQB Testing';
  return mode === 'dark'
    ? (isIstqb ? istqbDarkTheme : awsDarkTheme)
    : (isIstqb ? istqbLightTheme : awsLightTheme);
}
