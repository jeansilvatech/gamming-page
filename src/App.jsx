import { useState } from 'react'
import './App.css'
import { Slider } from './Components/Slider/Slider'
import { Banner } from './Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
     <Slider/>
    </>
  )
}

export default App
