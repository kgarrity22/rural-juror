import { AppBar, Box, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ColorModeContext } from '../main';
import { AnimatedMenuIcon } from '.';
import { AnimatedNameButton } from '../features/home/components/animated-name';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { Menu } from '../features/menu';

// want to move the show menu to context
export const TopNavBar = () => {
  const theme = useTheme();

  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const colorMode = useContext(ColorModeContext);

  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

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
        <Toolbar disableGutters>
          {!isMobile && (
            <Box
              sx={{
                transition: 'left 0.5s ease',
                position: 'fixed',
                left: scrolled ? theme.spacing(1) : '10%',
                top: theme.spacing(2)
              }}
            >
              <AnimatedNameButton />
            </Box>
          )}

          <Box
            sx={{
              transition: 'right 0.5s ease',
              display: 'flex',
              justifyContent: 'center',
              position: 'fixed',
              right: scrolled ? theme.spacing(1) : '10%',
              top: theme.spacing(2)
            }}
          >
            {!isMobile && (
              <IconButton
                sx={{ mr: theme.spacing(0.5) }}
                onClick={colorMode.toggleColorMode}
                aria-label="dark-light-mode-toggle"
                // TODO: change the color of the icon when the menu is open
                // should we have some kind of hook that tells us when the menu is open & controls it?
              >
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            )}
            <AnimatedMenuIcon showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
          </Box>
        </Toolbar>
      </AppBar>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </Box>
  );
};
