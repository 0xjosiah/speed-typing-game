import { useState, useEffect } from 'react'

function App() {
  const STARTING_TIME = 5

  const [words, setWords] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [time, setTime] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  const handleChange = event => {
    const {value} = event.target
    setWords(value)
  }
  
  const getWordCount = words => {
    const arr = words.trim().split(' ')
    return arr.filter(word => word !== '').length
  }

  const startGame = () => {
    setWordCount(0)
    setTime(STARTING_TIME)
    setWordCount(0)
    setWords('')
    setIsTimeRunning(true)
  }

  const endGame = () => {
    setIsTimeRunning(false)
    setWordCount(getWordCount(words))
  }

  useEffect(() => {
    if(time > 0 && isTimeRunning) {
      setTimeout(() => setTime(time => time - 1), 1000)
    }
    if(time === 0) {
      endGame()
    }
  }, [isTimeRunning, time])

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
        disabled={isTimeRunning}
      />
      <h4>Time Remaining: {time}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App
