
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './team'
import User from './useEffect'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  function handleAlart() {
    alert('Alart -1 clicked')
  }
  function handleAlart2(num){
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core concept</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleAlart}>Alart -1</button>
      <button onClick={() => {alert('Alart -2 clicked')}}>Alart -2</button>
      <button onClick={() => handleAlart2(5)}>Alart -4</button>
    </>
  )
}

export default App
