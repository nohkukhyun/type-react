import { createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { covidType } from '../type/covid.type'

export const GET_COVID_19 = 'GET_COVID_19'
export const GET_COVID_19_SUCCESS = 'GET_COVID_19_SUCCESS'
export const GET_COVID_19_FAILURE = 'GET_COVID_19_FAILURE'

export const getCovid19Async = createAsyncAction(
  GET_COVID_19,
  GET_COVID_19_SUCCESS,
  GET_COVID_19_FAILURE,
)<undefined, covidType, AxiosError>()
