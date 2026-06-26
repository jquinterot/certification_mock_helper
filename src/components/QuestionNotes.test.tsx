import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionNotes } from './QuestionNotes';
import { awsDarkTheme } from '@/lib/theme';

const NOTE_KEY = 'certification-exam-question-notes';

beforeEach(() => {
  window.localStorage.clear();
});

describe('QuestionNotes', () => {
  it('shows "Add Note" when there is no note', () => {
    render(<QuestionNotes noteKey="q1" theme={awsDarkTheme} />);
    expect(screen.getByText('Add Note')).toBeInTheDocument();
  });

  it('shows "Edit Note" when a note already exists', () => {
    window.localStorage.setItem(NOTE_KEY, JSON.stringify({ q1: 'My note' }));
    render(<QuestionNotes noteKey="q1" theme={awsDarkTheme} />);
    expect(screen.getByText('Edit Note')).toBeInTheDocument();
  });

  it('expands the textarea when clicked', () => {
    render(<QuestionNotes noteKey="q1" theme={awsDarkTheme} />);
    fireEvent.click(screen.getByText('Add Note'));
    expect(screen.getByPlaceholderText(/Write your study notes/)).toBeInTheDocument();
  });

  it('saves the note on textarea blur', () => {
    render(<QuestionNotes noteKey="q1" theme={awsDarkTheme} />);
    fireEvent.click(screen.getByText('Add Note'));
    const textarea = screen.getByPlaceholderText(/Write your study notes/);
    fireEvent.change(textarea, { target: { value: 'Hello world' } });
    fireEvent.blur(textarea);
    const stored = JSON.parse(window.localStorage.getItem(NOTE_KEY) || '{}');
    expect(stored.q1).toBe('Hello world');
  });

  it('shows the "has note" indicator when a note exists and section is collapsed', () => {
    window.localStorage.setItem(NOTE_KEY, JSON.stringify({ q1: 'My note' }));
    render(<QuestionNotes noteKey="q1" theme={awsDarkTheme} />);
    expect(screen.getByText('has note')).toBeInTheDocument();
  });
});
