import type { AppSyncIdentityCognito, AppSyncResolverEvent } from "aws-lambda";

// create custom type so consumer doesn't have to assert groups exist
interface AppSyncIdentityCognitoCustom extends AppSyncIdentityCognito {
  groups: string[];
}

export function getCognitoIdentity(
  e: AppSyncResolverEvent<unknown>,
): AppSyncIdentityCognitoCustom {
  const identity = e.identity as AppSyncIdentityCognitoCustom;
  if (identity?.groups !== null) {
    return identity;
  } else {
    throw new Error(
      "AppSyncResolverEvent does not have cognito identity with groups",
    );
  }
}
