import { useState } from 'react'
import './styles/App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo)=>{
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) =>{
    setTodos([...todos.filter((todo)=> todo.id!==todoId)]);
  }

  return (
    <div className='w-full h-dvh flex justify-start items-center flex-col bg-slate-400'>
      <TodoCreate onCreateTodo = {createTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo}/>
    </div> 
  )
}

export default App
