import * as React from 'react';

import {Box, styled} from '@/core/ui/system';

enum HEIGHT {
  xs = 26,
  sm = 32,
  md = 40,
  lg = 52,
}

enum FONT_SIZE {
  xs = 12,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  sm = 12,
  md = 14,
  lg = 16,
}

type size = 'xs' | 'sm' | 'md' | 'lg';

const DEFAULT_SIZE = 'lg';

export type BaseButtonProps = {
  size?: size;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'incognito';
};

export const Button = styled('button', {name: 'LzButton', label: 'LzButton'})<BaseButtonProps>(
  ({theme, size = DEFAULT_SIZE, variant = 'secondary'}) => ({
    borderRadius: theme.shape.borderRadius,
    border: '0',
    height: HEIGHT[size],
    fontSize: FONT_SIZE[size],
    cursor: 'pointer',
    padding: '0px 16px',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    textTransform: (theme.typography as any).button?.textTransform,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:disabled': {
      opacity: 0.7,
      filter: 'grayscale(100%) invert(0.9)',
      '&:hover': {
        cursor: 'default',
      },
    },
    ...(variant === 'primary' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover:not(:disabled)': {
        backgroundColor: theme.palette.primary.light,
      },
      '&:focus': {
        outline: 0,
        backgroundColor: theme.palette.primary.light,
      },
    }),
    ...(variant === 'secondary' && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      '&:hover:not(:disabled)': {
        backgroundColor: theme.palette.secondary.light,
      },
      '&:focus': {
        backgroundColor: theme.palette.secondary.light,
        outline: 0,
      },
    }),
    ...(variant === 'tertiary' && {
      minHeight: 24,
      padding: '4px 9px',
      fontSize: 12,
      // not sure why that size ?
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      '&:hover:not(:disabled)': {
        backgroundColor: theme.palette.secondary.light,
      },
      '&:focus': {
        backgroundColor: theme.palette.secondary.light,
        outline: 0,
      },
    }),
    ...(variant == 'incognito' && {
      background: 'transparent',
      padding: 0,
      color: theme.palette.text.primary,
      height: 'auto',
      textTransform: 'none',
      '&:hover:not(:disabled)': {
        opacity: 0.7,
      },
    }),
  }),
);
