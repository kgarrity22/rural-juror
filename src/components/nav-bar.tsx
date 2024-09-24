import { AppBar, Box, IconButton, Toolbar, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../main';
import { AnimatedMenuIcon } from '.';
import { AnimatedNameButton } from '../features/home/components/animated-name';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { Menu } from '../features/menu';

// want to move the show menu to context
export const TopNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();

  return (
    <Box>
      <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar
          sx={{
            mt: 1,
            ml: '5%',
            mr: '5%',
            '@media all': {
              pl: 0,
              pr: 0
            },
            justifyContent: 'space-between'
          }}
        >
          <AnimatedNameButton />
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <AnimatedMenuIcon showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
        </Toolbar>
      </AppBar>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </Box>
  );
};
