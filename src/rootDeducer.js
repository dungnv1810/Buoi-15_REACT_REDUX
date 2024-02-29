import {combineReducers} from 'redux';
import counterReducer from './Containers/Counter/Deducer'
import TodoListReducer from './Containers/TodoList/Deducer';
const rootReducer = combineReducers({
    counter: counterReducer,
    todo: TodoListReducer
})
export default rootReducer

// combineReducers chức năng gộp tất cả những deducer của container thành một, bên trong là một opject 