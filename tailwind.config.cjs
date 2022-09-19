/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'default': 'var(--bg)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'tertiary': 'var(--tertiary)',
      }
    },
  },
  plugins: [],
}
