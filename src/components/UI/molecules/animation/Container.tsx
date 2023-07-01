/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { css } from "@emotion/react";
import {
  expandHeight,
  shrinkHeight,
} from "../../../../utils/animationKeyframes";

interface AnimatedComponentProps {
  animate?: boolean;
  shrink?: boolean;
  onAnimationEnd?: () => void;
  children: React.ReactNode;
}

const Container: React.FC<AnimatedComponentProps> = ({
  animate,
  shrink,
  onAnimationEnd,
  children,
}) => {
  const handleAnimationEnd = useRef(false);

  const handleAnimationComplete = () => {
    if (!handleAnimationEnd.current) {
      handleAnimationEnd.current = true;
      onAnimationEnd?.();
    }
  };

  return (
    <div
      css={css`
        position: absolute;
        background-color: #394b61;
        width: 100%;
        height: 0;
        overflow: hidden;
        border-radius: 11px;
        ${animate &&
        css`
          animation: ${expandHeight} 1s forwards;
          animation-delay: 0.8s;
        `}
        ${shrink &&
        css`
          animation: ${shrinkHeight} 1s forwards;
        `}
      `}
      onAnimationEnd={handleAnimationComplete}
    >
      {children}
    </div>
  );
};

export default Container;
