import React from 'react'

function TodoCreate() {
  return (
    <div className='w-full h-1/3 mt-14 flex justify-start items-center flex-col'>
      <div className='flex justify-center items-end flex-col'>
        <input className='w-[740px] py-3 px-5 rounded-xl outline-none border shadow-md shadow-slate-500 border-slate-300 text-slate-900 text-xl hover:scale-[1.02] transition-all duration-300 ease-in-out' type="text" placeholder='Your todo' />
        <button className='px-4 py-3 mt-3 hover:scale-105 text-slate-300 bg-slate-600 hover:bg-slate-700 rounded-xl transition-all duration-300 ease-in-out'>Create Todo</button>
      </div>
    </div>
  )
}

export default TodoCreate