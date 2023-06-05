import {POST_REGISTRO} from '../actions/index.js';

const initialState  = {
    registro: []
}


function rootReducer (state = initialState, action) {
    switch (action.type) {
        case POST_REGISTRO:
            return{
                ...state
            }
    
        default:
          return state;
    }
}


export default rootReducer; 