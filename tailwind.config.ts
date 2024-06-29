import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'xs': '359px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      screens: {
        "2xl": "1560px",
        "xl ": "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "359px",
      },
    },
    maxWidth: {
      "8xl": "1560px",
    },
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        darkblue: "#2F07E5",
        lightblue: "#F8F9FF",
        darkindigo: "#1A0283",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config