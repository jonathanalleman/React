import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/Bitcoin'
import { EmojiProvider } from './context/EmojiProvider'

function App() {
 

  return (
    <>
    <EmojiProvider>
    <BitcoinRates />
    </EmojiProvider>
      
    </>
  )
}

export default App
