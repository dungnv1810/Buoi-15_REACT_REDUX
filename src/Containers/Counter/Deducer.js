import {
    HANDLE_INCREMENT,
    HANDLE_DECREMENT,
} from './Constants.js'

const initialState = {
    counter: 31,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_INCREMENT:{
            return{
                ...state,
                counter: state.counter + 1
            }
        }
        case HANDLE_DECREMENT:{
            return{
                ...state,
                counter: state.counter - 1
            }
        }
        default:
            return state
    }
}
export default counterReducer;