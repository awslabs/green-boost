import { ReactNode } from "react";
import type { Accessibility } from "lucide-react";

interface FeatureProps {
  children?: ReactNode;
  description: ReactNode;
  icon: typeof Accessibility;
  title: ReactNode;
}

export function Feature(props: FeatureProps) {
  return (
    <div
      className={`max-w-lg flex flex-col gap-2 dark:text-white bg-gray-100 dark:bg-gray-900 py-6 px-7 overflow-hidden ring-1 rounded-xl`}
    >
      <div className="flex gap-3 items-center">
        <props.icon className={`text-3xl sm:text-5xl`} size="48" />
        <h3 className="text-lg sm:text-2xl">{props.title}</h3>
      </div>
      {props.description}
    </div>
  );
}
