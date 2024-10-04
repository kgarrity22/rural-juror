import '../style.css';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    customPaletteColor0: PaletteColor;
    customPaletteColor1: PaletteColor;
    customPaletteColor2: PaletteColor;
    customPaletteColor3: PaletteColor;
    customPaletteColor4: PaletteColor;
  }

  interface PaletteOptions {
    customPaletteColor0?: PaletteColorOptions;
    customPaletteColor1?: PaletteColorOptions;
    customPaletteColor2?: PaletteColorOptions;
    customPaletteColor3?: PaletteColorOptions;
    customPaletteColor4?: PaletteColorOptions;
  }
}
