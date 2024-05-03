/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,php}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        // => @media (min-width: 375px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1200px',
        // => @media (min-width: 1260px) { ... }

        '2xl': '1630px'
        // => @media (min-width: 1630px) { ... }
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        pxs: ['13px', '18px'], // 13px
        base: ['0.938rem', '1.449rem'], // 15px
        pxl: ['20px', '30px'], // 20px
        h3xs: ['1rem', '1.125rem'], // 16px
        h3lg: ['1.125rem', '1.313rem'], // 18px
        h3xl: ['1.5rem', '1.75rem'], // 24px
        h2xs: ['1.125rem', '1.575rem'], // 18px
        h2lg: ['1.875rem', '2.625rem'], // 30px
        h2xl: ['2.5rem', '3.5rem'], // 40px
        h1xs: ['1.875rem', '2.438rem'], // 30px
        h1lg: ['2.688rem', '3.479rem'], // 43px
        h1xl: ['3.438rem', '4.5rem'] // 55px
      },
      colors: {
        dark: '#262626',
        white: '#ffffff',
        bright: '#EEF2F8',
        blue: '#5082E6',
        blue2: '#3B5C7C',
        darkBlue: '#233255',
        transparent: 'transparent'
      },
      backgroundImage: {
        'index-main': 'url(../img/main-bg.png)',
        'arrow-link': 'url(../img/arrow-link.svg)',
      }
    }
  },
  plugins: []
}
