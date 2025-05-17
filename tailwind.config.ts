module.exports = {
  // ... other config
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".flex-center": {
          "@apply flex items-center justify-center": {},
        },
      });
    },
  ],
};
