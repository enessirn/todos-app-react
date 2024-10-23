import {useState, useEffect} from 'react'

function Filters({todoList, editStatus, status, setTodo}) {
  const updateItems = () => {
    const list = todoList.filter((item) => item.isCompleted !== true)
    setTodo(list)
    
  }

  return (
    <div className='flex gap-1 justify-between w-full px-4'> 
    <label className='select-none'> {todoList.length} item</label>
    <div>
    <button 
    className={`bg-orange-300 border px-4 outline-none rounded select-none transition-all hover:bg-orange-400 ${status.all === true && "bg-orange-400"}`}
    id={status.all.toString()}
    onClick={() => editStatus({
      completed: false,
      active: false,
      all: true
    })}
    >All</button>
    <button 
    className={`bg-orange-300 border px-4 outline-none rounded select-none transition-all hover:bg-orange-400 ${status.active === true && "bg-orange-400"}`}
    id={status.active.toString()}
    onClick={() => editStatus({
      completed: false,
      active: true,
      all: false
    })}>Active</button>
      <button 
      className={`bg-orange-300 border px-4 outline-none rounded select-none transition-all hover:bg-orange-400 ${status.completed === true && "bg-orange-400"}`}
      id={status.completed.toString()}
      onClick={() => editStatus({
        completed: true,
        active: false,
        all: false
      })}>Completed</button>

    </div>
     
      <button
      onClick={updateItems}
      className='hover:underline'>Clear Completed</button>

    </div>
  )
}

export default Filters
