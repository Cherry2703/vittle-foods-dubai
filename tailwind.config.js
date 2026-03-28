/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0E1217", // deep dark 
        foreground: "#f8fafc", // slate-50
        primary: {
          DEFAULT: "#6366f1", // indigo-500
          hover: "#4f46e5", // indigo-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#10b981", // emerald-500
          hover: "#059669",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(30, 41, 59, 0.5)", 
          border: "rgba(255, 255, 255, 0.08)",
        },
        dark: {
          100: "#1E293B",
          200: "#0F172A",
          300: "#020617",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
