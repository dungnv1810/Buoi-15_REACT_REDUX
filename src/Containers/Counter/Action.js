import {
    HANDLE_INCREMENT,
    HANDLE_DECREMENT
} from './Constants'

export const increment = (payload) => {
    return{
        type: HANDLE_INCREMENT,
        payload: payload
    }
}
export const decrement = (payload) => {
    return{
        type: HANDLE_DECREMENT,
        payload: payload
    }
}