'use client';

import { useState, useCallback } from 'react';
import { StickyNote, ChevronDown, ChevronUp } from 'lucide-react';
import type { Theme } from '@/lib/theme';
import { useNotes } from '@/hooks/useNotes';

interface QuestionNotesProps {
  noteKey: string;
  theme: Theme;
}

export function QuestionNotes({ noteKey, theme }: QuestionNotesProps) {
  const { getNote, saveNote } = useNotes();
  const [text, setText] = useState(() => getNote(noteKey));
  const [expanded, setExpanded] = useState(false);

  const handleSave = useCallback(() => {
    saveNote(noteKey, text);
  }, [noteKey, text, saveNote]);

  const hasNote = getNote(noteKey).trim().length > 0;

  return (
    <div className="mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-2 text-sm ${theme.bgTextSecondary} hover:${theme.bgText} transition-colors`}
      >
        <StickyNote className="w-4 h-4" />
        <span>{hasNote ? 'Edit Note' : 'Add Note'}</span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {hasNote && !expanded && (
          <span className="text-xs text-yellow-400">has note</span>
        )}
      </button>

      {expanded && (
        <div className="mt-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleSave}
            placeholder="Write your study notes here..."
            className={`w-full p-3 rounded-xl border ${theme.borderColor} ${theme.bgCard} ${theme.bgText} text-sm resize-y min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
          />
          <p className={`text-xs ${theme.bgTextSecondary} mt-1`}>Notes are saved automatically.</p>
        </div>
      )}
    </div>
  );
}