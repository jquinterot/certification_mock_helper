'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import type { SavedTest } from '@/types';

const STORAGE_KEY = 'certification-exam-saved-tests';

export async function saveTestProgress(data: SavedTest): Promise<void> {
  const cookieStore = await cookies();
  const existing = cookieStore.get(STORAGE_KEY);
  const savedTests: SavedTest[] = existing ? JSON.parse(existing.value) : [];

  const index = savedTests.findIndex(t => t.id === data.id);
  if (index >= 0) {
    savedTests[index] = data;
  } else {
    savedTests.push(data);
  }

  cookieStore.set(STORAGE_KEY, JSON.stringify(savedTests), {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  revalidatePath('/');
}

export async function loadSavedTests(): Promise<SavedTest[]> {
  const cookieStore = await cookies();
  const existing = cookieStore.get(STORAGE_KEY);
  return existing ? JSON.parse(existing.value) : [];
}

export async function deleteSavedTest(id: string): Promise<void> {
  const cookieStore = await cookies();
  const existing = cookieStore.get(STORAGE_KEY);
  if (!existing) return;

  const savedTests: SavedTest[] = JSON.parse(existing.value);
  const filtered = savedTests.filter(t => t.id !== id);

  cookieStore.set(STORAGE_KEY, JSON.stringify(filtered), {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
  });

  revalidatePath('/');
}

export async function clearAllSavedTests(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(STORAGE_KEY);
  revalidatePath('/');
}
