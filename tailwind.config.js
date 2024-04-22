const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    darkMode: 'false',
    theme: {

        extend: {
            backgroundImage: {
                'hero-pattern': "url('/images/Overlay(1).svg')",
                'hero-stats': "url('/images/svg2.svg')",
                'hero-decs': "url('/images/contrattravailtemporaire-2.jpg')",
                'hero-shape': "url('/images/hero-shape-1.svg')",
                'hero-info-formation': "url(/images/hero-info-formation-Management.jpg)",
                'hero-principal': "url(/images/bg-data-fc.png)",
                'hero-ingenierieFformation': "url(/images/baniereIngeneriePojet.jpg)",
                'hero-formation': "url(/images/pexels-fauxels-3182781.jpg)",
                'svg-formation': "url(/images/464.svg)",
                'hero-assistance': "url(/images/pexels-fauxels-3184465.jpg)",
                'hero-etudeSt': "url(/images/numérisation-pano-1-.png)",
              },
              container: {
                center: true,
                padding: "1rem",
              }, colors: {
                primary: "#238a91",
                current: "currentColor",
                transparent: "transparent",
                white: "#FFFFFF",
                black: "#090E34",
                dark: "#1D2144",
                yellow: "#FBB040",
                "body-color": "#959CB1",
                'blue-chill': {
                    '50': '#F0FAFA',
                    '100': '#E1F4F5',
                    '200': '#B8E1E3',
                    '300': '#94D0D4',
                    '400': '#54AEB3',
                    '500': '#238a91',
                    '600': '#1D7682',
                    '700': '#145D6E',
                    '800': '#0C4457',
                    '900': '#073042',
                    '950': '#031B2B'
                }
              },/*  screens: {
                xs: "450px",
                // => @media (min-width: 450px) { ... }

                sm: "575px",
                // => @media (min-width: 576px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "992px",
                // => @media (min-width: 992px) { ... }

                xl: "1400px",
                // => @media (min-width: 1200px) { ... }

                "2xl": "1400px",
                // => @media (min-width: 1400px) { ... }
              }, */
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),



],

};
