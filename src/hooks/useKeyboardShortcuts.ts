'use client';

import { useEffect, useRef } from 'react';

export type KeyboardShortcutHandler = (e: KeyboardEvent) => void;

/**
 * Attaches a global keyboard listener that fires the given handler.
 * The handler is stored in a ref so callers can pass an inline function
 * without causing the effect to re-run on every render.
 */
export function useGlobalKeydown(handler: KeyboardShortcutHandler) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    const stableHandler: KeyboardShortcutHandler = (e) => handlerRef.current(e);
    window.addEventListener('keydown', stableHandler);
    return () => window.removeEventListener('keydown', stableHandler);
  }, []);
}

/**
 * Common guard: returns true when the keyboard event should be ignored
 * because the user is typing in a text field.
 */
export function isTypingInForm(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
}
