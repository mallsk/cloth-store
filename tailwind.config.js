/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          // 'ui-sans-serif', 
          // 'system-ui', 
          // '-apple-system', 
          // 'BlinkMacSystemFont', 
          // 'Segoe UI', 
          // 'Roboto', 
          // 'Helvetica Neue', 
          'Arial', 
          // 'Noto Sans', 
          // 'sans-serif', 
          // 'Apple Color Emoji', 
          // 'Segoe UI Emoji', 
          // 'Segoe UI Symbol', 
          // 'Noto Color Emoji'
        ],
      },
      colors: {
        'custom-dark': '#19181a',
      },
      backgroundImage: {
        'logo-image': "url('/src/assets/logo.png')",
      },
    },
  },
  plugins: [],
}
