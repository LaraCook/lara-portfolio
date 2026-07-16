import { createTheme } from "@mui/material/styles";

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
      main: "#9E2A2B",
      dark: "#6B1D1E",
      light: "#C4514F",
    },
    secondary: {
      main: "#355E63",
      light: "#4A8B91",
      dark: "#1E3A3D",
    },
    accent: {
      main: "#DF9F3E",
      light: "#E8B96A",
      dark: "#B8842F",
    },
    background: {
      default: "#F1E5CF",
      paper: "#EDCA9A",
    },
  },
  typography: {
    fontFamily: "var(--font-lato), Arial, Helvetica, sans-serif",
    h1: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
      fontWeight: 500,
      letterSpacing: "0.05em",
      fontSize: "10rem",
    },
    h2: {
      fontFamily: "var(--font-londrina-solid), var(--font-lato), sans-serif",
      textTransform: "uppercase",
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
      fontWeight: 900,
      letterSpacing: "0.05em",
      fontSize: "1.5rem",
    },
    body1: {
      fontWeight: 200,
      letterSpacing: "0.2em",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
      letterSpacing: "0em",
    },
  },
});

export default theme;
