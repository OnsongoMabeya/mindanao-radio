/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
        colors: {
            primary: '#3b82f6',
            secondary: '#10b981',
            dark: {
            bg: '#1a1a1a',
            text: '#ffffff',
            'text-secondary': '#e5e7eb',
            }
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        },
    },
    plugins: [],
} 