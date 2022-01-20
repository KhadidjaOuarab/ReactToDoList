import React from 'react'
import { useEffect, useState } from 'react'
import OneDo from './OneDo';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
function ToDoList(props) {

    
const dispatch=useDispatch()
const deleteValue =(id)=>{ 
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    dispatch({type:'Remove_Todo', id  })

}
    return (
        <div className='flex text-center flex-col justify-around ml-50 '>


            <div className='flex  flex-col content-center text-center ml-56 '>
                <ul >

                    {props.todosProps.map((ele) => (

                        <OneDo key={ele.id} title={ele.title} deleteValue={() => deleteValue(ele.id)}/>

                    ))}

                  
                </ul>
            </div>



        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todosProps: state.todos
    }
}
export default connect(mapStateToProps)(ToDoList);
