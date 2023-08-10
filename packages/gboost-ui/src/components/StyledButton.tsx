import { Button } from "@aws-amplify/ui-react";
import { styled } from "../stitches.config.js";
/**
 * @deprecated
 */
export const StyledButton = styled(Button, {
  "&:disabled": {
    bc: "$gray9",
  },
  variants: {
    color: {
      success: {
        bc: "$success9",
        color: "white",
        "&:hover, &:focus": {
          bc: "$success10",
          color: "white",
        },
      },
      error: {
        bc: "$error9",
        color: "white",
        "&:hover:enabled, &:focus:enabled": {
          bc: "$error10",
          color: "white",
        },
      },
      info: {
        bc: "$info9",
        color: "white",
        "&:hover:enabled, &:focus:enabled": {
          bc: "$info10",
          color: "white",
        },
      },
      warn: {
        bc: "$warn9",
        color: "$warn12",
        "&:hover:enabled, &:focus:enabled": {
          bc: "$warn10",
          color: "$warn12",
        },
      },
      primary: {
        bc: "$primary9",
        color: "$primary12",
        "&:hover:enabled, &:focus:enabled": {
          bc: "$primary10",
        },
      },
      secondary: {
        bc: "$secondary9",
        color: "$secondary12",
        "&:hover:enabled, &:focus:enabled": {
          bc: "$secondary10",
        },
      },
    },
  },
});
