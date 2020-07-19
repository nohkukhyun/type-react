import { Todo, TodoState } from "../types/todo.types";
import * as todo from "../action/todo.actions";

const initialState: Todo = {
  index: 0,
  text: "",
  completed: false,
};

type TodoAction =
  | ReturnType<typeof todo.addTodo>
  | ReturnType<typeof todo.toggleTodo>
  | ReturnType<typeof todo.removeTodo>;

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case todo.ADD_TODO:
      return {
        ...state,
        index: state.index + 1,
        text: action.payload,
        completed: false,
      };

    case todo.TOGGLE_TODO:
      return {
        ...state,
        index: state.index,
        text: state.text,
        completed: true,
      };

    case todo.REMOVE_TODO:
      return {
        ...state,
        index: state.index,
        text: state.text,
        completed: false,
      };

    default:
      return state;
  }
};

export default todoReducer;
