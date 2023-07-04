import { createTheme } from "@mui/material/styles";
import { colorConfigs } from "../configs/colorConfigs";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: colorConfigs.secondary,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#273244",
            width: "9px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: colorConfigs.secondary,
            minHeight: 24,
            border: `2px solid ${colorConfigs.secondary}`,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: colorConfigs.secondary,
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: colorConfigs.secondary,
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: colorConfigs.secondary,
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: colorConfigs.secondary,
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: "#273244",
    },
    text: {
      primary: colorConfigs.primaryText,
      secondary: colorConfigs.secondaryText,
    },
    primary: {
      main: colorConfigs.primary,
    },
    secondary: {
      main: colorConfigs.secondary,
    },
    info: {
      main: colorConfigs.info,
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
  },
});

export default theme;
