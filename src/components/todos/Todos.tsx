import React, { ChangeEvent } from "react"
import * as S from "./todos.styled"

export interface TodosProps {
  handleSave: () => void
  handleChange: (e: ChangeEvent) => void
  value: string
}

const Todos: React.FC<TodosProps> = ({ handleSave, handleChange, value }) => {
  return (
    <S.TodosWrap>
      <S.TodosWrapBody>
        <S.TodosBodyContents>
          <S.Input
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <S.Button onClick={() => handleSave()}>Add</S.Button>
        </S.TodosBodyContents>
      </S.TodosWrapBody>
    </S.TodosWrap>
  )
}

export default Todos
