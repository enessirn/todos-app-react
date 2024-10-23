import { useState,useEffect} from 'react';
import './App.css';
import './index.css';
import Filters from './components/Filters';
import List from './components/List';
import Form from './components/Form';

function App() {
  const[todo, setTodo] = useState([])
  const[status,editStatus] = useState({
    completed: false,
    active: false,
    all: true
  })

  const getDatas = (datas)=> {
    setTodo([...todo,datas])
  }
  return (
    <div className='mx-auto my-20 flex justify-center items-center flex-col gap-2 w-[900px]'>
      <h1 className='text-7xl mb-6 select-none text-orange-300'>To do with React</h1>
    <Form getData={getDatas}/>
    <List list={todo} setList={setTodo} status={status}/>
    <Filters todoList={todo} editStatus={editStatus} status={status} setTodo={setTodo} />
    </div>
  );
}

export default App;
