import { Box } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const trailingSpeed = 8;

  const options = {
    innerSize: 5,
    outerSize: 34,
    innerScale: 10,
    outerScale: 0
  };

  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  });
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current !== null) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }

    endX.current = clientX;
    endY.current = clientY;
  }, []);

  // Outer Cursor Animation Delay
  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / trailingSpeed;
        coords.y += (endY.current - coords.y) / trailingSpeed;
        if (cursorOuterRef.current !== null) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef] // eslint-disable-line
  );

  // Outer cursor RAF setup / cleanup
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);
    return () => window.removeEventListener('mousedown', onMouseDown);
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, []);

  //   const [isVisible, setIsVisible] = useState(false);
  //   const [options, setOptions] = useState(defaultOptions);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);

  // Scales cursor by HxW
  const scaleBySize = useCallback((cursorRef: HTMLDivElement | null, orignalSize: number, scaleAmount: number) => {
    if (cursorRef) {
      cursorRef.style.height = `${parseInt(String(orignalSize * scaleAmount))}px`; // ** NEW HEIGHT
      cursorRef.style.width = `${parseInt(String(orignalSize * scaleAmount))}px`; // ** NEW WIDTH
    }
  }, []);

  // Mouse Events State updates
  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  //   const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  //   const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  // Cursors Hover/Active State
  useEffect(() => {
    if (isActive) {
      scaleBySize(cursorInnerRef.current, options.innerSize, options.innerScale);
      scaleBySize(cursorOuterRef.current, options.outerSize, options.outerScale);
    } else {
      scaleBySize(cursorInnerRef.current, options.innerSize, 1);
      scaleBySize(cursorOuterRef.current, options.outerSize, 1);
    }
  }, [options.innerSize, options.innerScale, options.outerSize, options.outerScale, scaleBySize, isActive]);

  // Cursors Click States
  useEffect(() => {
    if (isActiveClickable) {
      scaleBySize(cursorInnerRef.current, options.innerSize, options.innerScale * 1.2);
      scaleBySize(cursorOuterRef.current, options.outerSize, options.outerScale * 1.4);
    }
  }, [options.innerSize, options.innerScale, options.outerSize, options.outerScale, scaleBySize, isActiveClickable]);

  //
  useEffect(() => {
    const clickable = document.querySelectorAll('a, li, button');

    clickable.forEach((clickableElement) => {
      clickableElement.addEventListener('mouseover', () => {
        setIsActive(true);
        // setOptions(options);
      });
      clickableElement.addEventListener('click', () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      clickableElement.addEventListener('mousedown', () => {
        setIsActiveClickable(true);
      });
      clickableElement.addEventListener('mouseup', () => {
        setIsActive(true);
      });
      clickableElement.addEventListener('mouseout', () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickable.forEach((clickableElement) => {
        clickableElement.removeEventListener('mouseover', () => {
          setIsActive(true);
        });
        clickableElement.removeEventListener('click', () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        clickableElement.removeEventListener('mousedown', () => {
          setIsActiveClickable(true);
        });
        clickableElement.removeEventListener('mouseup', () => {
          setIsActive(true);
        });
        clickableElement.removeEventListener('mouseout', () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, []);

  const styles = {
    // zIndex: Z_INDICES[3] + 1,
    zIndex: 100000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out'
    // mixBlendMode: 'difference'
  };

  return (
    <Box>
      <Box
        ref={cursorOuterRef}
        sx={{
          background: 'transparent',
          border: '2px solid #000',
          opacity: isActiveClickable || isActive ? 0 : 1,
          ...styles
        }}
      />
      <Box
        ref={cursorInnerRef}
        sx={{
          background: '#000',
          opacity: isActiveClickable || isActive ? 0.5 : 1,
          ...styles
        }}
      />
    </Box>
  );
};
