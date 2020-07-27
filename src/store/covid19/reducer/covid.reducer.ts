import { createReducer } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { covidType } from '../type/covid.type'
import {
  GET_COVID_19,
  GET_COVID_19_FAILURE,
  GET_COVID_19_SUCCESS,
  getCovid19Async,
} from '../action/covid.action'

interface CovidState {
  covid19: covidType
  error: AxiosError
}

const initialState: CovidState = {
  covid19: {
    accExamCnt: '', //누적 검사수
    accExamCompCnt: '', //누적 검사 완료수
    resutlNegCnt: '', //결과 음성 수
    careCnt: '', //치료중인 환자 수
    deathCnt: '', //사망자 수
    examCnt: '', //검사 진행자 수
    clearCnt: '', //격리해제 수
    decideCnt: '', //현재 확진자 수
  },
  error: null,
}

type CovidActions =
  | ReturnType<typeof getCovid19Async.request>
  | ReturnType<typeof getCovid19Async.success>
  | ReturnType<typeof getCovid19Async.failure>

const covid = createReducer<CovidState, CovidActions>(initialState, {
  [GET_COVID_19]: (state) => ({
    ...state,
    covid19: {
      accExamCnt: '', //누적 검사수
      accExamCompCnt: '', //누적 검사 완료수
      resutlNegCnt: '', //결과 음성 수
      careCnt: '', //치료중인 환자 수
      deathCnt: '', //사망자 수
      examCnt: '', //검사 진행자 수
      clearCnt: '', //격리해제 수
      decideCnt: '', //현재 확진자 수
    },
    error: null,
  }),

  [GET_COVID_19_SUCCESS]: (state, action) => ({
    ...state,
    covid19: action.payload,
    error: null,
  }),

  [GET_COVID_19_FAILURE]: (state, action) => ({
    ...state,
    covid19: initialState.covid19,
    error: action.payload,
  }),
})

export default covid
