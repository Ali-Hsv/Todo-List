import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemoveTodo, onUpdatedTodo}) {

  return (
    <div className='flex flex-col gap-4'>
      {
        todos && todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdatedTodo={onUpdatedTodo} />
        ))
      }
    </div>
  )
}

export default TodoList