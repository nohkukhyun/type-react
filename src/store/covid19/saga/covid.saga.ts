import { takeEvery, put, call } from 'redux-saga/effects'
import * as covid from '../action/covid.action'
import * as covidApi from '../api/index'
import { covidType } from '../type/covid.type'

function* getCovid19Saga() {
  try {
    const covid19: covidType = yield call(covidApi.covid)
    yield put({ type: covid.GET_COVID_19, payload: covid19 })
  } catch (e) {
    yield put({ type: covid.GET_COVID_19_FAILURE, payload: e })
  }
}

export function* watchCovid19Saga() {
  takeEvery(covid.GET_COVID_19, getCovid19Saga)
}
