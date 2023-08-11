import { useEffect, useRef } from "react";

/**
 * Utility debugging function to trace which props are updating in component.
 * Changed props will be printed to console. Accepts props or any variable.
 * Also useful for debugging useEffect dependency arrays
 * @link https://stackoverflow.com/a/51082563/9658768
 * @example
 * ```ts
 * function MyComponent(props) {
 *   useTraceUpdate(props);
 *   return <div>{props.children}</div>;
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useTraceUpdate(props: any) {
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {} as Record<string, unknown>);
    if (Object.keys(changedProps).length > 0) {
      console.log("Changed props:", changedProps);
    }
    prev.current = props;
  });
}
