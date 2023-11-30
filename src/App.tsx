import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getHour } from './calculerHeure'
import Cadran from './Cadran'


console.log("getHour", getHour(1, 1, 1));
function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div>
        <Cadran />
      </div>
    </>
  )
}

export default App
