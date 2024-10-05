import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { TypewriterHeader } from './components/typwriter-header';
import { HoverUnderlineText } from '../../components/hover-underline-text';
import { Link } from 'react-router-dom';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const fontVariant = isMobile ? 'h4' : 'h3';

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
        <Typography variant={fontVariant} component="span">
          I'm Kathleen Garrity, a full-stack software engineer with a passion for creating products that are engaging,
          accessible, and fun to use. Learn more{' '}
        </Typography>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <HoverUnderlineText
            text="about me"
            component="span"
            variant={fontVariant}
            sx={{ cursor: 'pointer', fontWeight: 'bold' }}
          />
        </Link>
        <Typography variant={fontVariant} component="span">
          {' '}
          or{' '}
        </Typography>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <HoverUnderlineText
            text="check out my work."
            component="span"
            variant={fontVariant}
            sx={{ cursor: 'pointer', fontWeight: 'bold' }}
          />
        </Link>
      </Box>
    </Box>
  );
};
