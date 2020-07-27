import axios, { AxiosError } from 'axios'

const getToday = () => {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDay()
  let today = `${year}${month}${day}`
  return today
}

let TODAY = getToday()

const GET_URL =
  'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'
const SERVICE_KEY =
  '5LdkSG1W3xY%2BhPIEJ6zFsN%2FMefcz8TCAWdVsPHbmBrWgQ8uVhxWWNq0ZfHghx%2FT7nsTW%2BvM0AYydLLnKN77Snw%3D%3D'

const START_DATE = '20200310'

const NUM_OF_ROWS = '100'

export const covid = () => {
  const res = axios
    .get(
      `${GET_URL}?ServiceKey=${SERVICE_KEY}&startCreateDt=${START_DATE}&endCreateDt=${'20200724'}&numOfRows=${NUM_OF_ROWS}`,
    )
    .then((response) => {
      return response
    })
    .catch((error) => console.log('covid fetch failed', { error }))
  return res
}
