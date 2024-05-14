import { ArrowDownward, GitHub, LinkedIn, MailOutline, Send } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';

export const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: theme.spacing(20) }}>
      <Typography variant="h1">Contact</Typography>

      <Box sx={{ mt: theme.spacing(4) }}>
        <Box display="flex" alignItems="center">
          {/* <MailOutline /> */}
          <Typography variant="h6" className="hover-underline-animation">
            Shoot me an email
          </Typography>
          <Send sx={{ ml: theme.spacing(1), transform: 'rotate(-15deg)' }} />
        </Box>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" className="hover-underline-animation">
            Download my CV
          </Typography>
          <ArrowDownward />
        </Box>
        <Box sx={{ mt: theme.spacing(5) }}>
          <Typography variant="h6">Or follow me:</Typography>
          <GitHub />
          <LinkedIn />
        </Box>
      </Box>
    </Box>
  );
};
