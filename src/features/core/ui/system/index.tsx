import {
  createBox,
  createStack,
  createStyled,
  createTheme as systemCreateTheme,
  ThemeOptions as SystemThemeOptions,
  ThemeProvider as SystemThemeProvider,
  useTheme as useSystemTheme,
} from '@mui/system';
import * as React from 'react';

import type {Theme} from './types/theme';

export const useTheme = (): Theme => {
  return useSystemTheme();
};

export function ThemeProvider({
  children,
  theme,
}: React.PropsWithChildren<{
  theme: Partial<Theme>;
}>) {
  return <SystemThemeProvider theme={theme}>{children}</SystemThemeProvider>;
}

export function createTheme(themeOptions: SystemThemeOptions) {
  return systemCreateTheme(themeOptions) as Theme;
}

export const styled = createStyled<Theme>();
export const Box = createBox<Theme>();
export const Stack = createStack();
export type {Theme};
export type {BreakpointsOptions, SxProps, ThemeOptions, TypographyProps} from '@mui/system';
export {GlobalStyles, keyframes} from '@mui/system';
