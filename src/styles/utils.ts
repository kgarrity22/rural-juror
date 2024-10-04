import { PaletteMode } from '@mui/material';
import { basicTheme } from './theme';

export const getTheme = (mode: PaletteMode) => {
  return basicTheme(mode);
};
