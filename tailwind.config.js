const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./node_modules/flowbite/**/*.js",
        
    ],
    theme: {
      screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
      },
      colors: {
          gray: colors.gray,
          blue: colors.sky,
          red: colors.rose,
          pink: colors.fuchsia,
      },

      extend: {
          spacing: {
              '128': '32rem',
              '144': '36rem',
          },
          borderRadius: {
              '4xl': '2rem',
          }
      }
  },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("flowbite/plugin"),
    ],
};
