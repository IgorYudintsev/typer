import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import styled from "styled-components";

export const Hello = () => {

    const [redirect, setEedirect] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setEedirect(true)
        }, 10000)
    }, [])

    if (redirect) {
            return <Navigate to={'/show/0'}/>
    }

    return (
        <Wrapper>
            <MarginTop>
                <Box>Привет!</Box>
                <Box>Этот тренажер мы создали, чтобы ты смог набить пальчики)</Box>
                <Box>Следи внимательно за разными видами скобок, привыкай к ним,</Box>
                <Box> и не ставь лишних пробелов)</Box>
            </MarginTop>
         </Wrapper>

    );
};

const Wrapper = styled.div`
  width: 70%;
  height: 100vh;
  color: #039eff;
  display: flex;
  justify-content: center;
`

const MarginTop= styled.div`
  margin-top: 150px;
  opacity:0; /*Элемент полностью прозрачный (невидимый)*/
  transition: 1s; /*Скорость перехода состояния элемента*/
  animation: show 3s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
  animation-delay: 1s; /* Задержка перед началом */
  @keyframes show{
    0%{
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`

const Box = styled.div`
  font-size: 35px;
  text-align: center;
`
