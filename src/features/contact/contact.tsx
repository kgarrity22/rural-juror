import { ArrowDownward, Send } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import { KATHLEEN_SOCIALS } from '../../constants';
import { SocialsList } from '../../components/social-icons';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

export const Contact = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          maxWidth: 1000,
          mt: { xs: theme.spacing(10), sm: theme.spacing(20), md: theme.spacing(25) },
          mr: { md: theme.spacing(5) },
          ml: { md: theme.spacing(5) }
        }}
      >
        <Typography variant="h1" sx={{ opacity: 0, animation, animationDelay: '1s' }}>
          Contact
        </Typography>

        <Box sx={{ mt: theme.spacing(4), opacity: 0, animation, animationDelay: '1.1s' }}>
          <Typography variant="h5">Want to work together?</Typography>
          <ul>
            <li>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  ':hover': {
                    '& .MuiSvgIcon-root': {
                      // transform: 'translateY(5px)',
                      animation: 'send 1s cubic-bezier(0.5, 1, 0.89, 1) infinite alternate'
                    }
                  }
                }}
              >
                {/* <MailOutline /> */}
                <Typography variant="body1" className="hover-underline-animation" sx={{ fontWeight: 400 }}>
                  Shoot me an email
                </Typography>
                <Send sx={{ ml: theme.spacing(1), transform: 'rotate(-35deg)' }} />
              </Box>
            </li>
            <li>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  opacity: 0,
                  animation,
                  animationDelay: '1.15s',
                  ':hover': {
                    '& .MuiSvgIcon-root': {
                      // transform: 'translateY(5px)',
                      animation: 'bounce 1.25s linear infinite'
                    }
                  }
                }}
              >
                <Typography variant="body1" className="hover-underline-animation" sx={{ fontWeight: 400 }}>
                  Download my CV
                </Typography>
                <ArrowDownward />
              </Box>
            </li>
          </ul>

          <Box sx={{ mt: theme.spacing(5), opacity: 0, animation, animationDelay: '1.3s' }}>
            <Typography variant="h6">Or follow along: </Typography>
            <SocialsList
              socialLinks={[
                { title: 'LinkedIn', url: KATHLEEN_SOCIALS.linkedIn },
                { title: 'Github', url: KATHLEEN_SOCIALS.github },
                { title: 'Codepen', url: KATHLEEN_SOCIALS.codePen },
                { title: 'OrcId', url: KATHLEEN_SOCIALS.orcId }
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
