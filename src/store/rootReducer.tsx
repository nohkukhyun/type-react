import { combineReducers } from 'redux'
import todo from './todo/reducer/todo.reducer'
import counter from './counter/reducer/counter.reducer'

const rootReducer = combineReducers({
  todo,
  counter,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
