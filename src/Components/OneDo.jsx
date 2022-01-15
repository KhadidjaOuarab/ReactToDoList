import React from 'react'

function OneDo({ countComplete, completed, title }) {
    return (
        <div >
            <li className='flex flex-row ml-80'>
                <input onClick={countComplete} type="checkbox" defaultChecked={completed} ></input>
                <p>  {title} </p>
            </li>
        </div>
    )
}

export default OneDo
