import useGameLogic from './useGameLogic'

function App() {
  const {
    words,
    wordCount,
    time,
    isTimeRunning,
    handleChange,
    handleChangeTimeSet,
    startGame,
    inputRef, 
    selectRef
  } = useGameLogic()

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
      <label for="timeSelect">Choose your time:</label>
      <select 
        name="timeSelect" 
        id="timeSelect" 
        disabled={isTimeRunning} 
        onChange={handleChangeTimeSet}
        ref={selectRef}
      >
        <option value={5}>5</option>
        <option value={15}>15</option>
        <option value={30}>30</option>
        <option value={60}>60</option>
      </select>
      <h4>Time Remaining: {time}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App
