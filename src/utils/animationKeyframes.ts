import { keyframes } from "@emotion/react";

export const expandHeight = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

export const shrinkHeight = keyframes`
  0% {
    height: 100%;
    transform: scaleY(1);
  }
  100% {
    height: 0;
    transform: scaleY(1);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
