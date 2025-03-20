import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
        </MantineProvider>
    );
}
