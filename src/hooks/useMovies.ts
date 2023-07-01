import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getMovies from "../api/get-movies";
import { Movie } from "../types";

interface UseMoviesResult {
  movies: Movie[];
  loading: boolean;
  error: Error | null;
  searchName: string;
  setSearchName: (name: string) => void;
}

const useMovies = (): UseMoviesResult => {
  const location = useLocation();
  const history = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [moviesData, setMoviesData] = useState<{
    loading: boolean;
    error: Error | null;
    movies: Movie[];
  }>({
    loading: true,
    error: null,
    movies: [],
  });

  const [searchName, setSearchName] = useState<string>(
    () => searchParams.get("q") || ""
  );

  useEffect(() => {
    getMovies()
      .then((movies) => {
        setMoviesData((prevData) => ({
          ...prevData,
          movies: movies,
          loading: false,
        }));
      })
      .catch((error) => {
        setMoviesData((prevData) => ({
          ...prevData,
          error: error.Message,
          loading: false,
        }));
      });
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (searchName !== "") {
      newSearchParams.set("q", searchName);
    }
    const options = {
      search: newSearchParams.toString(),
    };
    history(options, { replace: true });
  }, [searchName]);

  const filteredMovies = useMemo(
    () =>
      moviesData?.movies.filter((movie) =>
        searchName === ""
          ? true
          : movie?.Title?.toLowerCase().includes(searchName.toLowerCase())
      ),
    [moviesData?.movies, searchName]
  );

  const memoizedSetSearchName = useCallback((name: string) => {
    setSearchName(name);
  }, []);

  return {
    movies: filteredMovies,
    loading: moviesData.loading,
    error: moviesData.error,
    searchName,
    setSearchName: memoizedSetSearchName,
  };
};

export default useMovies;
