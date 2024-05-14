import { createContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PaletteMode, ThemeProvider } from '@mui/material';
import { basicTheme } from './styles/theme';
import { getTheme } from './styles/utils';
import { TypingExample } from './routes/home';
import './style.css';
import { About } from './features/about/about';
import { Work } from './features/work/work';
import { Contact } from './features/contact/contact';
import { Home } from './features/home/home';
import { Layout } from './components/layout';
import { CustomCursor } from './components/cursor';

// need to install react-router
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/work',
        element: <Work />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/typing-effect',
        element: <TypingExample />
      }
    ]
  }
]);

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

const ToggleColorMode = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

// #region get theme

// #endregion get theme

// todo: do I want an error boundary here?
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={basicTheme}>
    <ToggleColorMode>
      <CustomCursor />
      <RouterProvider router={router} />
    </ToggleColorMode>
  </ThemeProvider>
);
