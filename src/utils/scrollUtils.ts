export const isMobileDevice = (): boolean => {
  return window.innerWidth <= 768;
};

export const getScrollOffset = (): number => {
  return window.scrollY || window.pageYOffset;
};

export const smoothScroll = (targetTop: number) => {
  const startTime = performance.now();
  const duration = 1000;
  const startTop = getScrollOffset();

  const scrollStep = (timestamp: number) => {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easing = easeInOutQuad(progress);
    const scrollTop = startTop + (targetTop - startTop) * easing;

    window.scrollTo(0, scrollTop);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  };

  requestAnimationFrame(scrollStep);
};

const easeInOutQuad = (progress: number) => {
  return progress < 0.5
    ? 2 * progress * progress
    : -1 + (4 - 2 * progress) * progress;
};
