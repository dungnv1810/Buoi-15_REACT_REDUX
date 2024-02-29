import {createStore} from 'redux'
import rootReducer from './rootDeducer'
const store = createStore(rootReducer)
export default store