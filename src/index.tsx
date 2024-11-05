import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import lazy from '../LazyComponent';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);

const CompRoutes = lazy(() => import("../components/CompRoutes"));

function Root() {
    return (
        <Box sx={{
            padding: '8px 0px',
        }}>
            <ThemeProvider theme={lightTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/components/*" element={<CompRoutes />} />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Box>
    )
}