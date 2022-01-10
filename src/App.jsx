import React, { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './Components/ToDoList'
import axios from 'axios'


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
    state.push({ id: id, title: inputValue })
    setInputValue("")
  }

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>

      <div className=' flex justify-center  gap-96 pt-20 '>
        <h1 className='text-2xl'>T O D O</h1>
        <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}><img src={darkTheme ? '../src/imgs/icon-moon.svg' : '../src/imgs/icon-sun.svg'} /> </button>
      </div>

      <ToDoList printValue={printValue} getValue={getValue} inputVal={inputValue} choix={state}
        countComplete={checkedList} countAllTasks={state.length} countCompleted={countCompleted} />



    </div>
  )


}

export default App
