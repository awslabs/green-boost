import { GroupType } from "@aws-sdk/client-cognito-identity-provider";

export interface Group {
  createdAt: string;
  description: string;
  name: string;
  precedence: number;
  updatedAt: string;
}

export function transformGroup(group: GroupType): Group {
  if (!group.CreationDate) throw new Error("group.CreationDate is undefined");
  if (!group.LastModifiedDate)
    throw new Error("group.LastModifiedDate is undefined");
  return {
    createdAt: group.CreationDate.toISOString(),
    description: group.Description as string,
    name: group.GroupName as string,
    precedence: group.Precedence as number,
    updatedAt: group.LastModifiedDate.toISOString(),
  };
}

function getArrayEnvVar(name: string): string[] {
  try {
    const groupNames = JSON.parse(process.env[name] as string);
    if (!Array.isArray(groupNames)) {
      throw new Error(`Environment variable ${name} is not an array`);
    }
    return groupNames;
  } catch {
    throw new Error(`Environment variable ${name} cannot be parsed`);
  }
}

export const adminGroupNames = process.env.ADMIN_GROUP_NAMES
  ? getArrayEnvVar("ADMIN_GROUP_NAMES")
  : ["Admin"];

export const groupNames = process.env.GROUP_NAMES
  ? getArrayEnvVar("GROUP_NAMES")
  : ["Admin", "User", "UserReadOnly"];
