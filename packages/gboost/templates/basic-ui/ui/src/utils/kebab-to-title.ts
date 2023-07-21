export function kebabToTitle(value: string): string {
  const words = value
    .split("-")
    .map((w) => w.at(0)?.toUpperCase() + w.slice(1));
  return words.join(" ");
}
