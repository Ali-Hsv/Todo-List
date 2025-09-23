import React from 'react'
import { CiEdit } from "react-icons/ci";
import { IoRemoveCircleOutline } from "react-icons/io5";


function Todo({todo}) {
  return (
    <div key={todo.id} className='w-[750px] flex justify-between items-center text-xl text-slate-100 bg-slate-600 p-3 px-5 rounded-lg shadow-xl shadow-slate-500 hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-none'>
        <div><h3>{todo.content}</h3></div>
        <div className='flex text-3xl gap-3'>
            <CiEdit className='hover:scale-105  hover:text-slate-400 cursor-pointer transition-all duration-200 ease-in-out' />
            <IoRemoveCircleOutline className='hover:scale-105  hover:text-slate-400 cursor-pointer transition-all duration-200 ease-in-out' />
        </div>
    </div>
  )
}

export default Todo