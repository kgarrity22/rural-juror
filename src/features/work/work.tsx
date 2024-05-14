import { Box, Chip, Fade, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

// this is my research profile
const orcId = 'https://orcid.org/0000-0002-9875-0074';

type SingleProject = {
  shortTitle: string;
  longTitle: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  code: string;
  website: string;
  demo: string;
  id: string;
  type: ('paper' | 'work' | 'dataviz' | 'iOS')[];
};

export const Work = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const workHistory = [
    { id: 'work1', description: 'work1', title: 'Work 1' },
    { id: 'work2', description: 'work2', title: 'Work2' },
    { id: 'work3', description: 'work3', title: 'Work3' },
    { id: 'work4', description: 'work4', title: 'Work4' },
    { id: 'work5', description: 'work5', title: 'work5' }
  ];
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <Box sx={{ mt: theme.spacing(10) }}>
      <Typography variant="h1">Work</Typography>

      <Box display="flex">
        <Box
          sx={{
            width: selectedProject && !isMobile ? '60%' : '100%',
            pr: 3,
            transition: 'width .7s ease-in-out',
            //
            overflow: 'scroll'
          }}
        >
          {workHistory.map((work) => (
            <SingleWorkBlock
              key={work.id}
              work={work}
              isSelected={selectedProject === work.id}
              setSelected={setSelectedProject}
            />
          ))}
        </Box>

        {!isMobile && (
          <Box
            sx={{
              background: '#fff',
              width: selectedProject ? '40%' : 0,
              opacity: selectedProject ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out 0.5s',
              borderRadius: 3
              // overflow: 'scroll',
              // maxHeight: 600
              //
              // position: 'fixed',
              // bottom: 0
            }}
          >
            {/** An Image will go in here */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const SingleWorkBlock = ({
  work,
  isSelected,
  setSelected
}: {
  isSelected: boolean;
  setSelected: (s: string | null) => void;
  work: { id: string; description: string; title: string };
}) => {
  const selectedProps = isSelected
    ? { height: 300 }
    : {
        height: 50,
        cursor: 'pointer',
        alignItems: 'center',
        // display: 'flex',
        ':hover': { background: '#ffffff40', '& .MuiChip-root': { background: '#fff' } }
      };
  return (
    <Box
      onClick={() => (isSelected ? setSelected(null) : setSelected(work.id))}
      sx={{
        borderTop: '1px solid #333333',
        color: '#333',
        transition: 'height 0.5s ease-in-out',
        ...selectedProps
      }}
    >
      <Fade in={!isSelected} timeout={isSelected ? 0 : 1000}>
        <Box
          sx={{
            ml: 2,
            mr: 2,
            display: 'flex',
            alignItems: 'center',
            height: isSelected ? 0 : '100%'
          }}
        >
          <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
            {work.title}
          </Typography>
          {/* <Box>
            <Chip sx={{ mr: 1 }} label="Technology1" variant="filled" />
            <Chip sx={{ mr: 1 }} label="Technology2" variant="filled" />
            <Chip sx={{ mr: 1 }} label="Technology3" variant="filled" />
          </Box> */}
        </Box>
      </Fade>

      {/*  */}

      <Fade in={isSelected} timeout={isSelected ? 1000 : 0} style={{ transitionDelay: isSelected ? '0.5s' : '0s' }}>
        <Box
          sx={{
            ml: 2,
            mr: 2
          }}
        >
          <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
            {work.title}
          </Typography>
          <Box>
            <Chip sx={{ mr: 1 }} label="Technology1" variant="filled" />
            <Chip sx={{ mr: 1 }} label="Technology2" variant="filled" />
            <Chip sx={{ mr: 1 }} label="Technology3" variant="filled" />
          </Box>
          <Box>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};
