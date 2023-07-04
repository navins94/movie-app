import { ThemeOptions } from "@mui/material";
import { THEME } from "../context/ThemeContext/ColorModeContext";
import { colorConfigs } from "../configs/colorConfigs";

export const darkTheme: ThemeOptions = {
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
    mode: THEME.DARK,
    background: {
      default: colorConfigs.mainBgDark,
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
};

export const lightTheme: ThemeOptions = {
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
    mode: THEME.LIGHT,
    background: {
      default: colorConfigs.mainBgDark,
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
};
