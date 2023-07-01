import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";

interface ImageCarouselProps {
  images: string[];
  intervalDuration?: number;
  imageWidth?: string;
  imageHeight?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  intervalDuration = 3000,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, intervalDuration);

    return () => {
      clearInterval(timer);
    };
  }, [images, intervalDuration]);

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 260, md: 300, lg: 340 },
      }}
    >
      <CardMedia
        src={images[currentImage]}
        component="img"
        sx={{
          width: "inherit",
          objectFit: "cover",
          height: { xs: "300px", sm: "100%", md: "100%", lg: "100%" },
        }}
      />
    </Box>
  );
};

export default ImageCarousel;
