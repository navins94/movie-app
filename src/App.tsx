import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colorConfigs } from "./configs/colorConfigs";
import { CssBaseline } from "@mui/material";
import MainLayout from "./components/Pages/MainLayout";
import MoviesPage from "./components/Pages/MoviesPage";
import NotFoundPage from "./components/Pages/NotFoundPage";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#273244",
            width: "9px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#394B61",
            minHeight: 24,
            border: "2px solid #394B61",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },
  palette: {
    text: {
      primary: colorConfigs.primaryText,
      secondary: colorConfigs.secondaryText,
    },
    primary: {
      main: "#1F2A3C",
    },
    secondary: {
      main: "#394B61",
    },
    info: {
      main: "#00E0FF",
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
