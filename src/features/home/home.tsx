import { Box, Typography, useTheme } from '@mui/material';

export const Home = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: theme.spacing(10) }}>
      <Typography variant="h2" sx={{ fontFamily: 'Summer Sunshine', fontWeight: 500 }}>
        Hey! I'm
      </Typography>
      <Typography variant="h2" sx={{ fontFamily: 'Summer Sunshine', fontWeight: 600, mb: theme.spacing(5) }}>
        Kathleen
      </Typography>

      <Typography variant="h4" sx={{ fontFamily: 'Quicksand', fontWeight: 200, mb: 5 }}>
        I'm a <strong>software engineer</strong>. I work across the <strong>fullstack</strong>, most enjoy{' '}
        <strong>data visualization</strong>. See my work or contact me.
      </Typography>
    </Box>
  );
};
