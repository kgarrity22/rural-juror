import { Box, Typography, useTheme } from '@mui/material';

export const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h5" sx={{ mt: theme.spacing(5) }}>
        Looks like you've hit a page that doesn't exist! No sweat though, just use the menu icon in the upper right
        corner to find what you're looking for.
      </Typography>
      <Typography></Typography>
    </Box>
  );
};
