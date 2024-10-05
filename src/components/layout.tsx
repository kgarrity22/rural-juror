import { Box, Container, CssBaseline, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import {
  AnimatedBackground2,
  AnimatedBackground3,
  AnimatedBackground4,
  AnimatedBackground5
} from './animated-background';
import { Z_INDICES } from '../constants';
import { TopNavBar } from './nav-bar';

export const Layout = () => {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <TopNavBar />
      <Box
        sx={{
          overflow: 'hidden',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: Z_INDICES[0],
          background: theme.palette.mode === 'light' ? '#fff7e3' : '#333' // can prob just do the dark for now
        }}
      >
        <Box
          sx={{
            animation: 'show2 45s linear infinite'
          }}
        >
          <AnimatedBackground2 />
        </Box>
        <Box
          sx={{
            animation: 'show2 45s linear infinite',
            opacity: 0,
            animationDelay: '22s'
          }}
        >
          <AnimatedBackground3 />
        </Box>
        <Box sx={{ animation: 'show2 45s linear infinite', opacity: 0, animationDelay: '45s' }}>
          <AnimatedBackground4 />
        </Box>
        <Box sx={{ animation: 'show2 55s linear infinite', opacity: 0, animationDelay: '60s' }}>
          <AnimatedBackground5 />
        </Box>
      </Box>
      <Box
        sx={{
          ml: '10%',
          mr: '10%',
          padding: 0,
          justifyContent: 'center',
          display: 'flex',
          mt: { xs: theme.spacing(10), sm: theme.spacing(20), md: theme.spacing(25) },
          mb: theme.spacing(10)
        }}
      >
        <Container disableGutters maxWidth="md" sx={{ padding: 0, m: 0 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
