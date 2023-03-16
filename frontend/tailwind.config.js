module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBlue: "#165D92",
        SecondaryBlue: "#2491BA",
        PrimaryOrange: "#E9942A",
        SecondaryOrange: "#ffdcb2",
        PrimaryGray: "#475569",
        SecondaryGray: "#F8FAFC",
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
