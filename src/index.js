import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(_jsx(MantineProvider, { withGlobalStyles: true, withNormalizeCSS: true, children: _jsx(App, {}) }));
}
