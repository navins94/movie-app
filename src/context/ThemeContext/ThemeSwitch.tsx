import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@mui/material/styles";
import { THEME, useColorContext } from "./ColorModeContext";

const ThemeSwitch = () => {
  const theme = useTheme();
  const colorMode = useColorContext();
  return (
    <IconButton aria-label="theme mode" onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === THEME.DARK ? (
        <DarkModeOutlined
          sx={{ color: theme.palette.text.secondary, fontSize: 23 }}
        />
      ) : (
        <LightModeOutlinedIcon
          sx={{ color: theme.palette.text.secondary, fontSize: 23 }}
        />
      )}
    </IconButton>
  );
};

export default ThemeSwitch;
