import { useState } from 'react'
import './App.scss'

function App() {

  const [count, setCount] = useState(0)

  const handlClickPlus = () =>{
    setCount(prev => prev + 1)
  };

  const handlClickMinus = ()=>{
    setCount(prev => prev - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Counter :</h2>
        <h1 className='counter'>{ count }</h1>
        <button 
          className='minus'
          onClick={ handlClickMinus }

        >- Minus</button>
        <button 
          className='plus'
          onClick={ handlClickPlus }
        >Plus +</button>
      </div>
    </div>
  )
}

export default App
