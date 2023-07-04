import { createTheme } from "@mui/material/styles";
import { colorConfigs } from "../configs/colorConfigs";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: colorConfigs.cardBg,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#273244",
            width: "9px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: colorConfigs.cardBg,
            minHeight: 24,
            border: `2px solid ${colorConfigs.cardBg}`,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: colorConfigs.cardBg,
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: colorConfigs.cardBg,
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: colorConfigs.cardBg,
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: colorConfigs.cardBg,
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
