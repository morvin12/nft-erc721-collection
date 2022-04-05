const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {},
        colors: {
            popupsbg: colors.white,
            neutral: colors.slate,
            primary: colors.slate,
            primarytxt: colors.white,
            warning: colors.red,
            warningtxt: colors.black,
            error: colors.red,
            errortxt: colors.white,
        }
    },
    variants: {},
    plugins: [],
}