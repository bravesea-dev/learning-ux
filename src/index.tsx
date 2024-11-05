import { lazy } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);

const theme = {
    colors: {
      primary: 'hotpink',
    },
  };

const CompRoutes = lazy(() => import("../components/CompRoutes"));

function Root() {
    return (
        <Box sx={{
            padding: '8px 0px',
        }}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/components/*" element={<CompRoutes />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Box>
    )
}