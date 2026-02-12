import type { Config } from 'tailwindcss';

const createColor = (variable: string): string => {
    return `rgba(var(--color-${variable}), <alpha-value>)`
}

const config: Config = {
  content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: '459.98px',
      sm: '575.98px',
      md: '767.98px',
      lg: '991.98px',
      xl: '1365.98px',
      xxl: '2499.98px',
    },
    constants: {
      xs: 28,
      sm: 36,
      md: 40,
      lg: 48,
      xl: 56,
      xxl: 64,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: {
        DEFAULT: createColor('primary'),
      },
      black: {
        DEFAULT: createColor('black'),
      },
      white: {
        DEFAULT: createColor('white'),
      },
      gray: {
        DEFAULT: createColor('gray'),
      },
      grey: {
        DEFAULT: createColor('grey'),
      },
      dark: {
        DEFAULT: createColor('dark'),
      },
      smokie: {
        DEFAULT: createColor('smokie'),
      },
      red: {
        DEFAULT: createColor('red'),
      },
      green: {
        DEFAULT: createColor('green'),
      },
      aqua: {
        DEFAULT: createColor('aqua'),
      },
      blue: {
        DEFAULT: createColor('blue'),
      },
    },
    fontFamily: {
      base: 'var(--font-base)',
    },
    gridColumn: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    gridRow: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    extend: {
      content: {
        auto: '""',
      },
      fontSize: {
        min: ['0.5rem', '0.625rem'],
        xxs: ['0.625rem', '0.75rem'],
        '1.5xl': ['1.375rem', '1.75rem'],
        '2.5xl': ['1.75rem', '2.125rem'],
        title: ['2.5rem', '3rem'],
      },
      borderRadius: {
        inherit: 'inherit',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [
      require('./plugins/pack'),
      require('./plugins/input'),
      require('./plugins/button'),
      require('./plugins/animation'),
  ],
};

export default config;
