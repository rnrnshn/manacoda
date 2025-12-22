import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#081F35",
          "navy-light": "#0B082C",
          pink: "#C471B6",
          "pink-light": "#C471B6",
          gold: "#BCA075",
          "gold-light": "#BCA075",
        },
        neutral: {
          white: "#FFFFFF",
          "gray-100": "#F3F4F6",
          "gray-300": "#D1D5DB",
          "gray-500": "#9CA3AF",
          "gray-700": "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-xl": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-lg": ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-md": ["1.875rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config

