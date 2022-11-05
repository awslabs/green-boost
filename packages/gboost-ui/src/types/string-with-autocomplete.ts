/**
 * @link https://twitter.com/diegohaz/status/1524257274012876801
 */
export type StringWithAutocomplete<T> = T | (string & Record<never, never>);
