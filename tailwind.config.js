/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        text: "#ff8000", // Updated
        dim: "#aa5500", // Updated
        accent: "#007fff", // Updated
        error: "#ff0000",
        success: "#ff8000", // Updated
        green: "#ff8000", // Updated (effectively orange now)
        orange: "#ff8000", // Added for clarity if needed, though "green" is now orange
        blue: "#007fff", // Added for clarity if needed
        gray: {
          DEFAULT: "#aa5500", // Updated
          dark: "#552a00", // Updated
          light: "#ffaa00", // Updated
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Menlo", "Monaco", "Courier New", "monospace"],
        sans: ['"Geist"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(90deg, #007fff, #ff8000)", // Updated
        "gradient-logo": "linear-gradient(135deg, #007fff, #ff8000, #0055aa)", // Updated
        "gradient-button": "linear-gradient(83.21deg, #ff8000 0%, #007fff 100%)", // Updated
        "terminal-grid":
          "linear-gradient(rgba(255, 128, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 128, 0, 0.05) 1px, transparent 1px)", // Updated
      },
      animation: {
        "terminal-blink": "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
