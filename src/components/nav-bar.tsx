import { AppBar, Box, IconButton, Toolbar, useTheme, Typography, useMediaQuery, Container } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ColorModeContext } from '../main';
import { AnimatedMenuIcon } from '.';
import { AnimatedNameButton } from '../features/home/components/animated-name';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { Menu } from '../features/menu';
import { Menu as MenuIcon, Brightness4 as LightModeIcon, Home as HomeIcon } from '@mui/icons-material';

// want to move the show menu to context
export const TopNavBar = () => {
  const theme = useTheme();

  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const colorMode = useContext(ColorModeContext);

  // detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box>
      <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar
          sx={{
            mt: 1,
            justifyContent: 'space-between',
            transition: 'all 0.3s ease'
          }}
        >
          <Box
            maxWidth="md"
            sx={{
              pl: scrolled ? 0 : '10%',
              pr: scrolled ? 0 : '10%',
              transition: 'all 0.3s ease',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Box>
              <AnimatedNameButton />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <IconButton
                sx={{ mr: theme.spacing(0.5) }}
                onClick={colorMode.toggleColorMode}
                aria-label="dark-light-mode-toggle"
              >
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <AnimatedMenuIcon showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </Box>
  );
};
