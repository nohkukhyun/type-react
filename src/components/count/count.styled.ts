import styled from 'styled-components'

export const CountWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

export const CountWrapBody = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  -webkit-box-shadow: 0px 10px 7px 5px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 10px 7px 5px rgba(214, 214, 214, 1);
  box-shadow: 0px 10px 7px 5px rgba(214, 214, 214, 1);
  border-radius: 10px;
  padding: 10px;
`

export const Title = styled.h3`
  margin: 0 auto;
`
