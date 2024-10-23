import {useState, useEffect} from 'react'

function Form({getData}) {
    const[inputText,setInputText] = useState({
        name: "",
        isCompleted: false
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.name.trim()) {
            getData(inputText)
           console.log(inputText);
            setInputText({
                name: "",
                isCompleted: false
            })
        }
    }
  return (
    <form onSubmit={handleSubmit}>

    <input 
    className='border focus:border-orange-500 outline-none px-2 py-1 rounded max-w-[900px] min-w-[600px] px-6 py-3 text-lg shadow-lg transition-all focus:shadow-2xl'
    type="text"
    value={inputText.name}
    onChange={(e)=> setInputText({name: e.target.value, isCompleted: false })}
    placeholder="What needs to be done?"
    autoFocus
    />


    </form>
  )
}

export default Form
