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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchName, setSearchName] = useState<string>(
    () => searchParams.get("q") || ""
  );

  useEffect(() => {
    setLoading(true);
    getMovies()
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
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
      movies.filter((movie) =>
        searchName === ""
          ? true
          : movie?.Title?.toLowerCase().includes(searchName.toLowerCase())
      ),
    [movies, searchName]
  );

  const memoizedSetSearchName = useCallback((name: string) => {
    setSearchName(name);
  }, []);

  return {
    movies: filteredMovies,
    loading,
    error,
    searchName,
    setSearchName: memoizedSetSearchName,
  };
};

export default useMovies;
