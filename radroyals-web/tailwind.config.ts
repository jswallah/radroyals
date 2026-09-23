import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#eef0f8",
          100: "#cdd2ea",
          200: "#9ba5d5",
          300: "#6978bf",
          400: "#3750aa",
          500: "#1A2B6D",  // Primary navy
          600: "#152360",
          700: "#101a4a",
          800: "#0a1133",
          900: "#05081d",
          950: "#020410",
        },
        gold: {
          50:  "#fdf9ed",
          100: "#f8edca",
          200: "#f0d995",
          300: "#e8c560",
          400: "#E2C980",  // Light gold
          500: "#C9A451",  // Primary gold
          600: "#b08930",
          700: "#8a6a24",
          800: "#634c1a",
          900: "#3d2e10",
          950: "#261d0a",
        },
        charcoal: "#1A1A2E",
        offwhite: "#F8F7F4",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":       "fadeUp 0.7s ease forwards",
        "fade-in":       "fadeIn 0.6s ease forwards",
        "slide-right":   "slideRight 0.7s ease forwards",
        "slide-left":    "slideLeft 0.7s ease forwards",
        "scale-in":      "scaleIn 0.5s ease forwards",
        "float":         "float 6s ease-in-out infinite",
        "grid-move":     "gridMove 20s linear infinite",
        "shimmer":       "shimmer 2s linear infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        gridMove: {
          "0%":   { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%":      { transform: "translateY(8px)", opacity: "0.4" },
        },
      },
      backgroundImage: {
        "gold-gradient":  "linear-gradient(135deg, #C9A451 0%, #E2C980 50%, #C9A451 100%)",
        "navy-gradient":  "linear-gradient(135deg, #1A2B6D 0%, #0a1133 100%)",
        "hero-gradient":  "linear-gradient(to right, rgba(10,17,51,0.85) 0%, rgba(10,17,51,0.4) 100%)",
      },
      boxShadow: {
        "gold":    "0 0 0 1px rgba(201,164,81,0.3), 0 4px 24px rgba(201,164,81,0.12)",
        "premium": "0 8px 40px rgba(10,17,51,0.12)",
        "card":    "0 2px 20px rgba(10,17,51,0.08)",
        "glow":    "0 0 30px rgba(201,164,81,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
