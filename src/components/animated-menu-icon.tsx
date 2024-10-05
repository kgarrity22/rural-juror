import { Box, Checkbox, Typography, useTheme } from '@mui/material';
import { MouseEventHandler } from 'react';

export const AnimatedMenuIcon = ({
  onClick,
  showMenu
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
  showMenu: boolean;
}) => {
  const theme = useTheme();
  const isDarkTheme = useTheme().palette.mode === 'dark';

  const commonIconLineProps = {
    content: "''",
    display: 'block',
    height: 2.7,
    position: 'absolute',
    transition: `top ease 0.3s, transform 0.3s ease 0.3s, background 0.3s ease`,
    width: 28,
    borderRadius: 20,
    background: isDarkTheme ? '#fff' : '#4a494a',
    zIndex: 2
  };
  const iconProps = showMenu
    ? {
        background: 'transparent',
        '&::before': {
          ...commonIconLineProps,
          transform: 'rotate(45deg)',
          top: 0,
          background: '#fff'
        },
        // line two of close icon
        '&::after': {
          ...commonIconLineProps,
          transform: 'rotate(-45deg)',
          top: 0,
          background: '#fff'
        }
      }
    : {
        background: isDarkTheme ? '#fff' : '#4a494a',
        // bottom line of hamburger
        '&::before': {
          ...commonIconLineProps,
          top: -7,
          transition: `background 0.3s ease, top 0.3s ease 0.3s, transform ease 0.3s`
        },
        // top line of hamburger
        '&::after': {
          ...commonIconLineProps,
          top: 7,
          transition: `background 0.3s ease, top 0.3s ease 0.3s, transform ease 0.3s`
        }
      };
  return (
    <Box
      sx={{
        position: 'relative',
        ':hover': { background: 'rgba(0, 0, 0, 0.04)' },
        textAlign: 'center',
        borderRadius: '50%',
        p: theme.spacing(0.75)
      }}
      onClick={onClick}
    >
      <Checkbox sx={{ display: 'none' }} checked={showMenu} />
      <Typography
        component="span"
        sx={{
          cursor: 'pointer',
          display: 'block',
          height: 30,
          width: 30
        }}
      >
        <Box
          sx={{
            ...commonIconLineProps,
            ...iconProps,
            top: 20,
            transition: `background 0.3s ease, top 0.3s ease 0.3s, transform ease 0.3s`
          }}
        />
      </Typography>
    </Box>
  );
};
