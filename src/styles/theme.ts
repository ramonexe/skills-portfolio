export const theme = {
  colors: {
    primary: '#FFEED2',
    secondary: '#8F8463',
    background: '#121212',
    text: '#FFEED2',
    subdescription: '#B0B0B0',
    cardBackground: '#1e1e1e',
    headerBackground: 'rgba(30, 30, 30, 0.8)',
    scrollbarTrack: '#2d2d2d',
    scrollbarThumb: '#555',
    scrollbarThumbHover: '#777',
  },
} as const

export type Theme = typeof theme