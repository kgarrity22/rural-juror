import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Typewriter } from '../../typewriter';
import { getTimeOfDay } from '../../../utils/time-of-day';

export const TypewriterHeader = () => {
  const timeOfDayGreeting = `Good ${getTimeOfDay()}!`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box>
      <Typewriter
        words={['Hi There!', 'Hey!', 'Hello!', "How's it going?", timeOfDayGreeting, 'Nice to meet ya!']}
        textStyles={[
          { fontFamily: 'Urbanist', fontSize: isMobile ? 40 : 60 },
          { fontFamily: 'Playwrite AT', fontSize: isMobile ? 40 : 60 },
          { fontFamily: 'Bangers', fontSize: isMobile ? 60 : 75 },
          { fontFamily: 'Courier Prime', fontSize: isMobile ? 40 : 60 },
          { fontFamily: 'Josefin Slab', fontSize: isMobile ? 45 : 65 },
          { fontFamily: 'Special Elite', fontSize: isMobile ? 40 : 60 }
        ]}
        typeSpeed={90}
        deleteSpeed={70}
        delaySpeed={1400}
      />
    </Box>
  );
};
