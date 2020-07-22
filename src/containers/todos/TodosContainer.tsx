import React, { useEffect, useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/rootReducer"
import {
  addTodo,
  toggleTodo,
  removeTodo,
} from "../../store/todo/action/todo.actions"
import Todos from "../../components/todos"

const TodosContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todo)
  const [value, setValue] = useState(null)

  const handleSave = () => {
    dispatch(addTodo(value))
    setValue("")
  }

  const handleChange = (e: ChangeEvent | any) => {
    let val = e.target.value
    console.log({ val })
    setValue(val)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value && e.keyCode === 13) dispatch(addTodo(value)), setValue("")
  }

  const handleCompleted = (id: number) => {
    console.log({ id })
    dispatch(toggleTodo(id))
  }

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id))
  }

  return (
    <Todos
      handleSave={handleSave}
      handleChange={handleChange}
      handleEnter={handleEnter}
      handleCompleted={handleCompleted}
      handleRemove={handleRemove}
      value={value}
      todos={todos}
    />
  )
}

export default TodosContainer
