import React, { ChangeEvent } from "react";
import * as S from "./todos.styled";
import { Todo } from "../../store/todo/types/todo.types";

export interface TodosProps {
  handleSave: () => void;
  handleChange: (e: ChangeEvent) => void;
  handleEnter: (e: KeyboardEvent) => void;
  handleCompleted: (id: number) => void;
  value: string;
  todos: Todo[] | any;
}

const Todos: React.FC<TodosProps> = ({
  handleSave,
  handleChange,
  handleEnter,
  handleCompleted,
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
          />
          <S.Button onClick={() => handleSave()}>Add</S.Button>
        </S.TodosBodyContents>
        <S.Ul>
          {todos.map((data: any, i: number) => {
            return data.completed === false ? (
              <S.Li key={i}>
                {`${data.text}`}
                <div onClick={() => handleCompleted(i)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z" />
                  </svg>
                </div>
              </S.Li>
            ) : (
              ""
            );
          })}
        </S.Ul>
      </S.TodosWrapBody>
    </S.TodosWrap>
  );
};

export default Todos;
