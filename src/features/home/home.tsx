import { Box, Fade, Grow, Typography, Zoom, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { Typewriter } from '../typewriter/typewriter';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

export const Home = () => {
  const theme = useTheme();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Box
        sx={
          {
            // maxWidth: 700
            // mt: { xs: theme.spacing(10), sm: theme.spacing(20), md: theme.spacing(25) },
            // mr: { md: theme.spacing(5) },
            // ml: { md: theme.spacing(5) }
          }
        }
      >
        <Box sx={{ mb: 5, fontFamily: 'Inter Tight', fontWeight: 300, animation, animationDelay: '1.2s', opacity: 0 }}>
          {/* <Typewriter text="Hey! Hi! Hello! How ya doing? Welcome! How's it going! What's up?" /> */}
          <Typography variant="h5" component="span">
            Hey! I'm <strong>Kathleen Garrity,</strong> a <strong>full-stack software engineer</strong> with a passion
            for creating products that are engaging, accessible, and fun to use. Learn more{' '}
          </Typography>
          <Typography
            variant="h5"
            sx={{ cursor: 'pointer', fontWeight: 'bold' }}
            component="span"
            className="hover-underline-animation"
          >
            about me
          </Typography>
          <Typography variant="h5" component="span">
            {' '}
            or{' '}
          </Typography>
          <Typography
            variant="h5"
            sx={{ cursor: 'pointer', fontWeight: 'bold' }}
            component="span"
            className="hover-underline-animation"
          >
            check out my work.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
