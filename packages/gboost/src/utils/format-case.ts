/**
 * Converts WidgetsDynamo to widgets-dynamo
 */
export function pascalToKebabCase(pascal: string) {
  return pascal.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
}
