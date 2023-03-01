/**
 * camelCase to kebab-case
 * @link https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
 */
export function camelToKebab(s: string) {
  return s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * camelCase to snake_case
 * @link https://stackoverflow.com/questions/54246477/how-to-convert-camelcase-to-snake-case-in-javascript
 */
export function camelToSnake(s: string): string {
  return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

/**
 * lowercase to Pascalcase
 */
export function lowerToPascal(s: string) {
  return s[0]?.toUpperCase() + s.slice(1);
}

/**
 * Converts WidgetsDynamo to widgets-dynamo
 */
export function pascalToKebabCase(pascal: string) {
  return pascal.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
}
