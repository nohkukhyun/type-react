import * as todo from "../action/todo.actions"
import todos from "../../../pages/todos"

export interface Todo {
  index: number
  text: string
  completed: boolean
}
export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [],
}

type TodoAction =
  | ReturnType<typeof todo.addTodo>
  | ReturnType<typeof todo.toggleTodo>
  | ReturnType<typeof todo.removeTodo>

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case todo.ADD_TODO:
      return {
        ...state,
        todos: [
          {
            text: action.payload,
            completed: false,
          },
        ],
      }

    case todo.TOGGLE_TODO:
      return {
        ...state,
      }

    case todo.REMOVE_TODO:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default todoReducer
