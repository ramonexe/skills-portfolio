export const theme = {
  colors: {
    primary: '#3498db', // Azul claro
    secondary: '#2E4559', // Verde claro
    background: '#02060D', // Cinza claro
    text: '#C2DCF2', // Cinza escuro
  },
} as const

export type Theme = typeof theme