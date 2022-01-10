import React from 'react'
import { useEffect, useState } from 'react'

function ToDoList({ countComplete, choix, getValue, printValue, inputVal, countAllTasks, countCompleted }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className='flex text-center flex-col justify-around ml-96 mt-20'>

            <form onSubmit={printValue} >
                <input className='border-2 w-1/2 h-9 text-black' onChange={getValue} type="text" value={inputVal} placeholder="Create a new todo..."></input>
                <button type='submit' className=' w-28 border-2 ml-5' >Add</button>
            </form>
            <div className='flex  flex-col content-center text-center ml-96 mt-20 mb-20'>
                <ul >
                    {choix.map((ele) => (
                        <li key={ele.id} className='flex flex-row space-x-7 text-lg'>
                            <input onClick={countComplete} type="checkbox" defaultChecked={ele.completed} ></input>
                            <p> {ele.id} {ele.title} </p>
                        </li>))}
                </ul>
            </div>
            <div className='ml-96 gap-20 flex flex-row'><p >All Tasks</p><input className='text-black' value={countAllTasks} /></div>

            <div className='ml-96 gap-7 flex flex-row '><p>Completed Tasks</p><input className='text-black' value={countCompleted} /></div>



        </div>
    )
}

export default ToDoList
