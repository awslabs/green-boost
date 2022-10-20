import { Heading, Icon, useTheme } from "@aws-amplify/ui-react";
import * as z from "zod";
import { Badge } from "@aws-amplify/ui-react";
import { styled } from "../index.js";
import { CognitoUserStatus } from "gboost-common";
import { useMediaQuery } from "@mantine/hooks";

export const Container = styled("div", { display: "grid", gap: "$2" });
export const BackIcon = styled(Icon, { display: "inline", mr: "$1" });
export const Title = styled(Heading, { textAlign: "center" });

export function useFormGridCols() {
  const theme = useTheme();
  const mqMd = useMediaQuery(
    `(min-width: ${theme.breakpoints.values.medium}px)`
  );
  const mqLg = useMediaQuery(
    `(min-width: ${theme.breakpoints.values.large}px)`
  );
  let formGridCols = 1;
  if (mqMd) {
    formGridCols = 2;
  }
  if (mqLg) {
    formGridCols = 3;
  }
  return formGridCols;
}

export function useTitleSize() {
  const theme = useTheme();
  const mqMd = useMediaQuery(
    `(min-width: ${theme.breakpoints.values.medium}px)`
  );
  const mqLg = useMediaQuery(
    `(min-width: ${theme.breakpoints.values.large}px)`
  );
  let titleSize = "$6";
  if (mqMd) {
    titleSize = "$7";
  }
  if (mqLg) {
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
