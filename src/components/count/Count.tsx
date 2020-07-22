import React from 'react'
import * as S from './count.styled'

type CountProps = {
  handleIncrease: (num: number, message: string) => void
  handleDecrease: (num: number, message: string) => void
  num: number
}

function Count({ handleIncrease, handleDecrease, num }: CountProps) {
  return (
    <S.CountWrap>
      <S.CountWrapBody>
        <S.Title>COUNTER</S.Title>
        <S.Number>{num}</S.Number>
        <S.Buttons onClick={() => handleIncrease(num, 'num up!')}>+</S.Buttons>
        <S.Buttons onClick={() => handleDecrease(num, 'num down!')}>
          -
        </S.Buttons>
      </S.CountWrapBody>
    </S.CountWrap>
  )
}

export default Count
