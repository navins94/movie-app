import MoviesPage from "../components/Pages/MoviesPage";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { RouteType } from "./config";

const appRoutes: RouteType[][] = [
  [
    {
      index: true,
      path: "/",
      element: <MoviesPage />,
      state: "discover",
      sidebarProps: {
        displayText: "Discover",
        icon: <SearchIcon />,
      },
    },
    {
      path: "/playlist",
      element: <MoviesPage />,
      state: "playlist",
      sidebarProps: {
        displayText: "Playlist",
        icon: <PlaylistPlayIcon />,
      },
    },
    {
      path: "/movie",
      element: <MoviesPage />,
      state: "movie",
      sidebarProps: {
        displayText: "Movie",
        icon: <LiveTvIcon />,
      },
    },
    {
      path: "/tVShows",
      element: <MoviesPage />,
      state: "tVShows",
      sidebarProps: {
        displayText: "TV Shows",
        icon: <TvIcon />,
      },
    },
    {
      path: "/mYList",
      element: <MoviesPage />,
      state: "mYList",
      sidebarProps: {
        displayText: "My List",
        icon: <FormatListBulletedIcon />,
      },
    },
  ],
  [
    {
      path: "/watchLater",
      element: <MoviesPage />,
      state: "watchLater",
      sidebarProps: {
        displayText: "Watch Later",
        icon: <UpdateOutlinedIcon />,
      },
    },
    {
      path: "/recomended",
      element: <MoviesPage />,
      state: "recomended",
      sidebarProps: {
        displayText: "Recomended",
        icon: <FavoriteBorderIcon />,
      },
    },
  ],
  [
    {
      path: "/settings",
      element: <MoviesPage />,
      state: "settings",
      sidebarProps: {
        displayText: "Settings",
        icon: <SettingsOutlinedIcon />,
      },
    },
    {
      path: "/logout",
      element: <MoviesPage />,
      state: "logout",
      sidebarProps: {
        displayText: "Logout",
        icon: <LogoutOutlinedIcon />,
      },
    },
  ],
];

export default appRoutes;
