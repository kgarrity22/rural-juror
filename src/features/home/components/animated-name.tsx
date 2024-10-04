import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AnimatedNameButton = () => {
  // const theme = useTheme();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  //   const firstName = ['a', 't', 'h', 'l', 'e', 'e', 'n'];
  //   const lastName = ['a', 'r', 'r', 'i', 't', 'y'];

  // const textStyles = hovered ? { top: 19 } : {};
  const endTextStyles = hovered ? { opacity: 1 } : { opacity: 0 };
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={() => navigate('/home')}
        sx={{ cursor: 'pointer' }}
      >
        <Box display="flex" sx={{ top: 0 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Coolvetica',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 0px #000'
            }}
          >
            K
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Coolvetica',
              fontWeight: 'bold',
              transition: 'opacity ease 0.3s',
              ...endTextStyles
            }}
          >
            athleen
          </Typography>
        </Box>
        {/* <Box display="flex" sx={{ position: 'absolute', top: 0, transition: 'top ease 0.3s', ...textStyles }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Coolvetica',
            fontWeight: 'bold',
            transition: 'top ease 0.3s',
            mb: theme.spacing(5)
          }}
        >
          G
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Coolvetica',
            fontWeight: 'bold',
            transition: 'opacity ease 0.3s',
            ...endTextStyles
          }}
        >
          arrity
        </Typography>
      </Box> */}
      </Box>
    </Box>
  );
};
