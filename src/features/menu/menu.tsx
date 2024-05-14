import { Box, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Z_INDICES } from '../../constants';
import { LinkedIn, GitHub, Send, MailOutline } from '@mui/icons-material';

export const Menu = ({ showMenu, setShowMenu }: { showMenu: boolean; setShowMenu: (s: boolean) => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const menuStyles = showMenu ? { bottom: 0, height: '100%' } : { bottom: '100%', height: 0 };

  const menuItems = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Work', route: '/work' },
    { name: 'Contact', route: '/contact' }
  ];

  // slide down the box from the top, fade in the content
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        overflow: 'hidden',
        width: '100%',
        transition: '0.7s ease',
        background: '#333',
        color: '#333',
        zIndex: Z_INDICES[3],
        ...menuStyles
      }}
    >
      <Box sx={{ mt: 15, mb: 3, ml: 12, mr: 12 }}>
        {menuItems.map(({ name, route }) => (
          <Typography
            className="hover-underline-animation"
            key={`${name}-menu-link`}
            variant="h1"
            sx={{
              width: 'fit-content',
              fontFamily: 'Coolvetica',
              fontWeight: 600,
              color: location.pathname === route ? '#b2b2b2' : '#333',
              textShadow: '-1px 1px 0 #b2b2b2, 1px 1px 0 #b2b2b2, 1px -1px 0 #b2b2b2, -1px -1px 0 #b2b2b2',
              // textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
              cursor: 'pointer',
              transition: 'color 0.3s ease-in-out,text-shadow 0.3s ease-in-out',
              ': hover': {
                color: '#fff',
                textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff'
              }
            }}
            onClick={() => {
              navigate(route);
              setShowMenu(!showMenu);
            }}
          >
            {name}
          </Typography>
        ))}
        <Box display="flex" sx={{ color: '#b2b2b2', mt: theme.spacing(5) }}>
          <LinkedIn sx={{ ':hover': { color: '#fff', cursor: 'pointer' } }} />
          <GitHub sx={{ ':hover': { color: '#fff', cursor: 'pointer' } }} />
          <Send sx={{ ':hover': { color: '#fff', cursor: 'pointer' } }} />
          <MailOutline sx={{ ':hover': { color: '#fff', cursor: 'pointer' } }} />
        </Box>
      </Box>
    </Box>
  );
};
