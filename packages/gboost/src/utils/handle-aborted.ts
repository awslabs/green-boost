// https://github.com/terkelg/prompts/issues/252#issuecomment-778683666
export function handleAborted({ aborted }: { aborted: boolean }) {
  if (aborted) {
    process.nextTick(() => {
      console.log("\nStopping. Goodbye 👋");
      process.exit(0);
    });
  }
}
