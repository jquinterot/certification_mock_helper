import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { logger, addSink, type LogEntry, type LogSink } from './logger';

describe('logger', () => {
  let captured: LogEntry[];
  let removeSink: () => void;
  let consoleSpies: ReturnType<typeof vi.spyOn>[];

  beforeEach(() => {
    captured = [];
    removeSink = addSink((entry) => captured.push(entry));
    consoleSpies = [
      vi.spyOn(console, 'debug').mockImplementation(() => {}),
      vi.spyOn(console, 'info').mockImplementation(() => {}),
      vi.spyOn(console, 'warn').mockImplementation(() => {}),
      vi.spyOn(console, 'error').mockImplementation(() => {}),
    ];
  });

  afterEach(() => {
    removeSink();
    consoleSpies.forEach((spy) => spy.mockRestore());
  });

  it('emits info entries to all sinks with the expected shape', () => {
    logger.info('test message', { foo: 'bar' });
    expect(captured).toHaveLength(1);
    const entry = captured[0];
    expect(entry.level).toBe('info');
    expect(entry.message).toBe('test message');
    expect(entry.context).toEqual({ foo: 'bar' });
    expect(entry.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    expect(entry.error).toBeUndefined();
  });

  it('emits warn entries', () => {
    logger.warn('careful');
    expect(captured[0].level).toBe('warn');
  });

  it('emits debug entries (in non-production test env)', () => {
    logger.debug('verbose');
    expect(captured[0].level).toBe('debug');
  });

  it('emits error entries with serialized error', () => {
    const err = new Error('boom');
    logger.error('failed', { op: 'save' }, err);
    const entry = captured[0];
    expect(entry.level).toBe('error');
    expect(entry.error?.name).toBe('Error');
    expect(entry.error?.message).toBe('boom');
    expect(entry.error?.stack).toBeDefined();
    expect(entry.context).toEqual({ op: 'save' });
  });

  it('emits without context or error when not provided', () => {
    logger.info('plain');
    expect(captured[0].context).toBeUndefined();
    expect(captured[0].error).toBeUndefined();
  });

  it('removes a sink when the returned cleanup is called', () => {
    removeSink();
    logger.info('after remove');
    expect(captured).toHaveLength(0);
  });

  it('does not throw when a sink throws', () => {
    const badSink: LogSink = () => {
      throw new Error('sink broke');
    };
    const remove = addSink(badSink);
    expect(() => logger.info('hello')).not.toThrow();
    remove();
  });

  it('still delivers to other sinks when one throws', () => {
    const removeBad = addSink(() => {
      throw new Error('sink broke');
    });
    logger.info('still delivered');
    expect(captured).toHaveLength(1);
    removeBad();
  });

  it('redacts known sensitive keys in context (case-insensitive)', () => {
    logger.info('login', {
      user: 'alice',
      password: 'secret123',
      token: 'abc',
      Authorization: 'Bearer xyz',
      apiKey: 'k1',
    });
    expect(captured[0].context).toEqual({
      user: 'alice',
      password: '[redacted]',
      token: '[redacted]',
      Authorization: '[redacted]',
      apiKey: '[redacted]',
    });
  });

  it('preserves non-sensitive nested values', () => {
    logger.info('nested', { user: { name: 'alice', age: 30 } });
    expect(captured[0].context).toEqual({ user: { name: 'alice', age: 30 } });
  });

  it('writes info to console.info and error to console.error', () => {
    logger.info('via info');
    logger.error('via error');
    expect(consoleSpies[1]).toHaveBeenCalledTimes(1); // info
    expect(consoleSpies[3]).toHaveBeenCalledTimes(1); // error
  });
});
