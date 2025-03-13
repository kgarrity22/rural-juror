import { Box, Grid, Typography, useTheme } from '@mui/material';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

export const About = () => {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="center">
      <Grid container columnSpacing={1}>
        <Grid item sm={12} md={12}>
          <Typography
            variant="h1"
            sx={{
              opacity: 0,
              animation,
              animationDelay: '1s',
              mb: theme.spacing(4)
            }}
          >
            I'm Kathleen
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0,
              animation,
              animationDelay: '1.2s'
            }}
          >
            I'm a fullstack engineer based in New York City. I started coding when I took my first python class in
            college and instantly became obsessed with the way code could be used to solve complex problems. I graduated
            from Boston College with a CS degree in 2021 and have been working as a software engineer ever since.
          </Typography>
          <br />
          <Typography
            variant="h6"
            sx={{
              opacity: 0,
              animation,
              animationDelay: '1.4s'
            }}
          >
            I work across the full stack building everything from secure APIs and data pipelines to LLM prompts to
            beautiful, responsive, and accessible UIs. I enjoy building all sorts of components and endpoints, but I
            particularly love using javascript and other tools to create interesting data visualizations. In
            architecting and building data visualizations, I get the chance to solve the problems I find most
            fascinating - like how to best store, slice and serve up massive datasets and how to present that data in a
            way that communicates the message with end users in a way that is clear engaging and effective.
          </Typography>
          <br />
          <Typography
            variant="h6"
            sx={{
              opacity: 0,
              animation,
              animationDelay: '1.6s'
            }}
          >
            When I'm not coding or designing, you might find me running, enjoying a sunset with friends, watching some
            basketball, or hunting for the best bagel and iced coffee in New York.
          </Typography>
        </Grid>
      </Grid>
      {/*TODO (future): Add what tools I use in my typical tech stack */}
    </Box>
  );
};
