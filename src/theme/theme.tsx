import { createTheme } from "@mui/material/styles";

const primary = "#B6462F";
const primaryLight = "#d97a68";
const primaryDark = "#8a3422";

const secondary = "#355E63";
const secondaryLight = "#5a898e";
const secondaryDark = "#234043";

const accent = "#E7B347";
const accentLight = "#f0d192";
const accentDark = "#b58e36";

const backgroundLight = "#F1E5CF";
const backgroundDark = "#EDCA9A";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      light: primaryLight,
      dark: primaryDark,
    },
    secondary: {
      main: secondary,
      light: secondaryLight,
      dark: secondaryDark,
    },
    accent: {
      main: accent,
      light: accentLight,
      dark: accentDark,
    },
    background: {
      default: backgroundLight,
      paper: backgroundDark,
    },
  },
  typography: {
    fontFamily: "var(--font-lato), Arial, Helvetica, sans-serif",
    h1: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
      fontWeight: 500,
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
    },
    h3: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
    },
    h4: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
    },
    h5: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
    },
    h6: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
    },
  },
});

export default theme;
