import React from 'react'

function Form({printValue,getValue,inputVal}) {
    return (
        <div>
             <form onSubmit={printValue} >
                <input className='border-2 w-1/2 h-9 text-black ml-96' onChange={getValue} 
                type="text" value={inputVal} placeholder="Create a new todo..."></input>
                <button type='submit' className=' w-28 border-2 ml-5' >Add</button>
            </form> 
        </div>
    )
}

export default Form
