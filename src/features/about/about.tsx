import { Box, Grid, Typography } from '@mui/material';
import me from './assets/me.jpeg';

export const About = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <Grid container columnSpacing={5} direction="row-reverse">
        <Grid item sm={12} md={5}>
          <img
            src={me}
            alt="A photo of me, Kathleen, giving a thumbs up"
            style={{
              maxHeight: '300px',
              // maxWidth: '380px',
              borderRadius: '30px'
            }}
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant="h1">About</Typography>
          <Typography variant="body1">
            I'm Kathleen. I'm a full stack software engineer. Like working across the whole stack like figuring out how
            things work passionate about data visualization and how it can communicate complex ideas more clearly and
            human computer interaction. Originally from outside of boston, best sports city in the world got a cs degree
            from Boston college first hello world problem solving aspect
          </Typography>
          <Typography variant="body1">
            Aside from coding
            <></>
            reading writing running hiking being outside watching basketball finding the best coffee in town hanging out
            with friends
            <></>
            life goal is to run 10 marathons (2 so far + one on roller blades)
            <></>
            currently attempting to learn how to surf
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
