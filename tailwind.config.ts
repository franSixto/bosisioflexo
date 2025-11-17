import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c3177', // Color oficial de marca
          light: '#9a6ca3',
          dark: '#4a2252',
          glow: '#7d4a87',
        },
        accent: {
          DEFAULT: '#c0c0c0', // Plata/silver como acento
          light: '#d8d8d8',
          dark: '#a8a8a8',
        },
        black: {
          DEFAULT: '#0A0A0A',
          light: '#1E1E1E',
        },
        gray: {
          DEFAULT: '#2A2A2A',
          light: '#3A3A3A',
          dark: '#1E1E1E',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(108, 49, 119, 0.5)',
        'glow-lg': '0 0 30px rgba(108, 49, 119, 0.6)',
        'glow-xl': '0 0 45px rgba(108, 49, 119, 0.7)',
        'glow-accent': '0 0 20px rgba(192, 192, 192, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6c3177 0%, #9a6ca3 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1E1E1E 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
