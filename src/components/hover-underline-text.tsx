import { useEffect, useRef } from 'react';
import { Typography, TypographyProps, useTheme } from '@mui/material';

export const HoverUnderlineText = ({ text, color, ...props }: { text: string; color?: string } & TypographyProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  // ensure the hover underline color updates when the mode changes
  const isDarkTheme = useTheme().palette.mode === 'dark';

  useEffect(() => {
    if (textRef.current) {
      // Get the computed color of the Typography component
      const textColor = window.getComputedStyle(textRef.current).color;

      // Apply it to the CSS variable or the pseudo-element
      textRef.current.style.setProperty('--underline-color', textColor);
    }
  }, [isDarkTheme]);

  return (
    <Typography ref={textRef} className="hover-underline-animation" color={color} {...props}>
      {text}
    </Typography>
  );
};
