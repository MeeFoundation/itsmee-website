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
                gray: '#CAC4D0',
                inactive: '#1D1B201F',
                disabled: '#79747E1F',
                meeColor: '#447F88',
                borderInactive: '#6F797A'
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
            },
            spacing: {
                17: '4.25rem',
                150: '37.5rem',
            },
            borderRadius: {
                '10': '10px',
                '4': '4px',
            },
            borderWidth: {
                '3': '3px',
            },
        },
    },
    plugins: [],
};
