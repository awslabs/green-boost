import { Button } from "@aws-amplify/ui-react";
import { styled } from "../stitches.config.js";

export const StyledButton = styled(Button, {
  variants: {
    color: {
      success: {
        bc: "$success9",
        color: "white !important",
        "&:hover": {
          bc: "$success10 !important",
        },
        "&:focus": {
          bc: "$success10 !important",
        },
      },
      error: {
        bc: "$error9",
        color: "white !important",
        "&:hover": {
          bc: "$error10 !important",
        },
        "&:focus": {
          bc: "$error10 !important",
        },
      },
      info: {
        bc: "$info9",
        color: "white !important",
        "&:hover": {
          bc: "$info10 !important",
        },
        "&:focus": {
          bc: "$info10 !important",
        },
      },
      warn: {
        bc: "$warn9",
        color: "$warn12 !important",
        "&:hover": {
          bc: "$warn10 !important",
        },
        "&:focus": {
          bc: "$warn10 !important",
        },
      },
      primary: {
        bc: "$primary9",
        color: "$primary12 !important",
        "&:hover": {
          bc: "$primary10 !important",
        },
        "&:focus": {
          bc: "$primary10 !important",
        },
      },
      secondary: {
        bc: "$secondary9",
        color: "$secondary12 !important",
        "&:hover": {
          bc: "$secondary10 !important",
        },
        "&:focus": {
          bc: "$secondary10 !important",
        },
      },
    },
  },
});
