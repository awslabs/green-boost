// @ts-nocheck
import { Hello } from "@/app/hello/[name]/Hello";

interface PageProps {
  params: { name: string };
}

export default function Page(props: PageProps) {
  const {
    params: { name },
  } = props;
  return <Hello name={name} />;
}
