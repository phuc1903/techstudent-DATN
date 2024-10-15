/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       screens: {
        "small":'100px',
        'mobile':'380px',
        'md-600':'600px',
        'md': '768px',
        'lg-990':'990px',
        'lg-900':'900px',
        'lg': '1024px',
        'xl': '1280px',
        'xl-1150': '1150px', // Thêm breakpoint tùy chỉnh
        },
    },
  },
  plugins: [],
};
