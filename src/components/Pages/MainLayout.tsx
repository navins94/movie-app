import { Outlet } from "react-router-dom";
import { colorConfigs } from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../UI/organisms/sidebar/Sidebar";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          marginTop: { xs: "56px", sm: "64px", md: "64px", lg: "0px" },
          flexGrow: 1,
          pt: 0,
          p: { xs: 2, md: 4, lg: 4 },
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
