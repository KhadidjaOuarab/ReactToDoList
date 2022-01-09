import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './Components/ToDoList'
import axios from 'axios'

function App() {

  const [inputValue, setInputValue] = useState("");
  const [state, setstate] = useState([])
  const [countAllTasks, setCountAllTasks] = useState(0);
  const [countCompleted, setCountCompleted] = useState(0);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => { setstate(res.data.slice(0, 10)) })

  }
    , [])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      
     .then(res => {if (res.completed) setCountCompleted(countCompleted++)  })
    
    }
      , [])
   
  const getValue = (e) => {
    setInputValue(e.target.value)
  }

  const printValue = (e) => {
    e.preventDefault()
    console.log(inputValue);
    let id = state.length +1
    state.push({ id: id, title: inputValue })
    setInputValue("")
  }
  return (
    <div >
      <ToDoList  printValue={printValue} getValue={getValue} inputVal={inputValue} choix={state}
      countAllTasks={state.length} countCompleted={countCompleted} />
     
    </div>
  )


}

export default App
