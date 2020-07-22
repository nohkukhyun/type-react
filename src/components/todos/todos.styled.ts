import styled from "styled-components"

export const TodosWrap = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
`

export const TodosWrapBody = styled.div`
  width: 350px;
  height: 550px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  -webkit-box-shadow: 0px 10px 7px 5px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 10px 7px 5px rgba(214, 214, 214, 1);
  box-shadow: 0px 10px 7px 5px rgba(214, 214, 214, 1);
  border-radius: 10px;
  padding: 10px;
`

export const TodosBodyContents = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  margin-right: 10px;
`

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #333;
`

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
`

export const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TodoText = styled.span`
  padding-left: 5px;
  &.active {
    text-decoration: line-through;
    color: #999;
  }
`

export const Check = styled.svg`
  width: 14px;
  height: 14px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIgMnYyMGgtMjB2LTIwaDIwem0yLTJoLTI0djI0aDI0di0yNHoiLz48L3N2Zz4=")
    no-repeat;
  background-size: 100%;
  &.active {
    width: 14px;
    height: 14px;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEgMTdsLTUtNS4yOTkgMS4zOTktMS40MyAzLjU3NCAzLjczNiA2LjU3Mi03LjAwNyAxLjQ1NSAxLjQwMy04IDguNTk3em0xMS0xNXYyMGgtMjB2LTIwaDIwem0yLTJoLTI0djI0aDI0di0yNHoiLz48L3N2Zz4=")
      no-repeat;
    background-size: 100%;
  }
`

export const Remove = styled.svg`
  width: 14px;
  height: 14px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem02IDEzaC0xMnYtMmgxMnYyeiIvPjwvc3ZnPg==")
    no-repeat;
  background-size: 100%;
`
