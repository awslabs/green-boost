export interface Filter {
  field: string;
  operator: string;
  value: string;
}

export interface ListUsersArgs {
  input?: {
    limit?: number;
    nextToken?: string;
    filter?: Filter;
  };
}

export interface CognitoUser {
  createdAt: string;
  email: string;
  email_verified: boolean;
  enabled: boolean;
  family_name: string;
  given_name: string;
  groups: string[];
  status: CognitoUserStatus;
  updatedAt: string;
  username: string;
}

export class CreateCognitoUser implements Partial<CognitoUser> {
  email = "";
  family_name = "";
  given_name = "";
  groups: string[] = [];
  username = "";
}

export enum CognitoUserStatus {
  Unconfirmed = "UNCONFIRMED",
  Confirmed = "CONFIRMED",
  Archived = "ARCHIVED",
  Compromised = "COMPROMISED",
  Unknown = "UNKNOWN",
  ResetRequired = "RESET_REQUIRED",
  ForceChangePassword = "FORCE_CHANGE_PASSWORD",
}

export interface CognitoGroup {
  createdAt: string;
  description: string;
  name: string;
  precedence: number;
  updatedAt: string;
}
