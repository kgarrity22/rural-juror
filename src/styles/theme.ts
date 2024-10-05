import { PaletteMode, ThemeOptions, createTheme } from '@mui/material';

const lightScheme = {
  customPaletteColor0: { main: '#758BFD' }, // light blue
  customPaletteColor1: { main: '#AEB8FE' }, // periwinkle
  customPaletteColor2: { main: '#F25491' }, // pink
  customPaletteColor3: { main: '#FF8600' }, // orange
  customPaletteColor4: { main: '#fffcf2' } // offwhite
};
const darkScheme = {
  customPaletteColor0: { main: '#390099' }, // dark blue
  customPaletteColor1: { main: '#9E0059' }, // dark purple
  customPaletteColor2: { main: '#FF0054' }, // magenta/pinky-purple
  customPaletteColor3: { main: '#FF8900' }, // dark orange
  customPaletteColor4: { main: '#FFBD00' } // amber
};
const colorSchemes = {
  dark: darkScheme,
  light: lightScheme
};

// the old theme
export const oldThemeOptions: (mode: PaletteMode) => ThemeOptions = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#4a494a', //'#192a3e',
      light: '#9bb7da'
    },
    secondary: {
      main: '#a90ea5',
      light: '#ffdcfe26'
    },
    info: {
      main: '#7695d7',
      light: '#f4f8ff',
      dark: '#004FC4'
    },
    warning: {
      main: '#ffb427',
      dark: '#E57A00'
    },
    error: {
      main: '#ff372e',
      light: '#ff6666',
      dark: '#E53535'
    },
    success: {
      main: '#38983d',
      dark: '#05A660'
    },
    background: {
      default: '#fff',
      paper: '#fff'
    },
    /**
     * Custom colors
     */
    ...colorSchemes[mode]
  },

  typography: {
    allVariants: {
      color: mode === 'dark' ? '#fff' : '#4a494a'
    },
    h1: {
      fontFamily: 'Coolvetica',
      fontWeight: 200,
      '@media (max-width:720px)': {
        fontSize: '4rem'
      }
    },
    h2: {
      fontFamily: 'Inter'
    },
    h3: {
      fontFamily: 'Urbanist',
      fontWeight: 200,
      fontSize: '2.125rem'
    },
    h4: {
      fontFamily: 'Urbanist',
      fontWeight: 200,
      fontSize: 30
    },
    h5: {
      fontFamily: 'Urbanist',
      fontWeight: 600
    },
    h6: {
      ontFamily: 'Urbanist',
      fontSize: 18,
      fontWeight: 400
    },
    body1: {
      fontFamily: 'Urbanist',
      fontSize: 14
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: 16
    },
    caption: {
      fontFamily: 'Didact Gothic',
      fontSize: 14,
      fontWeight: 'bold'
    },
    button: {
      fontSize: 16,
      fontWeight: 200,
      textTransform: 'none'
    },
    fontFamily: 'Urbanist'
  },
  spacing: 8,
  shape: {
    borderRadius: 6
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem'
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem'
//   }
// };

export const basicTheme = (mode: PaletteMode) => createTheme(oldThemeOptions(mode));
