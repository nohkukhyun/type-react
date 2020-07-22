import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Count from '../../components/count'
import * as count from '../../store/counter/action/counter.action'
import { RootState } from '../../store/rootReducer'

function CountContainer() {
  const dispatch = useDispatch()
  const { num } = useSelector((state: RootState) => state.counter)

  const handleIncrease = (n: number, msg: string) => {
    dispatch(count.increaseCount(n, msg))
  }

  const handleDecrease = (n: number, msg: string) => {
    dispatch(count.decreaseCount(n, msg))
  }

  return (
    <Count
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      num={num}
    />
  )
}

export default CountContainer
