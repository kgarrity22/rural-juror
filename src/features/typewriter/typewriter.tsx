import { Box, Typography } from '@mui/material';
import { TypewriterProps, useTypewriter } from '../typewriter/hooks/use-typewriter';

type ComponentProps = TypewriterProps & { cursorColor?: string };

/* Blinking '|' cursor component */
const Cursor = ({ cursorColor = 'inherit' }: { cursorColor?: string }) => {
  return (
    <span style={{ color: cursorColor }} className="blinking-cursor">
      |
    </span>
  );
};

/* Typewriter component  */
export const Typewriter = ({
  words = ['Hello World!', 'This is', 'a simple Typewriter'],
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  cursorColor = 'inherit',
  textStyles = []
}: ComponentProps): JSX.Element => {
  const [displayText, displayStyle] = useTypewriter({
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    textStyles
  });

  return (
    <Box display="flex" sx={displayStyle}>
      <Typography sx={displayStyle}>{displayText}</Typography>
      <Cursor cursorColor={cursorColor} />
    </Box>
  );
};
