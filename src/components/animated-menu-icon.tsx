import { Box, Checkbox, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';

export const AnimatedMenuIcon = ({
  onClick,
  showMenu
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
  showMenu: boolean;
}) => {
  const commonIconLineProps = {
    content: "''",
    display: 'block',
    height: 2.7,
    position: 'absolute',
    transition: 'top ease 0.3s, transform ease 0.3s 0.3s, background 0.3s ease 0.3s',
    width: 28,
    borderRadius: 20,
    background: '#000'
  };
  const iconProps = showMenu
    ? {
        background: 'transparent',
        // line one of close icon
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
        // background: '#000'
      }
    : {
        background: '#000',
        // bottom line of hamburger
        '&::before': {
          ...commonIconLineProps,
          top: -7,
          transition: 'background ease 0.3s,top ease 0.3s 0.3s, transform ease 0.3s'
        },
        // top line of hamburger
        '&::after': {
          ...commonIconLineProps,
          top: 7,
          transition: 'background ease 0.3s,top ease 0.3s 0.3s, transform ease 0.3s'
        }
      };
  return (
    <Box sx={{ position: 'relative' }} onClick={onClick}>
      <Checkbox sx={{ display: 'none' }} checked={showMenu} />
      <Typography
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
            transition: 'background ease 0.3s,top ease 0.3s 0.3s, transform ease 0.3s'
          }}
        />
      </Typography>
    </Box>
  );
};
