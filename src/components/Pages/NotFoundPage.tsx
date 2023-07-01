import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { colorConfigs } from "../../configs/colorConfigs";
import ButtonComponent from "../UI/atoms/Button";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        minHeight: "100vh",
        backgroundColor: colorConfigs.mainBg,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <ButtonComponent variant="contained" onClick={() => navigate(-1)}>
        Back Home
      </ButtonComponent>
    </Box>
  );
};

export default NotFoundPage;
