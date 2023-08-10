// @ts-nocheck
import { grey } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

/**
 * Brand Colors
 */
export const colors = {
  carrot: "#f56600",
  gulf: "#9ddde9",
  lagoon: "#36c2b4",
  shortbread: "#ffedcc",
  skate: "#00678c",
  summer: "#ffc400",
};

const GoogleInterFont = Inter({ subsets: ["latin"] });

export const theme = extendTheme({
  components: {
    MuiListItem: {
      styleOverrides: {},
    }, // TODO: make nav list on focus not same gray as main bg
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: grey[50],
        },
        primary: {
          main: colors.lagoon,
        },
        secondary: {
          main: colors.summer,
        },
      },
    },
  },
  typography: {
    fontFamily: GoogleInterFont.style.fontFamily,
  },
});
