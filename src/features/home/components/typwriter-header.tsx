import { Box } from '@mui/material';
import { Typewriter } from '../../typewriter';
import { getTimeOfDay } from '../../../utils/time-of-day';

export const TypewriterHeader = () => {
  const timeOfDayGreeting = `Good ${getTimeOfDay()}!`;
  return (
    <Box>
      <Typewriter
        words={['Hi There!', 'Hey!', 'Hello!', "How's it going?", timeOfDayGreeting, 'Nice to meet ya!']}
        textStyles={[
          { fontFamily: 'Urbanist', fontSize: 60 },
          { fontFamily: 'Playwrite AT', fontSize: 60 },
          { fontFamily: 'Bangers', fontSize: 75 },
          { fontFamily: 'Courier Prime', fontSize: 60 },
          { fontFamily: 'Josefin Slab', fontSize: 65 },
          { fontFamily: 'Special Elite', fontSize: 60 }
        ]}
        typeSpeed={90}
        deleteSpeed={70}
        delaySpeed={1400}
      />
    </Box>
  );
};
