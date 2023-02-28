interface ErrorWithMessage {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>)["message"] === "string"
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

/**
 * You can throw anything you want in JS, so TS types errors in catch blocks
 * with unknown. This utility functions enables you to safely access the error
 * message if there is one
 * @link https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
 */
export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}
