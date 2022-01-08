import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './Components/ToDoList'
import axios from 'axios'
function App() {

  const [inputValue, setInputValue] = useState("");
  const [state, setstate] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => { setstate(res.data) })
  }
    , [state])

   
  
    const getValue = (e) => {
    setInputValue(e.target.value)
  }

  const printValue = (e) => {
    e.preventDefault()
    setstate([{ id: 300, title: inputValue }])
    console.log('====================================');
    console.log(state[state.length-1]);
    console.log('====================================');
    setInputValue("")
  }
  return (
    <div >
      <ToDoList printValue={printValue} getValue={getValue} inputVal={inputValue} choix={state} />
      {/* {state.map((ele) => (<p key={ele.id}> {ele.title} </p>))} */}
    </div>
  )

 
}

export default App
