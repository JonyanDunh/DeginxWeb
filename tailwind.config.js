/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#C6B4D8",
                    secondary: "#CEE0E6",
                    accent: "#F0EAE0",
                    neutral: "#F5C0BF",
                    info: "#EAD4D4"
                },
            },
            "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
        ],

    },
    theme: {
        extend: {},
        maxHeight: {
            '128': '32rem',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'html': '#eff0f7',
        }),
        textColor: theme => theme('colors'),


    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
