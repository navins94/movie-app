import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../UI/organisms/sidebar/Sidebar";
import { Box } from "@mui/material";

const MainLayout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          marginTop: { xs: "59px", lg: "120px" },
          flexGrow: 1,
          pt: { xs: 2, lg: 0 },
          px: { xs: 2, lg: 4 },
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
