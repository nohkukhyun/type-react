import * as todo from "../action/todo.actions";
import todos from "../../../pages/todos";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

type TodoAction =
  | ReturnType<typeof todo.addTodo>
  | ReturnType<typeof todo.toggleTodo>
  | ReturnType<typeof todo.removeTodo>;

let id = 0;

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case todo.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case todo.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((data) => {
          if (data.id === action.payload) data.completed = !data.completed;
          return data;
        }),
      };

    case todo.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
