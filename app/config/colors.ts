/**
 * Color configuration for Roomy Domy
 * All colors used throughout the application should reference this file
 */

export const colors = {
  // Primary Brand Colors - Emerald/Teal
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981', // Main primary emerald
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  
  // Secondary - Teal
  secondary: {
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
  },
  
  // Accent - Cyan
  accent: {
    400: '#22d3ee',
    500: '#06b6d4',
  },
  
  // Text Colors
  text: {
    primary: '#1e293b',    // Slate 800
    secondary: '#64748b',  // Slate 500
    light: '#94a3b8',      // Slate 400
    muted: '#cbd5e1',      // Slate 300
    white: '#ffffff',
  },
  
  // Background Colors
  background: {
    white: '#ffffff',
    cream: '#f5f5f0',      // Warm cream
    light: '#f8fafc',      // Slate 50
    gray: '#f1f5f9',       // Slate 100
    dark: '#0f172a',       // Slate 900
    slate: '#1e293b',      // Slate 800
  },
  
  // Border Colors
  border: {
    light: '#e2e8f0',      // Slate 200
    medium: '#cbd5e1',     // Slate 300
    dark: '#94a3b8',       // Slate 400
  },
  
  // Semantic Colors
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
  
  // UI Specific
  ui: {
    headerBg: 'rgba(255, 255, 255, 0.8)',
    cardBg: '#ffffff',
    cardBorder: 'rgba(226, 232, 240, 0.6)',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    shadowPrimary: 'rgba(16, 185, 129, 0.3)',
    shadowPrimaryHover: 'rgba(16, 185, 129, 0.4)',
  },
} as const;

// Export individual color values for easy access
export const primaryEmerald = colors.primary[500];
export const secondaryTeal = colors.secondary[500];
export const darkSlate = colors.text.primary;
export const lightBg = colors.background.light;
export const creamBg = colors.background.cream;
export const white = colors.background.white;

