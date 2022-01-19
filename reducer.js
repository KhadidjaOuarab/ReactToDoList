import React from 'react'
import { Add_Todo } from './src/action'
const initialState = {
    number: 0
};



function reducer(state = initialState, action) {

    switch (action.type) {

        case ADD_ONE:
            return {
                number: state.number + 1
            };

        case MINUS_ONE:
            return {
                number: state.number - 1
            };

        default:
            return state;
    }
}


export default reducer


