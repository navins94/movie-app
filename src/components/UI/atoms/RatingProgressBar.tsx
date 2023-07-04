import React, { useState, useEffect } from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

interface RatingProgressBarProps {
  value: number;
  max: number;
  animate: boolean;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.background.default,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.info.main,
  },
}));

const RatingProgressBar: React.FC<RatingProgressBarProps> = ({
  value,
  max,
  animate,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressAnimation: number | undefined;

    if (animate) {
      progressAnimation = window.setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < value ? prevProgress + 1 : value
        );
      }, 10);
    }

    return () => {
      if (progressAnimation !== undefined) {
        clearInterval(progressAnimation);
      }
    };
  }, [value, animate]);

  if (isNaN(value) || isNaN(max)) {
    return (
      <Typography
        variant="body2"
        color="textPrimary"
        fontSize={16}
        fontWeight={600}
      >
        Rating Not Available
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: 150 }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={(progress / max) * 100}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="textPrimary"
          fontSize={16}
          fontWeight={600}
        >{`${value}/${max}`}</Typography>
      </Box>
    </Box>
  );
};

export default RatingProgressBar;
