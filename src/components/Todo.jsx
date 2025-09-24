import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline  } from "react-icons/io5";




function Todo({todo, onRemoveTodo, onUpdatedTodo}) {

  const {id, content} = todo

  const [editable, setEditable] = useState(false);
  const [editTodo, setEditTodo] = useState(content)

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id : id,
      content : editTodo
    }
    onUpdatedTodo(request);
    setEditable(false);
  }

  return (
    <div className='w-[750px] flex justify-between items-center text-xl text-slate-100 bg-slate-600 p-3 px-5 rounded-lg shadow-xl shadow-slate-500 hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-none'>
        <div>
          {
            editable ? <input type="text" value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}}
            className='w-[500px] py-1 px-2 rounded-lg outline-none bg-slate-200 text-slate-700 text-xl hover:scale-[1.01] transition-all duration-300 ease-in-out' placeholder='Edit'/> 
            : <h3>{content}</h3>
          }
        </div>
        <div className='flex text-3xl gap-1'>
          {
            editable ? <IoCheckmarkCircleOutline className='icon' onClick={updateTodo} /> 
            : <MdEdit onClick={() => {setEditable(true)}} className='icon' />
          }
            <IoRemoveCircleOutline onClick={removeTodo} className='icon' />
        </div>
    </div>
  )
}

export default Todo