import { useState, useCallback } from 'react';

// ----------------------------------------------------------------------

export default function useLightBox(slides,video) {
  const [selected, setSelected] = useState(-1);

  const handleOpen = useCallback(
    (slideUrl) => {
      const slideIndex = slides.findIndex((slide) =>
        video  === 'video' ? slide.poster === slideUrl : slide.src === slideUrl
      );

      setSelected(0);
    },
    [slides]
  );

  const handleClose = useCallback(() => {
    setSelected(-1);
  }, []);

  return {
    selected,
    open: selected >= 0,
    onOpen: handleOpen,
    onClose: handleClose,
    setSelected,
  };
}
