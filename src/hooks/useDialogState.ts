'use client';

import { useState, useCallback } from 'react';

export interface DialogState {
  showExitDialog: boolean;
  showSubmitDialog: boolean;
  openExit: () => void;
  closeExit: () => void;
  openSubmit: () => void;
  closeSubmit: () => void;
}

/**
 * Tracks the visibility of the two modal dialogs used during an exam:
 * the exit-confirmation dialog and the submit-confirmation dialog.
 */
export function useDialogState(): DialogState {
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const openExit = useCallback(() => setShowExitDialog(true), []);
  const closeExit = useCallback(() => setShowExitDialog(false), []);
  const openSubmit = useCallback(() => setShowSubmitDialog(true), []);
  const closeSubmit = useCallback(() => setShowSubmitDialog(false), []);

  return { showExitDialog, showSubmitDialog, openExit, closeExit, openSubmit, closeSubmit };
}
