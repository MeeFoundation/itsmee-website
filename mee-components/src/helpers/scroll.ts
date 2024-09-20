let isFirstScroll = true;

const throttle = (callback: Function, delay: number) => {
  let isWaiting = false;

  return function(...args: any) {
    if (!isWaiting) {
      callback.apply(null, args);
      isWaiting = true;
      setTimeout(() => isWaiting = false, delay);
    }
  };
};

const createScrollIndicator = (
  scrollWrap: Element, 
  direction: 'vertical' | 'horizontal', 
  scrolledElement: (Window & typeof globalThis) | HTMLDivElement
) => {
  const scrollContainer = document.createElement('div');
  const scrollIndicator = document.createElement('div');
  const parentElement = scrollWrap?.parentElement;
  const childElement = scrollWrap.firstElementChild;

  scrollContainer.classList.add(
    parentElement?.tagName === 'BODY' ? 'fixed' : 'absolute',
    "rounded",
    "border-none",
    "z-40",
    "transition",
    "duration-300",
  );

  scrollIndicator.classList.add(
    parentElement?.tagName === 'BODY' ? 'fixed' : 'absolute',
    "rounded",
    "border-none",
    "z-50",
    "transition",
    "duration-300",
  );

  direction === 'vertical' 
  ? scrollIndicator.classList.add('scrollVertical', 'right-0.5', 'w-1.5') 
  : scrollIndicator.classList.add('scrollHorizontal', 'bottom-0.5', 'h-1.5');

  direction === 'vertical' 
  ? scrollContainer.classList.add('right-0.5', 'w-1.5', 'h-full') 
  : scrollContainer.classList.add('bottom-0.5', 'h-1.5', 'w-full');

  scrollContainer.appendChild(scrollIndicator);

  childElement?.insertBefore(scrollContainer, childElement.firstElementChild);

  initScrollListeners({scrollWrap, scrolledElement, scrollIndicator, scrollContainer, direction});
};

const initScrollListeners = (
  { scrollWrap, scrolledElement, scrollIndicator, scrollContainer, direction }
  : {scrollWrap: Element, scrolledElement: (Window & typeof globalThis) | HTMLDivElement, scrollIndicator: HTMLElement, scrollContainer: HTMLElement, direction: 'vertical' | 'horizontal'}
) => {
  let isDragging = false;
  let startDragY = 0;
  let startDragX = 0;
  let startY = 0;
  let startX = 0;
  let contentTop = 0;
  let contentLeft = 0;

  const dragScrollbar = (e: MouseEvent) => {
    e.preventDefault();
    if (isDragging) {
      const scrollContent = scrollWrap.querySelector('.scrollContent') as HTMLElement;
      const contentElement = checkIsBodyParentComponent(scrollWrap) ? scrollWrap : scrollContent;

      if (direction === 'vertical') {
        const contentHeight = contentElement.scrollHeight;
        const containerHeight = scrollContainer.scrollHeight;
        const delta = (e.clientY - startY) / containerHeight * 100;

        scrolledElement.scrollTo({ top: contentTop + contentHeight * (delta) / 100 });
      } else {
        const contentWidth = contentElement.scrollWidth;
        const containerWidth = scrollContainer.scrollWidth;
        const delta = (e.clientX - startX) / containerWidth * 100;

        scrolledElement.scrollTo({ left: contentLeft + contentWidth * (delta) / 100 });
      }
    }
  };

  const throttledDragScrollbar = throttle(dragScrollbar, 10);

  scrollContainer.addEventListener('mousedown', (e: MouseEvent) => {
    e.preventDefault();
    const scrollContent = scrollWrap.querySelector('.scrollContent') as HTMLElement;
    const isBodyParentComponent = checkIsBodyParentComponent(scrollWrap);

    isDragging = true;
    startDragY = e.offsetY;
    startDragX = e.offsetX;

    startY = e.clientY;
    startX = e.clientX;
    contentTop = isBodyParentComponent ? window.scrollY : scrollContent.scrollTop;
    contentLeft = isBodyParentComponent ? window.scrollX : scrollContent.scrollLeft;

    if (e.target !== scrollIndicator) {
      const scrollContent = scrollWrap.querySelector('.scrollContent') as HTMLElement;

      if (direction === 'vertical') {
        const contentHeight = isBodyParentComponent ? scrollWrap.scrollHeight : scrollContent.scrollHeight;
        const containerHeight = scrollContainer.scrollHeight;
        const indicatorHeight = scrollIndicator.scrollHeight;
        const scrollY = e.offsetY / containerHeight * contentHeight;
        const newScrollY = scrollY - indicatorHeight;

        scrolledElement.scrollTo({ top: newScrollY, behavior: 'smooth' });
      } else {
        const contentWidth = isBodyParentComponent ? scrollWrap.scrollWidth : scrollContent.scrollWidth;
        const containerWidth = scrollContainer.scrollWidth;
        const indicatorWidth = scrollIndicator.scrollWidth;
        const scrollX = e.offsetX / containerWidth * contentWidth;
        const newScrollX = scrollX - indicatorWidth;

        scrolledElement.scrollTo({ left: newScrollX, behavior: 'smooth' });
      }
    }

    scrollIndicator.addEventListener('mousemove', throttledDragScrollbar);
  });

  scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
    startDragY = 0;
    startDragX = 0;
    startY = 0;
    startX = 0;
    contentTop = 0;
    contentLeft = 0;

    scrollIndicator.removeEventListener('mousemove', throttledDragScrollbar);
  });

  scrollContainer.addEventListener('mouseenter', () => {
    scrollIndicator.style.boxShadow = '0 0 0 1px rgba(255, 255, 255, 0.35)';
    scrollIndicator.style.backgroundColor = 'var(--color-scrollbar)';
  });

  scrollContainer.addEventListener('mouseleave', () => {
    scrollIndicator.style.boxShadow = 'none';
    scrollIndicator.style.backgroundColor = 'transparent';
    scrollIndicator.removeEventListener('mousemove', throttledDragScrollbar);
  });
};

