import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as covid from '../../store/covid19/action/covid.action'
import { RootState } from '../../store/rootReducer'
import Covid from '../../components/covid'

const Covid19Container: React.FC = () => {
  const dispatch = useDispatch()
  const { covid19 } = useSelector((state: RootState) => state.covid)

  useEffect(() => {
    dispatch(covid.getCovid19Async.request)
    console.log({ covid19 })
  }, [])

  return <Covid />
}

export default Covid19Container
