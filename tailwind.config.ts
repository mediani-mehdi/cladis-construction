import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // User Requested Primary & Secondary Text Colors
        primary: "#2D374E",
        secondary: "#3C3C3B",
        muted: "#878787",
        tertiary: "#878787",

        // High-Impact Construction Identity Colors (Architectural Electric Blue)
        construction: {
          blue: "#2D374E",
          blueLight: "#2D374E",
          blueDark: "#2D374E",
          // Backward-compatibility aliases so any cached or external references resolve to blue
          orange: "#2D374E",
          orangeLight: "#2D374E",
          orangeDark: "#2D374E",
        },
        // Swiss Style Color System mapped to the new palette
        swiss: {
          white: "#FFFFFF",
          snow: "#FAFAFA",
          subtle: "#F4F5F7",
          stone: "#ECEEF1",
          border: "#E2E4E8",
          line: "rgba(0, 0, 0, 0.08)",
          ink: "#2D374E",        // Primary: #2D374E
          charcoal: "#3C3C3B",   // Secondary: #3C3C3B
          muted: "#878787",      // Other Secondary: #878787
          light: "#878787",
          faint: "#A5ADB8",
          accent: "#2D374E",     // Vibrant industrial architectural electric blue
        },
        gold: {
          DEFAULT: "#C59B27",
          light: "#DFBA45",
          dark: "#9E7B15",
          subtle: "rgba(197, 155, 39, 0.08)",
          border: "rgba(197, 155, 39, 0.35)",
        },
      },
      fontFamily: {
        primary: ["var(--font-cairo)", "sans-serif"],
        secondary: ["var(--font-montserrat)", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-cairo)", "sans-serif"],
        serif: ["var(--font-montserrat)", "sans-serif"],
        mono: ["var(--font-montserrat)", "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.3em",
      },
      boxShadow: {
        "swiss-sm": "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        "swiss-md": "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
        "swiss-lg": "0 12px 35px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "swiss-hover": "0 20px 40px -6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
