import { SxProps, Typography } from '@mui/material';
import { useTypewriter } from './hooks/use-typewriter';

export const Typewriter = ({ text, speed, textStyles }: { text: string; speed?: number; textStyles?: SxProps }) => {
  const displayText = useTypewriter({ text, speed });

  // TODO: this doesn't account for the blinking cursor
  return (
    <>
      <Typography variant="body1" sx={textStyles}>
        {displayText}
      </Typography>
    </>
    //     <span
    //   style={{ color: cursorColor }}
    //   className={`${styles.blinkingCursor} ${
    //     cursorBlinking ? styles.blinking : ''
    //   }`}
    // >
    //   {cursorStyle}
    // </span>
  );
};

// TODO typewriter carousel --> typewriter effect on a timer --> iterates through list/object
// {text, styles, }
