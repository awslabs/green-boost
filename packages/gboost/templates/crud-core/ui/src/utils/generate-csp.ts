interface AddCspProps {
  nonce: string;
}

/**
 * @see https://github.com/vercel/next.js/issues/43743#issuecomment-1542684019
 */
export function generateCsp({ nonce }: AddCspProps) {
  let styleSrcElemCsp = `style-src-elem 'self'`;
  let scriptSrcCsp = `script-src 'self' 'nonce-${nonce}'`;
  if (process.env.NODE_ENV !== "production") {
    scriptSrcCsp += " 'unsafe-eval'; "; // required for webpack sourcemap code
    styleSrcElemCsp += " 'unsafe-inline'; "; // needed for Next.js error screens
  } else {
    scriptSrcCsp += "; ";
    styleSrcElemCsp += ` 'nonce-${nonce}'; `;
  }
  return (
    "default-src 'self' https://*.amazonaws.com; " +
    styleSrcElemCsp +
    // mui uses emotion which dynamically adds inline styles so must use
    // 'unsafe-inline' for now. can remove once https://github.com/mui/material-ui/issues/34826 is resolved
    "style-src-attr 'unsafe-inline'; " +
    scriptSrcCsp
  );
}
