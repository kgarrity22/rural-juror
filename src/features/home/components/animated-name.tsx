import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AnimatedNameButton = () => {
  // const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate('/home')} sx={{ cursor: 'pointer' }}>
      <Typography
        sx={{
          fontFamily: 'Modak',
          transition: 'all 0.5s',
          '-webkit-text-stroke': '2px #d6f4f4',
          fontSize: '2rem',
          textAlign: 'center',
          color: 'transparent',
          textShadow: `
              0px 0px 0px #e601c0,
              3px 3px 3px #482896`,
          cursor: 'pointer',
          ':hover': {
            textShadow: 'none',
            '-webkit-text-stroke': '2px #4a494a'
          }
        }}
      >
        KG
      </Typography>
    </Box>
  );
};
