// https://github.com/terkelg/prompts/issues/252#issuecomment-778683666
export function handleAborted({ aborted }: { aborted: boolean }) {
  if (aborted) {
    console.log("\nStopping. Goodbye 👋");
    process.nextTick(() => process.exit(0));
  }
}
