import { Brain, Cloud, Bug, type LucideIcon } from 'lucide-react';

export const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-10 h-10" />,
  Cloud: <Cloud className="w-10 h-10" />,
  Bug: <Bug className="w-10 h-10" />,
};

export const categoryTheme: Record<string, { gradient: string; bg: string; border: string; hover: string }> = {
  'AWS Cloud': {
    gradient: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    hover: 'hover:border-orange-500/50',
  },
  'ISTQB Testing': {
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hover: 'hover:border-blue-500/50',
  },
};

export const getCategoryTheme = (category: string) => {
  return categoryTheme[category] || categoryTheme['AWS Cloud'];
};

export const getIcon = (iconName: string, className: string = 'w-10 h-10') => {
  const icons: Record<string, LucideIcon> = { Brain, Cloud, Bug };
  const Icon = icons[iconName];
  return Icon ? <Icon className={className} /> : <Brain className={className} />;
};
