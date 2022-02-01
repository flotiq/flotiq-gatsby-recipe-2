module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#4cb751',
                'olive-green': '#C6FB55',
                gray: '#7d7d7d',
                'light-gray': '#F9F9F9',
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            sora: ['Sora', 'sans-serif'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
