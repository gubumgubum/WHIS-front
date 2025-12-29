/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        box: '-2px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
