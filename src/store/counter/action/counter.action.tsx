export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREAST_COUNT = 'DECREAST_COUNT'

export const increaseCount = (payload: number) => ({
  type: INCREASE_COUNT,
  payload,
})

export const decreaseCount = (payload: number) => ({
  type: DECREAST_COUNT,
  payload,
})
