import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globals'
import { theme } from './styles/theme'
import AnimatedBackground from './components/AnimatedBackground';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
