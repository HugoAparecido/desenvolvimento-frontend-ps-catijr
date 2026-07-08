/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: 'var(--color-white)',
                black: 'var(--color-black)',

                gray: {
                    DEFAULT: 'var(--color-gray)',      // Cria a classe: bg-gray
                    bg: 'var(--color-gray-bg)',        // Cria a classe: bg-gray-bg
                    dark: 'var(--color-gray-dark)',    // Cria a classe: bg-gray-dark
                },

                subdued: {
                    DEFAULT: 'var(--color-subdued)',   // Cria a classe: text-subdued
                    light: 'var(--color-subdued-light)',// Cria a classe: text-subdued-light
                },

                green: {
                    DEFAULT: 'var(--color-green)',     // Cria a classe: text-green
                    text: 'var(--color-green-text)',   // Cria a classe: text-green-text
                    hover: 'var(--color-green-hover)', // Cria a classe: text-green-hover
                },

                danger: {
                    light: 'var(--color-danger-light)', // Cria a classe: bg-danger-light
                    dark: 'var(--color-danger-dark)',   // Cria a classe: bg-danger-dark
                },

                'popup-bg': 'var(--color-popup-bg)',

                options: {
                    hover: 'var(--color-options-hover)',
                    pressed: 'var(--color-options-pressed)',
                },

                text: {
                    base: 'var(--color-text-base)',
                },
            },

            backgroundImage: {
                'custom-gradient': 'linear-gradient(to right, var(--color-gradient-init), var(--color-gradient-end))',
            },

            fontFamily: {
                poppins: ['var(--font-poppins)'],
            },

            fontSize: {
                'xs': 'var(--text-xs)',
                'sm': 'var(--text-sm)',
                'base': 'var(--text-base)',
                'h6': 'var(--text-h6)',
                'h5': 'var(--text-h5)',
                'h4': 'var(--text-h4)',
                'h3': 'var(--text-h3)',
                'h2': 'var(--text-h2)',
                'h1': 'var(--text-h1)',
            }
        },
    },
    plugins: [],
}