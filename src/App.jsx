import useGameLogic from './useGameLogic'

function App() {
  const {
    words,
    wordCount,
    time,
    isTimeRunning,
    handleChange,
    startGame,
    inputRef
  } = useGameLogic(5)

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
