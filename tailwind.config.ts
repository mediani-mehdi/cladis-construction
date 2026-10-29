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
        // High-Impact Construction Identity Colors (Architectural Electric Blue)
        construction: {
          blue: "#0066FF",
          blueLight: "#3385FF",
          blueDark: "#0052CC",
          // Backward-compatibility aliases so any cached or external references resolve to blue
          orange: "#0066FF",
          orangeLight: "#3385FF",
          orangeDark: "#0052CC",
        },
        // Swiss Style Color System
        swiss: {
          white: "#FFFFFF",
          snow: "#FAFAFA",
          subtle: "#F4F5F7",
          stone: "#ECEEF1",
          border: "#E2E4E8",
          line: "rgba(0, 0, 0, 0.08)",
          ink: "#0A0A0A",
          charcoal: "#1E2024",
          muted: "#666D77",
          light: "#8C94A0",
          faint: "#A5ADB8",
          accent: "#0066FF", // Vibrant industrial architectural electric blue
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
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "Consolas", "monospace"],
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
