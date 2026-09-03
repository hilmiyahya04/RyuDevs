import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/Components/App.tsx'],
            refresh: true,
            fonts: [
                bunny('Orbitron', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        tailwindcss(),
    ],
    server: {
        host: 'localhost', // <-- Tambahkan baris ini
        port: 5173,        // <-- Tambahkan baris ini
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});