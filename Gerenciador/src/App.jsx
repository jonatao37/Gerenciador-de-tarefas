import { useState } from 'react'
import './App.css'
import Addtodo from './Components/Todo.jsx'
import Todos from './Components/selector.jsx'




function App() {
  return (<>
    <div className='App'>
      <div className='AppBox'>
        <div className='InputAdd'>
          <Addtodo />
        </div>
        <div className='Lista'>
          <Todos />
        </div>
      </div>
    </div>  </>)
}

export default App
