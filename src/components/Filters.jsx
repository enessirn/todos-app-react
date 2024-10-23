import {useState, useEffect} from 'react'

function Filters({todoList, editStatus, status}) {

  
  return (
    <div className='flex gap-1 justify-between w-full px-4'> 
    <label className='select-none'> {todoList.length} item left</label>
    <div>
    <button 
    className='bg-orange-300 border px-4 outline-none border rounded select-none transition-all hover:bg-orange-400'
    id={status.all.toString()}
    onClick={() => editStatus({
      completed: false,
      active: false,
      all: true
    })}
    >All</button>
    <button 
    className='bg-orange-300 border px-4 outline-none border rounded select-none transition-all hover:bg-orange-400'
    id={status.active.toString()}
    onClick={() => editStatus({
      completed: false,
      active: true,
      all: false
    })}>Active</button>
      <button 
      className='bg-orange-300 border px-4 outline-none border rounded select-none transition-all hover:bg-orange-400'
      id={status.completed.toString()}
      onClick={() => editStatus({
        completed: true,
        active: false,
        all: false
      })}>Completed</button>

    </div>
     
      <button className='hover:underline'>Clear Completed</button>

    </div>
  )
}

export default Filters
