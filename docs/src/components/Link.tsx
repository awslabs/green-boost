import NextLink from "next/link";

export function Link(props: Parameters<typeof NextLink>[0]) {
  return (
    <NextLink
      className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
      {...props}
    />
  );
}
