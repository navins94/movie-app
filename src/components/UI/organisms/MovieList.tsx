/** @jsxImportSource @emotion/react */
import React, {
  useState,
  useLayoutEffect,
  useRef,
  useMemo,
  useEffect,
} from "react";
import { Box, CardActionArea, Grid } from "@mui/material";
import useChunkedData from "../../../hooks/useChunkedData";
import { Movie } from "../../../types";
import MovieItem from "../molecules/MovieItem";
import MovieDetailCard from "../molecules/MovieDetail";
import Content from "../molecules/animation/Content";
import Container from "../molecules/animation/Container";
import { useMediaQuery } from "@mui/material";
import {
  smoothScroll,
  getScrollOffset,
  isMobileDevice,
} from "../../../utils/scrollUtils";

interface MovieListProps {
  movies: Movie[];
}

interface Position {
  x: number;
  y: number;
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [animation, setAnimation] = useState({
    animate: false,
    shrink: false,
    showContent: false,
  });
  const [selected, setSelected] = useState<{
    row: number | null;
    item: number | null;
  }>({ row: null, item: null });

  const [height, setHeight] = useState(0);
  const previousClick = useRef<{ row: number | null; item: number | null }>({
    row: null,
    item: null,
  });
  const [previousRow, setPreviousRow] = useState<number | null>(null);

  const heightRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

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

  const updateCurrentSelection = (rowIndex: number, itemIndex: number) => {
    previousClick.current = { row: rowIndex, item: itemIndex };

    if (previousRow !== rowIndex) {
      setAnimation((prevState) => ({ ...prevState, showContent: false }));
    }

    setPreviousRow(rowIndex);
  };

  const isNewSelection = (rowIndex: number, itemIndex: number) => {
    return (
      previousClick.current.row === null ||
      previousClick.current.item === null ||
      previousClick.current.row !== rowIndex ||
      previousClick.current.item !== itemIndex
    );
  };

  const prepareForNewSelection = () => {
    setAnimation((prevState) => ({
      ...prevState,
      animate: true,
      shrink: false,
    }));
    setHeight(0);
  };

  const expandSelection = () => {
    setAnimation((prevState) => ({
      ...prevState,
      animate: true,
      shrink: false,
      showContent: false,
    }));
    setHeight(heightRef.current?.offsetHeight || 0);
  };

  const collapseSelection = () => {
    setAnimation((prevState) => ({
      ...prevState,
      animate: false,
      shrink: true,
      showContent: false,
    }));
    setHeight(0);
  };

  const handleSameSelection = () => {
    if (animation.shrink) {
      expandSelection();
    } else {
      collapseSelection();
    }
  };

  const handleClick = (rowIndex: number, itemIndex: number) => {
    if (isNewSelection(rowIndex, itemIndex)) {
      prepareForNewSelection();
    } else {
      handleSameSelection();
    }

    updateCurrentSelection(rowIndex, itemIndex);
    setSelected({ row: rowIndex, item: itemIndex });
  };

  const handleAnimationComplete = () => {
    if (!animation.shrink) {
      setAnimation((prevState) => ({ ...prevState, showContent: true }));
    }
  };

  // remove detail view on broweser resize
  useEffect(() => {
    setSelected({ row: null, item: null });
  }, [chunkSize]);

  useLayoutEffect(() => {
    const heightRefCurrent = heightRef.current;

    const updateHeight = () => {
      if (heightRefCurrent) {
        setHeight(heightRefCurrent.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [selected, heightRef.current]);

  useEffect(() => {
    const scrollToBox = () => {
      if (!boxRef.current) return;

      const rect = boxRef.current.getBoundingClientRect();
      const targetTop =
        rect.top + getScrollOffset() - (isMobileDevice() ? 100 : 200);
      smoothScroll(targetTop);
    };

    if (selected.row !== null) {
      scrollToBox();
    }
  }, [selected.row]);

  return (
    <>
      {data?.map((movies, rowIndex) => (
        <Box key={rowIndex}>
          {selected.row === rowIndex && selected.item !== null && (
            <Box
              ref={boxRef}
              sx={{
                height: animation.shrink ? "0px" : `${height}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  selected.row === rowIndex ? "1s ease-out" : "0.6s ease-in",
                transitionDelay: animation.shrink ? "0.8s" : "0s",
                marginBottom: animation.shrink ? "0px" : "40px",
                position: "relative",
                overflow: "hidden",
              }}
              onTransitionEnd={() => {
                if (!animation.animate) setSelected({ ...selected, row: null });
              }}
            >
              <Container
                animate={animation.animate}
                shrink={animation.shrink}
                onAnimationEnd={handleAnimationComplete}
              >
                <Content
                  animate={animation.animate}
                  animation="fadeIn"
                  delay={1.4}
                >
                  <Box ref={heightRef}>
                    <MovieDetailCard
                      movie={data[rowIndex][selected.item]}
                      animate={animation.showContent}
                    />
                  </Box>
                </Content>
              </Container>
            </Box>
          )}
          <Grid
            container
            spacing={3}
            alignItems="stretch"
            sx={{
              transition: animation.animate ? "0.6s ease-in" : "0px",
            }}
          >
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
                  sx={{
                    border:
                      selected.item === itemIndex &&
                      selected.row === rowIndex &&
                      !animation.shrink
                        ? "3px solid #00E0FF"
                        : "0px",
                    borderRadius: "11px",
                  }}
                  onClick={() => handleClick(rowIndex, itemIndex)}
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
