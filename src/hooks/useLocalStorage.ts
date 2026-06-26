import { useState, useCallback } from 'react';
import { logger } from '@/lib/logger';

function getInitialValue<T>(key: string, initialValue: T): T {
  if (typeof window === 'undefined') return initialValue;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    logger.warn('Failed to parse localStorage value, falling back to default', {
      key,
      error: error instanceof Error ? error.message : String(error),
    });
    return initialValue;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => getInitialValue(key, initialValue));

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        setStoredValue((prev) => {
          const newValue = value instanceof Function ? value(prev) : value;
          window.localStorage.setItem(key, JSON.stringify(newValue));
          return newValue;
        });
      } catch (error) {
        logger.error(
          'Failed to write localStorage value',
          { key },
          error instanceof Error ? error : new Error(String(error))
        );
      }
    },
    [key]
  );

  return [storedValue, setValue];
}
