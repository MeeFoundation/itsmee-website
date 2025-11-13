type ObserveProps = {
  target: HTMLElement;
  onIntersect: () => void;
  onLeave?: () => void;
};

export const observeSlider = (props: ObserveProps) => {
  const { target, onIntersect, onLeave } = props;

  if (!target) {
    console.warn("No target for observeSlider");
    return;
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onIntersect();
      } else {
        onLeave && onLeave();
      }
    });
  }, options);

  observer.observe(target);
};
