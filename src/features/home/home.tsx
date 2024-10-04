import { Box, Typography, useTheme } from '@mui/material';
import { TypewriterHeader } from './components/typwriter-header';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

export const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          height: { xs: 150, sm: 100 }
        }}
      >
        <TypewriterHeader />
      </Box>
      <Box
        sx={{
          mt: theme.spacing(3),
          mb: 5,
          maxWidth: 600,
          fontFamily: 'Inter Tight',
          fontWeight: 300,
          animation,
          animationDelay: '1.2s',
          opacity: 0
        }}
      >
        <Typography variant="h4" component="span">
          I'm Kathleen Garrity, a full-stack software engineer with a passion for creating products that are engaging,
          accessible, and fun to use. Learn more{' '}
        </Typography>
        <Typography
          variant="h4"
          sx={{ cursor: 'pointer', fontWeight: 'bold' }}
          component="span"
          className="hover-underline-animation"
        >
          about me
        </Typography>
        <Typography variant="h4" component="span">
          {' '}
          or{' '}
        </Typography>
        <Typography
          variant="h4"
          sx={{ cursor: 'pointer', fontWeight: 'bold' }}
          component="span"
          className="hover-underline-animation"
        >
          check out my work.
        </Typography>
      </Box>
    </Box>
  );
};
