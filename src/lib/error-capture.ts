// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

const ABORT_MESSAGE_RE = /(^|\b)(aborted|socket hang up|premature close)(\b|$)/i;

// Client disconnects (ECONNRESET / "aborted") surface as thrown errors in dev
// but are not app bugs — never record them, so they can't mask a real error.
export function isClientAbortError(error: unknown): boolean {
  let current: unknown = error;
  for (let depth = 0; depth < 5 && current && typeof current === "object"; depth++) {
    const err = current as { message?: unknown; code?: unknown; cause?: unknown };
    if (err.code === "ECONNRESET" || err.code === "ERR_STREAM_PREMATURE_CLOSE") return true;
    if (typeof err.message === "string" && ABORT_MESSAGE_RE.test(err.message)) return true;
    current = err.cause;
  }
  return false;
}

function record(error: unknown) {
  if (isClientAbortError(error)) return;
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}
