import { Box, Grid, Typography, useTheme } from '@mui/material';
import me from './assets/me.jpeg';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

export const About = () => {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="center">
      <Box
        sx={
          {
            // mt: {
            //   xs: theme.spacing(10),
            //   sm: theme.spacing(20),
            //   md: theme.spacing(25)
            // },
            // mr: { md: theme.spacing(5) },
            // ml: { md: theme.spacing(5) },
            // maxWidth: 1000
          }
        }
      >
        <Grid container columnSpacing={5} direction="row-reverse">
          <Grid item sm={12} md={5}>
            <img
              src={me}
              alt="A photo of me, Kathleen, giving a thumbs up"
              style={{
                animation,
                animationDelay: '1.1s',
                //
                // height: '300px',
                width: '300px',
                borderRadius: theme.spacing(1),
                // borderRadius: '50%',
                // background: 'rgba( 255, 255, 255, 0.15 )',
                // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                // backdropFilter: 'blur( 18px )',
                // border: '2px solid #b2b2b2',
                //
                opacity: 0
                // '-webkit-backdrop-filter': 'blur( 18px )',
                // border: '1px solid rgba( 255, 255, 255, 0.18 )'
              }}
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <Typography
              variant="h1"
              sx={{
                opacity: 0,
                animation,
                animationDelay: '1s'
                //
              }}
            >
              I'm Kathleen
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 0,
                animation,
                animationDelay: '1.1s'
              }}
            >
              I'm a fullstack engineer based in New York City. I started coding when I took my first python class in
              college and instantly became obsessed with the way code could be used to solve complex problems. I
              graduated from Boston College with a CS degree in 2021 and have been working as a software engineer ever
              since.
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{
                opacity: 0,
                animation,
                animationDelay: '1.2s'
              }}
            >
              I work across the full stack building everything from secure APIs and data pipelines to LLM prompts to
              beautiful, responsive, and accessible UIs. I enjoy building all sorts of components and endpoints, but I
              particularly love using javascript and other tools to create interesting data visualizations. In
              architecting and building data visualizations, I get the chance to solve the problems I find most
              fascinating - like how to best store, slice and serve up massive datasets and how to present that data in
              a way that communicates the message with end users in a way that is clear engaging and effective.
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{
                opacity: 0,
                animation,
                animationDelay: '1.25s'
              }}
            >
              When I'm not coding or designing, you might find me running, enjoying a sunset with friends, watching some
              basketball, or hunting for the best bagel and iced coffee in New York.
            </Typography>
          </Grid>
        </Grid>
        {/*TODO: Add what tools I use in my typical tech stack */}
      </Box>
    </Box>
  );
};
