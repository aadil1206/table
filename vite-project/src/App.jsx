import { useState } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='App-main'>
   <Table/>
    </div>
  )
}

export default App
