import React from 'react'
import { useEffect, useState } from 'react'
import OneDo from './OneDo';

function ToDoList({ state, countComplete }) {

    return (
        <div className='flex text-center flex-col justify-around ml-50 '>


            <div className='flex  flex-col content-center text-center ml-56 '>
                <ul >

                    {state.map((ele) => (

                        <OneDo key={ele.id} countComplete={countComplete} completed={ele.completed} title={ele.title} />

                    ))}



                </ul>
            </div>



        </div>
    )
}

export default ToDoList
