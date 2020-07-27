import React from 'react'
import * as S from './count.styled'

type CountProps = {
  handleIncrease: (num: number, message: string) => void
  handleDecrease: (num: number, message: string) => void
  num: number
  message: string
}

function Count({ handleIncrease, handleDecrease, num, message }: CountProps) {
  return (
    <S.CountWrap>
      <S.CountWrapBody>
        <S.Title>COUNTER</S.Title>
        <S.Number>{num}</S.Number>
        <S.Buttons onClick={() => handleIncrease(num, 'num up!')}>+</S.Buttons>
        <S.Buttons onClick={() => handleDecrease(num, 'num down!')}>
          -
        </S.Buttons>
        <p>{message}</p>
      </S.CountWrapBody>
    </S.CountWrap>
  )
}

export default Count
