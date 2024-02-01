/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                basicText: '#191C1D',
                highlightedText: '#1414D2',
                secondaryText: '#3F484A',
                lightGray: '#F8FAFA',
                gray: '#CAC4D0'
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
            },
            spacing: {
                17: '4.25rem',
            },
        },
    },
    plugins: [],
};
