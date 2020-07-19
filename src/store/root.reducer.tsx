import { combineReducers } from "redux";
import todo from "./todo/reducer/todo.reducer";

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
