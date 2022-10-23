import styled, {css} from "styled-components";

type errorType = {
    error: number | undefined
}

type disabledType = {
    disabled: boolean
}

const ButtonWrapper = styled.div<disabledType>`
  margin-top: 20px;

  ${props => props.disabled && css`
    opacity: 0.5;
  `}
  & > button {
    background-color: #039eff;
    color: white;
    padding: 15px;
    font-size: 20px;
    border: #039eff solid 2px;
  }
`
const Header = styled.h1`
  color: #039eff;
`
const MarginLeft = styled.div`
  margin-left: 10px;
`
const TextWrapper = styled.div`
  margin-top: 10px;
`
const Wrapper = styled.div`
  width: 80%;
  //height: 100vh;
  background-color: #282c34;
`
const Box = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  font-size: 20px;
  font-weight: 500;
  color: white;
`
const Example = styled.div`
  background-color: #039eff;
  color: white;
  width: 730px;
  padding-bottom: 7px;
  // height: 20vh;
  display: flex;
  align-items: center;
`
const About = styled.div`
  margin-bottom: 10px;

`
const Text = styled.div`
  margin-bottom: 20px;
`

const TextAreaWrapper = styled.span<errorType>`
  & > textarea {
    color: dodgerblue;
    font-size: 16px;
    ${props => props.error && css`
      background-color: #ecb4c6;
    `
    }
  }
`

export const S = {
    ButtonWrapper,
    Header,
    MarginLeft,
    TextWrapper,
    Wrapper,
    Box,
    Example,
    About,
    Text,
    TextAreaWrapper
}