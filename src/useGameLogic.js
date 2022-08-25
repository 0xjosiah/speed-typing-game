import { useState, useEffect, useRef } from 'react'

function useGameLogic() {
  const inputRef = useRef(null)
  const selectRef = useRef(null)

  const [words, setWords] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [time, setTime] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  const handleChange = event => {
    const {value} = event.target
    setWords(value)
  }

  const handleChangeTimeSet = event => {
    const {value} = event.target
    setTime(value)
  }
  
  const getWordCount = words => {
    const arr = words.trim().split(' ')
    return arr.filter(word => word !== '').length
  }

  const startGame = () => {
    setWordCount(0)
    setTime(selectRef.current.value)
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
    handleChangeTimeSet,
    startGame,
    inputRef,
    selectRef
  }
}

export default useGameLogic