import React, { useState } from "react";
import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
  Divider,
  AppBar,
  IconButton,
  CssBaseline,
  Box,
} from "@mui/material";
import { colorConfigs } from "../../../../configs/colorConfigs";
import sizeConfigs from "../../../../configs/sizeConfigs";
import appRoutes from "../../../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import UserImage from "../../../../assets/profile.svg";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import Search from "../../molecules/SearchBar";
import { useMoviesContext } from "../../../../context/MoviesContext";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { searchName, setSearchName } = useMoviesContext();
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up("lg"));

  const drawerVariant = isDesktopView ? "permanent" : "temporary";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toolbar = (
    <Toolbar
      sx={{
        borderBottom: "1px solid #394B61",
        paddingBottom: "10px",
      }}
    >
      <Stack
        sx={{ width: "100%" }}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton component={Link} to="/" aria-label="Movie app">
          <Avatar
            src={UserImage}
            sx={{ width: 100, height: 100 }}
            alt="profile image"
          />
        </IconButton>
        <Typography
          color="textSecondary"
          fontWeight={600}
          fontSize={20}
          sx={{ paddingTop: "15px", paddingBottom: "10px" }}
        >
          Eric Hoffman
        </Typography>
      </Stack>
    </Toolbar>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          width: { lg: `calc(100% - ${sizeConfigs.sidebar.width})` },
          ml: { lg: `${sizeConfigs.sidebar.width}` },
          position: { sm: "fixed", lg: "absolute" },
          background: "#273244",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            py: { xs: 1, lg: 4 },
            px: { lg: 6 },
            gap: "6px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              width: "100%",
              gap: "6px",
              justifyContent: { xs: "flex-end", lg: "space-between" },
            }}
          >
            <Search
              value={searchName}
              onChange={setSearchName}
              width={isDesktopView ? "50%" : "100%"}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              sx={{ mr: { xs: "-5px" } }}
            >
              <IconButton aria-label="theme mode">
                <LightModeOutlinedIcon
                  sx={{ color: colorConfigs.secondaryText, fontSize: 23 }}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }} aria-label="more option">
                <MoreVertIcon
                  sx={{ color: colorConfigs.secondaryText, fontSize: 32 }}
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: sizeConfigs.sidebar.width }, flexShrink: { sm: 0 } }}
        aria-label="movie routes"
      >
        <Drawer
          variant={drawerVariant}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              width: sizeConfigs.sidebar.width,
              boxSizing: "border-box",
              borderRight: "0px",
              backgroundColor: colorConfigs.primary,
              padding: "40px 0px",
            },
          }}
        >
          <List disablePadding>
            {toolbar}
            {appRoutes.map((group, index) => (
              <React.Fragment key={index}>
                <List sx={{ pb: "15px", pt: "15px" }}>
                  {group.map((route, index) =>
                    route.sidebarProps ? (
                      <SidebarItem
                        item={route}
                        key={index}
                        onClose={handleDrawerToggle}
                      />
                    ) : null
                  )}
                </List>
                {index !== appRoutes.length - 1 && (
                  <Divider sx={{ background: "#394B61" }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
