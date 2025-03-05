export const theme = {
  colors: {
    primary: '#3498db', // Azul claro
    secondary: '#2E4559', // Verde claro
    background: '#FFFFFF', // Branco
    text: '#333333', // Preto suave
  },
} as const

export type Theme = typeof theme