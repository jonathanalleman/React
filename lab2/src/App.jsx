import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/Bitcoin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BitcoinRates />
    </>
  )
}

export default App
