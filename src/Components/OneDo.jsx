import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useState } from 'react'
function OneDo({deleteValue,title}) {


    return (
        <div >
            <li className='flex flex-row ml-80'>
                <input  type="checkbox"  ></input>
                <p>  {title} </p>
                <button type='submit' onClick={deleteValue} className=' w-28 border-2 ml-5' >Remove</button>

            </li>
        </div>
    )
}


export default OneDo;

