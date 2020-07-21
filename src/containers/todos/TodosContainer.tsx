import React, { useEffect, useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/rootReducer"
import { addTodo } from "../../store/todo/action/todo.actions"
import Todos from "../../components/todos"

const TodosContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { todo } = useSelector((state: RootState) => state)
  const [value, setValue] = useState(null)

  const handleSave = () => {
    dispatch(addTodo(value))
  }

  const handleChange = (e: ChangeEvent | any) => {
    let val = e.target.value
    console.log({ val })
    setValue(val)
  }

  return (
    <Todos handleSave={handleSave} handleChange={handleChange} value={value} />
  )
}

export default TodosContainer
