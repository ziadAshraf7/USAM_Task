/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#04AE95',
        darkGrey: '#4A4A4A',
        white: '#FFFFFF',
        amber: '#FFB941',
        offWhite: '#F2F2F2',
        darkCyan: '#037C6A',
        aqua: '#D1FAF4',
        gray: '#777777',
        emeraldGreen: '#024B40',
        lavenderGray: '#B2B3CF',
        stoneGray: '#969696',
        softMint: '#83FCEA',
      },
    },
    fontFamily: {
      poppins: ['poppins'],
    },
  },
  plugins: [],
}
