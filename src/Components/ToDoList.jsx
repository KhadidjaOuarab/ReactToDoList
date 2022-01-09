import React from 'react'
import { useEffect, useState } from 'react'

function ToDoList({ countComplete, choix, getValue, printValue, inputVal, countAllTasks, countCompleted }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div  className='bg-white text-center '>
            <form onSubmit={printValue} >
                <h1 className='font-bold '>T O D O</h1>
                <input className='border-2 w-80 h-9' onChange={getValue} type="text" value={inputVal}></input>
                <button type='submit' className='w-28 border-2 ml-5' >Add</button>
            </form>
            <div>
                <ul className='flex flex-col content-center ml-96 text-center mt-11'>
                    {choix.map((ele) => (
                        <li key={ele.id} className='flex flex-row space-x-7 text-lg'>
                            <input onClick={countComplete}
                                type="checkbox" defaultChecked={ele.completed} ></input>
                            <p> {ele.id} {ele.title} </p>
                        </li>))}
                </ul>
            </div>
            <div className='ml-96 flex flex-row mt-7 gap-4'><p>All Tasks</p><input value={countAllTasks} /></div>
            
            <div className='ml-96 flex flex-row gap-4'><p>Completed Tasks</p><input value={countCompleted} /></div>



        </div>
    )
}

export default ToDoList