const setHeight = (scrollWrap: Element, scrolledElement: (Window & typeof globalThis) | HTMLDivElement) => {
  const childElement = scrollWrap?.firstElementChild;
  const parentElement = scrollWrap?.parentElement;
  const contentHeight = childElement?.scrollHeight;
  const scrollIndicator = scrollWrap.querySelector('.scrollVertical') as HTMLElement;
  const scrollContent = scrollWrap.querySelector('.scrollContent') as HTMLElement;
  const isBodyParentComponent = checkIsBodyParentComponent(scrollWrap);

  if (scrollWrap && scrollIndicator && contentHeight && parentElement) {
    const containerHeight = checkIsBodyParentComponent(scrollWrap) ? parentElement.clientHeight : scrollWrap.scrollHeight;
    const scrollTop = isBodyParentComponent ? (scrolledElement as Window)?.scrollY : (scrolledElement as HTMLDivElement).scrollTop;

    if (containerHeight >= contentHeight) {
      scrollIndicator.style.display = 'none';
    } else {
      scrollIndicator.style.display = 'block';
      scrollIndicator.style.height = `${(containerHeight / contentHeight) * 100}%`;
      scrollIndicator.style.top = `${(scrollTop / scrollContent.scrollHeight) * 100}%`;
    }
  }
};

const setWidth = (scrollWrap: Element, scrolledElement: (Window & typeof globalThis) | HTMLDivElement) => {
  const childElement = scrollWrap?.firstElementChild;
  const parentElement = scrollWrap?.parentElement;
  const contentWidth = childElement?.scrollWidth;
  const scrollContent = scrollWrap.querySelector('.scrollContent') as HTMLElement;
  const scrollIndicator = scrollWrap.querySelector('.scrollHorizontal') as HTMLElement;
  const isBodyParentComponent = checkIsBodyParentComponent(scrollWrap);

  if (scrollWrap && scrollIndicator && contentWidth && parentElement) {
    const containerWidth = checkIsBodyParentComponent(scrollWrap) ? parentElement.clientWidth : scrollWrap.scrollWidth;
    const scrollLeft = isBodyParentComponent ? (scrolledElement as Window).scrollX : (scrolledElement as HTMLDivElement).scrollLeft;

    if (containerWidth >= contentWidth) {
      scrollIndicator.style.display = 'none';
    } else {
      scrollIndicator.style.display = 'block';
      scrollIndicator.style.width = `${(containerWidth / contentWidth) * 100}%`;
      scrollIndicator.style.left = `${(scrollLeft / scrollContent.scrollWidth) * 100}%`;
    }
  }
};

const checkIsBodyParentComponent = (scrollWrap: Element) => scrollWrap.parentElement?.tagName === 'BODY';

const scrollEndHandler = (scrollWrap: Element) => {
    setTimeout(() => {
      const scrollVerticalIndicator = scrollWrap.querySelector('.scrollVertical') as HTMLElement;
      const scrollHorizontalIndicator = scrollWrap.querySelector('.scrollHorizontal') as HTMLElement;

      if (scrollVerticalIndicator || scrollHorizontalIndicator) {
      scrollVerticalIndicator.style.boxShadow = 'none';
      scrollHorizontalIndicator.style.boxShadow = 'none';

      scrollVerticalIndicator.style.backgroundColor = 'transparent';
      scrollHorizontalIndicator.style.backgroundColor = 'transparent';
      }
    }, 400);
};

const scrollEndPolifill = (scrollWrap: Element) => {
  if (!window.onscrollend) {
    setTimeout(() => {
      scrollWrap.dispatchEvent(new CustomEvent('scrollend'));
    }, 50);
  }
};

