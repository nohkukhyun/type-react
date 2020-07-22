import * as count from '../action/counter.action'

interface countState {
  id: number
  num: number
}

const initialState: countState = {
  id: 0,
  num: 0,
}

type counterActions =
  | ReturnType<typeof count.increaseCount>
  | ReturnType<typeof count.decreaseCount>

let id = 0

function counter(state = initialState, action: counterActions) {
  switch (action.type) {
    case count.INCREASE_COUNT: {
      return {
        ...state,
        id: id++,
        num: action.payload + 1,
      }
    }

    case count.DECREAST_COUNT: {
      return {
        ...state,
        id: id++,
        num: action.payload - 1,
      }
    }

    default:
      return state
  }
}

export default counter
