/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            // 1. MAPEAMENTO DE CORES SÓLIDAS
            colors: {
                // Cores base
                white: 'var(--color-white)',
                black: 'var(--color-black)',

                // Agrupando os tons de cinza
                gray: {
                    DEFAULT: 'var(--color-gray)',      // Cria a classe: bg-gray
                    bg: 'var(--color-gray-bg)',        // Cria a classe: bg-gray-bg
                    dark: 'var(--color-gray-dark)',    // Cria a classe: bg-gray-dark
                },

                // Agrupando subdued (com o typo corrigido)
                subdued: {
                    DEFAULT: 'var(--color-subdued)',   // Cria a classe: text-subdued
                    light: 'var(--color-subdued-light)',// Cria a classe: text-subdued-light
                },

                // Agrupando os verdes
                green: {
                    DEFAULT: 'var(--color-green)',     // Cria a classe: text-green
                    text: 'var(--color-green-text)',   // Cria a classe: text-green-text
                    hover: 'var(--color-green-hover)', // Cria a classe: text-green-hover
                },

                // Agrupando cores de alerta
                danger: {
                    light: 'var(--color-danger-light)', // Cria a classe: bg-danger-light
                    dark: 'var(--color-danger-dark)',   // Cria a classe: bg-danger-dark
                },

                // Cores específicas
                'popup-bg': 'var(--color-popup-bg)',
            },

            // 2. MAPEAMENTO DE GRADIENTES
            backgroundImage: {
                // Cria a classe: bg-custom-gradient
                'custom-gradient': 'var(--color-gradient)',
            },

            // 3. MAPEAMENTO DE FONTE
            fontFamily: {
                // Cria a classe: font-poppins
                poppins: ['var(--font-poppins)'],
            },

            // 4. MAPEAMENTO DE TAMANHOS DE FONTE
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