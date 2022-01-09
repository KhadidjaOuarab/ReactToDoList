import React from 'react'

function ToDoList({ choix, getValue, printValue, inputVal, countAllTasks,countCompleted }) {
    return (
        <div >
            <form onSubmit={printValue} >
                <input onChange={getValue} type="text" value={inputVal}></input>
                <button type='submit'  >Add</button>
            </form>

            <div>
                <ul>
                    {choix.map((ele) => (
                    <li key={ele.id} className='flex flex-row space-x-7 text-lg'>
                        <input type="checkbox" defaultChecked={ele.completed} ></input>
                        <p> {ele.id} {ele.title} </p>
                    </li>))}
                </ul>
            </div>
           
      
            <p>All Tasks</p><input value={countAllTasks} />
            <p>Completed Tasks</p><input value={countCompleted} />

            
    
        </div>
    )
}

export default ToDoList
