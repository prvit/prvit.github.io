/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border: 'var(--color-border)',
        'border-muted': 'var(--color-border-muted)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        'accent-subtle': 'var(--color-accent-subtle)',
        success: 'var(--color-success)',
        'tag-bg': 'var(--color-tag-bg)',
        'tag-text': 'var(--color-tag-text)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem',
      },
      maxWidth: {
        site: '1152px',
        narrow: '672px',
        main: '832px',
        wide: '1024px',
      },
      spacing: {
        'section-mobile': '64px',
        'section-desktop': '96px',
      },
      height: {
        nav: '56px',
      },
    },
  },
  plugins: [],
};
