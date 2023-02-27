import type { PreTokenGenerationTriggerHandler } from "aws-lambda";

export const handler: PreTokenGenerationTriggerHandler = async (event) => {
  const groups = event.request.userAttributes["custom:groups"];
  if (groups) {
    event.response = {
      claimsOverrideDetails: {
        groupOverrideDetails: {
          groupsToOverride: [groups],
        },
      },
    };
  }
  return event;
};
