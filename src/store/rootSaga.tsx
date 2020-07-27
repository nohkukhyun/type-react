import { all } from 'redux-saga/effects'
import { watchCovid19Saga } from './covid19/saga/covid.saga'

export default function* rootSaga() {
  yield all([watchCovid19Saga()])
}
