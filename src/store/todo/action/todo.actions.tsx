export const ADD_TODO = "ADD_TODO" as const;
export const TOGGLE_TODO = "TOGGOLE_TODO" as const;
export const REMOVE_TODO = "REMOVE_TODO" as const;

let id = 0;
export const addTodo = (payload: string) => ({
  type: ADD_TODO,
  payload: {
    id: id++,
    text: payload,
    completed: false,
  },
});

export const toggleTodo = (payload: number) => ({
  type: TOGGLE_TODO,
  payload,
});

export const removeTodo = (payload: number) => ({
  type: REMOVE_TODO,
  payload,
});
