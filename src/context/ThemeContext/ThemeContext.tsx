import { useState, useMemo, useCallback } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

import { ColorModeContext, THEME } from "./ColorModeContext";
import { lightTheme, darkTheme } from "../../themes/theme";

type Props = {
  children?: React.ReactNode;
};

export const ToggleColorMode = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>(THEME.LIGHT);

  const toggleColorMode = useCallback(() => {
    setMode((prevMode: PaletteMode) =>
      prevMode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    );
  }, []);

  const value = useMemo(
    () => ({
      currentTheme: mode,
      toggleColorMode,
    }),
    [mode, toggleColorMode]
  );

  const theme = useMemo(
    () => createTheme(mode === THEME.LIGHT ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
