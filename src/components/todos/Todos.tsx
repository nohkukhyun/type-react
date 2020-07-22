import React, { ChangeEvent } from "react"
import * as S from "./todos.styled"
import { Todo } from "../../store/todo/types/todo.types"

export interface TodosProps {
  handleSave: () => void
  handleChange: (e: ChangeEvent) => void
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleCompleted: (id: number) => void
  handleRemove: (id: number) => void
  value: string
  todos: Todo[] | any
}

const Todos: React.FC<TodosProps> = ({
  handleSave,
  handleChange,
  handleEnter,
  handleCompleted,
  handleRemove,
  value,
  todos,
}) => {
  return (
    <S.TodosWrap>
      <S.TodosWrapBody>
        <S.TodosBodyContents>
          <S.Input
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleEnter(e)}
          />
          <S.Button onClick={() => handleSave()}>Add</S.Button>
        </S.TodosBodyContents>
        <S.Ul>
          {todos.map((data: Todo) => {
            return (
              <S.Li key={data.id}>
                <div>
                  <S.Check
                    className={data.completed && "active"}
                    onClick={() => handleCompleted(data.id)}
                  />
                  <S.TodoText className={data.completed && "active"}>
                    {data.text}
                  </S.TodoText>
                </div>
                <div onClick={() => handleRemove(data.id)}>
                  <S.Remove />
                </div>
              </S.Li>
            )
          })}
        </S.Ul>
      </S.TodosWrapBody>
    </S.TodosWrap>
  )
}

export default Todos
