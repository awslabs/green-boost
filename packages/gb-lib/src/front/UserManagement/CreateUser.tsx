import { ReactElement } from "react";

interface CreateUserProps {
  groupNameOptions: { value: string; label: string }[];
}

export function CreateUser(props: CreateUserProps): ReactElement {
  return <div>CreateUser</div>;
}
