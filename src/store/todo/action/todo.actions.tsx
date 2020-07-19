export const ADD_TODO = "ADD_TODO" as const;
export const TOGGLE_TODO = "TOGGOLE_TODO" as const;
export const REMOVE_TODO = "REMOVE_TODO" as const;

export const addTodo = (payload: string) => ({
  type: ADD_TODO,
  payload,
});

export const toggleTodo = () => ({
  type: TOGGLE_TODO,
});

export const removeTodo = () => ({
  type: REMOVE_TODO,
});
