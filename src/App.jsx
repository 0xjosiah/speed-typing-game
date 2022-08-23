import { useState } from 'react'

function App() {
  const [words, setWords] = useState('')
  const [count, setCount] = useState(0)

  const handleChange = event => {
    const {value} = event.target
    setWords(value)
    setCount(words.split(' ').length)
  }
  
  const handleSubmit = () => {
    setCount(words.trim().split(' ').length)
  }

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <h1>Clackin' Keys</h1>
      <textarea 
        name='words'
        value={words}
        onChange={handleChange}
      />
      <h4>Time Remaining: ???</h4>
      <button onClick={handleSubmit}>Start</button>
      <h1>Word Count: {count}</h1>
    </div>
  )
}

export default App
