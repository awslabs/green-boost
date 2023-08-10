// @ts-nocheck
import { Goodbye } from "./Goodbye";

interface PageProps {
  params: { name: string };
}

export default function Page(props: PageProps) {
  const {
    params: { name },
  } = props;
  return <Goodbye name={name} />;
}
