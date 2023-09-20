import { createTheme } from "@mui/material";

//Fonts
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#009BF2",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      fontWeight: 900,
    },
  },
  shape: {
    borderRadius: 35,
  },
});
