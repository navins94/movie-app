import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import MainLayout from "./components/Pages/MainLayout";
import MoviesPage from "./components/Pages/MoviesPage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import { MoviesProvider } from "./context/MoviesContext";
import ThemeProvider from "./context/ThemeContext/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <MoviesProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MoviesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </MoviesProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
