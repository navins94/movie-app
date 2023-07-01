import React from "react";
import { Movie } from "../../../types";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { colorConfigs } from "../../../configs/colorConfigs";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <Card
      sx={{ p: 1, background: colorConfigs.cardBg, borderRadius: "11px" }}
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
              sx={{ color: colorConfigs.secondaryText }}
            />
            <AddCircleOutlineOutlinedIcon
              sx={{ color: colorConfigs.secondaryText }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieItem;
