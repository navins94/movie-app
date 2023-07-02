/** @jsxImportSource @emotion/react */
import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import { slideUp, fadeIn } from "../../../../utils/animationKeyframes";

type AnimationType = "slideUp" | "fadeIn";

interface ContentProps {
  animate: boolean;
  animation: AnimationType;
  delay?: number;
  children: React.ReactNode;
}

const getContentAnimation = (animation: AnimationType): SerializedStyles => {
  switch (animation) {
    case "slideUp":
      return slideUp;
    case "fadeIn":
      return fadeIn;
    default:
      return css``;
  }
};

const Content: React.FC<ContentProps> = ({
  animate,
  animation,
  delay = 0,
  children,
}) => {
  const animationToUse = getContentAnimation(animation);

  return (
    <div
      css={css`
        opacity: 0;
        ${animate &&
        css`
          animation: ${animationToUse} 1s forwards;
          animation-delay: ${delay}s;
        `}
      `}
    >
      {children}
    </div>
  );
};

export default Content;
