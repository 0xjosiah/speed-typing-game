import { useState, useEffect } from 'react'

function App() {
  const STARTING_TIME = 5

  const [words, setWords] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [time, setTime] = useState(STARTING_TIME)
  const [isStart, setIsStart] = useState(false)

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
    setIsStart(true)
  }

  const endGame = () => {
    setIsStart(false)
    setWordCount(getWordCount(words))
  }

  useEffect(() => {
    if(time > 0 && isStart) {
      setTimeout(() => setTime(time => time - 1), 1000)
    }
    if(time === 0) {
      endGame()
    }
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
      <button onClick={startGame}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App
