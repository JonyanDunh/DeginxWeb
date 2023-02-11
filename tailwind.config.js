/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: [
            "cupcake","light", "dark", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
        ],
    },
    theme: {
        extend: {maxHeight: {
                '128': '32rem',
            },
            width: {
                '45': '11.25rem',
            },
            height: {
                '18-8': '4.7rem',
                '30': '7.5rem',
                '45': '11.25rem',
            }},

    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
