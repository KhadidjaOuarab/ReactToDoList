import React from 'react'
import { Add_Todo,Remove_Todo } from './src/action'


const initialState = {
    todos: []
};


function reducer(state = initialState, action) {
    console.log(action.type);

    switch (action.type) {

        case Add_Todo:
            console.log(action.todosProps);
            return {
                todos: [...state.todos, action.todosProps],

            };

        case Remove_Todo:
            console.log(action.id);
            return {
                todos: state.todos.filter( (el) => el.id !== action.id) ,

            };

        default:
            return state;
    }

}


export default reducer


