import { Box } from '@mui/material';

const darkColors = {
  blue: '#390099', // duke blue
  purple: '#9E0059', // murrey
  pink: '#FF0054', // folly
  orange: '#FF8900', // dark orange
  yellow: '#FFBD00' // amber
};
const lightColors = {
  blue: '#758BFD', // cornflower blue
  lightblue: '#AEB8FE', // periwinkle
  pink: '#F25491',
  offwhite: '#fffcf2',
  orange: '#FF8600' // UT orange
};

export const AnimatedBackground2 = () => {
  return (
    <Box>
      <Box
        sx={{
          background: darkColors.blue,
          height: 1000,
          width: 400,
          position: 'absolute',
          top: -400,
          left: 0,
          borderRadius: '60%',
          filter: 'blur(120px)',
          transform: 'rotate(55deg)'
        }}
      />
      <Box
        sx={{
          background: lightColors.offwhite,
          height: 1000,
          width: 400,
          position: 'absolute',
          top: -400,
          left: 0,
          borderRadius: '60%',
          filter: 'blur(120px)',
          transform: 'rotate(55deg)',
          opacity: 0.6
        }}
      />
      <Box
        sx={{
          background: darkColors.blue,
          height: 1000,
          width: 400,
          position: 'absolute',
          top: 0,
          right: 0,
          borderRadius: '60%',
          filter: 'blur(200px)',
          transform: 'rotate(55deg)'
          //   opacity: 0.7
        }}
      />
      <Box
        sx={{
          background: darkColors.purple,
          height: 1000,
          width: 400,
          position: 'absolute',
          top: 150,
          left: 400,
          borderRadius: '35%',
          filter: 'blur(150px)',
          transform: 'rotate(55deg)'
          //   opacity: 0.7
        }}
      />

      <Box
        sx={{
          background: lightColors.offwhite,
          height: 1200,
          width: 200,
          position: 'absolute',
          bottom: -400,
          left: 0,
          borderRadius: '50%',
          filter: 'blur(50px)',
          transform: 'rotate(55deg)',
          opacity: 0.7
        }}
      />
    </Box>
  );
};

export const AnimatedBackground3 = () => {
  return (
    <Box>
      <Box
        sx={{
          background: darkColors.orange,
          height: 2000,
          width: 500,
          position: 'absolute',
          top: -400,
          left: 0,
          borderRadius: '50%',
          filter: 'blur(100px)',
          transform: 'rotate(55deg)'
          //   opacity: 0.7
        }}
      />

      <Box
        sx={{
          background: darkColors.yellow,
          height: 400,
          width: 1000,
          position: 'absolute',
          top: 0,
          right: -800,
          borderRadius: '50%',
          filter: 'blur(100px)'
          //   opacity: 0.7
        }}
      />
      <Box
        sx={{
          background: darkColors.pink,
          height: 500,
          width: 1200,
          position: 'absolute',
          bottom: 0,
          right: -600,
          borderRadius: '50%',
          filter: 'blur(200px)',
          transform: 'rotate(-45deg)'
          //   opacity: 0.7
        }}
      />
    </Box>
  );
};

export const AnimatedBackground4 = () => {
  return (
    <Box>
      <Box
        sx={{
          background: lightColors.blue,
          height: 300,
          width: 800,
          position: 'absolute',
          top: 0,
          left: -200,
          borderRadius: '30%',
          filter: 'blur(80px)'
          //   opacity: 0.7
        }}
      />
      <Box
        sx={{
          background: lightColors.blue,
          height: 300,
          width: 800,
          position: 'absolute',
          top: 0,
          right: -200,
          borderRadius: '30%',
          filter: 'blur(80px)'
          //   opacity: 0.7
        }}
      />

      <Box
        sx={{
          background: darkColors.yellow,
          height: 400,
          width: 1000,
          position: 'absolute',
          top: 0,
          right: -800,
          borderRadius: '50%',
          filter: 'blur(100px)'
          //   opacity: 0.7
        }}
      />
      <Box
        sx={{
          background: darkColors.pink,
          height: 500,
          width: 1200,
          position: 'absolute',
          bottom: 0,
          right: -600,
          borderRadius: '50%',
          filter: 'blur(200px)',
          transform: 'rotate(-45deg)'
          //   opacity: 0.7
        }}
      />
      <Box
        sx={{
          background: lightColors.lightblue,
          height: 500,
          width: 1200,
          position: 'absolute',
          bottom: 0,
          left: 0,
          borderRadius: '20%',
          filter: 'blur(200px)'
          //   opacity: 0.7
        }}
      />
    </Box>
  );
};

export const AnimatedBackground5 = () => {
  return (
    <Box>
      <Box
        sx={{
          background: lightColors.lightblue,
          height: 300,
          width: 800,
          position: 'absolute',
          left: -200,
          top: -50,
          right: -200,
          borderRadius: '30%',
          filter: 'blur(80px)'
          //   opacity: 0.7
        }}
      />
      <Box
        sx={{
          background: lightColors.lightblue,
          height: 300,
          width: 800,
          position: 'absolute',
          top: -50,
          right: -200,
          borderRadius: '30%',
          filter: 'blur(80px)'
          //   opacity: 0.7
        }}
      />

      <Box
        sx={{
          background: darkColors.pink,
          height: 400,
          width: 1000,
          position: 'absolute',
          top: 0,
          right: -800,
          borderRadius: '50%',
          filter: 'blur(160px)'

          //   opacity: 0.7
        }}
      />

      <Box
        sx={{
          background: darkColors.purple,
          height: 500,
          width: 1500,
          position: 'absolute',
          bottom: -300,
          left: -100,
          borderRadius: '20%',
          filter: 'blur(150px)'

          //   opacity: 0.7
        }}
      />
    </Box>
  );
};
