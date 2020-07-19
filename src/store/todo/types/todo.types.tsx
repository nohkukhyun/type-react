export interface Todo {
  index: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}
