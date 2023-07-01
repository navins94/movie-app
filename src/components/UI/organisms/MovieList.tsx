/** @jsxImportSource @emotion/react */
import React, { useState, useMemo, useEffect } from "react";
import { Box, CardActionArea, Grid } from "@mui/material";
import useChunkedData from "../../../hooks/useChunkedData";
import { Movie } from "../../../types";
import MovieItem from "../molecules/MovieItem";
import { useMediaQuery } from "@mui/material";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [selected, setSelected] = useState<{
    row: number | null;
    item: number | null;
  }>({ row: null, item: null });

  const isXs = useMediaQuery("(max-width:599px)");
  const isSm = useMediaQuery("(max-width:899px)");
  const isMd = useMediaQuery("(max-width:1199px)");
  const isLg = useMediaQuery("(min-width:1200px)");

  const chunkSize = useMemo(() => {
    let chunkSize = 5;
    if (isXs || isSm) {
      chunkSize = 2;
    } else if (isMd && !isLg) {
      chunkSize = 3;
    }

    return chunkSize;
  }, [isXs, isSm, isMd, isLg]);

  const data = useChunkedData(movies, chunkSize);

  const [previousChunkSize, setPreviousChunkSize] = useState(chunkSize);

  useEffect(() => {
    if (previousChunkSize !== chunkSize) {
      setSelected({ row: null, item: null });
    }
    setPreviousChunkSize(chunkSize);
  }, [chunkSize, previousChunkSize]);

  const handleClick = (
    rowIndex: number,
    itemIndex: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(rowIndex, itemIndex);
  };

  return (
    <>
      {data?.map((movies, rowIndex) => (
        <Box key={rowIndex}>
          <Grid container spacing={3} alignItems="stretch">
            {movies.map((movie, itemIndex) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={12 / 5}
                xl={12 / 5}
                key={movie.Title}
              >
                <CardActionArea
                  sx={{ borderRadius: "11px" }}
                  onClick={(e) => handleClick(rowIndex, itemIndex, e)}
                >
                  <MovieItem key={movie.Title} movie={movie} />
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default MovieList;
