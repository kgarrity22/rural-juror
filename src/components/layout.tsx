import { AppBar, Box, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatedNameButton } from '../features/home/components/animated-name';
import { AnimatedMenuIcon } from './animated-menu-icon';
import { Menu } from '../features/menu';
import {
  AnimatedBackground2,
  AnimatedBackground3,
  AnimatedBackground4,
  AnimatedBackground5
} from './animated-background';
import { More, Search } from '@mui/icons-material';
import { Z_INDICES } from '../constants';

export const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar
            sx={{
              mt: 1,
              ml: 12,
              mr: 12,
              '@media all': {
                pl: 0,
                pr: 0
              },
              justifyContent: 'space-between'
            }}
          >
            <AnimatedNameButton />
            <AnimatedMenuIcon showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
          </Toolbar>
        </AppBar>
      </Box>

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
          //   background: '#FFF8DC'
          background: '#fff7e3'
          //   background: '#000'
          //   background: lightColors.offwhite
        }}
      >
        <Box
          sx={{
            animation: 'show1 100s linear infinite'
          }}
        >
          <AnimatedBackground2 />
        </Box>
        <Box
          sx={{
            animation: 'show2 100s linear infinite'
          }}
        >
          <AnimatedBackground3 />
        </Box>
        <Box sx={{ animation: 'show3 100s linear infinite' }}>
          <AnimatedBackground4 />
        </Box>
        <Box sx={{ animation: 'show4 110s linear infinite' }}>
          <AnimatedBackground5 />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'scroll'
        }}
      >
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Box sx={{ ml: 12, mr: 12 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
