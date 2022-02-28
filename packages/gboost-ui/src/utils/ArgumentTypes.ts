//https://stackoverflow.com/questions/51851677/how-to-get-argument-types-from-function-in-typescript
// eslint-disable-next-line @typescript-eslint/ban-types
export type ArgumentTypes<F extends Function> = F extends (
  ...args: infer A
) => unknown
  ? A
  : never;
