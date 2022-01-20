import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useState } from 'react'
function Form() {
const [toDo, setToDo] = useState({title : ""});
const getValue =(e)=>{
    setToDo ({title:e.target.value, id : Math.floor(Math.random ()* 100)})
    console.log('====================================');
    console.log(toDo);
    console.log('====================================');
}

const dispatch=useDispatch()
const printValue =(e)=>{ //pour envoyer au store en utilise dispatch et en envois action et l'objet
    e.preventDefault()
    dispatch({type:'Add_Todo', todosProps:toDo  })
    setToDo({title : ""})

}



    return (
        <div>
             <form onSubmit={printValue} >
                <input className='border-2 w-1/2 h-9 text-black ml-96' value={toDo.title} onChange={getValue} 
                type="text"  placeholder="Create a new todo..."></input>
                <button type='submit' className=' w-28 border-2 ml-5' >Add</button>
            </form> 
        </div>
    )

}


const mapStateToProps =  (state) => {
    return {
        todosProps : state.todos
    }
    }
export default connect(mapStateToProps)(Form);


