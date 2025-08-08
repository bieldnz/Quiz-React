import { useState } from 'react'
import Quiz from './pages/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz></Quiz>
    </>
  )
}

export default App
