import {BreakpointsOptions, createTheme, ThemeOptions} from '@/core/ui/system';

import * as Palettes from './colorPalettes';

export const defaultBreakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  unit: 'px',
} as BreakpointsOptions;

export const defaultTypography = {
  fontFamily: '"Silka", monospace',
  h1: {
    fontSize: 28,
    lineHeight: '36px',
    fontWeight: 500,
  },
  h2: {
    fontSize: 24,
    lineHeight: '28px',
    fontWeight: 500,
  },
  h3: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 500,
  },
  p1: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
  },
  p2: {
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    fontWeight: 400,
  },
  p3: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 400,
  },
  caption: {
    fontSize: 10,
    lineHeight: '16px',
    fontWeight: 400,
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
};

export const baseTheme = {
  breakpoints: defaultBreakpoints,
  direction: 'ltr',
  components: {},
  typography: defaultTypography,
  palette: Palettes.bloomDarkPalette,
  shape: {
    borderRadius: 12,
  },
} as ThemeOptions;

export function createBasicTheme(options: ThemeOptions) {
  return createTheme({...baseTheme, ...options});
}
