import { Heading, Icon } from "@aws-amplify/ui-react";
import * as z from "zod";
import { Badge } from "@aws-amplify/ui-react";
import { Breakpoints, styled } from "../index.js";
import { CognitoUserStatus } from "gboost-common";

export const Container = styled("div", { display: "grid", gap: "$2" });
export const BackIcon = styled(Icon, { display: "inline", mr: "$1" });
export const Title = styled(Heading, { textAlign: "center" });

export function getFormGridCols(bps: Breakpoints): number {
  let formGridCols = 1;
  if (bps.bp2) {
    formGridCols = 2;
  }
  if (bps.bp3) {
    formGridCols = 3;
  }
  return formGridCols;
}

export function getTitleSize(bps: Breakpoints): string {
  let titleSize = "$6";
  if (bps.bp2) {
    titleSize = "$7";
  }
  if (bps.bp3) {
    titleSize = "$8";
  }
  return titleSize;
}

export const baseUserSchema = z.object({
  email: z.string().email(),
  family_name: z.string().min(1, { message: "Family Name is required" }),
  given_name: z.string().min(1, { message: "Given Name is required" }),
  groups: z.array(z.string()).min(1, { message: "Group is required" }),
  username: z.string().min(1, { message: "Username is required" }),
});

export function renderDate(dateStr: string) {
  return new Date(dateStr).toLocaleString();
}

type BadgeVariation = "info" | "error" | "warning" | "success";
const statusToVariation: Record<CognitoUserStatus, BadgeVariation> = {
  [CognitoUserStatus.Archived]: "info",
  [CognitoUserStatus.Compromised]: "error",
  [CognitoUserStatus.Confirmed]: "success",
  [CognitoUserStatus.ForceChangePassword]: "info",
  [CognitoUserStatus.ResetRequired]: "info",
  [CognitoUserStatus.Unconfirmed]: "info",
  [CognitoUserStatus.Unknown]: "warning",
};
export function renderStatus(status: CognitoUserStatus) {
  return (
    <Badge size="small" variation={statusToVariation[status]}>
      {status}
    </Badge>
  );
}
