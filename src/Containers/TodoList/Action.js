import {
    HANDLE_ADD_USER,
    HANDLE_DELETE_USER
} from './Constanst'

export const addUser = (payload) => {
    return{
        type: HANDLE_ADD_USER,
        payload: payload
    }
}

export const deleteUser = (payload) => {
    return{
        type: HANDLE_DELETE_USER,
        payload: payload
    }
}