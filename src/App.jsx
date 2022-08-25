import { useState, useEffect, useRef } from 'react'
import useGameLogic from './useGameLogic'

function App() {
  const inputRef = useRef(null)
  const {
    words,
    setWords,
    wordCount,
    setWordCount,
    time,
    setTime,
    isTimeRunning,
    setIsTimeRunning,
    handleChange,
    getWordCount,
    startGame,
    endGame 
  } = useGameLogic(5)

  useEffect(() => {
    if(time > 0 && isTimeRunning) {
      inputRef.current.focus()
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
        disabled={!isTimeRunning}
        ref={inputRef}
      />
      <h4>Time Remaining: {time}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App
