import { combineReducers } from 'redux'
import todo from './todo/reducer/todo.reducer'
import counter from './counter/reducer/counter.reducer'
import covid from './covid19/reducer/covid.reducer'

const rootReducer = combineReducers({
  todo,
  counter,
  covid,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
