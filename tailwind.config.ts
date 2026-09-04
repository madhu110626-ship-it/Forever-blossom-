import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bloom: {
          purple: "#4A1C6B",
          "purple-deep": "#2D0F45",
          "purple-soft": "#6B3A8C",
          lilac: "#C9A9E0",
          "lilac-soft": "#E8D5F5",
          gold: "#C9A227",
          "gold-light": "#E8C84A",
          "gold-dark": "#9A7B1A",
          cream: "#FBF7F0",
          ivory: "#F5F0E6",
          sage: "#8FA888",
          "sage-dark": "#6B8564",
          charcoal: "#2A2430",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(74, 28, 107, 0.25)",
        gold: "0 8px 30px -10px rgba(201, 162, 39, 0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
