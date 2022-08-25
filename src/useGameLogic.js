import { useState, useEffect, useRef } from 'react'

function useGameLogic(num) {
  const STARTING_TIME = num
  const inputRef = useRef(null)

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
    setTime(num)
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
      inputRef.current.focus()
      setTimeout(() => setTime(time => time - 1), 1000)
    }
    if(time === 0) {
      endGame()
    }
  }, [isTimeRunning, time])

  return {
    words,
    wordCount,
    time,
    isTimeRunning,
    handleChange,
    startGame,
    inputRef
  }
}

export default useGameLogic