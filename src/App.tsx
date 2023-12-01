
import './App.css'
import { getHour } from './calculerHeure'
import Cadran from './Cadran'


console.log("getHour", getHour(1, 1, 1));
function App() {




  return (
    <>
      <div>
        <Cadran />
      </div>
    </>
  )
}

export default App
