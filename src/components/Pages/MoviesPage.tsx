import React from "react";
import { Box, Typography } from "@mui/material";
import MovieList from "../UI/organisms/MovieList";
import SpinnerComponent from "../UI/atoms/Spinner";
import { useMoviesContext } from "../../context/MoviesContext";

const MoviesPage: React.FC = () => {
  const { movies, loading, error } = useMoviesContext();

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Box
        sx={{
          pb: 4,
          px: { xs: 0, sm: 1, md: 2 },
          display: "flex",
          gap: "30px",
          flexDirection: "column",
        }}
      >
        {movies.length === 0 ? (
          <Typography variant="h6" color="textSecondary">
            No results found for your search.
          </Typography>
        ) : (
          <>
            <MovieList movies={movies} />
          </>
        )}
      </Box>
    </>
  );
};

export default MoviesPage;
