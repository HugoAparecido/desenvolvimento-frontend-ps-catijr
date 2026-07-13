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

                essential: {
                    subdued: 'var(--color-essential-subdued)', // Cria a classe: bg-essential-subdued
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
                    subdued: 'var(--color-text-subdued)',
                },

                divider: 'var(--color-divider)',
                background: {
                    highlight: 'var(--color-background-highlight)',
                },

                'track-bar': 'var(--color-track-bar)',
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