import { useState } from 'react'
import './App.css'
import Introducao from './pages/introducao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Introducao></Introducao>
    </>
  )
}

export default App
