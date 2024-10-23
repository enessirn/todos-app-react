import { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa6";

function List({ list, setList, status }) {
  const [activeItems, setActiveItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
    const deleteItem = (e) => {
      const newList = list.filter((_, i) => i !== e.target.tabIndex); 
      setList(newList);
  }
  
    
    
  
  useEffect(() => {
    if (status.active === true) {
      setActiveItems([])
      const filteredActive = list.filter(item => item.isCompleted === false);
      setActiveItems(filteredActive);
    }
    
    if (status.completed === true) {
      setCompletedItems([])
      const filteredCompleted = list.filter(item => item.isCompleted === true);
      setCompletedItems(filteredCompleted);
    }
  }, [list, status]);

  const items = (datas) => {
    return datas.map((item, index) => {
      return (
        <li key={index} tabIndex={index} className={`${item.isCompleted && "bg-green-300"} rounded-lg flex justify-between my-4 border py-3 px-3 transition-all ease-in-out duration-1000`}>
          <input 
            type="checkbox"
            onChange={() => reeditCheckbox(index)}
            checked={item.isCompleted}
            className='w-6'
            id={index}
          />
          <label className={`${item.isCompleted && "line-through"} text-2xl select-none`}>{item.name}</label>
          <button tabIndex={index} onClick={deleteItem}><FaTrash className='hover:text-red-700 text-red-500 transition-all ease-in-out duration-800 pointer-events-none' size={24} /></button>
        </li>
      );
    });
  };

  const reeditCheckbox = (index) => {
    const updatingNewData = list.map((item, i) => {
      if (index === i) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setList(updatingNewData);
  };

  return (
    <div className='border w-full px-4 overflow-hidden my-8'>
      <ul className='list-none'>
        {
          list.length !== 0 && status.all === true 
            ? items(list) 
            : status.active === true 
              ? items(activeItems) 
              : status.completed === true 
                ? items(completedItems) 
                : "no found"
        }
      </ul>
    </div>
  );
}

export default List;
