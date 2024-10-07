/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "9rem",
      },
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgba(3, 3, 3, 1) 0%, rgba(3, 3, 3, 0.6) 52%, rgba(3, 3, 3, 0.3) 100%)",
      },
      backgroundColor: {
        backgroundOvlay: "rgba(39, 43, 54, 0.5)",
      },
    },
  },
  plugins: [],
};
