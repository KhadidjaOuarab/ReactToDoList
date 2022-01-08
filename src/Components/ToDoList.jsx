import React from 'react'

function ToDoList({ choix, getValue, printValue,inputVal }) {
    return (
     <div className='left'>
        <form onSubmit={printValue} >
            <input onChange={getValue} type="text" value={inputVal}></input>
            <button>Demander</button>
        </form>
       
        <div>
           
            {choix.map((ele) => (<p key={ele.id}> {ele.title} </p>))}
        </div>
    </div>
    )
}

export default ToDoList
