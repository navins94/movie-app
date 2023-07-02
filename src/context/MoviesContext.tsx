import React, { createContext, useContext } from "react";
import useMovies, { UseMoviesResult } from "../hooks/useMovies";

const MoviesContext = createContext<UseMoviesResult | undefined>(undefined);

interface MoviesProviderProps {
  children: React.ReactNode;
}

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const moviesHook = useMovies();

  return (
    <MoviesContext.Provider value={moviesHook}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = (): UseMoviesResult => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMoviesContext must be used within a MoviesProvider");
  }
  return context;
};
