import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { colorConfigs } from "../../configs/colorConfigs";
import SpinnerComponent from "../UI/atoms/Spinner";
import SearchBar from "../UI/molecules/SearchBar";
import useMovies from "../../hooks/useMovies";

const MoviesPage: React.FC = () => {
  const { movies, loading, error, searchName, setSearchName } = useMovies();

  console.log(movies);

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Box sx={{ py: 0, px: { xs: 0, sm: 1, md: 2 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <SearchBar value={searchName} onChange={setSearchName} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            display={{ xs: "none", sm: "none", md: "initial", lg: "initial" }}
          >
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <IconButton>
                <LightModeOutlinedIcon
                  sx={{ color: colorConfigs.secondaryText, fontSize: 23 }}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <MoreVertIcon
                  sx={{ color: colorConfigs.secondaryText, fontSize: 32 }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MoviesPage;
