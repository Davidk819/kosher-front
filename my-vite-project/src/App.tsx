import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTextFields from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <BasicTextFields/>    
      </div>

    </>
  )
}

export default App
