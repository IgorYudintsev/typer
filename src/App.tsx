import React from 'react';
import './App.css';
import styled from "styled-components";
import {Navigation} from "./components/Navigation";
import {dataState} from "./dataState/dataState";
import {Route, Routes} from 'react-router-dom';
import {Hello} from "./components/Hello";
import {Show} from "./components/Show";


function App() {
    return (
        <Wrapper>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<Hello/>}/>
                <Route path={'/show/:id'} element={<Show  pages={dataState.pages}/>}/>
               </Routes>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

