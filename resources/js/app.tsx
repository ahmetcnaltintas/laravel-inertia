import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        // Eğer URL '/admin' ile başlıyorsa admin sayfalarını yükle
        if (window.location.pathname.startsWith('/admin')) {
            return resolvePageComponent(`./admin/${name}.tsx`, import.meta.glob('./admin/**/*.tsx'));
        }
        // Aksi takdirde frontend sayfalarını yükle
        return resolvePageComponent(`./frontend/${name}.tsx`, import.meta.glob('./frontend/**/*.tsx'));
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
