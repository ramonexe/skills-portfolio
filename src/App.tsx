import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default App
