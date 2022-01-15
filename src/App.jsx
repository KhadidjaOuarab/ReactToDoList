import React, { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './Components/ToDoList'
import axios from 'axios'
import Form from './Components/Form';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [state, setstate] = useState([])
  const [countCompleted, setCountCompleted] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setstate(res.data.slice(0, 10))
        for (let index = 0; index < res.data.slice(0, 10).length; index++) {
          if (res.data[index].completed) {
            setCountCompleted((countCompleted) => countCompleted + 1)
          }

        }

      })

  }
    , [])

  const checkedList = (e) => {
    if (e.currentTarget.checked) {
      setCountCompleted((countCompleted) => countCompleted + 1)
    }
    else {
      setCountCompleted((countCompleted) => countCompleted - 1)
    }
  }

  const getValue = (e) => {
    setInputValue(e.target.value)
  }

  const printValue = (e) => {
    e.preventDefault()
    console.log(inputValue);
    let id = state.length + 1
  //  state.push({ id: id, title: inputValue })
    setstate([...state,{ id: id, title: inputValue }])
    setInputValue("")
  }

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>

      <div className=' flex justify-center   '>
        <h1 className='text-2xl font-bold'>T O D O</h1>
        <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}><img src={darkTheme ? '../src/imgs/icon-moon.svg' : '../src/imgs/icon-sun.svg'} /> </button>
      </div>

      < Form printValue={printValue} getValue={getValue} inputVal={inputValue} />

      <ToDoList state={state} countComplete={checkedList} />

    

      <div className='ml-96 gap-5 flex flex-row'><p className='w-44 h-3'>All Tasks     </p><input className='text-black' value={state.length} /></div>

      <div className='ml-96 gap-5 flex flex-row '><p className='w-44 h-3'>Completed Tasks</p><input className='text-black' value={countCompleted} /></div>


    </div>
  )


}

export default App
