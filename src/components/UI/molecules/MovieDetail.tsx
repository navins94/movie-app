import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Movie, MayBe } from "../../../types";
import ImageCarousel from "./ImageCarousel";
import RatingProgressBar from "../atoms/RatingProgressBar";
import ButtonComponent from "../atoms/Button";
import Content from "./animation/Content";
import { isMobileDevice } from "../../../utils/scrollUtils";

interface MovieItemProps {
  movie: Movie;
  animate: boolean;
}

const MovieDetailCard: React.FC<MovieItemProps> = ({ movie, animate }) => {
  const images = movie.Images || [];
  const value = Number(movie.imdbRating);
  const max = 10;

  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Card
      ref={cardRef}
      sx={{
        display: "flex",
        borderRadius: "11px",
        maxHeight: "100%",
        background: "transparent",
        boxShadow: "none",
        flexDirection: {
          xs: "column",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
        },
      }}
    >
      <ImageCarousel images={images} />
      <Content animate={animate} animation="slideUp" delay={0.3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            py: { sm: 1, md: 2 },
            px: { sm: 2, md: 4 },
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, md: 2 },
              }}
            >
              <Typography
                variant="h2"
                fontSize={{
                  lg: 36,
                  md: 32,
                  sm: 28,
                  xs: 24,
                }}
                fontWeight={700}
                color="textSecondary"
              >
                {movie.Title}
              </Typography>
              <RatingProgressBar value={value} max={max} animate={animate} />
              <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <MovieDetailsItem label="Year" value={movie.Year} />
                <MovieDetailsItem label="Running Time" value={movie.Runtime} />
                <MovieDetailsItem label="Directed by" value={movie.Director} />
                <MovieDetailsItem label="Language" value={movie.Language} />
              </List>

              <Box>
                <Typography
                  fontSize={{
                    md: 14,
                    xs: 12,
                  }}
                  fontWeight={600}
                >
                  {movie.Plot}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <ButtonComponent
                  variant="contained"
                  color="info"
                  sx={{
                    fontWeight: 800,
                    textTransform: "capitalize",
                    fontSize: 16,
                    width: { xs: "100%", md: "10em" },
                  }}
                >
                  Play Movie
                </ButtonComponent>
                <ButtonComponent
                  variant="outlined"
                  color="info"
                  sx={{
                    fontWeight: 800,
                    textTransform: "capitalize",
                    fontSize: 16,
                    width: { xs: "100%", md: "10em" },
                  }}
                >
                  Watch Trailer
                </ButtonComponent>
                {isMobileDevice() && (
                  <ButtonComponent
                    variant="outlined"
                    sx={{
                      fontWeight: 800,
                      textTransform: "capitalize",
                      fontSize: 16,
                      width: { xs: "100%", md: "10em" },
                      color: "#e4e4e4",
                      borderColor: "#e4e4e4",
                    }}
                  >
                    Close
                  </ButtonComponent>
                )}
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Content>
    </Card>
  );
};

interface MovieDetailsItemProps {
  label: string;
  value: MayBe<string>;
}

const MovieDetailsItem: React.FC<MovieDetailsItemProps> = ({
  label,
  value,
}) => (
  <ListItem sx={{ p: 0 }}>
    <Typography
      component="span"
      sx={{ minWidth: 150 }}
      fontSize={{
        md: 16,
        xs: 14,
      }}
      fontWeight={600}
      color="textSecondary"
    >
      {label}:
    </Typography>
    <Typography
      component="span"
      fontSize={{
        md: 16,
        xs: 14,
      }}
      fontWeight={600}
      color="textSecondary"
    >
      {value}
    </Typography>
  </ListItem>
);

export default MovieDetailCard;
