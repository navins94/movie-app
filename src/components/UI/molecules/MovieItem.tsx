import React from "react";
import { Movie } from "../../../types";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface MovieItemProps {
  movie: Movie;
  selected?: boolean;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, selected }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        p: "6px",
        background: theme.palette.secondary.main,
        borderRadius: "11px",
        border: selected
          ? `3px solid ${theme.palette.info.main}`
          : `3px solid ${theme.palette.secondary.main}`,
      }}
      elevation={0}
    >
      <Box sx={{ borderRadius: "6px", overflow: "hidden" }}>
        <CardMedia
          sx={{
            height: { xs: 178, sm: 280, md: 200, lg: 188, xl: 280 },
            backgroundPosition: "top",
          }}
          image={movie.Poster}
          title={`${movie?.Title}`}
        />
      </Box>
      <CardContent sx={{ px: 0, paddingBottom: "8px !important" }}>
        <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
          <Typography
            variant="h2"
            fontSize={15}
            fontWeight={600}
            sx={{
              m: 0,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWdth: "inherit",
              overflow: "hidden",
            }}
            color="textSecondary"
          >
            {movie.Title}
          </Typography>
          <Box sx={{ display: "flex", columnGap: "8px" }}>
            <PlayCircleFilledWhiteOutlinedIcon
              sx={{ color: theme.palette.text.secondary }}
            />
            <AddCircleOutlineOutlinedIcon
              sx={{ color: theme.palette.text.secondary }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieItem;
