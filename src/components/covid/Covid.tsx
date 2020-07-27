import React from 'react'
import styled from 'styled-components'

export const CovidWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

export const CovidWrapBody = styled.div`
  width: 100%;
`

const Covid: React.FC = () => {
  return (
    <CovidWrap>
      <CovidWrapBody>Covid 19</CovidWrapBody>
    </CovidWrap>
  )
}

export default Covid
