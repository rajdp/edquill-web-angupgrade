/**
 * Enterprise Design System Tokens
 * Central source of truth for all design values
 */

export const DesignTokens = {
  // Color Palette (Aligned with existing theme)
  colors: {
    primary: {
      main: '#8F008A',      // Purple/Magenta - existing theme color
      light: '#A16EE7',     // Lighter purple
      dark: '#7F3486',      // Darker purple
      contrast: '#ffffff'
    },
    secondary: {
      main: '#13c9ca',      // Cyan - existing theme color
      light: '#5FDFE0',
      dark: '#0FA4A5',
      contrast: '#ffffff'
    },
    success: {
      main: '#81ba00',      // Green - existing theme color
      light: '#9FD530',
      dark: '#6A9C00',
      contrast: '#ffffff'
    },
    warning: {
      main: '#ffbc58',      // Orange - existing theme color
      light: '#FFCE7F',
      dark: '#FF9F1F',
      contrast: '#212529'
    },
    error: {
      main: '#db524b',      // Red - existing theme color
      light: '#E57870',
      dark: '#C73B33',
      contrast: '#ffffff'
    },
    info: {
      main: '#00a8ff',      // Blue - existing theme color
      light: '#33BDFF',
      dark: '#0087CC',
      contrast: '#ffffff'
    },
    neutral: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529'
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
      elevated: '#ffffff'
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      disabled: '#adb5bd',
      hint: '#868e96'
    }
  },

  // Typography Scale (Aligned with existing theme - Lato)
  typography: {
    fontFamily: {
      primary: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      secondary: 'Nunito, sans-serif',
      monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem'     // 48px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em'
    }
  },

  // Spacing System (Optimized for max screen space - 4px base grid)
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px - reduced default spacing
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem'      // 96px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px'
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    focus: '0 0 0 3px rgba(29, 106, 165, 0.25)'
  },

  // Transitions
  transitions: {
    duration: {
      fast: '150ms',
      base: '250ms',
      slow: '350ms'
    },
    timing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      linear: 'linear'
    }
  },

  // Form Components
  form: {
    fieldHeight: {
      sm: '2rem',      // 32px
      base: '2.5rem',  // 40px
      lg: '3rem'       // 48px
    },
    labelSize: '0.875rem',  // 14px
    helpTextSize: '0.75rem', // 12px
    errorSize: '0.75rem',    // 12px
    inputPadding: {
      x: '0.75rem',  // 12px
      y: '0.5rem'    // 8px
    }
  },

  // Buttons
  button: {
    height: {
      sm: '2rem',      // 32px
      base: '2.5rem',  // 40px
      lg: '3rem'       // 48px
    },
    padding: {
      sm: '0.5rem 1rem',
      base: '0.625rem 1.25rem',
      lg: '0.75rem 1.5rem'
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem'
    }
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  },

  // Breakpoints (matching Bootstrap)
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  }
};

// Helper function to get nested values
export function getToken(path: string): any {
  return path.split('.').reduce((obj, key) => obj?.[key], DesignTokens);
}

