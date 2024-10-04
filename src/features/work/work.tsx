import { Box, Card, CardContent, Chip, Grid, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { projects } from './constants';
import { ArrowOutward } from '@mui/icons-material';
import { ProjectFilter, SingleProject } from './types';

const animation = 'fade-in-up-long 0.6s cubic-bezier(0.5, 1, 0.89, 1) forwards';

// run this on chip click
const filterProjects = (projects: any[], selected: 'all' | 'dataviz' | 'research' | 'app') =>
  selected === 'all' ? projects : projects.filter((project) => project.type.includes(selected));

export const Work = () => {
  const theme = useTheme();

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters: ProjectFilter[] = [
    { category: 'all', title: 'All' },
    { category: 'app', title: 'Apps' },
    { category: 'dataviz', title: 'DataViz' },
    { category: 'research', title: 'Research' }
  ];

  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  return (
    <Box
      sx={
        {
          // mt: { xs: theme.spacing(10), sm: theme.spacing(20), md: theme.spacing(25) },
          // // mr: { md: theme.spacing(5) },
          // // ml: { md: theme.spacing(5) },
          // mb: theme.spacing(10)
        }
      }
    >
      <Typography variant="h1" sx={{ opacity: 0, animation, animationDelay: '1s', mb: theme.spacing(1) }}>
        Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: 12, mb: theme.spacing(2), maxWidth: 300, opacity: 0, animation, animationDelay: '1.1s' }}
      >
        A collection of both professional and personal projects. Use the filters below to narrow th
      </Typography>
      <Box sx={{ opacity: 0, animation, animationDelay: '1.1s' }}>
        {/* <Box display="flex" sx={{ mb: theme.spacing(2) }}>
          {filters.map((filter) => (
            <Chip
              sx={{
                borderRadius: theme.spacing(0.5),
                bgcolor: filter.category === selectedFilter ? '#333' : '#fff',
                color: filter.category === selectedFilter ? '#fff' : '#333',
                mr: theme.spacing(1),
                fontFamily: 'Inter',
                height: 28,
                fontWeight: 500
              }}
              label={filter.title}
              onClick={() => {
                setSelectedFilter(filter.category);
                setProjectsToDisplay(filterProjects(projects, filter.category));
              }}
            />
          ))}
        </Box> */}
        {projectsToDisplay.map((p) => (
          <Box
            onMouseEnter={() => setSelectedProject(p.shortTitle)}
            onMouseLeave={() => setSelectedProject(null)}
            key={p.shortTitle}
            sx={{
              transition: 'opacity 0.3s',
              opacity: selectedProject !== null && p.shortTitle !== selectedProject ? 0.7 : 1
            }}
          >
            <SingleWorkBlock project={p} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const SingleWorkBlock = ({ project }: { project: SingleProject }) => {
  const theme = useTheme();
  return (
    <a href={project.website} style={{ textDecoration: 'none' }}>
      <Card
        elevation={0}
        sx={{
          animation,
          opacity: 0,
          animationDelay: '1.2s',
          //
          width: '100%',
          background: 'transparent',
          //

          // color: '#fff',
          mb: theme.spacing(1),
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          // backgroundImage: 'linear-gradient(rgb(0 0 0/40%) 0 0)',
          //
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
              transform: 'translate(50%, -20%)'
            },
            '& .MuiTypography-h5': {
              textDecoration: 'underline'
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
                <Typography
                  sx={{ fontWeight: 'bold', fontFamily: 'Inter Tight', mb: theme.spacing(1) }}
                  variant="h5"
                  // className="hover-underline-animation"
                >
                  {project.longTitle || project.shortTitle}
                </Typography>
                <ArrowOutward
                  sx={{
                    fontSize: 20,
                    alignSelf: 'center',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </Box>
              <Box sx={{ mb: theme.spacing(1) }}>
                {project.technologies.map((t) => (
                  <Chip sx={{ mr: theme.spacing(1), fontFamily: 'Inter', height: 24, fontSize: 10 }} label={t} />
                ))}
              </Box>

              <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: 14 }}>
                {project.longDescription}
              </Typography>

              {project.code && (
                <a href={project.code} style={{ color: '#000' }}>
                  <Typography variant="h4" sx={{ fontSize: 12 }}>
                    Source Code
                  </Typography>
                </a>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </a>
  );
};