const scrollHandler = (scrollWrap: Element, scrolledElement: (Window & typeof globalThis) | HTMLDivElement) => {
  if (!isFirstScroll) {
  const scrollVerticalIndicator = scrollWrap.querySelector('.scrollVertical') as HTMLElement;
  const scrollHorizontalIndicator = scrollWrap.querySelector('.scrollHorizontal') as HTMLElement;
  const scrollContent = scrollWrap.querySelector('.scrollContent') as HTMLElement;
  const isBodyParentComponent = checkIsBodyParentComponent(scrollWrap);

  if (scrollVerticalIndicator) {
    const scrollTop = isBodyParentComponent ? (scrolledElement as Window).scrollY : (scrolledElement as HTMLDivElement).scrollTop;

    const top = (scrollTop / scrollContent.scrollHeight) * 100;

    if (scrollTop !== top) {
      scrollVerticalIndicator.style.top = `${top}%`;

      scrollVerticalIndicator.style.boxShadow = '0 0 0 1px rgba(255, 255, 255, 0.35)';
      scrollVerticalIndicator.style.backgroundColor = 'var(--color-scrollbar)';
    }
  }

  if (scrollHorizontalIndicator) {
    const scrollLeft = isBodyParentComponent ? (scrolledElement as Window).scrollX : (scrolledElement as HTMLDivElement).scrollLeft;
    const left = (scrollLeft / scrollContent.scrollWidth) * 100;

    if (scrollLeft !== left) {
      scrollHorizontalIndicator.style.left = `${left}%`;

      scrollHorizontalIndicator.style.boxShadow = '0 0 0 1px rgba(255, 255, 255, 0.35)';
      scrollHorizontalIndicator.style.backgroundColor = 'var(--color-scrollbar)';
    }
  }

  // polifill for scrollend event for Safari
  // Mozilla Firefox also doesn't support the scrollend event correctly
  scrollEndPolifill(scrollWrap);
} else {
  setTimeout(() => isFirstScroll = false, 0);
  }
};

const resizeHandler = (scrollWrap: Element, scrolledElement: (Window & typeof globalThis) | HTMLDivElement) => {
  setHeight.call(null, scrollWrap, scrolledElement);
  setWidth.call(null, scrollWrap, scrolledElement);
};

const resetBeforeUnload = (
  scrollWrap: Element,
  scrolledElement: (Window & typeof globalThis) | HTMLDivElement,
) => {
  scrollWrap.removeEventListener('resize', resizeHandler.bind(null, scrollWrap, scrolledElement ));
  scrollWrap.removeEventListener('scroll', scrollHandler.bind(null, scrollWrap, scrolledElement));
  scrollWrap.removeEventListener('scrollend', scrollEndHandler.bind(null, scrollWrap));
};





const initScroll = () => {
  const scrollWraps = document.querySelectorAll('.scrollContainer');

  // added necessary classes to the scrollWrap
  scrollWraps.forEach((scrollWrap) => {
    scrollWrap.classList.add(
      "transition",
      'relative',
    );

    // added child element to the scrollWrap and moved all children to it
    const scrollContent = document.createElement('div');
    scrollContent.classList.add(
      "scrollContent",
      "overflow-auto",
      "w-full",
      "h-full",
    );

    while (scrollWrap.firstChild) {
      scrollContent.appendChild(scrollWrap.firstChild);
    }

    scrollWrap.appendChild(scrollContent);

    // added styles to the scrollWrap
    const style = document.createElement('style');
    style.innerHTML += `
      .scrollContainer {
        scrollbar-width: none;
        --scroll: 0;
        --bleachProgress: 0;
        --bg-offset: 0vh;
      }

      .scrollContent {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        will-change: scroll-position;
      }

      .scrollContent::-webkit-scrollbar {
        display: none; /* Safary and Chrome */
      }
    `;

    document.head.appendChild(style);

    // added scroll event listeners
    const scrolledElement = checkIsBodyParentComponent(scrollWrap) ? window : scrollContent;


    createScrollIndicator(scrollWrap, 'vertical', scrolledElement);
    createScrollIndicator(scrollWrap, 'horizontal', scrolledElement);

    setHeight.call(null, scrollWrap, scrolledElement);
    setWidth.call(null, scrollWrap, scrolledElement);

    scrolledElement.addEventListener('scrollend', scrollEndHandler.bind(null, scrollWrap));

    scrolledElement.addEventListener('scroll', scrollHandler.bind(null, scrollWrap, scrolledElement));


     const resizeObserver = new ResizeObserver(() => {
       setHeight.call(null, scrollWrap, scrolledElement);
       setWidth.call(null, scrollWrap, scrolledElement);
     });

     resizeObserver.observe(scrollWrap);

     scrolledElement.addEventListener('resize', resizeHandler.bind(null, scrollWrap, scrolledElement ));

     window.addEventListener('beforeunload', 
       () => {
         resetBeforeUnload.bind(null, 
          scrollWrap,
          scrolledElement,
         );
         resizeObserver.disconnect();
       }
     );
  });
};

export default { initScroll };
