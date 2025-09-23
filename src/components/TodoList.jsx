import React from 'react'
import Todo from './Todo'

function TodoList({todos}) {
  return (
    <div className='flex flex-col gap-4'>
      {
        todos && todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}

export default TodoList