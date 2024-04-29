import { useState } from 'react'
import './App.css'
import Introducao from './pages/introducao'
import ThemeToggle from './components/theme-toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeToggle></ThemeToggle>
      <Introducao></Introducao>
    </>
  )
}

export default App
