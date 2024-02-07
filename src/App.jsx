import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageModification from './components/ImageModification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageModification />
    </>
  )
}

export default App
