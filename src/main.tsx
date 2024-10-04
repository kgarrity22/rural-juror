import { createContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PaletteMode, ThemeProvider } from '@mui/material';
import { getTheme } from './styles/utils';
import './style.css';
import { About } from './features/about/about';
import { Work } from './features/work/work';
import { Contact } from './features/contact/contact';
import { Home } from './features/home/home';
import { Layout } from './components/layout';
import { NotFound } from './features/not-found/not-found';

// need to install react-router
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '*', element: <NotFound /> },
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Work />
      },
      {
        path: '/contact',
        element: <Contact />
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

// todo: custom 404
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ToggleColorMode>
    {/* <CustomCursor /> */}
    <RouterProvider router={router} />
  </ToggleColorMode>
);
