import {
    HANDLE_ADD_USER,
    HANDLE_DELETE_USER,
} from './Constanst';
import { v4 as uuidv4 } from 'uuid'
const initialState = {
    todos: [],
}
const TodoListReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_ADD_USER: {
            console.log("action", action)
            const todo = action.payload;
            const newTodo = {
                id: uuidv4(),
                ...action.payload
            }
            console.log("newTodo = ", {newTodo});
            const newTodos = [...state.todos, newTodo];
            return{
                ...state,
                todos: newTodos
            }
        }
        default:
            return state
    }
}
export default TodoListReducer;