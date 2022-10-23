import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";

export const Navigation = () => {
    let activeStyle = {
        color: "#282c34",
    };

    return (
        <Wrapper>
            <Box>
                <Btn><NavLink to={'/show/0'} style={({isActive}) => isActive ? activeStyle : undefined}> Цикл
                    while </NavLink></Btn>
                <Btn><NavLink to={'/show/1'} style={({isActive}) => isActive ? activeStyle : undefined}> Цикл
                    for</NavLink></Btn>
                <Btn><NavLink to={'/show/2'} style={({isActive}) => isActive ? activeStyle : undefined}>Конструкция
                    "switch"</NavLink></Btn>
                <Btn><NavLink to={'/show/3'}
                              style={({isActive}) => isActive ? activeStyle : undefined}>Функция</NavLink></Btn>
                <Btn><NavLink to={'/show/4'} style={({isActive}) => isActive ? activeStyle : undefined}>Стрелочная
                    функция</NavLink></Btn>
                <Btn><NavLink to={'/show/5'} style={({isActive}) => isActive ? activeStyle : undefined}>Объект</NavLink></Btn>
                <Btn><NavLink to={'/show/6'} style={({isActive}) => isActive ? activeStyle : undefined}>Конструкция "if
                    else"</NavLink></Btn>
                <Btn><NavLink to={'/show/7'} style={({isActive}) => isActive ? activeStyle : undefined}>Метод массива
                    map</NavLink></Btn>
                <Btn><NavLink to={'/show/8'} style={({isActive}) => isActive ? activeStyle : undefined}>Метод массива
                    filter</NavLink></Btn>
                <Btn><NavLink to={'/show/9'} style={({isActive}) => isActive ? activeStyle : undefined}>Метод массива
                    slice</NavLink></Btn>
            </Box>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 20%;
  height: 100vh;
  background-color: white;
`

const Box = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  font-size: 20px;
  font-weight: 500;
  color: dodgerblue
`

const Btn = styled.div`
  margin-bottom: 10px;
  text-decoration: none;

  & > a {
    text-decoration: none;
    color: dodgerblue
  }

  a:visited {
    color: #b4ddf6;
  }
`
