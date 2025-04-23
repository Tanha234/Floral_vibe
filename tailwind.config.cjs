// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Use dynamic import() for daisyui to load it as an ES module
    async function () {
      const daisyui = await import('daisyui');
      return daisyui.default;
    },
  ],
};
