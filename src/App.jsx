import { useState, useEffect } from 'react'

function App() {
  const [words, setWords] = useState('')
  const [time, setTime] = useState(6)

  const handleChange = event => {
    const {value} = event.target
    setWords(value)
  }
  
  const getWordCount = words => {
    return words.trim().split(' ').length
  }


  useEffect(() => {
    console.log('i ran', time)
    if(time > 0) {
      setTimeout(() => setTime(time => time - 1), 1000)
    }
  }, [time])

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
        // onClick={handleSubmit}
      >Start</button>
      <h1>Word Count: {getWordCount(words)}</h1>
    </div>
  )
}

export default App
