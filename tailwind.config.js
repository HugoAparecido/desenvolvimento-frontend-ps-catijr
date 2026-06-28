/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    DEFAULT: 'var(--color-green)',
                    text: 'var(--color-green-text)',
                    hover: 'var(--color-green-hover)',
                },
            },
            fontSize: {
                h1: 'var(--text-h1)',
            },
        },
    },
    plugins: [],
}