import { useState } from 'react'
import './styles/App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-dvh flex justify-start items-center flex-col bg-slate-400'>
      <TodoCreate />
      <TodoList />
    </div> 
  )
}

export default App
