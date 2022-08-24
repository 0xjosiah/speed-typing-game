import { useState, useEffect } from 'react'

function App() {
  const [words, setWords] = useState('')
  const [time, setTime] = useState(6)
  const [isStart, setIsStart] = useState(false)

  const handleChange = event => {
    const {value} = event.target
    setWords(value)
  }
  
  const getWordCount = words => {
    const arr = words.trim().split(' ')
    return arr.filter(word => word !== '').length
  }

  useEffect(() => {
    if(time > 0 && isStart) {
      setTimeout(() => setTime(time => time - 1), 1000)
    }
    if(time === 0) setIsStart(false)
  }, [isStart, time])

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
      <h4>Time Remaining: {time}</h4>
      <button 
        onClick={() => setIsStart(true)}
      >Start</button>
      <h1>Word Count: {getWordCount(words)}</h1>
    </div>
  )
}

export default App
