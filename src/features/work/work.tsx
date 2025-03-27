import { Box, Card, CardContent, Chip, Grid, Link, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { projects } from './constants';
import { ArrowOutward } from '@mui/icons-material';
import { SingleProject } from './types';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

export const Work = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <Box>
      <Typography variant="h1" sx={{ opacity: 0, animation, animationDelay: '1s', mb: theme.spacing(1) }}>
        Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{
          opacity: 0,
          animation,
          animationDelay: '1s',
          mb: theme.spacing(2),
          fontFamily: theme.typography.caption.fontFamily,
          fontWeight: 'bold'
        }}
      >
        A collection of both professional and personal projects. Click on a project card to see that project live.
      </Typography>
      <Box sx={{ mt: theme.spacing(2) }}>
        {projects.map((p, i) => (
          <Box sx={{ opacity: 0, animation, animationDelay: `${1 + 0.3 * i}s` }}>
            <Box
              onMouseOver={() => setSelectedProject(p.shortTitle)}
              onMouseOut={() => setSelectedProject(null)}
              key={p.shortTitle}
              sx={{
                transition: 'opacity 0.3s',
                opacity: selectedProject !== null && p.shortTitle !== selectedProject ? 0.7 : 1
              }}
            >
              <SingleWorkBlock project={p} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const SingleWorkBlock = ({ project }: { project: SingleProject }) => {
  const theme = useTheme();
  return (
    <Link href={project.website} style={{ textDecoration: 'none' }}>
      <Card
        elevation={0}
        sx={{
          animation,
          opacity: 0,
          animationDelay: '1.2s',
          width: '100%',
          background: 'transparent',
          mb: theme.spacing(1),
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          '& .MuiTypography-h5': {
            mb: theme.spacing(0)
          },

          ':hover': {
            background: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            '& .MuiSvgIcon-root': {
              transform: project.website ? 'translate(50%, -20%)' : 0
            },
            '& .MuiTypography-h5': {
              textDecoration: project.website ? 'underline' : ''
            }
          }
        }}
      >
        <CardContent>
          <Grid direction="row-reverse" container columnSpacing={2}>
            <Grid item xs={12} sm={5}>
              <img
                src={project.image}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  maxHeight: 270,
                  borderRadius: theme.spacing(1)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box display="flex">
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Inter Tight', mb: theme.spacing(1) }} variant="h5">
                  {project.longTitle || project.shortTitle}
                </Typography>
                {project.website && (
                  <ArrowOutward
                    sx={{
                      fontSize: 20,
                      alignSelf: 'center',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                )}
              </Box>
              <Box sx={{ mb: theme.spacing(1) }}>
                {project.technologies.map((t) => (
                  <Chip
                    key={t}
                    sx={{
                      mr: theme.spacing(1),
                      fontFamily: 'Inter',
                      height: 24,
                      fontSize: 10
                    }}
                    label={t}
                  />
                ))}
              </Box>

              <Typography variant="body1">{project.longDescription}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};
