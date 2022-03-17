export function getArgs(answers: Record<string, string | string[]>) {
  const args: string[] = [];
  for (const [q, a] of Object.entries(answers)) {
    if (typeof a === "string") {
      args.push(`--${q}=${a}`);
    } else if (q === "features") {
      if (a.length) {
        for (const v of a) {
          args.push(`--${q}=${v}`);
        }
      } else {
        // must push empty string or features is undefined during template
        // rendering
        args.push(`--${q}=""`);
      }
    } else {
      throw new Error("Answer type conversion has not been implemented");
    }
  }
  return args;
}
