/**
 * Structured client-side logger.
 *
 * Zero dependencies, tree-shakeable, and sink-pluggable. Every entry carries
 * a level, message, ISO timestamp, optional context object, and optional
 * serialized error. By default entries are written to the browser console
 * (one of `console.debug|info|warn|error` depending on level). Additional
 * sinks (Sentry, HTTP, etc.) can be registered via `addSink`.
 *
 * In production builds, `debug` entries are dropped before reaching any sink
 * to keep bundles and runtime overhead minimal. Sensitive context keys
 * (password, token, etc.) are redacted automatically.
 *
 * Sink errors are caught and swallowed: a broken sink must never crash the
 * app or prevent other sinks from receiving the entry.
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type LogContext = Record<string, unknown>;

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: LogContext;
  error?: { name: string; message: string; stack?: string };
}

export type LogSink = (entry: LogEntry) => void;

const SENSITIVE_KEYS = new Set([
  'password',
  'token',
  'secret',
  'authorization',
  'cookie',
  'apikey',
  'api_key',
  'api-key',
]);

const REDACTED = '[redacted]';

function sanitizeContext(ctx: LogContext | undefined): LogContext | undefined {
  if (!ctx) return undefined;
  const out: LogContext = {};
  for (const [key, value] of Object.entries(ctx)) {
    out[key] = SENSITIVE_KEYS.has(key.toLowerCase()) ? REDACTED : value;
  }
  return out;
}

const isProduction =
  typeof process !== 'undefined' && process.env.NODE_ENV === 'production';

const consoleSink: LogSink = (entry) => {
  const { level, message, context, error, timestamp } = entry;
  const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
  const meta: Record<string, unknown> = { ...(context ?? {}) };
  if (error) meta.error = error;
  const args = Object.keys(meta).length > 0 ? [prefix, message, meta] : [prefix, message];
  switch (level) {
    case 'debug':
      console.debug(...args);
      break;
    case 'info':
      console.info(...args);
      break;
    case 'warn':
      console.warn(...args);
      break;
    case 'error':
      console.error(...args);
      break;
  }
};

const sinks = new Set<LogSink>([consoleSink]);

/**
 * Register a sink to receive every log entry. Returns a cleanup function
 * that removes the sink.
 */
export function addSink(sink: LogSink): () => void {
  sinks.add(sink);
  return () => {
    sinks.delete(sink);
  };
}

function emit(
  level: LogLevel,
  message: string,
  context?: LogContext,
  error?: Error
): void {
  if (level === 'debug' && isProduction) return;
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    context: sanitizeContext(context),
    error: error
      ? { name: error.name, message: error.message, stack: error.stack }
      : undefined,
  };
  sinks.forEach((sink) => {
    try {
      sink(entry);
    } catch {
      // A broken sink must never crash the app or block other sinks.
    }
  });
}

export const logger = {
  debug(message: string, context?: LogContext): void {
    emit('debug', message, context);
  },
  info(message: string, context?: LogContext): void {
    emit('info', message, context);
  },
  warn(message: string, context?: LogContext): void {
    emit('warn', message, context);
  },
  error(message: string, context?: LogContext, error?: Error): void {
    emit('error', message, context, error);
  },
};

export type Logger = typeof logger;
